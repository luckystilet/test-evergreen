<template>
  <div id="app">
    <header class="header">
      <div class="container">
        <div class="my-logo">Evergreen Test Task</div>
      </div>
    </header>
    <main class="main">
      <div class="container">
        <keep-alive include="home"> <!--Для созраненя пагинации по возращению со страницы пользователя-->
          <router-view/>
        </keep-alive>
      </div>
    </main>
    <footer class="footer">
      <div class="container">
        <p class="creator">made by: <strong style="font-family: 'Comic Sans MS', cursive;">luckystilet@gmail.com</strong></p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  mounted(){
    if(!this.$store.state.users.length){
      this.$store.dispatch('getUsers')
    }
  },
}
</script>
<style lang="scss">
#app{
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
