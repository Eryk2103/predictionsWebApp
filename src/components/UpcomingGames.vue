<script setup>
import GameCard from '@/components/GameCard.vue';
</script>

<template>
    <div>12.03</div>
        <ul class="games">
            <li>
                <GameCard :time="'13:00'" :text="'Manchester United - Liverpool'"/>
            </li>
            <li>
                <GameCard :time="'13:00'" :text="'Manchester City - Chelsea'"/>
            </li>
            <li>
                <GameCard :time="'16:00'" :text="'Aston Villa - Brentford'" :prediction="'1:0'"/>
            </li>
            <li>
                <GameCard :time="'13:00'" :text="'Manchester United - Liverpool'"/>
            </li>
        </ul>
        <div>13.03</div>
        <ul>
            <li>
                <GameCard :time="'13:00'" :text="'Manchester United - Liverpool'"/>
            </li>
        </ul>
</template>
