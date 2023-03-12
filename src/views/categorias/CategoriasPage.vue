<template>
    <!-- IMPORT CDN FOUNDATION  -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/foundation-sites@6.7.5/dist/css/foundation.min.css"
        crossorigin="anonymous">

    <div class="grid-container">
        <div class="grid-x grid-margin-x">
            <div class="cell small-12 medium-2 large-3">
                <the-lista-categorias />
            </div>

            <div class="cell small-2 medium-10 large-9">
                <p>aqui van los colores</p>
                aqui va el contenido
            </div>
        </div>
    </div>
</template>

<script>
import TheListaCategorias from '@/components/categorias/TheListaCategorias.vue'

export default {
    name: 'CategoriasPage',
    components: {
        TheListaCategorias
    }
}
</script>

<style lang="scss" scoped></style>