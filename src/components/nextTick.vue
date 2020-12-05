<template>
     <div>
        <h1>使用nextTick来获取最新的Dom</h1>
        <ul ref="list">
            <li v-for="(item,i)  of listData" :key="i">
                {{item}}
            </li>

        </ul>
        <button @click="addItem">按钮</button>
     </div>
</template>
<script>
import Storage from "../utils/localStorage.js"
export default {
    data(){
         return {
             listData: ["列表项1" ,"列表项2" ,"列表3"]
         }
    },
    methods:{
         addItem(){
              this.listData.push(Date.now());
              this.listData.push(Date.now());
              this.listData.push(Date.now());
              const listRef= this.$refs.list;
            //vue 的dom 的渲染 是异步渲染 ,只会调用一次 nextTick的实例方法
             this.$nextTick(()=>{
                    console.log(listRef);
                 console.log(listRef.childNodes.length);
             })
            
         }
    },
    mounted(){
        console.log(1111);
       
        
    }
}
</script>
<style scoped>


</style>