<script setup lang="ts">
import { Stats } from "~/types";
defineProps<{
  stats?: Stats[];
  extraStats: () => void;
}>();
</script>
<template>
  <div id="nav-tabContent" class="tab-content">
    <div
      id="nav-home"
      aria-labelledby="nav-home-tab"
      class="tab-pane fade show active"
      role="tabpanel"
    >
      <div
        v-for="(stat, statsIndex) of stats"
        :key="statsIndex"
        :class="statsIndex < 13 ? 'stats__div' : ''"
      >
        <div v-if="statsIndex < 13" class="stats__firstdiv">
          <img
            class="stats__firstdiv__img"
            :src="`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${stat._id.championId}.png`"
          />
        </div>
        <div v-if="statsIndex < 13" class="stats__secondsdiv">
          <p class="stats__secondsdiv__kda1">
            {{
              Math.ceil(
                (stat.totalKills + stat.totalAssists) / stat.totalDeaths
              )
                ? (
                    (stat.totalKills + stat.totalAssists) /
                    (stat.totalDeaths ? stat.totalDeaths : 1)
                  ).toFixed(2)
                : "0.00"
            }}
            KDA
          </p>
          <p class="stats__secondsdiv__kda2">
            {{ (stat.totalKills / stat.totalMatches).toFixed(1) }} /
            {{ (stat.totalDeaths / stat.totalMatches).toFixed(1) }}
            /
            {{ (stat.totalAssists / stat.totalMatches).toFixed(1) }}
          </p>
        </div>
        <div v-if="statsIndex < 13" class="stats__thirddiv">
          <p class="stats__thirddiv__winrate">
            {{
              stat.totalWins
                ? ((stat.totalWins / stat.totalMatches) * 100).toFixed(0)
                : 0
            }}%
          </p>
          <p class="stats__thirddiv__totalgames">
            {{ stat.totalMatches }} Matches
          </p>
        </div>
      </div>
      <div class="stats__extra">
        <button class="stats__extra__button" @click="extraStats">
          Show more + extra stats
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.stats {
  border: 1px solid black;
  background-color: #252525;
  border-radius: 5px;
  min-height: 36.25rem;
  height: fit-content;
  &__extra {
    margin-top: 3.375rem;
    padding: 0.5rem 0;
    background-color: #3d3d3d;
    text-align: center;
    &__button {
      border: none;
      background: none;
    }
  }

  &__navitem {
    padding-left: 2rem;
    padding-right: 2rem;
    border-bottom-color: black;
    &:hover {
      border-color: black;
    }
  }

  &__div {
    margin: 1rem 0 1rem 0;
    display: flex;
    border-bottom: 1px solid black;
  }

  &__firstdiv {
    &__img {
      margin-left: 2rem;
      width: 3.5rem;
      height: 3.5rem;
      border-radius: 35px;
      margin-bottom: 1rem;
      margin-right: 5rem;
    }
  }

  &__secondsdiv {
    text-align: center;
    &__kda2 {
      color: grey;
      font-size: 8px;
      margin-top: -0.5rem;
    }
    &__kda1 {
      margin-top: 0.25rem;
      color: #a6a6a7;
      font-size: 14px;
      font-weight: 700;
    }
  }

  &__thirddiv {
    position: absolute;
    text-align: center;
    margin-left: 22rem;

    &__winrate {
      margin-top: 0.25rem;
      color: #a6a6a7;
      font-size: 14px;
    }

    &__totalgames {
      color: grey;
      font-size: 10px;
      margin-top: -0.5rem;
    }
  }
}
</style>
