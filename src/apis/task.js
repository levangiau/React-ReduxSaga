import axiosService from "./../axiosService";
import { API_ENDPOINT } from "./../constant";

const url = API_ENDPOINT + "/task";
export const getList = () => {
  return axiosService.get(url);
};
