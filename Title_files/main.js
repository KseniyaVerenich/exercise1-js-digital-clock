
var app = new Vue({
  el: '#app',
  data: {
   
    time: '',
    interval: null,



  },
  created(){
    this.clock();
  },

  methods: {

    clock: function () {
      this.interval = setInterval(() => {
        var date = new Date();
       this.time =  date.toLocaleTimeString();
      }, 1000);

    },
    beforeDestroy() {
      clearInterval(this.interval);
    },
  }
});


// add function that sets max-width from 0 to mab       x-width
// have clock margin ratio adjust to max-width