<template>
  <h1>Hello {{ name }}</h1>
</template>

<script>
export default {
  data() {
    return {
      name: 'TypeScript'
    };
  }
}
</script>

<style scoped>
  h1 {
    color: aqua;
  }
</style>
