console.log('Vue ok', Vue);

const {createApp} = Vue;
const app = createApp({
    name: 'Vue Hello',
    data(){
        return {
            message: 'Hello Vue',
           
        }
    }

})
app.mount('#root')