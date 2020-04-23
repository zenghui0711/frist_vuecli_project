<template>
    <div>
        <div>用户信息</div>
        <div>用户信息222 {{params.userId}}</div>
    </div>
</template>
<script>
export default {
    computed:{
           params(){
               console.log(111,this.$router)
               console.log(222,this.$route)
               return this.$route.params
           }
    },
    methods:{
        mm(){
            console.log('111',this.$router)
        }
    }
}
</script>