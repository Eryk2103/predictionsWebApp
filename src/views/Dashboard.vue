<script setup>

</script>

<template>
    <section>
        <h2>Upcoming games</h2>
        <button class="btn">predict all</button>
        <div>12.03</div>
        <ul class="games">
            <li class="games__item">
                <div class="info">13:00 Manchester United - Liverpool</div> 
            </li>
            <li class="games__item">
                <div class="info">16:00 Aston Villa - Brentford</div> <div class="prediction">1:0</div>
            </li>
            <li class="games__item">
                <div class="info">16:00 Newcastle United - Arsenal </div>
            </li>
        </ul>
        <div>13.03</div>
        <ul>
            <li class="games__item">
                <div class="info">14.30 Everton - Manchester City</div>
            </li>
            <li class="games__item">
                <div class="info">14:30 Brighton - Chelsea</div>
            </li>
        </ul>
    </section>
    <section>
        <h2>Last week predictions</h2>
        <ul>
            <li class="games__item">
                <div class="info">Manchester City - Everton 3-0 </div><div class="prediction">5-1</div>
            </li>
            <li class="games__item">
                <div class="info">Manchester United - Chelsea 6-5</div> 
            </li>
            <li class="games__item">
                 <div class="info">Brighton - Fullham 3-1</div> <div class="prediction">3-1</div>
            </li>
        </ul>
    </section>
</template>

<style scoped>
    .games__item{
        border: solid 1px black;
        border-radius: .3rem;
        margin: .5rem 0;
        display: flex;
        justify-content: space-between;
    }

    .btn{
        width: 100%;
        padding: .8em 1em; 
        margin: 1rem 0;
        font-size: 1rem;
        border-radius: .3rem;
        border: solid 1px black;
    }

    .prediction{
        border-left: solid 1px gray;
        padding: 1em;
    }

    .info{
        padding: 1em;
    }
</style>