<template>
  <div class="tags-view-container">
    <el-scrollbar
      ref="scrollContainer"
      :vertical="false"
      class="scroll-container tags-view-wrapper"
      @wheel.native.prevent="handleScroll"
    >
      <el-tag closable v-for="(item,index) in 15">默认标签{{index}}</el-tag>
    </el-scrollbar>
  </div>
</template>
<script>
export default {
  setup(props, context){
      console.log(11111,props);
      console.log(22222,context.root.$route);

  },
  // data() {
  //   return {
  //     left: 0,
      
  //   };
  // },
  // watch: {
    
  // },
  // computed: {
  //   visitedViews() {}
  // },
  // mounted() {
  //     console.log(this.$route);
       
  // },

  // methods: {
  //   handleScroll(e) {
  //     const eventDelta = e.wheelDelta || -e.deltaY * 40;
  //     const $scrollWrapper = this.$refs.scrollContainer.$refs.wrap;
  //     $scrollWrapper.scrollLeft = $scrollWrapper.scrollLeft + eventDelta / 4;
  //   }
  // }
};
</script>
<style >
.tags-view-container {
  height: 34px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
}
.tags-view-wrapper .el-tag {
  cursor: pointer;
  height: 26px;
  line-height: 26px;
  border: 1px solid #d8dce5;
  color: #495060;
  background: #fff;
  padding: 0 8px;
  font-size: 12px;
  margin-left: 5px;
  margin-top: 4px;
}

.tags-view-wrapper .el-tag:first-child {
  margin-left: 15px;
}
.tags-view-wrapper .el-tag:last-child {
  margin-right: 15px;
}
.tags-view-wrapper .el-tag .el-tag__close {
  color: #495060;
}
.tags-view-wrapper .el-tag.active {
  background-color: #42b983;
  color: #fff;
  border-color: #42b983;
}
.tags-view-wrapper .el-tag.active .el-tag__close {
  color: #fff;
}

.scroll-container {
  white-space: nowrap;
  width: 100%;
}

.scroll-container .el-scrollbar__bar {
  display: none !important;
}
</style>