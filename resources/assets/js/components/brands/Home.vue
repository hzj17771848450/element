<template>
	<div>

        <el-row>
            <router-link to="/new">
                <el-button type="success"><i class="el-icon-edit"></i>新增</el-button>
            </router-link>

            <el-button type="success" disabled><i class="el-icon-edit"></i>导出</el-button>
        </el-row>

        <el-main class="table_main">
            <el-table :data="tableData" tooltip-effect="dark" style="width: 100%">

                <el-table-column prop="id" label="品牌ID" width="80"></el-table-column>

                <el-table-column prop="image" label="缩略图" width="100">
                    <template slot-scope="scope">
                        <img :src="scope.row.image" class="thumb" width="50">
                    </template>
                </el-table-column>

                <el-table-column prop="name" label="品牌名称" width="120"></el-table-column>

                <el-table-column prop="url" label="品牌网址" width="200"></el-table-column>

                <el-table-column prop="description" label="描述信息" show-overflow-tooltip></el-table-column>

                <el-table-column prop="sort_order" label="排序" width="50"></el-table-column>

                <el-table-column prop="is_show" label="是否显示">
                    <template slot-scope="scope">
                        <i :class='scope.row.is_show | clickOrClose'></i>
                    </template>
                </el-table-column>

                <el-table-column label="操作" width="150">
                    <template slot-scope="scope">

                        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">
                            编辑
                        </el-button>


                        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除
                        </el-button>

                    </template>
                </el-table-column>

            </el-table>
        </el-main>
        <el-footer style="float: right">
            <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="page.total"
                    :page-size="page.pagesize"
                    @current-change="handleCurrentChange">
            </el-pagination>
        </el-footer>
  </div>
</template>

<script>
  export default {
      data() {
          return {
              tableData: [],
              page: {
                  total:0,
                  pagesize: 0,
                  current_page:1,
              }
          }
      },
      filters: {
          clickOrClose(value) {
              if (value){
                  return 'el-icon-check'
              }
              return "el-icon-close"
          }
      },
      created(){
          this.init()
      },

      methods: {
          handleSizeChange(val) {
              console.log(`每页 ${val} 条`);
          },
          handleCurrentChange(val) {
              console.log(`当前页: ${val}`);
              this.page.current_page=val
              this.init()
          },
          init(){
              axios.get(`http://localhost:8000/admin/shop/brands?page=${this.page.current_page}`).then(response=>{
                  console.log(response)
                  this.tableData=response.data.data.brands.data
                  this.page.total=response.data.data.brands.total
                  this.page.pagesize=response.data.data.brands.per_page
                  this.page.current_page=response.data.data.brands.current_page
              })
          },
          handleEdit(index, row) {
              console.log(row);
              this.$router.push({name:'edit',params:{id:row.id}})
          },
          handleDelete(index, row) {
              console.log(index, row);
              this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                  confirmButtonText: '确定',
                  cancelButtonText: '取消',
                  type: 'warning'
              }).then(() => {
                  axios.delete(`http://localhost:8000/admin/shop/brands/${row.id}`).then((response)=>{
                      this.$message({
                          type: 'success',
                          message: '删除成功!'
                      });
                  })
                  this.tableData.splice(index,1)

              })
          }
      }
  }
</script>
<style>
    .cell{
        text-align: center;
    }
    .el-icon-check{
        color: green;
        font-weight: bold;
    }
    .el-icon-close{
        color: red;
        font-weight: bold;
    }
</style>