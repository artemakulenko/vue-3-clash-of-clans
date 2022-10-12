<template>
  <section>
    <div class="container">
      <h1>{{titleInner}}</h1>
    </div>
  </section>
</template>


<script>
import {app} from '@/_config'

export default {
  name: 'MainContent',
  data() {
    return {
      titleInner: app.title
    }
  },
}
</script>