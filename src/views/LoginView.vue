<template>
  <div class="login-box">
    <el-form
    :inline="true"
    ref="ruleFormRef"
    :model="ruleForm"
    status-icon
    :rules="rules"
    label-width="120px"
    class="demo-ruleForm"
  >
  <el-form-item label="Username" prop="username">
      <el-input
        v-model="ruleForm.username"
        autocomplete="off"
      />
    </el-form-item>
    <el-form-item label="Password" prop="password">
      <el-input v-model="ruleForm.password" type="password" autocomplete="off" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)"
        >Submit</el-button
      >
      <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
    </el-form-item>
  </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from 'vue'
import {Login} from '@/type/login'
import { FormInstance } from 'element-plus'
import {login} from '@/request/api'
import { useRouter } from 'vue-router'
export default defineComponent({
  setup() {
    const data = reactive(
      new Login()
    )
    const rules= {
        username: [
          { required: true, message: 'Please input username', trigger: 'blur' },
          { min: 0, max: 15, message: 'Length should be 3 to 5', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Please input password', trigger: 'blur' },
          { min: 4, max: 12, message: 'Length should be 6 to 12', trigger: 'blur' }
        ]
      }
    const router = useRouter()
    const ruleFormRef = ref<FormInstance>()
    const submitForm = (formRef: FormInstance | undefined) => {
      if (formRef) {
        formRef.validate((valid: boolean) => {
          if (valid) {
            login(data.ruleForm).then(res => {
              localStorage.setItem('token', res.data.token)
              router.push('/')
            })
          } else {
            console.log('error submit!!')
            return false
          }
        })
      }
    }
    const resetForm = (formRef: FormInstance | undefined) => {
      if (formRef) {
        formRef.resetFields()
      }
    }
    return {...toRefs(data),rules,ruleFormRef,submitForm,resetForm} 
  }
})
</script>

<style lang="scss" scoped>
.login-box {
  width: 100%;
  height: 100%;
  background: url(../assets/lin.jpg);
  background-size: 100%;
  .demo-ruleForm {
    width: 880px;
    position: absolute;
    left: calc(50% - 440px); 
    bottom:  100px;
  }
}
</style>