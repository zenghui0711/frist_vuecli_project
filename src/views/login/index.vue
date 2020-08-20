<template>
  <div class="login-container" :style="{ height: wHeight }">
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      auto-complete="on"
      label-position="left"
    >
      <div class="loginTitle-container">
        <h3>上海三高</h3>
      </div>

      <div class="form-container">
        <el-form-item prop="username">
          <i class="el-icon-user-solid"></i>
          <el-input
            ref="username"
            v-model="loginForm.username"
            placeholder="请输入用户名"
            name="username"
            type="text"
            tabindex="1"
            auto-complete="on"
          />
        </el-form-item>

        <el-form-item prop="password">
          <i class="el-icon-lock"></i>
          <el-input
            ref="password"
            v-model="loginForm.password"
            placeholder="请输入密码"
            name="password"
            :type="passwordType"
            tabindex="2"
            auto-complete="on"
            @keyup.enter.native="handleLogin"
          />
          <i
            :class="passwordType==='password' ?  'sh3h-icon-close__view':'el-icon-view' "
            class="isShowPass"
            @click="isShowPass()"
          ></i>
        </el-form-item>

        <el-form-item prop="verification" style="display:none"></el-form-item>
      </div>
      <div class="button-container">
        <el-form-item>
          <el-button type="primary" @click="resetForm('ruleForm')">重置</el-button>
          <el-button :loading="loading" type="primary" @click.native.prevent="handleLogin">登入</el-button>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script>
import { reactive, ref, watch } from "@vue/composition-api";
import "../../assets/icon/iconfont.css";

export default {
  setup(props, { refs, root }) {
    const loginForm = reactive({
      username: "admin",
      password: "123456"
    });

    // 自定义账号密码校验规则
    var validatename = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("输入正确的用户名"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error("密码长度不能少于6位"));
      } else if (value.length > 12) {
        callback(new Error("密码长度不能多于12位"));
      } else {
        callback();
      }
    };
    const loginRules = reactive({
      username: [{ validator: validatename, trigger: "blur" }],
      password: [{ validator: validatePass, trigger: "blur" }]
    });

    //控制是否显示密码
    const passwordType = ref("password");
    const isShowPass = () => {
      if (passwordType.value === "password") {
        passwordType.value = "";
      } else {
        passwordType.value = "password";
      }
       refs.password.focus();
    };

    //执行登陆
    const wHeight = document.documentElement.clientHeight + "px";
    const loading = ref(false);
    const redirect = ref(undefined);
    const handleLogin = () => {
      console.log("refs", refs);
      refs.loginForm.validate(valid => {
        console.log("valid", valid);
        if (valid) {
          console.log("root", root);
          loading.value = true;
          // root.$store.dispatch("user/LoginByUsername", loginForm);
          console.log(0);
          root.$store
            .dispatch("user/LoginByUserName", loginForm)
            .then(res => {
              console.log("then", res);
              console.log('redirect.value ',redirect.value );
              console.log('root ',root.$router );

              //root.$router.push({ path:(route.query && route.query.redirect)||"/"})
              root.$router.push({ path:(redirect.value)||"/"})
              loading.value=false;
            }).catch(()=>{
              loading.value=false;
            });

          console.log("stroe2222222", root.$store.state.count);
        } else {
          return false
        }
      });
    };

    watch(
      () => root.$route,
      route => {
        console.log('watch.route',route);
        redirect.value = route.query && route.query.redirect;
      }
    );
    return {
      wHeight,
      passwordType,
      loading,
      loginForm,
      loginRules,
      isShowPass,
      redirect,
      handleLogin
    };
  }
};
</script>
<style>
.login-container {
  min-height: 100%;
  width: 100%;
  background-color: #2d3a4b;
  overflow: hidden;
}
.loginTitle-container {
  text-align: center;
  font-weight: bold;
  color: #eee;
}
.loginTitle-container .el-form-item__content {
  font-size: 26px;
}
.login-form {
  margin-top: 100px;
}
.login-form .el-form-item {
  width: 30%;
  /* width: 300px; */
  margin: 0 auto 22px;
}
.login-form .el-input input {
  background: transparent;
  border: 0px;
  color: #fff;
  padding: 0 20px 0 40px;
}
.form-container .el-form-item {
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  color: #454545;
}

.form-container .el-form-item__content i {
  position: absolute;
  top: 11px;
  left: 11px;
  font-size: 18px;
  color: #889aa4;
}
.form-container .el-form-item__content .isShowPass {
  right: 10px !important;
  left: initial;
  cursor: pointer;
}
.button-container .el-form-item__content {
  display: flex;
  justify-content: space-between;
}

.button-container button {
  width: 50%;
}
</style>