<template>
    <div class="header">
        <a href="#" class="header__logo">Ahorra Ya</a>

        <ul class="header__menu">
            <li class="header__menu__item">
                <router-link :to="{ name: 'productos' }" class="header__menu__item__link">Inicio</router-link>
            </li>

            <li class="header__menu__item">
                <router-link :to="{ name: 'productos' }" class="header__menu__item__link">Ubícanos</router-link>
            </li>

            <li class="header__menu__item">
                <router-link :to="{ name: 'productos' }" class="header__menu__item__link">¿Cómo ofrecer mi
                    local?</router-link>
            </li>

            <li class="header__menu__item">
                <router-link :to="{ name: 'productos' }" class="header__menu__item__link">Productos</router-link>
            </li>

            <li class="header__menu__item">
                <router-link class="header__menu__item__link" :to="{ name: 'categorias', params: { 'category': '' } }">
                    Categorías
                </router-link>
            </li>

            <li class="header__menu__item">
                <div class="header__menu__item__login-socialmedia">
                    <button class="header__menu__item__login-socialmedia__btn">Iniciar sesión</button>
                    <img class="header__menu__item__login-socialmedia__fb" src="@/assets/facebook.svg" alt="">
                    <img class="header__menu__item__login-socialmedia__instagram" src="@/assets/instagram.svg" alt="">
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'MainHeader'
}
</script>

<style lang="scss" scoped>
.header {
    background: $color-1;
    display: flex;
    justify-content: center;
    align-items: center;

    @include desde ($medium) {
        justify-content: space-between;
    }

    @include desde ($large) {
        justify-content: space-between;
        padding: 1em;
    }

    &__logo {
        color: $color-2;
        font-family: $ff-1;
        font-size: 24px;
        text-decoration: none;

        @include desde ($medium) {
            justify-content: space-between;
            font-size: 40px;
        }
    }

    &__menu {
        display: none;

        @include desde ($medium) {
            display: flex;
            list-style: none;
            padding: 0px;
            margin: 0px;

            &__item {
                margin: 15px;

                &__link {
                    display: block;
                    padding: 5px 5px;
                    text-decoration: none;
                    color: $color-2;
                    font-family: $ff-2;
                    font-weight: bold;
                    font-size: 18px;

                }

                &__login-socialmedia {
                    display: flex;
                    justify-content: space-between;

                    &__btn {
                        padding: 0px 10px;
                        background: $color-3;
                        border-radius: 10px;
                        color: $color-2;
                        font-family: $ff-2;
                        font-weight: bold;
                        font-size: 18px;
                        margin-top: 0px 2px;
                        cursor: pointer;
                        box-shadow: 0 2px 5px $color-2;

                    }

                    &__btn:hover {
                        box-shadow: 0 2px 10px $color-2;
                    }

                    &__fb {
                        margin: 5px 10px;
                        width: 30px;
                    }

                    &__instagram {
                        margin: 5px 10px;
                        width: 30px;
                        border-radius: 10px;
                    }
                }

            }

        }

    }
}
</style>