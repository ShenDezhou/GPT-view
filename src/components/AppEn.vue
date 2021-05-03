<template>
  <div id="app">
    <el-container>
      <el-header class="header">
        <vheader />
      </el-header>
      <el-container>
        <el-aside width="200px">
          <navmenu></navmenu>
        </el-aside>
        <el-main>
          <cmain></cmain>
        </el-main>
      </el-container>
      <el-footer class="footer">Footer</el-footer>
    </el-container>
  </div>
</template>
<script>
import NavMenu from '@/components/NavMenu'
import Header from '@/components/Header'
import EnMain from '@/components/EnMain'

export default {
  name: 'app',
  components: {
    'navmenu': NavMenu,
    'vheader': Header,
    'cmain': EnMain
  }
}

</script>

<style>
.header {
  background-color: #409EFF;
  color: #fff;
  line-height: 60px;
}
.footer {
  background-color: #409EFF;
  color: #fff;
  line-height: 60px;
}
</style>
