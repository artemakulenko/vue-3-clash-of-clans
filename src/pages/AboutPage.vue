<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <ul>
      <li v-for="(item, index) in abouts" v-bind:key="index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',

  data() {
    return {
      title: 'This is Directory About 🗻',
      abouts: [
        'полная настойка шаблона на Vue CLI;',
        'установка и настройка Vue-router для Vue.js 3;',
        'динамическая перерисовка без перезагрузки страницы;',
        'динамический навбар и ссылки;',
        'обработка несуществующих роутов;',
        'хеши и моды для роутера;',
        'настройка общего конфига.'
      ]
    }
  }
}
</script>
