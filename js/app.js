const  createApp = Vue.createApp;
createApp({
    data() {
      return {
        title: "Vue Hello",
        img : "img/pngwing.com.png",
        text : "ciao ciao"
      }
    }
  }).mount('#app')