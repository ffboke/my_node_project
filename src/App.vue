<template>
  <my-top/>
  <router-view />
  <my-footer/>
</template>

<script>
import MyTop from "@/components/MyTop.vue";
import MyFooter from "@/components/MyFooter";
export default {
  components: {
    MyTop,
    MyFooter
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
*{
  margin: 0;
  padding: 0;
}
</style>
