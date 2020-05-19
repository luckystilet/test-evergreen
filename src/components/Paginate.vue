<template>
  <div class="paginate">
    <button
      v-wave:pink
      class="btn btn-info paginate__btn paginate__prev"
      :disabled="isMin"
      @click="prevHandler"
    >prev</button>
    <ul class="paginate__list">
      <li
        v-wave:pink
        class="paginate__item"
        v-for="(page, i) in pages" :key="i"
        :class="{'paginate__item--current': currentPage === page}"
        @click="changePage(page)"
      >{{page}}</li>
      
    </ul>
    <button
      v-wave:pink
      class="btn btn-info paginate__btn paginate__next"
      :disabled="isMax"
      @click="nextHandler"
    >next</button>
  </div>
</template>
<script>
  export default {
    name: "Paginate",
    props: {
      usersPerPage: {
        default: 5
      },
      length: {
        type: Number,
        required: true
      },
    },
    data: ()=>({
      currentPage: 1
    }),
    computed: {
      pages(){
        return Math.ceil(this.length / this.usersPerPage)
      },
      isMin(){
        return this.currentPage === 1
      },
      isMax(){
        return this.currentPage === this.pages
      }
    },
    methods: {
      changePage(page){
        if(page === this.currentPage){
          return
        }
        this.currentPage = page
        this.$emit('pageChanged', this.currentPage)
      },
      prevHandler(){
        if(this.currentPage > 1){
          this.currentPage--
          this.$emit('pageChanged', this.currentPage)
        }
      },
      nextHandler(){
        if(this.currentPage < this.pages){
          this.currentPage++
          this.$emit('pageChanged', this.currentPage)
        }
      },
    },
    watch: {
      usersPerPage(newV, oldV){
        this.currentPage = 1 // Для обновления текущей страници при изсенении в селекте, на случай,
        // если мы выйдем за рамки пагинации (она может стать короче)
      }
    },
  }
</script>
<style scoped lang="scss">
  .paginate{
    display: flex;
    justify-content: center;
    margin: 20px 0;
    &__btn{
      margin: 0 15px;
      font-size: 14px;
    }
    &__list{
      display: flex;
      margin: 0 25px;
    }
    &__item{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 36px;
      width: 36px;
      margin: 0 5px;
      border-radius: 3px;
      cursor: pointer;
      user-select: none;
      border: solid 1px transparent;
      transition: border .3s, background-color .3s;
      font-size: 1.6rem;
      &:hover{
        border: solid 1px #17a2b8;
      }
      &--current{
        background-color: #17A2B8;
        color: #fff;
      }
    }
  }
</style>
