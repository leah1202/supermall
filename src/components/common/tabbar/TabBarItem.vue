<!--  -->
<template>
  <div class="tab-bar-item" @click="itemClick">
    <div class="item-icon" v-if="!isActive"><slot name="item-icon"></slot></div>
    <div class="item-active-icon" v-else><slot name="item-active-icon"></slot></div>
    <div class="item-text" :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name:'TabBarItem',
  props:{
    path:{
      type:String,
      required:true
    },
    activeColor:{
      type:String,
      default:'#ff5777'
    }  
  },
  methods:{
    itemClick(){
      this.$router.replace(this.path)
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path)!== -1
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor} : {}
    }
  }
}

</script>
<style scoped>
.tab-bar-item {
    flex: 1;
    font-size: 14px;
  }

  .tab-bar-item .item-icon img, .item-active-icon img {
    width: 24px;
    height: 24px;
    margin-top: 5px;
    vertical-align: middle;
  }
</style>