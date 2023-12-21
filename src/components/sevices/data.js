import api from "./api";
const API_KEY =
  "60a390f7720520f10f06c9015ea62d264531d0213dc9db2dc0ed90fb04098e89";
export const Service = {
  async getCountries(id) {
    const { data } = await api.get(`/?action=get_countries&APIkey=${API_KEY}`);
    return data;
  },
  async getCompetitions(id){
    const { data } = await api.get(
      `/?action=get_leagues&country_id=${id}&APIkey=${API_KEY}`
    );
    return data;
  } ,
  async getEvents(from, to,name,id){
    const { data } = await api.get(
      `/?action=get_events&from=${from}&to=${to}&${name}=${id}&APIkey=${API_KEY}`
    );
    return data;
  }
};
