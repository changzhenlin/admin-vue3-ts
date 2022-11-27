<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-row class="header-con" :gutter="20">
          <el-col :span="4"
            ><div class="grid-content ep-bg-purple logo-con">
              <img alt="Vue logo" class="logo" src="../assets/logo.png" /></div
          ></el-col>
          <el-col :span="16"
            ><div class="grid-content ep-bg-purple"><h1>manage system</h1></div>
          </el-col>
          <el-col :span="4"
            ><div class="grid-content ep-bg-purple"><span>退出登陆</span></div>
          </el-col>
        </el-row>
      </el-header>
      <el-container class="ex-header">
        <el-aside width="200px">
          <el-menu
            default-active="2"
            v-for="item in menuList"
            :key="item.path"
            router
            class="el-menu-vertical-demo">
             <el-menu-item :index="item.path">
              <span>{{item.meta.title}}</span>
             </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'HomeView',
  components: {},
  setup() {
    const route = useRouter();
    const menuList = route.getRoutes();
    return {
      menuList
    }
  }
})
</script>
<style lang="scss" scoped>
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.el-header {
  padding: 0;
  margin: 0;
}

.el-container {
  width: 100%;
}

.header-con {
  color: #fff;
  background-color: rgb(236, 131, 131);
  height: 60px;
  margin: 0;
  .logo-con {
    padding: 10px;
    .logo {
      height: 40px;
    }
  }

  h1 {
    font-size: 30px;
    line-height: 60px;
    text-align: center;
  }
  span {
    width: 100%;
    text-align: center;
    font-size: 14px;
    line-height: 60px;
  }
}
.el-main {
  background-color: rgb(238, 241, 246);
}
.ex-header {
  height: calc(100vh - 60px);
}
</style>
