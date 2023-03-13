<template>
    <div class="cell grid-x grid-margin-x">
        <div class="cell small-6 medium-4 large-3" v-for="producto in productos" :key="producto.id">
            <v-card-producto :image="producto.main_image" :name="producto.name" :price="parseFloat(producto.price)"
                :ruta="{ name: 'detalle-producto', params: { id: producto.id } }" />
        </div>
    </div>
</template>

<script>
import apiProductos from '@/api/productos';

import VCardProducto from '../base/VCardProducto.vue';

export default {
    name: 'ProductosPorCategoria',
    components: {
        VCardProducto
    },
    data() {
        return {
            productos: []
        }
    },
    watch: {
        '$route.params.category': function () {
            this.filtrarProductos()
        }
    },
    methods: {
        filtrarProductos: function () {
            // console.log(this.$route.query.colors)
            let filtros = 'category=' + this.$route.params.category + '&?colors=' + this.$route.query.colors
            console.log(filtros)
            apiProductos.filtrarProductos(filtros).then(
                (response) => {
                    this.productos = response.data.results
                }
            )
        }
    },
    beforeMount() {
        this.filtrarProductos()
    }
}
</script>

<style lang="scss" scoped></style>