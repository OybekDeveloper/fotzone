import api from "./api";
const API_KEY =
  "03f5a5db582197bc27218fa0a1a593b2e1cb34cdc318fb52754fca3beda4de2c";
export const Service = {
  async getCountries() {
    const { data } = await api.get(`/?action=get_countries&APIkey=${API_KEY}`);
    return data;
  },
  async getCompetitions(id){
    const { data } = await api.get(
      `/?action=get_leagues&country_id=${id}&APIkey=${API_KEY}`
    );
    return data;
  } ,
  async getEvents(from, to,id){
    const { data } = await api.get(
      // `/?action=get_events&from=${from}&to=${to}&league_id=${id}&APIkey=${API_KEY}`
      `/?action=get_events&from=${from}&to=${to}&league_id=${id}&APIkey=${API_KEY}`
    );
    return data;
  }
};
