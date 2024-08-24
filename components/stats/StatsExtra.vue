<script setup lang="ts">
import champions from "~/assets/champions";
import { Stats } from "~/types";
const props = defineProps<{
  stats: Stats[];
}>();
const champList = champions.champions;
</script>
<template>
  <div class="body2">
    <div class="body2__inner">
      <div class="body2__inner__descriptions">
        <p>#</p>
        <p>Champion</p>
        <p class="body2__inner__descriptions__center">Win Rate</p>
        <p class="body2__inner__descriptions__center">KDA</p>
        <p class="body2__inner__descriptions__center">Creep Score</p>
        <p class="body2__inner__descriptions__center">Gold</p>
        <p class="body2__inner__descriptions__center">Damage Dealt</p>
        <p class="body2__inner__descriptions__center">Damage Taken</p>
        <p class="body2__inner__descriptions__center">Structure Damage</p>
      </div>
      <div
        v-for="(champion, championIndex) of props.stats"
        :key="championIndex"
        class="body2__inner__item"
      >
        <p class="body2__inner__item__number">{{ championIndex + 1 }}</p>
        <div class="body2__inner__item__champion">
          <img
            class="body2__inner__item__image"
            :src="`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${champion._id.championId}.png`"
          />
          <p class="body2__inner__item__championname">
            {{
              Object.keys(champList)[
                Object.values(champList).indexOf(champion._id.toString())
              ]
            }}
          </p>
        </div>
        <p class="body2__inner__item__winloss">
          <span class="body2__inner__item__wins">{{ champion.totalWins }}W</span
          ><span class="body2__inner__item__losses"
            >{{ champion.totalMatches - champion.totalWins }}L</span
          >
          <span class="body__inner__item__winrate"
            >{{
              ((champion.totalWins / champion.totalMatches) * 100).toFixed(0)
            }}%</span
          >
        </p>
        <p class="body2__inner__item__kda">
          {{
            (
              ((champion.totalKills + champion.totalAssists) /
                champion.totalDeaths ===
              0
                ? 1
                : champion.totalDeaths) / champion.totalMatches
            ).toFixed(2)
          }}
        </p>
        <p class="body2__inner__item__cs">
          {{ (champion.totalCreeps / champion.totalMatches).toFixed(0) }}
          <span class="body2__inner__item__cs__span"
            >({{
              (champion.totalCreeps / (champion.totalTime / 60)).toFixed(2)
            }}/m)</span
          >
        </p>
        <p class="body2__inner__item__gold">
          {{ (champion.totalGold / champion.totalMatches).toFixed(0) }}/m
        </p>
        <p class="body2__inner__item__dmgdealt">
          {{ (champion.totalDamageDealt / champion.totalMatches).toFixed(0) }}
          ({{
            (champion.totalDamageDealt / (champion.totalTime / 60)).toFixed(0)
          }}/m)
        </p>
        <p class="body2__inner__item__dmgtaken">
          {{ (champion.totalDamageTaken / champion.totalMatches).toFixed(0) }}
          ({{
            (champion.totalDamageTaken / (champion.totalTime / 60)).toFixed(0)
          }}/m)
        </p>
        <p class="body2__inner__item__structdmg">
          {{
            (champion.totalStructureDamage / champion.totalMatches).toFixed(0)
          }}
          ({{
            (champion.totalStructureDamage / (champion.totalTime / 60)).toFixed(
              0
            )
          }}/m)
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.body2 {
  border-radius: 5px;
  height: fit-content;
  background-color: inherit;
  width: 100%;
  &__inner {
    border-radius: 5px;
    background-color: #252525;
    height: fit-content;

    &__descriptions {
      border-top-left-radius: 5px;
      border-top-left-radius: 5px;
      color: #414141;
      padding-left: 1rem;
      padding-top: 1.25rem;
      font-weight: 700;
      align-content: center;
      display: grid;
      grid-template-columns: 0.2fr 1fr 1fr 0.7fr 0.625fr 0.75fr 1fr 1fr 1fr;
      height: 3rem;
      background-color: #0e0e0e33;
      &__center {
        text-align: center;
      }
    }
    &__item {
      display: grid;
      grid-template-columns: 0.2fr 1fr 1fr 0.7fr 0.625fr 0.75fr 1fr 1fr 1fr;
      border-bottom: 1px solid #0e0e0e33;
      padding: 1rem 1rem 1rem 1rem;
      color: white;
      &__champion {
        color: white;
        align-items: center;
        display: flex;
      }
      &__image {
        margin-right: 1.5rem;
        width: 3rem;
        height: 3rem;
      }
      &__championname {
        margin-bottom: -0.25rem;
      }
      &__number {
        margin-bottom: -0.25rem;
        color: white;
        align-self: center;
      }
      &__winloss {
        margin-left: 1rem;
        text-align: center;
        margin-top: 0.75rem;
      }
      &__wins {
        color: green;
      }
      &__losses {
        margin-left: 1rem;
        color: red;
      }
      &__winrate {
        margin-left: 1rem;
      }
      &__kda {
        margin-left: 1rem;
        margin-top: 0.75rem;
        text-align: center;
        color: white;
      }

      &__cs {
        margin-top: 0.75rem;
        display: flex;
        margin-left: 1rem;
        text-align: center;
      }
      &__gold {
        margin-top: 0.75rem;
        margin-left: 1rem;
        text-align: center;
      }
      &__dmgdealt {
        text-align: center;
        margin-left: 1rem;
        margin-top: 0.75rem;
      }
      &__dmgtaken {
        text-align: center;
        margin-left: 1rem;
        margin-top: 0.75rem;
      }
      &__structdmg {
        text-align: center;
        margin-left: 1rem;
        margin-top: 0.75rem;
      }
    }
  }
}
</style>
