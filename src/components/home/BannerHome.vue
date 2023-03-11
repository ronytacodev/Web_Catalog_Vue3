<template>
    <div class="banner">
        <img class="banner__img" src="@/assets/background.jpg">

        <h1>Bienvenido al Minimarket TacoMass</h1>
        <div class="banner__copy">
            <p class="banner__copy__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime dignissimos esse
                nesciunt perferendis molestiae quibusdam qui, delectus commodi error ullam veritatis ut obcaecati
                perspiciatis aperiam. Cupiditate sit facilis voluptates laudantium.</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BannerHome'
}
</script>

<style lang="scss" scoped>
.banner {
    border: 1px solid;
    text-align: center;

    &__img {
        width: 100%;
        height: 200px;
    }
}
</style>