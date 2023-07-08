export const stringToDate = (dateString: string, time: string) => {
  const [month, day, year] = dateString.split(".");
  if (time !== undefined) {
    const [hour, minute] = time.split(":");
    return new Date(
      Date.UTC(
        Number(year),
        Number(month) - 1,
        Number(day),
        Number(hour),
        Number(minute)
      )
    ).toUTCString();
  }
  return new Date(
    Date.UTC(Number(year), Number(month) - 1, Number(day))
  ).toUTCString();
};
