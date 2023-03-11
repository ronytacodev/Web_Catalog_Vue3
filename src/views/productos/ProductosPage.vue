<template>
    <div class="grid-container">
        <div class="grid-x grid-margin-x">
            <h1 class="title">Lista de Productos</h1>
            <productos-populares />
        </div>
    </div>
</template>

<script>
import ProductosPopulares from './ProductosPopulares.vue';

export default {
    name: 'ProductosPage',
    components: {
        ProductosPopulares
    }
}
</script>

<style lang="scss" scoped></style>