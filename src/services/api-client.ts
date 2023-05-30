import axios, { AxiosRequestConfig } from 'axios';

export interface FetchResponse {
  id:number,
  title:string,
  price:number,
  category:string,
  description:string,
  image:string
}

const axiosInstance = axios.create({
  baseURL: 'https://fakestoreapi.com/products',
});

class APIClient {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse[]>(this.endpoint, config)
      .then((res) => res.data);
  };

  // get = (id: number | string) => {
  //   return axiosInstance
  //     .get<T>(this.endpoint + '/' + id)
  //     .then((res) => res.data);
  // };
}

export default APIClient;