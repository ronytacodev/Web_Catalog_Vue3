<template>
    <!-- IMPORT CDN FOUNDATION  -->
    <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/foundation-sites@6.7.5/dist/css/foundation.min.css"
        crossorigin="anonymous"> -->
    <div class="grid-container">
        <h1 class="grid-container__title">Lista de Productos</h1>
        <div class="grid-container__grid">
            <productos-populares />
        </div>
    </div>
</template>

<script>
import ProductosPopulares from '@/components/productos/ProductosPopulares.vue';

export default {
    name: 'ProductosPage',
    components: {
        ProductosPopulares
    }
}
</script>

<style lang="scss" scoped>
.grid-container {

    &__title {
        font-family: $ff-1;
        text-align: center;
        margin-top: 10px;
        border-bottom: 3px solid $color-1;
    }

    &__grid {
        border: 1px solid red;
        display: grid;
        grid-template-columns: auto auto;
        gap: 5px;

        @include desde ($small) {
            display: grid;
            grid-template-columns: auto auto auto auto;
            gap: 10px;
        }
    }
}
</style>