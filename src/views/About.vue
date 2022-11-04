<script>
import HelloWorld from '../components/HelloWorld.vue';
export default {
  components: {
    HelloWorld
  },
  setup() {
    return {}
  }
}
</script>
<template>
  <Suspense>
  <template #default>
    <HelloWorld/>
  </template>
  <template #fallback>
    <div>Loading...</div>
  </template>
</Suspense>
</template>