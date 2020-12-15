export interface ResponseDataInterface {
  statusCode: number;
  data: DataInterface;
}

export interface ResponseDataErrorInterface {
  statusCode: number;
  error: string;
}

export enum ERRORS {
  ERROR_100 = 'Data is empty or not provided',
  ERROR_101 = 'Data format is incorrect',
}

export interface ParseDataInterface {
  result: boolean;
  data: DataInterface;
}

export interface ParseDataErrorInterface {
  result: boolean;
  error: ERRORS;
}

interface DataInterface {
  firstName: string;
  lastName: string;
  phone: string;
}
