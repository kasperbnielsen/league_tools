<script setup lang="ts">
import spells from "~/assets/summonerSpells";
const props = defineProps<{
  match: any;
  profileUser: { name: string; puuid: string };
}>();

const total = ref<number[]>([0, 0]);

function getSummonerSpell(id: number): string {
  let fullPath = "";
  spells.forEach((e) => {
    if (e.id === id) {
      fullPath = `https://raw.communitydragon.org/latest/game/data/spells/icons2d/${e.iconPath
        .substring(42, e.iconPath.length)
        .toLowerCase()}`;
    }
  });
  return fullPath;
}

for (let i = 0; i < props.match.info.participants.length; i++) {
  if (i < 5) {
    total.value[0] += props.match.info.participants[i].kills;
  } else {
    total.value[1] += props.match.info.participants[i].kills;
  }
}

console.log(props.profileUser.name);
console.log(props.match.info.participants[0].summonerName);

watch(total, () => {});
</script>
<template>
  <div class="users">
    <div
      v-for="(user, userIndex) of match.info.participants"
      :key="userIndex"
      class="users__div"
      :style="{
        backgroundColor:
          profileUser.name.toLowerCase() == user.summonerName.toLowerCase()
            ? userIndex < 5
              ? 'blue'
              : 'red'
            : userIndex < 5
            ? '#ADD8E6'
            : '#FF7F7F',
      }"
    >
      <img
        class="users__champion"
        :src="`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${user.championId}.png`"
      />
      <div class="users__summonerSpells">
        <img
          class="users__summonerSpell"
          :src="getSummonerSpell(user.summoner1Id)"
        />
        <img
          class="users__summonerSpell"
          :src="getSummonerSpell(user.summoner2Id)"
        />
      </div>
      <a
        class="users__name"
        :href="`/player/europe/${user.summonerName}/${user.riotIdTagline}`"
      >
        {{ user.summonerName }}
      </a>
      <div class="users__stats">
        <p class="users__kda">
          {{ user.kills }} / {{ user.deaths }} / {{ user.assists }} ({{
            userIndex < 5
              ? (((user.kills + user.assists) / total[0]) * 100).toFixed(0)
              : (((user.kills + user.assists) / total[1]) * 100).toFixed(0)
          }}%)
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.users {
  margin-right: 2rem;
  width: 50rem;
  &__div {
    padding: 0.5rem;
    color: rgb(88, 80, 80);
    display: flex;
  }
  &__name {
    width: 12rem;
    margin-left: 1rem;
  }
  &__champion {
    width: 2rem;
    height: 2rem;
  }
  &__summonerSpells {
    display: flex;
    flex-direction: column;
  }
  &__summonerSpell {
    width: 1rem;
    height: 1rem;
  }
  &__kda {
    font-size: small;
  }
  &__stats {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
  }
}

.details {
  margin-top: 0.5rem;
  margin-right: 2rem;
  margin-bottom: -1rem;
  background-color: darkgray;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}
</style>
