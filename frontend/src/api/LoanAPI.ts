import axios, { AxiosRequestConfig } from "axios";
import {
  BalanceSheetRequestType,
  BusinessType,
} from "@/components/types/Business";

const URL = process.env.NEXT_PUBLIC_SERVER_URL;

export function REGISTER_LOAN(data: BusinessType) {
  const config: AxiosRequestConfig = {
    url: `${URL}/business/new`,
    data: data,
    method: "post",
  };
  return axios(config);
}

export function GET_BALANCE_SHEET(data: BalanceSheetRequestType) {
  const config: AxiosRequestConfig = {
    url: `${URL}/balance/balance-sheet`,
    data: data,
    method: "post",
  };
  return axios(config);
}

export function GET_DECISION_DATA(data: any) {
  const config: AxiosRequestConfig = {
    url: `${URL}/decision`,
    data: data,
    method: "post",
  };
  return axios(config);
}
