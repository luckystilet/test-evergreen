<template>
  <div class="fade-in">
    <div class="page-top">
      <h1>Users page</h1>
      <div class="right">
      <label>
        Пользователей на страницу:
        <select v-model.number="usersPerPage">
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </label>
      </div>
    </div>
    <Search @searchChanged="searching($event)"></Search>
    <div
      v-if="paginatedFilteredUsers"
      class="users"
    >
      <div
        class="user-item fade-in"
        v-for="(user, i) in paginatedFilteredUsers" :key="i"
        @click="$router.push({name: 'user', params: {id: user.id.toString()}})"
      >
        <div class="user-item__title">{{user.first_name}} {{user.last_name}}</div>
        <div class="user-item__email">email: {{user.email}}</div>
        <img :src="user.avatar" :alt="user.first_name + ' ' + user.last_name">
      </div>
    </div>
    <div v-else><h5>No users matching your query!</h5></div>
    <Paginate
      :usersPerPage="usersPerPage"
      :length="filteredUsers.length"
      @pageChanged="pageChanged($event)"
    ></Paginate>
  </div>
</template>
<script>
  import Paginate from "@/components/Paginate"
  import Search from "@/components/Search"
  
  export default {
    name: "home",
    data: ()=>({
      usersPerPage: 5,
      filteredUsers: [],
      currentPage: 1
    }),
    computed: {
      users(){
        return this.$store.state.users
      },
      paginatedFilteredUsers(){
        const startIndex = this.currentPage * this.usersPerPage - this.usersPerPage
        return this.filteredUsers.slice(startIndex, startIndex + this.usersPerPage)
      }
    },
    components: {Paginate, Search},
    methods: {
      pageChanged(e){
        this.currentPage = e
        // this.$router.push({name: 'home', query: {p: this.currentPage.toString()}})
        // Сохранение пагинации в адрессной строке и восстановление состояния по ссылке - не доделал
      },
      searching(text){
        this.filteredUsers = this.users.filter(user=>{
          return (user.first_name.toString().toLowerCase()).includes(text.toLowerCase())
        })
      }
    },
    watch: {
      users(newV, oldV){
        this.filteredUsers = this.$store.state.users
      },
      usersPerPage(newV, oldV){
        this.currentPage = 1
      }
    },
    mounted(){
      this.filteredUsers = this.$store.state.users
    },
  }
</script>
<style scoped lang="scss">
  h5{
    text-align: center;
  }
  .page-top{
    position: relative;
    margin-bottom: 15px;
    text-align: center;
  }
  .right{
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    margin-top: 5px;
    user-select: none;
  }
  h1{
    display: inline-block;
    text-align: center;
    font-size: 42px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .users{
    display: flex;
    flex-wrap: wrap;
  }
  .user-item{
    width: 20%;
    padding: 0 5px;
    margin: 10px 0;
    cursor: pointer;
    &__title{
      margin-bottom: 5px;
      text-align: center;
      font-size: 20px;
    }
    img{
      width: 100%;
      max-width: 100%;
      border-radius: 3px;
    }
  }
</style>
