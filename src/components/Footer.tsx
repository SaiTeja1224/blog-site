"use client";

import { SewingPinFilledIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";

function BlogFooter() {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour12: true,
        hour: "numeric",
        minute: "numeric",
      };
      let formattedTime = now.toLocaleString("en-IN", options);
      formattedTime = formattedTime.replace("am", "AM").replace("pm", "PM");
      setCurrentTime(formattedTime);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000 * 59);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <footer className="lg:max-w-[50%] max-w-[90%] mx-auto py-5 flex justify-between dark:text-stone-300">
      <p>
        <span className="text-accent-secondary dark:text-accent">&copy;</span>{" "}
        Sai Teja
      </p>
      <div className="text-end">
        {currentTime}
        <p className="flex gap-2 items-center">
          <SewingPinFilledIcon className="text-accent-secondary dark:text-accent" />
          <span>Hyderabad, India </span>
        </p>
      </div>
    </footer>
  );
}

export default BlogFooter;
