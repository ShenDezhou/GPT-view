<template>
  <div>
    <el-row>
      <el-col :span='24'>
        <el-input
          type='textarea'
          placeholder='请输入内容'
          v-model='textarea'
          maxlength='1024'
          show-word-limit
        >
        </el-input>

      </el-col>
    </el-row>
    <el-row :gutter='20'>
      <el-col :span='18'>
        <el-collapse v-model='activeNames' @change='handleChange'>
          <el-collapse-item title='请求参数' name='1'>
            <el-card :body-style='{ padding: "0px" }' :span='4'>
            <div style='padding: 14px;'>
              <span>GPT引擎</span>
              <div class='bottom clearfix'>
                <el-dropdown split-button type='primary' @click='handleClick'>
                  GPT引擎
                  <el-dropdown-menu slot='dropdown'>
                    <el-dropdown-item>黄金糕</el-dropdown-item>
                    <el-dropdown-item>狮子头</el-dropdown-item>
                    <el-dropdown-item>螺蛳粉</el-dropdown-item>
                    <el-dropdown-item>双皮奶</el-dropdown-item>
                    <el-dropdown-item>蚵仔煎</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
            </div>
            </el-card>
            <el-card :body-style='{ padding: "0px" }' :span='4'>
            <div style='padding: 14px;'>
              <span>Number</span>
              <div class='bottom clearfix'>
                <el-slider
                  v-model='number'
                  show-input>
                </el-slider>
              </div>
            </div>
            </el-card>
            <el-card :body-style='{ padding: "0px" }' :span='4'>
            <div style='padding: 14px;'>
              <span>Response length</span>
              <div class='bottom clearfix'>
                <el-slider
                  v-model='response_l'
                  show-input>
                </el-slider>
              </div>
            </div>
            </el-card>
            <el-card :body-style='{ padding: "0px" }' :span='4'>
            <div style='padding: 14px;'>
              <span>Top P</span>
              <div class='bottom clearfix'>
                <el-slider
                  v-model='top_p'
                  show-input>
                </el-slider>
              </div>
            </div>
            </el-card>
            <el-card :body-style='{ padding: "0px" }' :span='4'>
            <div style='padding: 14px;'>
              <span>Temperature</span>
              <div class='bottom clearfix'>
                <el-slider
                  v-model='temperature'
                  show-input>
                </el-slider>
              </div>
            </div>
            </el-card>
          </el-collapse-item>
        </el-collapse>
      </el-col>
      <el-col :span='6'>
        <el-button type='primary' icon='el-icon-search'>请求</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span='8'>
        <div class='grid-content bg-purple'></div>
      </el-col>
      <el-col :span='8'>
        <div class='grid-content bg-purple-light'></div>
      </el-col>
      <el-col :span='8'>
        <div class='grid-content bg-purple'></div>
      </el-col>
    </el-row>
    <el-row :gutter='20'>
      <el-col :span='6'>
        GPT输入
        <el-input
          type='textarea'
          placeholder=''
          :autosize='{ minRows: 2, maxRows: 4}'
          v-model='textarea'
          maxlength='1024'
          show-word-limit
        >
        </el-input>
      </el-col>

      <el-col :span='18'>
        <el-table
          :data='tableData'
          style='width: 100%'
          max-height='250'>
          <el-table-column
            prop='lines'
            label='生成'>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'Main',
  comments: {},
  data() {
    return {
      text: '',
      textarea: '',
      activeNames: ['1'],
      number: 1,
      response_l: 1,
      top_p: 0,
      temperature: 0,
      tableData: [{
        lines: '张三...'
      },
        {
          lines: '李四\n...'
        }
      ]
    }
  },
  methods: {
    handleChange (val) {
      console.log(val)
    },
    handleClick () {
      alert('button click')
    }
  }
}
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;

&
:last-child {
  margin-bottom: 0;
}

}

.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
