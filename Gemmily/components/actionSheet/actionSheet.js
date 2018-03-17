// components/actionSheet/actionsheet.js
module.exports = {
  itemClick({currentTarget = {}}){
    const dataset = currentTarget.dataset || {};
    const {index} = dataset;
    if(itemClick){
      this.itemClick({index});
    }

  }
}

// Component({
//   /**
//    * 组件的属性列表
//    */
//   properties: {

//   },

//   /**
//    * 组件的初始数据
//    */
//   data: {
//     // actions: ["选项1", "选项2", "选项3"]
//   },

//   /**
//    * 组件的方法列表
//    */
//   methods: {
   
//   }
// })
