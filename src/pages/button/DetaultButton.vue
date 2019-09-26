<template>
    <div>
        {{name|toString}}
      {{'2010-01-02'|toDateStr('YYYY-DD-MM')}}
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
      _this.name = res
    })
  }
}
</script>

<style scoped>

</style>
