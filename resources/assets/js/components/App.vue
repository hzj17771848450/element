<template>
	<div id="app">
		<el-container>
			<el-header>
				<myHeader></myHeader>
			</el-header>
			<el-container>
				<my-menu></my-menu>
				<el-main>
					<router-view></router-view>
				</el-main>
			</el-container>
		</el-container>

	</div>

</template>


<script>
	import myHeader from "./shared/Header";
	import myMenu from "./shared/Menu"
    export default {
    	components:{
			myHeader,
			myMenu,
		},
        data() {
            return {

            };
        },
        methods: {

        }
    }
</script>

<style>

	html,body,#app{
		height: 100%;
	}
	.el-container{
		height: 100%;
	}
	.el-menu{
		height:100%
	}
	.el-menu-demo{
		font-size: 35px;
	}
	.el-aside{
		font-weight: bold;

	}

</style>
