<template>
    <!-- IMPORT CDN FOUNDATION  -->
    <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/foundation-sites@6.7.5/dist/css/foundation.min.css"
        crossorigin="anonymous"> -->

    <div class="cell">
        <li v-for="color in colores" :key="color.id" class="cell__item">
            <a href="#" class="cell__item__link" :style="{ background: color.value }"></a>
        </li>
    </div>
</template>

<script>
import apiColores from '@/api/colores';

export default {
    name: 'TheListaColores',
    data() {
        return {
            colores: []
        }
    },
    methods: {
        cargarColores: function () {
            apiColores.listarColores().then(
                (response) => {
                    this.colores = response.data
                }
            )
        }
    },
    beforeMount() {
        this.cargarColores()
    }
}
</script>

<style lang="scss" scoped>
.cell {
    display: flex;
    list-style: none;
    justify-content: center;
    align-items: right;
    padding: 0px;
    margin: 10px 150px;

    @include desde ($medium) {
        margin: 10px auto;
    }

    &__item {
        display: block;
        margin-right: 3px;
        border: 1px solid blue;

        &__link {
            display: block;
            border: 1px solid $color-2;
            width: 30px;
            height: 30px;
            text-decoration: none;
        }
    }
}
</style>