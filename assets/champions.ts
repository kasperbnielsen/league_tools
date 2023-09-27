const champions = {
  Aatrox: "266",
  Ahri: "103",
  Akali: "84",
  Akshan: "166",
  Alistar: "12",
  Amumu: "32",
  Anivia: "34",
  Annie: "1",
  Aphelios: "523",
  Ashe: "22",
  AurelionSol: "136",
  Azir: "268",
  Bard: "432",
  Belveth: "200",
  Blitzcrank: "53",
  Brand: "63",
  Braum: "201",
  Caitlyn: "51",
  Camille: "164",
  Cassiopeia: "69",
  Chogath: "31",
  Corki: "42",
  Darius: "122",
  Diana: "131",
  Draven: "119",
  DrMundo: "36",
  Ekko: "245",
  Elise: "60",
  Evelynn: "28",
  Ezreal: "81",
  Fiddlesticks: "9",
  Fiora: "114",
  Fizz: "105",
  Galio: "3",
  Gangplank: "41",
  Garen: "86",
  Gnar: "150",
  Gragas: "79",
  Graves: "104",
  Gwen: "887",
  Hecarim: "120",
  Heimerdinger: "74",
  Illaoi: "420",
  Irelia: "39",
  Ivern: "427",
  Janna: "40",
  JarvanIV: "59",
  Jax: "24",
  Jayce: "126",
  Jhin: "202",
  Jinx: "222",
  Kaisa: "145",
  Kalista: "429",
  Karma: "43",
  Karthus: "30",
  Kassadin: "38",
  Katarina: "55",
  Kayle: "10",
  Kayn: "141",
  Kennen: "85",
  Khazix: "121",
  Kindred: "203",
  Kled: "240",
  KogMaw: "96",
  KSante: "897",
  LeBlanc: "7",
  LeeSin: "64",
  Leona: "89",
  Lillia: "876",
  Lissandra: "127",
  Lucian: "236",
  Lulu: "117",
  Lux: "99",
  Malphite: "54",
  Malzahar: "90",
  Maokai: "57",
  MasterYi: "11",
  Milio: "902",
  MissFortune: "21",
  MonkeyKing: "62",
  Mordekaiser: "82",
  Morgana: "25",
  Naafiri: "950",
  Nami: "267",
  Nasus: "75",
  Nautilus: "111",
  Neeko: "518",
  Nidalee: "76",
  Nilah: "895",
  Nocturne: "56",
  Nunu: "20",
  Olaf: "2",
  Orianna: "61",
  Ornn: "516",
  Pantheon: "80",
  Poppy: "78",
  Pyke: "555",
  Qiyana: "246",
  Quinn: "133",
  Rakan: "497",
  Rammus: "33",
  RekSai: "421",
  Rell: "526",
  Renata: "888",
  Renekton: "58",
  Rengar: "107",
  Riven: "92",
  Rumble: "68",
  Ryze: "13",
  Samira: "360",
  Sejuani: "113",
  Senna: "235",
  Seraphine: "147",
  Sett: "875",
  Shaco: "35",
  Shen: "98",
  Shyvana: "102",
  Singed: "27",
  Sion: "14",
  Sivir: "15",
  Skarner: "72",
  Sona: "37",
  Soraka: "16",
  Swain: "50",
  Sylas: "517",
  Syndra: "134",
  TahmKench: "223",
  Taliyah: "163",
  Talon: "91",
  Taric: "44",
  Teemo: "17",
  Thresh: "412",
  Tristana: "18",
  Trundle: "48",
  Tryndamere: "23",
  TwistedFate: "4",
  Twitch: "29",
  Udyr: "77",
  Urgot: "6",
  Varus: "110",
  Vayne: "67",
  Veigar: "45",
  Velkoz: "161",
  Vex: "711",
  Vi: "254",
  Viego: "234",
  Viktor: "112",
  Vladimir: "8",
  Volibear: "106",
  Warwick: "19",
  Wukong: "62",
  Xayah: "498",
  Xerath: "101",
  XinZhao: "5",
  Yasuo: "157",
  Yone: "777",
  Yorick: "83",
  Yuumi: "350",
  Zac: "154",
  Zed: "238",
  Zeri: "221",
  Ziggs: "115",
  Zilean: "26",
  Zoe: "142",
  Zyra: "143",
};

const Bilgewater = [
  "Fizz",
  "Gangplank",
  "Graves",
  "Illaoi",
  "MissFortune",
  "Nautilus",
  "Nilah",
  "Pyke",
  "TahmKench",
  "TwistedFate",
];
const Demacia = [
  "Fiora",
  "Galio",
  "Garen",
  "JarvanIV",
  "Kayle",
  "Lucian",
  "Lux",
  "Morgana",
  "Poppy",
  "Quinn",
  "Shyvana",
  "Sona",
  "Sylas",
  "Vayne",
  "XinZhao",
];
const Freljord = [
  "Anivia",
  "Ashe",
  "Braum",
  "Gnar",
  "Gragas",
  "Lissandra",
  "Nunu",
  "Olaf",
  "Ornn",
  "Sejuani",
  "Trundle",
  "Tryndamere",
  "Udyr",
  "Volibear",
];
const Ionia = [
  "Ahri",
  "Akali",
  "Irelia",
  "Ivern",
  "Jhin",
  "Karma",
  "Kayn",
  "Kennen",
  "LeeSin",
  "Lillia",
  "MasterYi",
  "Rakan",
  "Sett",
  "Shen",
  "Syndra",
  "Varus",
  "Wukong",
  "Xayah",
  "Yasuo",
  "Yone",
  "Zed",
];
const Noxus = [
  "Cassiopeia",
  "Darius",
  "Draven",
  "Katarina",
  "Kled",
  "LeBlanc",
  "Rell",
  "Riven",
  "Samira",
  "Sion",
  "Swain",
  "Talon",
  "Vladimir",
];
const Piltover = [
  "Caitlyn",
  "Camille",
  "Corki",
  "Ezreal",
  "Heimerdinger",
  "Jayce",
  "Orianna",
  "Seraphine",
  "Vi",
];
const Zaun = [
  "Blitzcrank",
  "DrMundo",
  "Ekko",
  "Janna",
  "Jinx",
  "Renata",
  "Singed",
  "Twitch",
  "Urgot",
  "Viktor",
  "Warwick",
  "Zac",
  "Zeri",
  "Ziggs",
];
const ShadowIsles = [
  "Elise",
  "Evelynn",
  "Fiddlesticks",
  "Gwen",
  "Hecarim",
  "Kalista",
  "Karthus",
  "Maokai",
  "Senna",
  "Thresh",
  "Viego",
  "Yorick",
];
const Shurima = [
  "Akshan",
  "Amumu",
  "Azir",
  "KSante",
  "Naafiri",
  "Nasus",
  "Rammus",
  "Renekton",
  "Sivir",
  "Skarner",
  "Taliyah",
  "Xerath",
  "Zilean",
];
const Ixtal = [
  "Malphite",
  "Milio",
  "Neeko",
  "Nidalee",
  "Qiyana",
  "Rengar",
  "Zyra",
];
const Targon = [
  "Aphelios",
  "AurelionSol",
  "Diana",
  "Leona",
  "Pantheon",
  "Soraka",
  "Taric",
  "Zoe",
];
const BandleCity = [
  "Corki",
  "Fizz",
  "Gnar",
  "Heimerdinger",
  "Kennen",
  "Kled",
  "Lulu",
  "Poppy",
  "Rumble",
  "Teemo",
  "Tristana",
  "Veigar",
  "Vex",
  "Yuumi",
  "Ziggs",
];
const Void = [
  "Belveth",
  "Chogath",
  "Kaisa",
  "Kassadin",
  "Khazix",
  "KogMaw",
  "Malzahar",
  "RekSai",
  "Velkoz",
];
const regions = {
  Bilgewater,
  Demacia,
  Freljord,
  Ionia,
  Noxus,
  Piltover,
  Zaun,
  ShadowIsles,
  Shurima,
  Targon,
  BandleCity,
  Ixtal,
  Void,
};

const regionsList = [
  Bilgewater,
  Demacia,
  Freljord,
  Ionia,
  Noxus,
  Piltover,
  Zaun,
  ShadowIsles,
  Shurima,
  Targon,
  BandleCity,
  Ixtal,
  Void,
];

const AOEUlt = [
  "Amumu",
  "Anivia",
  "Annie",
  "AurelionSol",
  "Azir",
  "Bard",
  "Belveth",
  "Blitzcrank",
  "Braum",
  "Cassiopeia",
  "Corki",
  "Diana",
  "Draven",
  "Ekko",
  "Evelynn",
  "Ezreal",
  "Fiddlesticks",
  "Fizz",
  "Galio",
  "Gangplank",
  "Gnar",
  "Gragas",
  "Graves",
  "Hecarim",
  "Heimerdinger",
  "Illaoi",
  "Janna",
  "JarvanIV",
  "Jinx",
  "Karthus",
  "Katarina",
  "Kayle",
  "Kennen",
  "Leona",
  "Lissandra",
  "Lux",
  "Malphite",
  "Maokai",
  "Milio",
  "MissFortune",
  "Morgana",
  "Nami",
  "Neeko",
  "Nilah",
  "Nunu",
  "Orianna",
  "Ornn",
  "Pantheon",
  "Qiyana",
  "Rakan",
  "Rammus",
  "Rell",
  "Renata",
  "Riven",
  "Rumble",
  "Samira",
  "Sejuani",
  "Senna",
  "Seraphine",
  "Sett",
  "Sona",
  "Swain",
  "Talon",
  "Twitch",
  "Velkoz",
  "Viktor",
  "Vladimir",
  "Volibear",
  "Xayah",
  "XinZhao",
  "Yone",
  "Yuumi",
  "Zac",
  "Zeri",
  "Ziggs",
  "Zyra",
];
//Hold That Pose
const ccComp = [
  "Aatrox",
  "Alistar",
  "Amumu",
  "Anivia",
  "Bard",
  "Blitzcrank",
  "Braum",
  "Camille",
  "Galio",
  "Gnar",
  "Gragas",
  "Hecarim",
  "Ivern",
  "Janna",
  "JarvanIV",
  "KSante",
  "Kled",
  "LeBlanc",
  "Leona",
  "Lissandra",
  "Lulu",
  "Maokai",
  "Morgana",
  "Nami",
  "Nautilus",
  "Neeko",
  "Nunu",
  "Ornn",
  "Poppy",
  "Pyke",
  "Qiyana",
  "Rammus",
  "Rell",
  "Renata",
  "Riven",
  "Sejuani",
  "Seraphine",
  "Sett",
  "Shaco",
  "Singed",
  "Sion",
  "Skarner",
  "TahmKench",
  "Thresh",
  "Urgot",
  "Vi",
  "Warwick",
  "XinZhao",
  "Yasuo",
  "Yone",
  "Zac",
  "Zyra",
];
// We're Good Over Here
const pokeComp = [
  "Akshan",
  "Ashe",
  "Azir",
  "Caitlyn",
  "Chogath",
  "Corki",
  "DrMundo",
  "Ezreal",
  "Gangplank",
  "Jayce",
  "Jhin",
  "Jinx",
  "Kaisa",
  "Karma",
  "Kled",
  "KogMaw",
  "Lux",
  "Maokai",
  "Milio",
  "Nidalee",
  "Pantheon",
  "Senna",
  "Seraphine",
  "Shyvana",
  "Sivir",
  "Taliyah",
  "TwistedFate",
  "Varus",
  "Velkoz",
  "Vex",
  "Viktor",
  "Xayah",
  "Xerath",
  "Yuumi",
  "Zeri",
  "Ziggs",
  "Zoe",
];
//Nowhere to Hide
const globalComp = [
  "Akshan",
  "Ashe",
  "Aurelionsol",
  "Bard",
  "Caitlyn",
  "Draven",
  "Ezreal",
  "Galio",
  "Gangplank",
  "Jhin",
  "Jinx",
  "Kaisa",
  "Karthus",
  "Kled",
  "Lillia",
  "Lux",
  "Maokai",
  "Nocturne",
  "Pantheon",
  "Ryze",
  "Senna",
  "Shen",
  "Sion",
  "Soraka",
  "Swain",
  "Taliyah",
  "TwistedFate",
  "Vex",
  "Xerath",
  "Ziggs",
];
//They Just... Don't... DIE!
const reviveComp = [
  "Akshan",
  "Alistar",
  "Anivia",
  "Bard",
  "Belveth",
  "Braum",
  "Ekko",
  "Elise",
  "Evelynn",
  "Fiora",
  "Fizz",
  "Gwen",
  "Jax",
  "KSante",
  "Kalista",
  "Karthus",
  "Kayle",
  "Kayn",
  "Kindred",
  "Kled",
  "KogMaw",
  "Lissandra",
  "Malzahar",
  "Maokai",
  "MasterYi",
  "Olaf",
  "Pantheon",
  "Rakan",
  "Renata",
  "Sion",
  "TahmKench",
  "Taric",
  "Tryndamere",
  "Vladimir",
  "XinZhao",
  "Yuumi",
  "Zac",
  "Zed",
  "Zilean",
];
//Get Over Here
const displacementComp = [
  "Alistar",
  "Azir",
  "Blitzcrank",
  "Darius",
  "Gnar",
  "Gragas",
  "Hecarim",
  "Janna",
  "Jayce",
  "KSante",
  "Kled",
  "LeeSin",
  "Maokai",
  "Mordekaiser",
  "Nautilus",
  "Nilah",
  "Orianna",
  "Poppy",
  "Pyke",
  "Rell",
  "Sett",
  "Singed",
  "Skarner",
  "Swain",
  "TahmKench",
  "Taliyah",
  "Thresh",
  "Tristana",
  "Urgot",
  "Vayne",
  "XinZhao",
  "Yone",
  "Zac",
  "Ziggs",
];
//We Protec
const healSheildComp = [
  "Alistar",
  "Annie",
  "Bard",
  "Fiora",
  "Galio",
  "Ivern",
  "Janna",
  "KSante",
  "Karma",
  "Kayle",
  "Kindred",
  "LeeSin",
  "Lulu",
  "Lux",
  "Milio",
  "Morgana",
  "Naafiri",
  "Nami",
  "Nidalee",
  "Nilah",
  "Orianna",
  "Rakan",
  "Renata",
  "Senna",
  "Seraphine",
  "Shen",
  "Sona",
  "Soraka",
  "TahmKench",
  "Taric",
  "Thresh",
  "Yuumi",
  "Zilean",
];
//WHERE'D THEY GO?
const stealthComp = [
  "Akali",
  "Akshan",
  "Evelynn",
  "Kaisa",
  "Khazix",
  "LeBlanc",
  "Neeko",
  "Nocturne",
  "Pyke",
  "Qiyana",
  "Rengar",
  "Senna",
  "Shaco",
  "Talon",
  "Teemo",
  "Twitch",
  "Vayne",
  "Viego",
  "Wukong",
];
//IT'S A TRAP!
const trapComp = [
  "Caitlyn",
  "Gangplank",
  "Jhin",
  "Jinx",
  "Maokai",
  "Nidalee",
  "Shaco",
  "Teemo",
  "Ziggs",
  "Zyra",
];
//Variety's overrated - 5 champions with the same tag (tank, marksmen, mages... e.t.c)

const summonComp = [
  "Annie",
  "Azir",
  "Belveth",
  "Elise",
  "Fiddlesticks",
  "Heimerdinger",
  "Illaoi",
  "Ivern",
  "Kalista",
  "Kindred",
  "Lissandra",
  "Malzahar",
  "Maokai",
  "Naafiri",
  "Neeko",
  "Orianna",
  "Shaco",
  "Yorick",
  "Zed",
  "Zyra",
];
const terrainComp = [
  "Anivia",
  "Azir",
  "Irelia",
  "Ivern",
  "JarvanIV",
  "Ornn",
  "Taliyah",
  "Trundle",
  "Veigar",
  "Yorick",
];

const teamComps = {
  AOEUlt,
  ccComp,
  pokeComp,
  globalComp,
  reviveComp,
  displacementComp,
  healSheildComp,
  stealthComp,
  trapComp,
  summonComp,
  terrainComp,
};

const teamCompsList = [
  AOEUlt,
  ccComp,
  pokeComp,
  globalComp,
  reviveComp,
  displacementComp,
  healSheildComp,
  stealthComp,
  trapComp,
  summonComp,
  terrainComp,
];

export default { champions, regions, teamComps, regionsList, teamCompsList };
