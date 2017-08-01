<template>
  <div>
    <div class="about-wrap">
      <div class="about-us">
        <h2>ABOUT US</h2>
        <p>Phasellus ultrices nulla quis</p>
      </div>
      <div class="about-item">
        <el-row :gutter="20">
          <el-col :span="8" v-for="item in lists">
            <div class="item">
              <div class="item-top">
                <h3>{{item.h3}}</h3>
                <h4>{{item.h4}}</h4>
              </div>
              <p>{{item.msg}}</p>
              <el-button class="btn-more" type="primary">MORE...</el-button>
            </div>
          </el-col>  
         <!--  <el-col :span="8">
            <div class="item">
              <div class="item-top">
                <h3>Minimal Design</h3>
                <h4>Risus id mediou soim</h4>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, ducimus dolore, ratione numquam facilis similique. Incidunt rerum accusantium culpa voluptatem illo recusandae officia temporibus obcaecati quam, molestiae nisi. Ab, corporis.</p>
              <el-button class="btn-more" type="primary">MORE...</el-button>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="item">
              <div class="item-top">
                <h3>Minimal Design</h3>
                <h4>Risus id mediou soim</h4>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, ducimus dolore, ratione numquam facilis similique. Incidunt rerum accusantium culpa voluptatem illo recusandae officia temporibus obcaecati quam, molestiae nisi. Ab, corporis.</p>
              <el-button class="btn-more" type="primary">MORE...</el-button>
            </div>
          </el-col> -->
        </el-row>  
      </div>
    </div>
  </div>
</template>

<script>
  var lists = [{
    h3: 'Minimal Design1',
    h4: 'Risus id mediou soim',
    msg: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, ducimus dolore, ratione numquam facilis similique. Incidunt rerum accusantium culpa voluptatem illo recusandae officia temporibus obcaecati quam, molestiae nisi. Ab, corporis.'
  },{
    h3: 'Minimal Design2',
    h4: 'Risus id mediou soim',
    msg: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, ducimus dolore, ratione numquam facilis similique. Incidunt rerum accusantium culpa voluptatem illo recusandae officia temporibus obcaecati quam, molestiae nisi. Ab, corporis.'
  },{
    h3: 'Minimal Design3',
    h4: 'Risus id mediou soim',
    msg: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, ducimus dolore, ratione numquam facilis similique. Incidunt rerum accusantium culpa voluptatem illo recusandae officia temporibus obcaecati quam, molestiae nisi. Ab, corporis.'
  }]
  export default {
    data(){
      return {
        lists: lists
      }
    }
  }
</script>