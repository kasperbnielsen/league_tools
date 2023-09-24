import axios, { Axios, all, type AxiosResponse } from "axios";

type Mastery = Array<{
  championId: number;
  championLevel: number;
  championPoints: number;
  championPointsSinceLastLevel: number;
  championPointsUntilNextLevel: number;
  chestGranted: boolean;
  lastPlayTime: number;
  puuid: string;
  summonerId: string;
  tokensEarned: number;
}>;

const APIKEY = "RGAPI-54626aca-0aeb-49c0-b1da-546de87200df";

async function getMastery(puuid: number, apiKey: string) {
  const url =
    "https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-puuid/" +
    puuid +
    "?api_key=" +
    apiKey;
  return await axios.get(url).then((response: AxiosResponse<Mastery>) => {
    return response.data;
  });
}

async function getId(username: string, apiKey: string) {
  const url =
    "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" +
    username +
    "?api_key=" +
    apiKey;
  return await axios.get(url).then((response: AxiosResponse) => {
    return response.data;
  });
}

export default defineEventHandler(async (event) => {
  if (!event?.context?.params?.username) {
    return;
  }
  const tempName = decodeURI(event.context.params.username);
  let id = await getId(tempName, APIKEY);
  let mastery = getMastery(id.puuid, APIKEY);
  return mastery;
});
