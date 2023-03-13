<template>
    <!-- IMPORT CDN FOUNDATION  -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/foundation-sites@6.7.5/dist/css/foundation.min.css"
        crossorigin="anonymous">

    <div class="cell">
        <ul class="lista">
            <li v-for="categoria in listaCategorias" :key="categoria.id" class="lista__item">
                <router-link class="lista__item__link"
                    :to="{ name: 'categorias', params: { 'category': categoria.name_unique } }">
                    {{ categoria.name }}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import apiCategorias from '@/api/categorias'

export default {
    name: 'TheListaCategorias',
    data() {
        return {
            listaCategorias: []
        }
    },
    methods: {
        cargarCategorias: function () {
            apiCategorias.listaCategorias().then(
                (response) => {
                    // console.log(response.data)
                    this.listaCategorias = response.data
                }
            )
        }
    },
    beforeMount() {
        this.cargarCategorias()
    }
}
</script>

<style lang="scss" scoped>
.lista {
    list-style: none;
    padding: 0px;
    margin: 0px;

    &__item {
        display: block;

        &__link {
            border: 1px solid red;
            display: block;
            padding: 10px;
            text-decoration: none;
            color: $color-2;
            font-family: $ff-2;

            &:hover {
                background: $color-3;
            }
        }
    }
}
</style>