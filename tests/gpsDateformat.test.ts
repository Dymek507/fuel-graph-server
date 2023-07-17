import { AllRawGpsData } from "../src/data/types/gpsData";
import fuelGps from "../src/data/gpsData/fuel-gps.json";

describe("excelDateformat", () => {
  const rawExcelData = fuelGps as any as AllRawGpsData;
  // create array of keys from rawExcelData object
  const rawExcelDataDrivers = Object.keys(rawExcelData);
  // loop through rawExcelDataKeys array and tests each day date format
  rawExcelDataDrivers.forEach((driver) => {
    rawExcelData[driver].forEach((day) => {
      test("correct format", () => {
        //check if date includes a dot
        if (!day.date.includes(".")) console.log(day.date);
        expect(day.date).toMatch(/\./);
      });
      // test("correct length", () => {
      //   //check if date length is 10
      //   expect(day.date.length).toBe(10);
      // });
      test("correct year", () => {
        //check if year is 4 digits
        expect(day.date.slice(0, 4)).toBe("2023");
      });
      test("no doubles", () => {
        //check if date is unique
        const daysWithSameDateLength = rawExcelData[driver].filter(
          (day2) => day2.date === day.date
        ).length;
        if (daysWithSameDateLength > 1)
          console.log(day.date, driver, day.mileage);
        expect(daysWithSameDateLength).toBe(1);
      });
    });
  });
});
