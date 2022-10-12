<template>
  <div class="site-content">
    <MainHeader />
    <!-- <MainContent /> -->
    <router-view />
    <MainFooter />
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader'
import MainFooter from '@/components/MainFooter'
// import MainContent from '@/components/MainContent'

export default {
  name: 'App',
  components: {
    MainHeader,
    MainFooter
    // MainContent
  }
}
</script>
