<template>
  <div class="h-64">
   <!--  <InfiniteScroll @onBottom="fetchObjects">
      
    </InfiniteScroll> -->
    <div v-infinite-scroll="fetchObjects" class="overflow-y-auto h-full">
      <div v-for="item in items" :key="item.id" class="py-4">
        <div class="name">{{item.name}}</div>
        <div class="email">{{item.email}}</div>
        <div class="body">{{item.body}}</div>
      </div>
    </div>
  </div>
</template>
<script>
  // import InfiniteScroll from '@/components/common/InfiniteScroll'
  import InfiniteScroll from '@/directives/infinite-scroll'
  export default {
    name: 'Pictures',
    components: {
      InfiniteScroll
    },
    directives: {
      'infinite-scroll': InfiniteScroll
    },
    data () {
      return {
        items: [],
        page: 1,
        loadingMore: false
      }
    },
    methods: {
      async fetchObjects () {
        if (!this.loadingMore) {
          this.loadingMore = true
          const res = await fetch('https://jsonplaceholder.typicode.com/comments?_page=' + this.page)
          if (this.page === 1) {
            this.items = await res.json()
          } else {
            this.items = [...this.items, ...await res.json()]
          }
          this.page++
          this.loadingMore = false
        }
      }
    },
    async mounted () {
      this.fetchObjects()
    }
  }
</script>
<style>
  .infinite-scroll__wrapper::-webkit-scrollbar{
    width: 0 !important;
  }
</style>