<template>
    <div>
        {{name}}
    </div>
</template>

<script>
  import axios from '@/utils/axiosUtils'
export default {
  name: 'DetaultButton',
  data () {
    return {
       name:''
    }
  },
  mounted () {
    let _this = this ;
    // axios.get('/users/jsonp').then(res=>{
    //   _this.name = res.name
    // })
    axios.jsonp(`/users/jsonp?callback=callBack`).then(res=>{
      _this.name = res.name
      console.dir(res)
    })
  }
}
</script>

<style scoped>

</style>
