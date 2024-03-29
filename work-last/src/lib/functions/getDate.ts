const months = {
  pl: [
    "Styczeń",
    "Luty",
    "Marzec",
    "Kwiecień",
    "Maj",
    "Czerwiec",
    "Lipiec",
    "Sierpień",
    "Wrzesień",
    "Październik",
    "Listopad",
    "Grudzień",
  ],
};

export default function getDate(
  time: string,
  type: "long" | "short" | "number",
  lang: "pl"
) {
  const day =
    new Date(time).getDate() < 10
      ? `0${new Date(time).getDate()}`
      : new Date(time).getDate();

  function month() {
    const monthNumber = new Date(time).getMonth();
    if (type === "long") {
      if (lang === "pl") {
        return months.pl[monthNumber];
      }
    } else if (type === "short") {
      if (lang === "pl") {
        return months.pl[monthNumber].slice(0, 3);
      }
    } else if (type === "number") {
      return monthNumber + 1 < 10 ? `0${monthNumber + 1}` : monthNumber + 1;
    }
  }

  const year = new Date(time).getFullYear();

  return {
    day,
    month,
    year,
  };
}
