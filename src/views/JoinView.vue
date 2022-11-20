<template>
  <div class="join_border">
    <h2>基本信息</h2>
    <a-form
      ref="formRef"
      scrollToFirstError
      :model="formState"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 8 }"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <a-form-item
        label="用户名"
        name="name"
        :rules="[{ required: true, message: '请输入用户名' }]"
      >
        <a-input v-model:value="formState.name" />
      </a-form-item>
      <a-form-item
        label="真实姓名"
        name="userName"
        :rules="[{ required: true, message: '请输入真实姓名' }]"
      >
        <a-input v-model:value="formState.userName" />
      </a-form-item>

      <a-form-item
        label="填写密码"
        name="password"
        :rules="[{ required: true, message: '密码在8到16位',min:8,max:16 }]"
      >
        <a-input-password v-model:value="formState.password" />
      </a-form-item>
<!--      ^(?![A-Za-z0-9]+$)(?![a-z0-9\\W]+$)(?![A-Za-z\\W]+$)(?![A-Z0-9\\W]+$)[a-zA-Z0-9\\W]{8,20}$-->
      <a-form-item
        label="确认密码"
        name="passwordSet"
        :rules="[{ required: true, message: '密码在8到16位',min:8,max:16 }]"
      >
        <a-input-password v-model:value="formState.passwordSet" />
      </a-form-item>


      <a-form-item label="学生类型" name="studentType">
        <a-radio-group v-model:value="formState.studentType">
          <a-radio value="1">专科生</a-radio>
          <a-radio value="2">本科生</a-radio>
          <a-radio value="3">专升本</a-radio>
        </a-radio-group>
      </a-form-item>

      <a-form-item label="性别" name="sex">
        <a-radio-group v-model:value="formState.sex">
          <a-radio value="1">男</a-radio>
          <a-radio value="0">女</a-radio>
        </a-radio-group>
      </a-form-item>

      <a-form-item name="hobby" label="兴趣爱好">
        <a-checkbox-group v-model:value="formState.hobby">
          <a-checkbox :value=item.id name="type" v-for="item in hobbyList" :key="item.id">{{item.hobby}}</a-checkbox>
        </a-checkbox-group>
      </a-form-item>

      <a-form-item name="city" label="所在城市">
        <a-cascader v-model:value="formState.city" :fieldNames="fieldNames" :options="options" placeholder="请选择所在的城市" />
      </a-form-item>

      <a-form-item name="comment" label="备注（简介）">
        <a-textarea :rows="4" v-model:value="formState.comment" placeholder="最大输入行数4行，限制字数160字" :maxlength="160" />
      </a-form-item>

      <a-form-item has-feedback label="验证码" name="verify" :rules="[{ required: true, message: '请输入验证码' }]">
        <a-input-number v-model:value="formState.verify" />
        <a-image src='https://api.sbitx.top/captcha/'></a-image>
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button type="primary" html-type="submit">加入我们</a-button>
        <a-button style="margin-left: 50px" @click="resetForm">清空输入框</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { defineComponent, onMounted, reactive, ref } from "vue";
import { GetCity, GetHobbyList, PutUserInfo } from "@/apis/userinfo";
import { message } from 'ant-design-vue';
export default defineComponent({
  name: "JoinView",
  setup() {
    const formRef = ref();
    const hobbyList = ref();
    const formState = reactive({
      name:'',
      userName: '',
      password: '',
      passwordSet:'',
      studentType:'2',
      sex:'1',
      hobby:[],
      city:'',
      comment:'',
      verify:''
    });
    const fieldNames = {
        label: 'city',
        value: 'cityID',
        children: 'children'
      }

    const options =ref();
    //  清空输入框
    const resetForm = () => {
      formRef.value.resetFields();
    };

    const onFinish = values => {
      console.log('Success:', values);

      PutUserInfo(values).then((res)=>{
        if(res.code === 200 ){
          message.success('恭喜您！成功加入了我们');
          formRef.value.resetFields();
        }
      })
    };

    const onFinishFailed = errorInfo => {
      message.error('提交失败！请稍后再试~');
    };
    onMounted(() => {
      // 获取城市列表
      GetCity().then((res) => {
        options.value = res.data;
      })
      // 获取兴趣爱好列表
      GetHobbyList().then(res=>{
        hobbyList.value = res.data
      })
    });
    return {
      formState,
      onFinish,
      onFinishFailed,
      options,
      resetForm,
      formRef,
      fieldNames,
      hobbyList
    };
  },
});




</script>

<style lang="scss" scoped>
.join_border{
  h2{
    text-align: center;
    margin: 10px;
  }
}
</style>