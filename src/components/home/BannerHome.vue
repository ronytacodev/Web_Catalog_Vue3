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
    text-align: center;

    &__img {
        width: 100%;
        height: 200px;

        @include desde_hasta ($small, $medium) {
            height: 350px;
        }

        @include desde_hasta ($medium, $large) {
            height: 400px;
        }

        @include desde_hasta ($large, $extra-large) {
            height: 500px;
        }

        @include desde ($extra-large) {
            height: 600px;
        }
    }
}
</style>