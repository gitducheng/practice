<template>
  <div>
    <div class="web-wrap">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-row class="web-section" v-for="item in lists_1" :gutter="20" key="">
            <el-col :span="12">
              <h3>{{item.h3}}</h3>
              <p class="web-design">{{item.design}}</p>
            </el-col>
            <el-col :span="12">
              <p class="web-article">{{item.article}} </p>
              <el-button class="btn-more" type="primary">MORE...</el-button>
            </el-col>
          </el-row>
        </el-col>

        <el-col :span="12">
          <el-collapse accordion>
          <el-collapse-item v-for="list in lists_2" :title="list.title" :name="list.num" key="">
          <span class="inline-block"><img src="../../images/11.jpg" alt=""></span><span><p class="web-article">{{list.article}}</p></span>
          </el-collapse-item>
          </el-collapse>
        </el-col> 
      </el-row>
    </div>
  </div>
</template>

<script>
var lists_1 = [{
  h3: 'Web Design1',
  design: 'Risus id mediou soimto usce pelle nitesqu it nunc sed egesta ante gravids peses',
  article: 'Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl.'
},{
  h3: 'Web Design2',
  design: 'Risus id mediou soimto usce pelle nitesqu it nunc sed egesta ante gravids peses',
  article: 'Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl.'
}];
var lists_2 = [{
  title: '一致性 Consistency',
  num: '1',
  article: 'Lorem1 ipsum dolor sit amet, consectetur adipisicing elit. Voluptates nihil impedit eligendi magni sequi porro fuga repellendus dolorem! Odio, ex dicta consequatur, accusamus perferendis ipsam! Facere officia incidunt at assumenda!'
},{
  title: '可控 Consistency',
  num: '2',
  article: 'Lorem2 ipsum dolor sit amet, consectetur adipisicing elit. Voluptates nihil impedit eligendi magni sequi porro fuga repellendus dolorem! Odio, ex dicta consequatur, accusamus perferendis ipsam! Facere officia incidunt at assumenda!'
},{
  title: '效率 Efficiency',
  num: '3',
  article: 'Lorem3 ipsum dolor sit amet, consectetur adipisicing elit. Voluptates nihil impedit eligendi magni sequi porro fuga repellendus dolorem! Odio, ex dicta consequatur, accusamus perferendis ipsam! Facere officia incidunt at assumenda!'
},{
  title: '反馈 Feedback',
  num: '4',
  article: 'Lorem4 ipsum dolor sit amet, consectetur adipisicing elit. Voluptates nihil impedit eligendi magni sequi porro fuga repellendus dolorem! Odio, ex dicta consequatur, accusamus perferendis ipsam! Facere officia incidunt at assumenda!'
}]
  export default {
      data() {
        return {
          lists_1: lists_1,
          lists_2: lists_2
        }
      }
  }
</script>