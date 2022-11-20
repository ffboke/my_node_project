<template>
  <div style="width: 80%;margin: 0 auto;">
    <h3 style="margin-top: 10px">兴趣爱好列表</h3>
    <div>
      <a-button style="margin-right: 5px" v-for="item in hobbyList" :key="item.id" @click="activeHobby(item.id)">{{item.hobby}}</a-button>
    </div>

    <div style="margin-top: 20px">
      <a-table :columns="columns" :data-source="data">
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'name'">
            <span>
              {{ record.name }}
            </span>
          </template>
          <template v-else-if="column.key === 'userName'">
            <span>
              {{ record.userName }}
            </span>
          </template>
          <template v-else-if="column.key === 'sex'">
            <span>
              <a-tag :color="record.sex == 1 ? 'geekblue' : 'purple'">
                {{ record.sex == 1 ? '男' : '女' }}
              </a-tag>
            </span>
          </template>
          <template v-else-if="column.key === 'studentType'">
            <span>
              {{ record.studentType == 1 ? '专科生' : record.studentType == 2 ? '本科生' : '专升本' }}
            </span>
          </template>
          <template v-else-if="column.key === 'comment'">
            <span>
              {{ record.comment }}
            </span>
          </template>
        </template>
      </a-table>
    </div>
  </div>
</template>
<script scoped>
import { defineComponent, onMounted, ref } from "vue";
import { GetHobbyList, GetHobbyUser } from "@/apis/userinfo";
const columns = [{
  title: '用户名',
  dataIndex: 'name',
  key: 'name',
},{
  title: '真实姓名',
  dataIndex: 'userName',
  key: 'userName',
}, {
  title: '性别',
  key: 'sex',
  dataIndex: 'sex',
},{
  title: '用户类型',
  key: 'studentType',
  dataIndex: 'studentType',
},{
  title: '备注（简介）',
  key: 'comment',
  dataIndex: 'comment',
}];
let data = ref([]);
export default defineComponent({
  setup() {
    const hobbyList = ref(1);
    // 获取爱好列表
    onMounted(()=>{
      GetHobbyList().then(res=>{
        hobbyList.value = res.data
      })
    })

    // 根据分类
    const activeHobby = e =>{
      GetHobbyUser(e).then(res => {
        data.value = res.data
      })
    }
    return {
      hobbyList,
      data,
      columns,
      activeHobby
    };
  },
});
</script>