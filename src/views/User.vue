<template>
  <div class="user-page fade-in">
    <router-link to="/" class="btn btn-link">Home page</router-link>
    
    <h1>We are on <strong>{{user.first_name}}</strong> <strong>{{user.last_name}}</strong>'s personal page</h1>
    
    <div class="user">
      <img :src="user.avatar" :alt="user.first_name + '' + user.last_name" class="user__img">
      <div class="user__email">{{user.first_name}}'s email is: <strong>{{user.email}}</strong></div>
      <div class="user__id">{{user.first_name}}'s id is: <strong>{{user.id}}</strong></div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "user",
    computed: {
      user(){
        return this.$store.getters.userData(this.$route.params.id) || {first_name: '', last_name: '', email: '', avatar: ''}
      }
    },
  }
</script>
<style scoped lang="scss">
  .user-page{
    padding-bottom: 40px;
  }
  .btn-link{
    font-size: 22px;
    margin-bottom: 20px;
  }
</style>
