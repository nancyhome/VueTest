<template>
    <el-container style="height: 500px; border: 1px solid #eee">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
            <el-menu router :default-openeds="['0','1']">
                <el-submenu v-for="(item,index) in $router.options.routes" :index="index+''">
                    <template slot="title"><i class="el-icon-message"></i>{{item.name}}</template>
                    <el-menu-item  v-for="(item2,index2) in item.children" :index="item2.path" :class="{'isActive':$route.path==item2.path}">{{item2.name}}</el-menu-item>
                </el-submenu>
            </el-menu>
        </el-aside>

        <el-container>
            <el-header style="text-align: right; font-size: 12px">
                <el-dropdown>
                    <i class="el-icon-setting" style="margin-right: 15px; font-size: 20px"></i>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>日志模型</el-dropdown-item>
                        <el-dropdown-item>服务分配示意图</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <span>更多</span>
            </el-header>

            <el-main>
                <router-view/>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        name: "Index"
    }
</script>

<style>
    .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }

    .el-aside {
        color: #333;
    }
</style>