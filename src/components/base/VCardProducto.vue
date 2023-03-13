<template>
    <div class="producto">
        <img class="producto__img" :src="image">
        <div class="producto__content">
            <div class="producto__content__link">
                <router-link :to="ruta" class="producto__content__link__name">{{ name }}</router-link>
            </div>
            <div>
                <p class="producto__content__price">$ {{ price }}</p>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'VCardProducto',
    props: {
        image: String,
        name: String,
        price: Number,
        ruta: Object
    }
}
</script>

<style lang="scss" scoped>
.producto {
    margin: 5px;
    background: $color-3;
    height: 260px;
    box-shadow: 0 5px 5px $color-1;
    text-align: center;

    &__img {
        width: 100%;
        margin-bottom: 5px;
        height: 150px;
        border-bottom: 2px solid $color-1;
    }

    &__content {
        height: 46%;

        &__link {
            height: 70px;

            &__name {
                font-family: $ff-2;
                color: $color-2;
                display: block;
                padding: 0px 1px;
                text-decoration: none;
                margin-bottom: 5px;
                font-size: 12px;
                font-weight: bold;
                text-transform: capitalize;
                height: 100%;
            }
        }


        &__price {
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 10px;
            color: $color-2;
        }
    }

}

.producto:hover {
    box-shadow: 0 7px 17px $color-1;
}
</style>