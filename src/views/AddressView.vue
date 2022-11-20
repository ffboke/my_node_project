<template>
  <a-table :columns="columns" :data-source="data" bordered style="margin: 15px 40px">
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'id'">
        <a @click="showUserInfo(record)">
          {{ record.id }}
        </a>
        <a-modal v-model:visible="visible" title="查看详细信息" :footer="null" width="1200px">
          <a-descriptions bordered :column="{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }">
            <a-descriptions-item label="用户名">{{ oneUser.name }}</a-descriptions-item>
            <a-descriptions-item label="真实姓名">{{ oneUser.userName }}</a-descriptions-item>
            <a-descriptions-item label="学生类型">{{ oneUser.studentType == 1 ? '专科生' : oneUser.studentType == 2 ? '本科生' : '专升本' }}</a-descriptions-item>
            <a-descriptions-item label="兴趣爱好">{{ oneUser.hobby }}</a-descriptions-item>
            <a-descriptions-item label="性别">{{ oneUser.sex == 1 ? '男' : '女' }}</a-descriptions-item>
            <a-descriptions-item label="所在城市">{{ oneUser.cityID }}</a-descriptions-item>
            <a-descriptions-item label="备注(简介)">{{ oneUser.comment }}</a-descriptions-item>
          </a-descriptions>
        </a-modal>
      </template>
      <template v-else-if="column.key === 'name'">
        <span>{{ record.name }}</span>
      </template>
      <template v-else-if="column.key === 'userName'">
          {{ record.userName }}
      </template>
      <template v-else-if="column.key === 'sex'">
        <span>
          <a-tag :color="record.sex == 1 ? 'blue':'purple'">
            {{ record.sex == 1 ? '男':'女' }}
          </a-tag>
        </span>
      </template>
      <template v-else-if="column.key === 'city'">
        <span>{{ record.province.city }}{{ record.city.city }}</span>
      </template>
      <template v-else-if="column.key === 'comment'">
        <span>{{ record.comment }}</span>
      </template>
    </template>
  </a-table>
</template>
<script>
import { onMounted, ref } from "vue";
import { GetOneUser, GetUserInfo } from "@/apis/userinfo";
const columns = [
  {
    title: '序号',
    dataIndex: 'id',
    key: 'id',
  }, {
  title: '用户名',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '真实姓名',
  dataIndex: 'userName',
  key: 'userName',
},{
  title: '性别',
  key: 'sex',
  dataIndex: 'sex',
},{
  title: '所在省市',
  key: 'city',
  dataIndex: 'city',
}, {
  title: '备注（简介）',
  key: 'comment',
  dataIndex: 'comment',
}];
const visible = ref(false);
let oneUser = ref([]);
let data = ref([]);
const showUserInfo = (record) => {
  visible.value = true;
  // 发送请求获取用户信息
  GetOneUser(record.id).then((res)=>{
    oneUser.value = res.data[0];
  })
};
export default {
  name: "AddressView",
  setup: function() {
    function getUserInfo() {
      GetUserInfo().then((res) => {
        data.value = res.data;
        console.log(data.value);
      });
    }
    onMounted(() => {
      getUserInfo();
    });
    return {
      data,
      columns,
      visible,
      showUserInfo,
      oneUser
    };
  }
};


</script>