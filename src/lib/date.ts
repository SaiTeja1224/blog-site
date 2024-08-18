import dayjs from "dayjs";

export const formatDate = (date: Date, formatter?: string) => {
  return dayjs(date).format(formatter ?? "DD MMM, YYYY");
};
