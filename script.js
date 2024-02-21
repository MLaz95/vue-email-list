const { createApp } = Vue

  createApp({
    data() {
      return {
        // stores the generated email addresses
        emailArray: [],
      }
    },

    methods: {
        // gets an email address from the api and adds it to emailArray
        getEmail() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((mail) => {
            this.emailArray.push(mail.data.response);
            })
        }
    },

    mounted(){
        // runs getEmail 10 times
        for(i = 0; i < 10; i++){
            this.getEmail()  
        }
        console.log(this.emailArray);
    }
  }).mount('#app')