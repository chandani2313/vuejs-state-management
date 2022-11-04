import axios from "axios";

export const getPosts =  async ({ commit }) => {
     await axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            commit('SET_POSTS',response.data)
        })
}

export const removePost = ({commit,state},id) => {
    const newPost = state.posts.filter(post => post.id != id )
    commit('SET_POSTS',newPost)
    console.log(id)
}