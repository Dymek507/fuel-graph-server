export type ExcelData = {
  date: string;
  fuelingTime: string;
  mileage: number;
  place: string;
  fueled: number;
  full: boolean;
  driver: string;
};

export type RawExcelDay = {
  date: string;
  time: any;
  mileage: any;
  location: string;
  fueled: any;
  full: string;
  driver: any;
};

export type AllExcelData = { [key: string]: ExcelData[] };
export type AllRawExcelData = { [key: string]: RawExcelDay[] };
