// components/countDown/countDown.js
let seconds = 60;


Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: ''

    },
    cType: {
      type: String,
      value: 'phone'
    },
    time: {
      type: String,
      value: ''
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    cColor: "#999",
    count:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    countDown() {
      if (seconds == 60) {
        this.interval = setInterval(() => {
          this.timer();
        }, 1000)
      }

    },
    timer() {
      if (seconds > 0) {
        seconds = seconds - 1;
        this.setData({
          cColor: "#ff5e00",
          title: seconds + ""
        })
      } else {
        seconds = 60;
        this.setData({
          cColor: "#999",
          title: "获取验证码"
        })
        clearInterval(this.interval);
      }
    },
    timeDown() {
      this.interval = setInterval(() => {
        this.setTimer();
      }, 1000)
    },
    dateFormat() {
      let time = this.data.time;
      let minute = Math.floor(time / 60);
      let hour = Math.floor(time / 3600);
      let second = time - 3600 * hour - 60 * minute;
      return hour + ":" + minute + ":" + second;
    },
    setTimer(){
      let dateFormat = this.dateFormat();
      if(dateFormat == "0:0:0"){
        clearInterval(this.interval);
      }else {
        this.setData({
          count: dateFormat,
          time:this.data.time-1
        })
      }
    
    }
  }
})
