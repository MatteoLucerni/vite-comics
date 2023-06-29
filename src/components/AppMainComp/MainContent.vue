<script>

</script>

<template>
    <section id="content">
        <div class="container">
            <h1>
                <i class="fa-solid fa-arrow-right"></i>
                <span>Content goes here</span>
                <i class="fa-solid fa-arrow-left"></i>
            </h1>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/vars' as *;

section {
    background-color: $black;
    height: 100px;
    color: white;
}

.container {
    height: 100%;
}

h1 {
    height: 100%;
    display: flex;
    align-items: center;
}

span {
    margin: 0 15px;
    vertical-align: middle;
}

i {
    vertical-align: middle;
}
</style>