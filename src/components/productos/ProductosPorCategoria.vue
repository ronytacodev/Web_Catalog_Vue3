<template>
    <div class="cell grid-x grid-margin-x">
        <div class="cell small-6 medium-4 large-3" v-for="n in 12" :key="n">
            <v-card-producto image="..." name="producto de prueba" :price="100" />
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
    methods: {
        filtrarProductos: function () {
            apiProductos.filtrarProductos(filtros).then(

            )
        }
    }
}
</script>

<style lang="scss" scoped></style>