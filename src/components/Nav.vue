<script setup>
import Menu from './icons/Menu.vue';
import { ref } from 'vue';
import Cross from './icons/Cross.vue';
import { RouterLink } from 'vue-router';
const showMenu = ref(false);

const changeMenu = () =>{
  showMenu.value = !showMenu.value;
}
</script>

<template>
<div class="header">
    <Menu class="icon" @click="changeMenu()"></Menu>
    <nav class="nav" v-show="showMenu">
        <div class="header">
            <Cross class="icon" @click="changeMenu()"></Cross>
        </div>
        <ul class="links">
            <li class="links__item" @click="changeMenu()">
                <RouterLink class="link" :to="{name: 'dashboard'}">dashboard</RouterLink>
            </li>
            <li class="links__item" @click="changeMenu()">
                <RouterLink class="link" :to="{name: 'upcomingGames'}">upcoming games</RouterLink>
            </li>
            <li class="links__item" @click="changeMenu()">
                <RouterLink class="link" :to="{name: 'predictions'}">predictions</RouterLink>
            </li>
        </ul>
    </nav>
</div>
</template>

<style scoped>
.header{
border-bottom: 1px solid gray;
display: flex;
align-items: center;
padding: .5em;
}

.nav{
position: absolute;
top: 0;
left: 0;
background: white;
height: 100vh;
width: 100vw;

}

.links{
padding-left: 1em;
}

.links__item{
margin: 1rem 0;
}
</style>