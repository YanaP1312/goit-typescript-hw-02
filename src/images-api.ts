import axios from "axios";
import { DataList } from "./interfaces/interface";

export const fetchImages = async (
  query: string,
  page: number
): Promise<DataList> => {
  axios.defaults.baseURL = "https://api.unsplash.com";
  const myApiKey = "z_1cL7_czUThYTzFTdVk3GkCtU762TCDzKRopZnNCR8";

  const { data } = await axios.get<DataList>("/search/photos/?", {
    params: {
      client_id: myApiKey,
      query: query,
      page: page,
      per_page: 15,
    },
  });

  return data;
};
