<script>
export default {
    data() {
        return {
            cols: [
                {
                    image: 'buy-comics-digital-comics.png',
                    title: 'Digital comics'
                },
                {
                    image: 'buy-comics-merchandise.png',
                    title: 'DC Merchandise'
                },
                {
                    image: 'buy-comics-subscriptions.png',
                    title: 'Subscriptions'
                },
                {
                    image: 'buy-comics-shop-locator.png',
                    title: 'Comic shop locator'
                },
                {
                    image: 'buy-dc-power-visa.svg',
                    title: 'DC Power visa'
                },
            ]
        }
    },
    methods: {
        getImagePath(imageName) {
            return new URL(`../../assets/img/${imageName}`, import.meta.url).href
        }
    }
}
</script>

<template>
    <section id="jumbotron">
        <div class="container">
            <div class="row">
                <div v-for="col in cols" class="col">
                    <img :src="getImagePath(col.image)" :alt="col.title">
                    <h2>{{ col.title.toUpperCase() }}</h2>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/vars' as *;

section {
    background-color: $blue;
    padding: 50px 0;
}

img {
    height: 60px;
}

.row {
    display: flex;
    justify-content: space-around;
}

.col {
    display: flex;
    align-items: center;

    h2 {
        margin-left: 15px;
        color: white;
        font-size: 1rem;
    }
}
</style>