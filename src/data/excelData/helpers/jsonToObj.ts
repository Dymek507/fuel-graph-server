import { AllExcelData, AllRawExcelData } from "./excelTypes";

//convert date string to date object
const dateStingToDate = (dateString: string) => {
  const [month, day, year] = dateString.split("/");
  return new Date(
    Date.UTC(Number(year), Number(month) - 1, Number(day))
  ).toISOString();
};
//convert date string to date object
const fuelingdateStingToDate = (dateString: string, time: string) => {
  const [month, day, year] = dateString.split("/");
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
    ).toISOString();
  } else {
    return new Date(
      Date.UTC(Number(year), Number(month) - 1, Number(day))
    ).toISOString();
  }
};

//Convert place string to place name
const placeConverter = (location: string) => {
  switch (location) {
    case "K":
      return "Krasnystaw";
    case "k":
      return "Krasnystaw";
    case "W":
      return "Wólka";
    case "w":
      return "Wólka";
    case "L":
      return "Lublin";
    case "l":
      return "Lublin";
    case "Lublin":
      return "Lublin";
    case "lublin":
      return "Lublin";
    default:
      return "Unknown";
  }
};

//Convert full string to boolean
const checkIfFull = (full: string) => {
  switch (full) {
    case "Full":
      return true;
    case "full":
      return true;
    case "Tak":
      return true;
    case "Nie":
      return false;
    default:
      return false;
  }
};

//Convert data to proper format
const jsonToObj = (rawData: AllRawExcelData): AllExcelData => {
  const data: AllExcelData = {};

  for (const key of Object.keys(rawData)) {
    data[key] = rawData[key].map((item) => {
      return {
        date: dateStingToDate(item.date),
        fuelingTime: fuelingdateStingToDate(item.date, item.time),
        mileage: Number(item.mileage),
        place: placeConverter(item.location),
        fueled: Number(item.fueled),
        full: checkIfFull(item.full),
        driver: item.driver,
      };
    });
  }
  return data;
};

export default jsonToObj;
