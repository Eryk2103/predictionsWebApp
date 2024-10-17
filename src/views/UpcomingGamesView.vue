<script setup>
    import UpcomingGames from '@/components/UpcomingGames.vue';
</script>

<template>
    <h2>Upcoming games</h2>
    <button class="btn">predict all</button>
    <UpcomingGames/>
</template>

<style scoped>
    .btn{
        width: 100%;
        padding: .8em 1em; 
        margin: 1rem 0;
        font-size: 1rem;
        border-radius: .3rem;
        border: solid 1px black;
    }
</style>