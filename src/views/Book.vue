<template>	
	<div>
		<el-table :data="books">
			<el-table-column prop="id" label="编号" width="140">
			</el-table-column>
			<el-table-column prop="name" label="书籍" width="120">
			</el-table-column>
			<el-table-column prop="author" label="作者">
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
export default {
	name:"Book",
	data() {
		return {
			books: []
		}
	},
	//
	created(){
		//alert("开始啦！！！")
		console.log("开始啦！！！")
		var that=this
		axios.get("http://localhost:8181/book/findAll").then(function(resp){
			console.log(resp),
			that.books=resp.data
		})
	}
}
</script>

<style scoped>

</style>