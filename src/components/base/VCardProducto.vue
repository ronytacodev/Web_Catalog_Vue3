<template>
    <div class="producto">
        <img class="producto__img" src="image">
        <a class="producto__name" href="">{{ name }}</a>
        <p class="producto__price">{{ price }}</p>
    </div>
</template>

<script>
export default {
    name: 'VCardProducto',
    props: {
        image: String,
        name: String,
        price: Number
    }
}
</script>

<style lang="scss" scoped>
.producto {
    margin: 5px;
    background: $color-3;

    &__img {
        width: 100%;
        height: 100px;
        margin-bottom: 10px;
    }

    &__name {
        font-family: $ff-2;
        color: $color-2;
        display: block;
        text-decoration: none;
        padding-left: 20px;
        margin-bottom: 5px;
        font-size: 12px;
        text-transform: capitalize;
    }

    &__price {
        font-size: 20px;
        font-weight: bold;
        padding-left: 25px;
        margin-bottom: 10px;
        color: $color-2;
    }
}
</style>