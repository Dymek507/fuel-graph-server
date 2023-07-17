import { AllExcelData, AllRawExcelData } from "../../types/excelTypes";
import { checkIfFull } from "./checkIfFull";
import { getLocation } from "./getLocation";
import { stringToDate } from "./stringToDate";

//Convert data to proper format
const jsonConverter = (rawData: AllRawExcelData): AllExcelData => {
  const data: AllExcelData = {};

  for (const key of Object.keys(rawData)) {
    data[key] = rawData[key].map((item) => {
      return {
        fuelingTime: stringToDate(item.date, item.time),
        mileage: Number(item.mileage),
        place: getLocation(item.location),
        fueled: Number(item.fueled),
        full: checkIfFull(item.full),
        driver: item.driver,
      };
    });
  }
  return data;
};

export default jsonConverter;
