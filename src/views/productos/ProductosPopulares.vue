<template>
    <!-- IMPORT CDN FOUNDATION  -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/foundation-sites@6.7.5/dist/css/foundation.min.css"
        crossorigin="anonymous">
    <div class="cell grid-x grid-margin-x">
        <div class="cell small-6 medium-4 large-3" v-for="n in 12" :key="n">
            <v-card-producto image="" name="" :price="0" />
        </div>
    </div>
</template>

<script>
import VCardProducto from '@/components/base/VCardProducto.vue';

export default {
    name: 'ProductosPopulares',
    components: {
        VCardProducto
    }
}
</script>

<style lang="scss" scoped></style>