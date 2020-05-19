<template>
  <form class="search" @submit.prevent="submitHandler">
    <label class="search__label">
      <input
        type="search"
        class="search__input"
        @blur="submitHandler"
        @input="submitHandler"
        v-model="searchText"
      >
    </label>
    <button type="submit" class="search__btn" v-wave:dodgerblue></button>
  </form>
</template>
<script>
  export default {
    name: "Search",
    data: ()=>({
      searchText: ""
    }),
    methods: {
      submitHandler(){
        this.$emit('searchChanged', this.searchText.trim())
      }
    },
  }
</script>
<style scoped lang="scss">
  .search{
    display: flex;
    border-radius: 10px;
    background-color: #1DB1FF;
    overflow: hidden;
    transition: box-shadow .3s;
    margin-bottom: 20px;
    &__label{
      padding: 2px 0 2px 2px;
      border-radius: 10px 0 0 10px ;
      margin-bottom: 0;
      display: block;
      width: 100%;
    }
    &__input{
      width: 100%;
      border-radius: 8px 0 0 8px;
      height: 40px;
      padding: 0 20px;
    }
    &__btn{
      border-radius: 0 5px 5px 0;
      background-color: #26FF9B;
      width: 50px;
      background-image: url("../img/icons/search.svg");
      background-repeat: no-repeat;
      background-size: 30px 30px;
      background-position: center center;
      cursor: pointer;
      outline: none!important;
    }
  }
</style>
