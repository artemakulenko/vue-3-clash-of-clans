<template>
  <h2 class="cards__title">{{ title }}</h2>
  <p class="cards__desc">{{ description }}</p>
  <p class="cards__lvl">level: {{ level }}</p>
</template>

<script>
export default {
  components: {},
  name: 'CardComp',
  data() {
    return {}
  },
  props: {
    title: String,
    description: String,
    level: Number
  }
}
</script>
