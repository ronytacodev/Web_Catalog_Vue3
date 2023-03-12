<template>
    <!-- IMPORT CDN FOUNDATION  -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/foundation-sites@6.7.5/dist/css/foundation.min.css"
        crossorigin="anonymous">
    <div class="cell grid-x grid-margin-x">
        <div class="cell small-6 medium-4 large-3" v-for="producto in productos" :key="producto.id">
            <v-card-producto :image="producto.main_image" :name="producto.name" :price="parseFloat(producto.price)" />
        </div>
    </div>
</template>

<script>

import apiProductos from '@/api/Productos'

import VCardProducto from '@/components/base/VCardProducto.vue';

export default {
    name: 'ProductosPopulares',
    components: {
        VCardProducto
    },
    data() {
        return {
            productos: []
        }
    },
    methods: {
        cargarProductos: function () {
            apiProductos.productosPopulares().then(
                (response) => {
                    this.productos = response.data.results
                    // console.log(response.data)
                }
            )
        }
    },
    mounted() {
        this.cargarProductos()
    }
}
</script>

<style lang="scss" scoped></style>