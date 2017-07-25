<template>
  <div>
    <div class="web-wrap">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-row class="web-section" :gutter="20">
            <el-col :span="12">
              <h3>Web Design</h3>
              <p class="web-design">Risus id mediou soimto usce pelle nitesqu it nunc sed egesta ante gravids peses </p>
            </el-col>
            <el-col :span="12">
              <p class="web-article">Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. </p>
              <el-button class="btn-more" type="primary">MORE...</el-button>
            </el-col>
          </el-row>
          <el-row class="web-section clearborder" :gutter="20">
            <el-col :span="12">
              <h3>Web Design</h3>
              <p class="web-design">Risus id mediou soimto usce pelle nitesqu it nunc sed egesta ante gravids peses </p>
            </el-col>
            <el-col :span="12">
              <p class="web-article">Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. </p>
              <el-button class="btn-more" type="primary">MORE...</el-button>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="12">
          <el-collapse v-model="activeName" accordion>
            <el-collapse-item title="一致性 Consistency" name="1">
            <span class="inline-block"><img src="../../images/11.jpg" alt=""></span><span><p class="web-article">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates nihil impedit eligendi magni sequi porro fuga repellendus dolorem! Odio, ex dicta consequatur, accusamus perferendis ipsam! Facere officia incidunt at assumenda!</p></span>
            </el-collapse-item>
              <el-collapse-item title="反馈 Feedback" name="2">
           <span class="inline-block"><img src="../../images/11.jpg" alt=""></span><span><p class="web-article">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates nihil impedit eligendi magni sequi porro fuga repellendus dolorem! Odio, ex dicta consequatur, accusamus perferendis ipsam! Facere officia incidunt at assumenda!</p></span>
            </el-collapse-item>
          <el-collapse-item title="效率 Efficiency" name="3">
           <span class="inline-block"><img src="../../images/11.jpg" alt=""></span><span><p class="web-article">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates nihil impedit eligendi magni sequi porro fuga repellendus dolorem! Odio, ex dicta consequatur, accusamus perferendis ipsam! Facere officia incidunt at assumenda!</p></span>
          </el-collapse-item>
          <el-collapse-item title="可控 Controllability" name="4">
          <span class="inline-block"><img src="../../images/11.jpg" alt=""></span><span><p class="web-article">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates nihil impedit eligendi magni sequi porro fuga repellendus dolorem! Odio, ex dicta consequatur, accusamus perferendis ipsam! Facere officia incidunt at assumenda!</p></span>
          </el-collapse-item>
          </el-collapse>
        </el-col> 
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>