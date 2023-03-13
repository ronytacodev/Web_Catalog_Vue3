<template>
    <div class="producto__content">
        <div class="producto__content__cell">
            <img class="producto__content__cell__img" src="@/assets/background.jpg">
            <div class="producto__content__cell__imgs">
                <img class="producto__content__cell__imgs__item" src="@/assets/background.jpg">
                <img class="producto__content__cell__imgs__item" src="@/assets/background.jpg">
            </div>
        </div>

        <div class="producto__content__cell">
            <h3 class="producto__content__cell__title">Titulo de producto</h3>
            <p class="producto__content__cell__categorias">
                <span class="producto__content__cell__categorias__categoria">categoria ejemplo</span>
            </p>

            <p class="producto__content__cell__colores">
                <span class="producto__content__cell__colores__color">C</span>
            </p>

            <p class="producto__content__cell__price">
                $ 300
            </p>

            <div class="producto__content__cell__description">
                <p class="producto__content__cell__description__text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt laboriosam ullam tempore sequi
                    est dolor delectus eius nam et nostrum quam ea ipsam impedit neque, libero, rem enim consectetur
                    sapiente.
                </p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'ProductoDetail'
}
</script>

<style lang="scss" scoped>
.producto__content {
    width: 320px;
    margin-left: 5px;

    @include desde ($small) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    &__cell {
        padding: 1px;

        @include desde ($small) {
            width: 50%;
            margin: 0px 10px;
        }

        &__img {
            width: 100%;
            height: 200px;
            margin-bottom: 10px;

            @include desde ($small) {
                height: 250px;
            }
        }

        &__imgs {
            display: flex;
            justify-content: center;
            align-items: space-between;

            &__item {
                width: 100px;
                height: 100px;
                margin: 5px;
            }
        }

        &__title {
            font-family: $ff-1;
            font-size: 20px;
            color: $color-2;
            margin-bottom: 1em;
            margin-top: 1em;
        }

        &__categorias {
            border: 1px solid;
            padding: 10px;
            border-radius: 10px;
            margin-bottom: 1em;

            &__categoria {
                color: $color-2;
                display: block;
                margin: 5px;
            }
        }

        &__colores {
            border: 1px solid $color-1;
            padding: 10px;
            border-radius: 10px;
            margin-bottom: 1em;
            display: flex;

            &__color {
                width: 30px;
                height: 30px;
                border: 1px solid $color-3;
                margin: 5px;
            }
        }

        &__price {
            font-size: 26px;
            color: $color-1;
            font-weight: bold;
            font-family: $ff-2;
        }

        &__description {
            margin-top: 1em;
        }
    }

}
</style>