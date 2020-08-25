<template>
    <el-aside width="200px">
        <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                :router="true"
        >

            <el-menu-item index="/">
                <i class="el-icon-setting"></i>
                <span slot="title">首页</span>
            </el-menu-item>

            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>商城管理</span>
                </template>
                <el-menu-item index="1-1"><i class="el-icon-rank"></i> 仪表盘</el-menu-item>
                <el-menu-item index="1-1"><i class="el-icon-rank"></i>订单管理</el-menu-item>
                <el-menu-item index="/products"><i class="el-icon-edit"></i> 商品管理</el-menu-item>
                <el-menu-item index="/commodity"><i class="el-icon-more"></i> 商品分类</el-menu-item>
                <el-menu-item index="/brand"><i class="el-icon-view"></i> 商品品牌</el-menu-item>
                <el-menu-item index="/customers"><i class="el-icon-mobile-phone"></i> 会员管理</el-menu-item>
                <el-menu-item index="1-1"><i class="el-icon-tickets"></i> 物流运费</el-menu-item>
                <el-menu-item index="1-1"><i class="el-icon-delete"></i> 商品回收站</el-menu-item>

            </el-submenu>

            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-picture"></i>
                    <span>广告中心</span>
                </template>
                <el-menu-item index="2-1"><i class="el-icon-rank"></i> ###</el-menu-item>
                <el-menu-item index="2-1"><i class="el-icon-rank"></i>###</el-menu-item>
                <el-menu-item index="2-1"><i class="el-icon-edit"></i> ###</el-menu-item>
            </el-submenu>


            <el-submenu index="3">
                <template slot="title">
                    <i class="el-icon-goods"></i>
                    <span>官网管理</span>
                </template>
                <el-menu-item index="3-1"><i class="el-icon-rank"></i> ###</el-menu-item>
                <el-menu-item index="3-1"><i class="el-icon-rank"></i>###</el-menu-item>
                <el-menu-item index="3-1"><i class="el-icon-edit"></i> ###</el-menu-item>
            </el-submenu>


            <el-submenu index="4">
                <template slot="title">
                    <i class="el-icon-goods"></i>
                    <span>系统管理</span>
                </template>
                <el-menu-item index="4-1"><i class="el-icon-rank"></i> ###</el-menu-item>
                <el-menu-item index="4-1"><i class="el-icon-rank"></i>###</el-menu-item>
                <el-menu-item index="4-1"><i class="el-icon-edit"></i> ###</el-menu-item>
            </el-submenu>

        </el-menu>

    </el-aside>
</template>


<script>
    export default {
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            };
        },
        methods: {
            handleOpen(key, keyPath) {

            },
            handleClose(key, keyPath) {

            }

        }
    }
</script>