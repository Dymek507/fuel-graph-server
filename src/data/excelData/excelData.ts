import data from "./fuel-excel.json";
import { AllRawExcelData } from "./types/excelTypes";
import jsonConverter from "./jsonToObj";

export const excelData = jsonConverter(data as unknown as AllRawExcelData);
