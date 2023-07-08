import data from "./fuel-excel.json";
import { AllRawExcelData } from "./types/excelTypes";
import jsonConverter from "./jsonToObj";

export const EXCEL_DATA = jsonConverter(data as unknown as AllRawExcelData);
