<template>
    <div>
    <h2>新增品牌</h2>
        <el-form ref="brand" :model="brand" :rules="rules" label-width="80px">
        <el-form-item label="品牌名称" prop="name">
            <el-input v-model="brand.name"></el-input>
        </el-form-item>
        <el-form-item label="缩略图" prop="image">
            <el-upload
                    class="upload-demo"
                    drag
                    action="https://jsonplaceholder.typicode.com/posts/"
                    multiple>
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
        </el-form-item>
            <el-form-item label="品牌网址" prop="url">
                <el-input v-model="brand.url"></el-input>
            </el-form-item>
            <el-form-item label="排序" prop="sort_order">
                <el-input v-model.number="brand.sort_order"></el-input>
            </el-form-item>
            <el-form-item label="是否显示" prop="is_show">
                <el-switch v-model="brand.is_show"></el-switch>
            </el-form-item>
            <el-form-item label="品牌描述" prop="description">
                <el-input type="textarea" v-model="brand.description"></el-input>
            </el-form-item>
        </el-form>
        <el-row>
            <el-button type="primary" @click="onSubmit('brand')">立即创建</el-button>
            <router-link to="/brand">
                <el-button>取消</el-button>
            </router-link>

            <el-button @click="reset('brand')">重置</el-button>
        </el-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                brand: {
                    name: '',
                    url:'',
                    sort_order:'',
                    description:'',
                },
                rules: {
                    name: [
                        {required: true, message: '请输入品牌名称', trigger: 'blur'},
                        {min: 3, max: 7, message: '长度在 3 到 7 个字符', trigger: 'blur'}
                    ],
                    url: [
                        {required: true, message: '请输入品牌网址', trigger: 'blur'},
                    ],
                    description: [
                        {min: 0, max: 255, message: '不能超过255个字符', trigger: 'blur'}
                    ],
                    sort_order: [
                        {required: true, message: '请输入品牌网址', trigger: 'blur'},
                        {type: 'number', message: '排序内容必须是数字'}
                    ],
                }
            }
        },
        methods: {
            onSubmit(formName) {
                // console.log('submit!');
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        axios.post("http://localhost:8000/admin/shop/brands",this.brand).then(()=>{
                            this.$message({
                                showClose:true,
                                message:'添加成功',
                                type: true,
                            })
                            this.$router.push({path:'/brand'})
                        })
                    } else {
                        console.log('error submit!!');
                        this.$message({
                            message:'添加失败',
                        })
                        return false;
                    }
                });
            },
            reset(formName) {
                this.$refs[formName].resetFields();
            },
        }
    }
</script>