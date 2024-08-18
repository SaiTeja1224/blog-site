import { useEffect, useState } from "react";

function useLocalStorage<T>(key: string, defaultValue?: T) {
  const [value, setValue] = useState<T>(() => {
    let currentValue;

    try {
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(defaultValue)
      );
    } catch (error) {
      currentValue = defaultValue;
    }

    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  const handleValue = (value: T) => {
    setValue(value);
  };

  return [value, handleValue] as const;
}

export default useLocalStorage;
