<script setup>

</script>

<template>
    <section>
        <h2>Upcoming games</h2>
        <button class="btn">predict all</button>
        <div>12.03</div>
        <ul class="games">
            <li class="games__item">
                13:00 Manchester United - Liverpool 
            </li>
            <li class="games__item">
                16:00 Aston Villa - Brentford (1:0)
            </li>
            <li class="games__item">
                16:00 Newcastle United - Arsenal 
            </li>
        </ul>
        <div>13.03</div>
        <ul>
            <li class="games__item">
                14.30 Everton - Manchester City
            </li>
            <li class="games__item">
                14:30 Brighton - Chelsea
            </li>
        </ul>
    </section>
</template>

<style scoped>
    .games__item{
        border: solid 1px black;
        padding: 1em;
        border-radius: .3rem;
        margin: .5rem 0;
    }

    .btn{
        width: 100%;
        padding: .8em 1em; 
        margin: 1rem 0;
        font-size: 1rem;
        border-radius: .3rem;
        border: solid 1px black;
    }
</style>