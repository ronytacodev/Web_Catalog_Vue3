<template>
    <div class="producto">
        <div class="producto__content">
            <img class="producto__content__img" src="@/assets/background.jpg">
            <div class="producto__content__imgs">
                <img class="producto__content__imgs__img" src="@/assets/background.jpg">
                <img class="producto__content__imgs__img" src="@/assets/background.jpg">
            </div>

            <div class="producto__content__cell">
                <h3 class="producto__content__cell__title">Titulo de producto</h3>
                <p class="producto__content__cell__categorias">
                    <span class="producto__content__cell__categorias__categoria">categoria ejemplo</span>
                </p>

                <p class="producto__content__cell__colores">
                    <span class="producto__content__cell__colores__color">colores ejemplo</span>
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
    </div>
</template>

<script>

export default {
    name: 'ProductoDetail'
}
</script>

<style lang="scss" scoped>
.producto__content {
    border: 1px solid red;
    width: 320px;
    margin-left: 5px;

    &__img {
        width: 100%;
        height: 200px;
        // me quede en el min 1_50 
    }

}
</style>