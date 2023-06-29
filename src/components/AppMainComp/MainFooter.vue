<script>
export default {
    data() {
        return {
            //array perchè l'href in questo caso è lo stesso
            dcComics: ['Characters', 'Comics', 'Movies', 'TV', 'Games', 'Videos', 'News'],
            shop: ['Shop DC', 'Shop DC Collectibles'],
            dc: ['Terms Of Use', 'Privacy policy (New)', 'Ad Choices', 'Advertising', 'Jobs', 'Subscriptions', 'Talent Wrokshops', 'CPSC Certificates', 'Ratings', 'Show Help', 'Contact Us'],
            sites: ['DC', 'MAD Magazine', 'DC Kids', 'DC Universe', 'DC Power Visa']
        }
    }
}

</script>

<template>
    <section id="info-links">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div>
                        <h3>
                            DC COMICS
                        </h3>
                        <ul>
                            <li v-for="e of dcComics">
                                <a href="#">{{ e }}</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>SHOP</h3>
                        <ul>
                            <li v-for="e of shop">
                                <a href="#">{{ e }}</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col">
                    <h3>
                        DC
                    </h3>
                    <ul>
                        <li v-for="e of dc">
                            <a href="#">{{ e }}</a>
                        </li>
                    </ul>
                </div>
                <div class="col">
                    <h3>
                        SITES
                    </h3>
                    <ul>
                        <li v-for="e of sites">
                            <a href="#">{{ e }}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    background-color: black;
    background-image: url('../../assets/img/dc-logo-bg.png'), url('../../assets/img/footer-bg.jpg');
    background-repeat: no-repeat;
    background-size: 35%, cover;
    background-position: 80%, center;
}

h3 {
    color: white;
    margin-bottom: 20px;
}

a {
    color: gray;
    font-size: 0.8rem;

    &:hover {
        color: white;
    }
}

.row {
    width: 400px;
}

.col>div {
    margin-bottom: 30px;
}
</style>