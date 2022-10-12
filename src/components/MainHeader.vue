<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <div class="header__left">
          <router-link to="/">
            {{ title }}
          </router-link>
        </div>
        <div class="header__right">
          <router-link 
            v-for="item in linksInner"
            :key="item.alias"
            :to="item.url"
          >
            {{ item.title }}
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>



<script>
import {links, app} from '@/_config'

export default{
  name: 'MainHeader',
  data(){
    return{
      title: app.title,
      linksInner: links
    }
  },
}
</script>