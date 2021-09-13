const app = new Vue({
    el:'.root',
    data:{
        liked:false,
    },
    methods:{
        onClickButton(){
            this.liked = true;
        },
    },
});