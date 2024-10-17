<script setup>
const props = defineProps(['time', 'text', 'prediction', 'score']);
</script>

<template>
    <li class="game__card">
        <div class="info">{{ props.time + " " + props.text + " " +props.score }}</div> <div class="prediction" v-if="props.prediction">{{ props.prediction }}</div>
    </li>
</template>

<style scoped>
.game__card{
        border: solid 1px black;
        border-radius: .3rem;
        margin: .5rem 0;
        display: flex;
        justify-content: space-between;
    }

.prediction{
    border-left: solid 1px gray;
    padding: 1em;
}

.info{
    padding: 1em;
}
</style>