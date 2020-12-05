<template>
    <div>
       <button @click="show= !show">显示或隐藏</button>     
        
            <div v-show="show" >
                <ul class="animate__animated animate__fadeInDown">
                    <li>11111</li>
                    <li>22222</li>
                    <li>33333</li>
                </ul>
            </div>
    </div>
</template>
<script>
export default {
    data(){
         return{
            show:false
         }
    }
}
</script>
<style scoped>

</style>