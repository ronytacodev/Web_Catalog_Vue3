<template>
  <div class="home">
    <banner-home />
  </div>
</template>

<script>
// @ is an alias to /src
import BannerHome from '@/components/home/BannerHome.vue'

export default {
  name: 'HomeView',
  components: {
    BannerHome,
  }
}
</script>
