import axios from "axios";
import { Photo } from "../components/photoTypes";

axios.defaults.baseURL = "https://api.unsplash.com/";


interface SearchApiResponse {
  results: Photo[];
}

export const getSearchApi = async (searchQuery: string, page: number): Promise<Photo[]> => {
  const { data } = await axios.get<SearchApiResponse>("/search/photos", {
    params: {
      query: searchQuery,
      client_id: '6FT8qaNMbVdsDnvvjia-ve_gP6sr4q8g672jAkrxEfk',
      per_page: 9,
      page,
    },
  });
  return data.results;
};
