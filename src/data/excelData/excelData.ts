import data from "./fuel-excel.json";
import { AllRawExcelData } from "./helpers/excelTypes";
import jsonToObj from "./helpers/jsonToObj";

export const EXCEL_DATA = jsonToObj(data as unknown as AllRawExcelData);
