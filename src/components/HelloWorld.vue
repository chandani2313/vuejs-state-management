<script setup>
import { ref } from 'vue';
const response = await fetch("https://jsonplaceholder.typicode.com/posts");
const posts = await response.json();
const msg = ref([]);

msg.value = posts;


const remove = async (id) => {
const filteredPosts = await msg.value.filter(post => post.id !== id);
msg.value = filteredPosts;
}

</script>
<template>

  <div class="data_container">
    <div class="user_wrap" v-for="msgs in msg" :key="msgs.id">
      <div class="user_id">
        {{msgs.id}}
      </div>
      <div class="user_title">
        {{msgs.title}}
      </div>
      <div class="user_body">
        {{msgs.body}}
      </div>
      <button class="btn" @click="remove(msgs.id)">REMOVE USER</button>
    </div>
  </div>
</template>