<template>
    <div class="grid-container">
        <div class="grid-x grid-margin-x">
            <h1 class="cell title">Lista de Productos</h1>
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
.title {
    font-family: $ff-1;
    text-align: center;
    margin-top: 10px;
    border-bottom: 3px solid $color-1;
}
</style>