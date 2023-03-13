<template>
    <div>
        <productos-por-categoria />
    </div>
</template>

<script>
import ProductosPorCategoria from '@/components/productos/ProductosPorCategoria.vue';

export default {
    name: 'ProductosPorCategoria',
    components: {
        ProductosPorCategoria
    }
}
</script>

<style lang="scss" scoped></style>