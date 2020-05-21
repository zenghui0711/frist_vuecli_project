<template>
    <div>
        <div>用户信息</div>
        <div>用户信息 {{query.userid}}</div>
    </div>
</template>
<script>
export default {
    computed:{
           query(){
               console.log(111,this.$router)
               console.log(222,this.$route)
               return this.$route.query
           }
    },
    methods:{
        mm(){
            console.log('111',this.$router)
        }
    }
}
</script>