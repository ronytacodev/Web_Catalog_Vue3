<template>
    <!-- IMPORT CDN FOUNDATION  -->
    <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/foundation-sites@6.7.5/dist/css/foundation.min.css"
        crossorigin="anonymous"> -->

    <div class="cell" v-for=" producto in productos" :key="producto.id">
        <v-card-producto :image="producto.main_image" :name="producto.name" :price="parseFloat(producto.price)"
            :ruta="{ name: 'detalle-producto', params: { id: producto.id } }" />
    </div>
</template>

<script>

import apiProductos from '@/api/productos'

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

<style lang="scss" scoped>
.cell {
    margin-bottom: 10px;
}
</style>