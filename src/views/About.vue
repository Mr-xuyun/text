<template>
  <div >
    <vue-sideslip @click="call" v-for="(item, index) in arr" :operationList="item.operationList" :name="index" :key="index">
           <div class="diffcultList">
          <div
            :style="{
              borderColor: checkedAll == true ? '#1b8fff80' : '#f2f2f2',
            }"
          >
            <div>
              <div>
                <van-tag color="#C8E4FF" text-color="#1B8FFF" round size="large"
                  >数学</van-tag
                >
              </div>
              <div class="title" style="width: 57%">
                方根与根式及根式的化简运算啊实打实大大声大声大声大声道
              </div>
              <!--  -->
            </div>
            <div>
              <div class="grayFont" style="font-size: 12px">
                2020-09-05 14:24
              </div>
              <div></div>
            </div>
          </div>
        </div>
</vue-sideslip>
  </div>
</template>

<script>
  import { VuePictureCut, createUtils } from 'vue-picture-cut';
  export default {
    // ...
    components: {
      VuePictureCut
    },
   //  这是demo   可自己随意定制自己想要的样式  
  data () {
    return {
      diffcultList:[{},{},{}],
        arr: [
          {
            title: '标题1',
            operationList: [ // 侧滑菜单列表  
              {
                name: '删除', // 
                style: 'background: #f44336;color: #ffffff;line-height: 100px;width: 50px;text-align: center;', // 自定义样式
                click: 'del', // 点击事件回调
                disabledStyle: 'opacity:0.5;', // 按钮禁用样式
                html: (item) => { // 这里可自由添加侧滑结构内容
                  return `<div>${item.name}</div>`
                },
              },
            ]
          },{
            title: '标题2',
            operationList: [
              {
                name: '删除',
                style: 'background: #f44336;color: #ffffff;line-height: 100px;width: 50px;text-align: center;',
                click: 'del',
                html: (item) => {
                  return `<div>${item.name}</div>`
                },
              }
            ]
          },{
            title: '标题3',
            operationList: [
              {
                name: '删除',
                style: 'background: #f44336;color: #ffffff;line-height: 100px;width: 50px;text-align: center;',
                click: 'del',
                html: (item) => {
                  return `<div>${item.name}</div>`
                },
              },{
                name: '编辑',
                style: 'background: #42b983;color: #ffffff;line-height: 100px;width: 50px;text-align: center;',
                click: 'set',
                html: (item) => {
                  return `<div>${item.name}</div>`
                }
              },{
                name: '详情',
                style: 'background: #42b943;color: #ffffff;line-height: 100px;width: 50px;text-align: center;',
                click: 'detail',
                disabledStyle: 'opacity:0.5;',
                html: (item) => {
                  return `<div>${item.name}</div>`
                }
              }
            ]
          }
        ]
    }
  },
methods: {
    call (val, index) {
      console.log(val, index);
    },
  }

  
    // ...
  }
</script>

<style scoped>
/* 底部 */
.foot {
  display: flex;
  justify-content: space-around;
  text-align: center;
}
.foot > div:nth-child(2) {
  line-height: 50px;
}
.diffcultList {
  margin: 10px 10px;
}
.diffcultList .title {
  font-size: 14px;
  font-weight: bold;
  margin-left: 8px;
  color: #323233c9;
  width: 70%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.diffcultList > div {
  box-shadow: 1px 1px 6px #EBEBEB;
  border: 1.4px solid rgba(27, 143, 255, 0.5);
  border-radius: 10px;
  position: relative;
}
.diffcultList > div > div:nth-child(1) {
  display: flex;
  padding: 8px 5px;
}
.diffcultList > div > div:nth-child(2) {
  display: flex;
  justify-content: space-between;
  margin: 5px 6px;
}
.checkbox {
  position: absolute;
  top: -6px;
  left: -7px;
}
::v-deep .van-checkbox__label {
  font-size: 14px;
  margin-top: 3px;
  color: #999;
}
::v-deep .van-button {
  height: 34px;
  width: 120px;
}
</style>
  
