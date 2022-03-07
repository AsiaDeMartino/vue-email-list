const app = new Vue({
    el: "#container",
    data: {
        mail: [],
    },
  created() {
    for (let i = 0; i < 10; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then( (response) => {
            
            (this.mail).push(response.data.response);
            console.log(this.mail);
            console.log(response.data.response);

        });
    }
}

})