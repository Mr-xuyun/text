<template>
  <div class="home">
    <!-- <img alt="Vue logo" :src="imgsrc">
     <imgCut ref="Uppicinput" @callback="callback" :width="200" :height="200">
    
  
</imgCut> -->
  <!-- <Vue-imageCutting
        :picturePath="picturePathData" 
        @confirm="confirmMethod"
    /> -->
    <div class="po_dia" v-if="ispop" >
    <vueCropper
      ref="cropper"
      :img="option.img"
      :outputSize="option.size"
      :outputType="option.outputType"
      :info="false"
      :full="option.full"
      :canMove="option.canMove"
      :canMoveBox="option.canMoveBox"
      :original="option.original"
      :autoCrop="option.autoCrop"
      :fixed="option.fixed"
      :fixedNumber="option.fixedNumber"
      :centerBox="option.centerBox"
      :infoTrue="option.infoTrue"
      :fixedBox="option.fixedBox"
      :canScale="option.canScale"
    ></vueCropper>
    <ul class="btnn">
      <li class="bbtn">取消</li>
      <li class="bbtn">确定</li>
    </ul>
    
</div>
<button  @click="closeimg()">取消 </button>
    <button  @click="sureimg"> 确定</button>
  </div>
</template>

<script>
import {imgCut} from 'vue-imgcut'
import { crop } from "vue-cropblg";
import {VueCropper} from "vue-cropper"
import HelloWorld from '@/components/HelloWorld.vue'
import Storage from "../utils/localStorage.js"
export default {
  name: 'home',
  components: {
    HelloWorld,
    imgCut,
    crop,
    VueCropper
  },
  data(){
    return{
           picturePathData: require("../assets/logo.png"),
           option: {
      img: require("../assets/logo.png"), // 裁剪图片的地址
      info: false, // 裁剪框的大小信息
      outputSize: 1, // 裁剪生成图片的质量
      outputType: 'jpeg', // 裁剪生成图片的格式
      canScale: true, // 图片是否允许滚轮缩放
      canMove:true,
      autoCrop: true, // 是否默认生成截图框
      autoCropWidth: 300, // 默认生成截图框宽度
      autoCropHeight: 200, // 默认生成截图框高度
      fixedBox: false, // 固定截图框大小 不允许改变
      fixed: true, // 是否开启截图框宽高固定比例
      fixedNumber: [1,1], // 截图框的宽高比例
      full: true, // 是否输出原图比例的截图
      canMoveBox: true, // 截图框能否拖动
      original: true, // 上传图片按照原始比例渲染
      centerBox: false, // 截图框是否被限制在图片里面
      infoTrue: false, // true 为展示真实输出图片宽高 false 展示看到的截图框宽高
},
popupVisible:true,
ispop:false
    }
  },
  methods:{
     sureimg(){
    this.$refs.cropper.getCropBlob((data) => {
      var that = this;
      that.option.img = "";
      let files = new window.File([data], this.filename, {type: data.type});
      let param = new FormData();
      param.append('img', files);
      param.append('size', files.size);
      for (var n in that.params) {
        param.append(n, that.params[n]);
      }
      that.personalData(param) //上传服务器
    })
  },
  //选择图片
onUpload(e) {
    this.option.img = "";
    var that = this;
    var file = e.target.files[0];
    this.filename = e.target.files[0].name;
    var reader = new FileReader();
    reader.onload =(e)=>{
      if (typeof e.target.result === 'object') {
        this.option.img = window.URL.createObjectURL(new Blob([e.target.result]));
      }else {
        this.option.img = e.target.result;
      }
    };
    reader.readAsDataURL(file);
    this.popupVisible = false;
    this.ispop = true;
  },
  
  },
  
  mounted(){
      

  }
}
</script>
