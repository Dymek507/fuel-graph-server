export type GpsData = {
  date: string;
  vehicle: string;
  working: boolean;
  traveled: number;
  fuelUsed: number;
  startDriving: string;
  mileage: number;
  endDriving: string;
};

export type RawGpsData = {
  date: string;
  vehicle: string;
  working: boolean;
  traveled: number;
  fuelUsed: number;
  startDriving: string;
  mileage: number;
  endDriving: string;
};

export type AllRawGpsData = { [key: string]: RawGpsData[] };
export type AllGpsData = { [key: string]: GpsData[] };
