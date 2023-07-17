//@ts-nocheck

import { AllRawExcelData } from "data/excelData/types/excelTypes";
import fuelExcel from "../src/data/excelData/fuel-excel.json";

describe("excelDateformat", () => {
  const rawExcelData = fuelExcel as any as AllRawExcelData;
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
      test("correct length", () => {
        //check if date length is 10
        expect(day.date.length).toBe(10);
      });
      test("correct year", () => {
        //check if year is 4 digits
        expect(day.date.slice(6, 10)).toBe("2023");
      });
    });
  });
});
