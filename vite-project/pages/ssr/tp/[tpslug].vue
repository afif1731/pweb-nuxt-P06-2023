<template>
  <div>
    <navbar :renType="'ssr'" />
  </div>
  <div>
    <landingtp :renType="'ssr'" :tpname="tpname" />
  </div>
</template>

<script> 
export default {
data() {
  return {
    tpname: this.$route.params.tpslug
  }
}
}
</script>