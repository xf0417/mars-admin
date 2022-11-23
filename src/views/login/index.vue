<template>
    <div class="login-container">
        <el-form class="login-form" ref="loginFormRef" :model="loginForm" :rules="loginRules">
            <div class="title-container">
                <h3 class="title">用户登录</h3>

            </div>
            <!-- username -->
            <el-form-item prop="username">
                <span class="svg-container">
                    <span class="svg-container">
                        <svg-icon icon="user"></svg-icon>
                    </span>
                </span>
                <el-input placeholder="username" name="username" type="text" v-model="loginForm.username"></el-input>
            </el-form-item>
            <!-- password -->
            <el-form-item prop="password">
                <span class="svg-container">
                    <span class="svg-container">
                        <svg-icon icon="password"></svg-icon>
                    </span>
                </span>
                <el-input placeholder="password" name="password" :type="passswordType" v-model="loginForm.password">
                </el-input>
                <span class="show-pwd">
                    <span class="svg-container" @click="onChangePwdType">
                        <svg-icon :icon="passwordIcon"></svg-icon>
                    </span>
                </span>
            </el-form-item>

            <!-- 登录按钮 -->
            <el-button type="primary" style="width: 100%;
            magin-bottom: 30px" :loading="false" @click="handleLogin">登录</el-button>
        </el-form>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { validatePassword } from './rules'
import { useStore } from 'vuex'
//数据源
const loginForm = ref({
    username: 'super-admin',
    password: '123456'
})
//验证规则
const loginRules = ref({
    username: {
        required: true,
        trigger: 'blur',
        message: '用户名必须填'
    },
    password: {
        required: true,
        trigger: 'blur',
        validator: validatePassword()
    }

})
//处理密码框文本
const passswordType = ref('password')
const passwordIcon = ref('eye')
const onChangePwdType = () => {
    //当passwordType值为password的时候改为text
    if (passswordType.value === 'password') {
        passswordType.value = 'text'
        passwordIcon.value = 'eye-open'
    } else {
        passswordType.value = 'password'
        passwordIcon.value = 'eye'
    }
}

//处理登录
const loading = ref(false)
const store = useStore()
const loginFormRef = ref(null)
const handleLogin = () => {
    //进行表单校验
    loginFormRef.value.validate(valid => {
        if (!valid) return
        //触发登录动作
        loading.value = true
        store
        .dispatch('user/login', loginForm.value)
        .then(() => {
                loading.value = false
                //登陆后处理
            })
            .catch(err => {
                console.log(err)
                loading.value = false
            })
    })
}

</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;

.login-container {
    min-height: 100%;
    width: 100%;
    background-color: $bg;
    overflow: hidden;

    .login-form {
        position: relative;
        width: 520px;
        padding: 160px 35px 0;
        margin: 0 auto;
        overflow: hidden;

        :deep(.el-form-item) {
            border: 1px solid rgba(255, 255, 255, .1);
            background: rgba(0, 0, 0, 0.1);
            border-radius: 5px;
            color: #454545;

        }

        :deep(.el-input) {
            display: inline-block;
            height: 47px;
            width: 85%;



            .input {
                height: 47px;
                width: 100%;
                background-color: transparent;
                border: none;
                border-radius: 0px;
                padding: 12px 5px 12px 15px;
                color: $light_gray;
                caret-color: $cursor;
            }

        }

    }


    .svg-container {
        padding: 6px 5px 6px 15px;
        color: $dark_gray;
        vertical-align: middle;
        display: inline-block;
    }

    .title-container {
        position: relative;

        .title {
            font-size: 26px;
            color: $light_gray;
            margin: 0px auto 40px auto;
            text-align: center;
            font-weight: bold;
        }
    }

    .show-pwd {
        position: absolute;
        right: 10px;
        font-size: 16px;
        color: $dark_gray;
        cursor: pointer;
        user-select: none;
    }
}
</style>