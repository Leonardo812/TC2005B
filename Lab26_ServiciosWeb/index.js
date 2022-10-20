const express = require("express");
const { json } = require("express");
require("dotenv").config();

const axios = require("axios");
const cors = require("cors");
const http = require('http');

const app = express();

app.use(json());
app.use(cors());

app.get('/', async(req, res) => {
  res.json({
    message: 'Hola invocador para acceder a tu perfil ingresa a la rita /summoner/ Escribe_tu_nombre_de_invocador'
  })
})

app.get("/summoner/:summonerName", async (req, res) => {
  const { summonerName } = req.params;
  const summonerIdResponse = await axios
    .get(
      `${process.env.LOL_URL}/lol/summoner/v4/summoners/by-name/${encodeURI(
        summonerName
      )}`,
      { headers: { "X-Riot-Token": process.env.LOL_KEY } }
    )
    .catch((e) => {
      return res.status(e.response.status).json(e.response.data);
    });

  const { id, profileIconId, summonerLevel } = summonerIdResponse.data;

  const responseRanked = await axios
    .get(`${process.env.LOL_URL}/lol/league/v4/entries/by-summoner/${id}`,
     {
      headers: { "X-Riot-Token": process.env.LOL_KEY },
    })
    .catch((e) => {
      return res.status(e.response.status).json(e.response.data);
    });

  const { tier, rank, wins, losses, leaguePoints, veteran,inactive,queueType } = responseRanked.data[1]
    ? responseRanked.data[1]
    : responseRanked.data[0];

  res.json({
    queueType,
    summonerName,
    summonerLevel,
    iconUrl: `${process.env.LOL_ICONS}/${profileIconId}.png`,
    tier,
    rank,
    wins,
    losses,    
    winRate: ((wins / (wins + losses)) * 100).toFixed(1),
    leaguePoints,
    veteran,
    inactive,
  });
});

app.listen(process.env.PORT || 3000);