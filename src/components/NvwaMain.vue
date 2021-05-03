<template>
  <div class="content">
    <el-row>
      <el-col :span='24'>
        <el-input
          type='textarea'
          placeholder='请输入内容'
          v-model='prompt'
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
                <el-dropdown split-button type='primary' @click='handleClick' @command="handleCommand">
                  <span>{{engine}}</span>
                  <el-dropdown-menu slot='dropdown'>
                    <el-dropdown-item command="a">CPM</el-dropdown-item>
                    <el-dropdown-item command="b">RPM</el-dropdown-item>
                    <el-dropdown-item command="c">GPT-Neo</el-dropdown-item>
                    <el-dropdown-item command="d">DialoGPT</el-dropdown-item>
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
                  show-stops
                  :max="50"
                  :min="1"
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
                  :max="1024"
                  :min="1"
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
                  :max="1"
                  :min="0"
                  :step="0.001"
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
                  :max="1"
                  :min="0"
                  :step="0.001"
                  show-input>
                </el-slider>
              </div>
            </div>
            </el-card>
          </el-collapse-item>
        </el-collapse>
      </el-col>
      <el-col :span='6'>
        <el-button type='primary' icon='el-icon-search'
          v-on:click="request">请求</el-button>
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
        设定
        <el-input
          type='textarea'
          placeholder=''
          :autosize='{ minRows: 2, maxRows: 4}'
          v-model='prompt'
          maxlength='1024'
          show-word-limit
        >
        </el-input>
      </el-col>

      <el-col :span='18'>
        <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
          <li v-for="talk in talk_list" class="infinite-list-item" v-bind:key="talk.id">
              <template v-if="talk.person==='A'">
                  <el-avatar :size="20" :src="circleUrl"></el-avatar>a:{{ talk.content }}
              </template>
              <template v-else>
                  <el-avatar shape="square" :size="20" :src="squareUrl"></el-avatar>b:{{ talk.content }}
              </template>
          </li>
        </ul>
        <el-backtop target=".infinite-list"></el-backtop>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { Loading } from 'element-ui'

export default {
  name: 'Main',
  comments: {},
  data () {
    console.log('url--info', this.$route.path)
    var engine = this.$route.path.toUpperCase().replace('/', '')
    if (engine.length === 0) {
      engine = 'CPM'
    }
    return {
      circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      squareUrl: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
      count: 0,
      talk_list: [{
        'id': -2,
        'person': 'A',
        'content': 'TxT'
      },
      {
        'id': -1,
        'person': 'B',
        'content': 'TxT'
      }],
      prompt: '',
      activeNames: ['-1'],
      engine: engine,
      number: 1,
      response_l: 1,
      top_p: 0,
      temperature: 0,
      tableData: [{
        lines: '张三...'
      },
      {
        lines: '李四\n...'
      }]
    }
  },
  methods: {
    load () {
      if (this.count < 100) {
        this.count += 2
        this.talk_list.push({
          'id': this.count,
          'person': 'A',
          'content': 'TxT'
        })
        this.talk_list.push({
          'id': this.count + 1,
          'person': 'B',
          'content': 'TxT'
        })
      }
    },
    handleChange (val) {
      this.$message(val)
    },
    handleClick () {
      this.$message('click on item ' + this.engine)
    },
    handleCommand (command) {
      this.$message('click on item ' + command)
      switch (command) {
        case 'a': this.engine = 'CPM'; break
        case 'b': this.engine = 'RPM'; break
        case 'c': this.engine = 'GPT-Neo'; break
        case 'd': this.engine = 'DialoGPT'; break
      }
    },
    request () {
      let loadingInstance = Loading.service({'text': '请求中..'})
      let data = {
        'prompt': this.prompt,
        'number': this.number,
        'length': this.response_l,
        'top_p': this.top_p,
        'temperature': this.temperature
      }
      this.$message('click on item ' + JSON.stringify(data))
      this.axios.post(`/z`, data)
        .then(res => {
          console.log(
            '-----------------CPM返回数据-------------------',
            res
          )
          self.tableData = res.answer
        })
        .catch(function (error) {
          console.log(error)
          self.tableData = []
        })
        .then(function () {
          loadingInstance.close()
        })
    }
  }
}
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;

  &:last-child {
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
