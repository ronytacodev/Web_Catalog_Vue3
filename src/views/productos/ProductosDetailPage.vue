<template>
    <!-- IMPORT CDN FOUNDATION  -->
    <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/foundation-sites@6.7.5/dist/css/foundation.min.css"
        crossorigin="anonymous"> -->

    <div class="grid">
        <producto-detail />
    </div>
</template>

<script>
import ProductoDetail from '@/components/productos/ProductoDetail.vue';

export default {
    name: 'ProductosDetailPage',
    components: {
        ProductoDetail
    }
}
</script>

<style lang="scss" scoped></style>