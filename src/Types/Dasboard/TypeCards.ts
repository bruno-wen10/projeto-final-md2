import { type } from "os";


export type DoctorsContractor = {
    total: number;
    available: number;
    unavailable: number;
}

export type ApiResponse = {
  [x: string]: any;
  doctor: DoctorsContractor,

  contractor: DoctorsContractor,
};



