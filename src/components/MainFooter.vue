<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <a
          v-for="item in linksInner"
          :key="item.alias"
          :href="item.url"
        >
          {{item.title}}
        </a>
      </div>
    </div>
  </footer>
</template>



<script>
import {links} from '@/_config'

export default{
  name: 'MainFooter',
  data(){
    return{
      linksInner: links
    }
  },
}
</script>