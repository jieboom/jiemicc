<template>

    <div
      class="jiemicc-doc"

    >
      <doc-header></doc-header>
      <doc-content></doc-content>
    </div>


</template>
<script>
import DocHeader from '@/components/main/DocHeader.vue';
import DocContent from '@/components/main/DocContent.vue';


export default {
  name: 'App',
  components: {
    DocHeader,
    DocContent,

  },
};
</script>
<style scoped lang="scss">
#app {
  .jiemicc-doc {
    max-width: 1700px;
    min-width: 1120px;
    margin: auto;
  }
  .jiemicc-demo {
    min-height: 100vh;
    padding: 20px;
    padding-top: 46px;
    background: #fff;
  }
}
</style>
