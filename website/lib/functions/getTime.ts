import { getMonthName } from "./getMonthName";
export const getTime = (date: Date | string | number) => {
  const time = {
    year: new Date(date).getFullYear(),
    month: getMonthName(new Date(date).getMonth()),
    day:
      new Date(date).getDate() < 10
        ? `0${new Date(date).getDate()}`
        : new Date(date).getDate(),
  };
  return time;
};
