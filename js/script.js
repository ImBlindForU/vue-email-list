const Http = new XMLHttpRequest();
const url='https://flynn.boolean.careers/exercises/api/random/mail';
Http.open("GET", url);
Http.send();




const { createApp } = Vue;

createApp({
  data() {
    return {
        emailsArray: [],
    };
  },
  created() {
    this.getEmail();
  },
  methods: {
    getEmail() {
      
      for(let i = 0; i < 10; i++){
        axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((resp) => {
            
            console.log(resp.data.response)

            this.emailsArray.push(resp.data.response)
            
        })
      }
        
    },
  },
}).mount("#app");