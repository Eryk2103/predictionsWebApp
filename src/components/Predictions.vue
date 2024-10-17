<script setup>
import GameCard from './GameCard.vue';
</script>
<template>
    <ul>
        <li>
            <GameCard :time="'13:00'" :text="'Manchester City - Everton'" :prediction="'5-1'" :score="'3-0'"/>
        </li>
        <li>
            <GameCard :time="'13:00'" :text="'Manchester United - Chelsea'" :prediction="'5-1'" :score="'6-5'"/>
        </li>
    </ul>
</template>