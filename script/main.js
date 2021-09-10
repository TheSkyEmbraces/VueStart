const app = new Vue({
    el:'#app',
    data:{
        message:'처음 시작하는 vue'
    }
})


const app2 = new Vue({
    el:'#app2',
    data:{
        message: '이 페이지는' + new Date() + ' 에 로드 되었습니다'
    }
})

const app3 = new Vue({
    el:'#app3',
    data:{
        seen:true
    }
})

const classApp = new Vue({
    el:'.app',
    data:{
        todos:[
            {text:'javascript 배우기'},
            {text:'vue 배우기'},
            {text:'뭘 만들어 볼까요'}
        ]
    }
})

const classApp1 = new Vue({
    el:'.app1',
    data:{
        message:"메시지가 뒤집힌다니깐?!"
    },
    methods:{
        reverseMessage:function(){
            this.message = this.message.split('').reverse().join('');
        }
    }
})

const clasApp2 = new Vue({
    el:'.app2',
    data:{
        message:"텍스트가 바뀐다니까?!"
    }
})


Vue.component('todo-item', {
    template:'<li> 할일 01 </li>'
})

var classApp3 = new Vue({
    el:'.app4'
})