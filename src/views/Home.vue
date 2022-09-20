<template>
  <div class="data_container">
    <div class="user_wrap" v-for="post in Posts" :key="post.id">
      <div class="user_id">
        {{post.id}}
      </div>
      <div class="user_title">
        {{post.title}}
      </div>
      <div class="user_body">
        {{post.body}}
      </div>
      <button class="btn" @click="remove(post.id)">REMOVE USER</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
...mapGetters([
      'Posts'
    ]),
  },
  methods:{
    remove(id){
      this.$store.dispatch('removePost',id);
    }
  },
  updated(){
    alert("data updated")
  },
  mounted() {
    this.$store.dispatch('getPosts');
  },
}
</script>
<style>
.user_wrap{
    border: 2px solid #000000;
    padding: 20px;
}
.data_container{
    display: grid;
    gap: 15px;
}
 .btn{
  margin:10px;
}
.user_title,.user_id,.user_body{
margin-bottom: 10px;
}
</style>
