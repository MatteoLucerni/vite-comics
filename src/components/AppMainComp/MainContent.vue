<script>
export default {
    props: {
        comics: Array
    }
}
</script>

<template>
    <section class="thumb">
    </section>
    <section id="content">
        <div class="container">
            <div class="row">
                <div class="btn-blue">
                    CURRENT SERIES
                </div>
                <div v-for="comic in comics" class="card">
                    <div class="img-container">
                        <img :src="comic.thumb" :alt="comic.thumb">
                    </div>
                    <h5>{{ comic.series }}</h5>
                </div>
            </div>
            <button class="btn btn-blue">LOAD MORE</button>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/vars' as *;

section {
    background-color: $black;
    color: white;
    display: flex;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    >.btn-blue {
        margin-top: 30px;
    }
}

h1 {
    height: 100%;
    display: flex;
    align-items: center;
}

.card {
    width: calc(100% / 6 - 30px);
}

.img-container {
    height: 185px;
    width: 100%;
    overflow: hidden;
}

img {
    height: 304px;
    width: 100%;
    object-fit: cover;
}

h5 {
    margin-top: 15px;
    font-weight: 500;
}

.row {
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    position: relative;

    .btn-blue {
        padding: 12px 20px 0 20px;
        position: absolute;
        top: -75px;
        left: 0;
    }
}

.thumb {
    background-image: url(../../assets/img/jumbotron.jpg);
    height: 300px;
    background-size: cover;
    position: relative;
}

.btn-blue {
    height: 50px;
    padding: 0 20px 0 20px;
    background-color: $blue;
    font-size: 1.2rem;
    font-weight: 700;
    cursor: pointer;
}
</style>