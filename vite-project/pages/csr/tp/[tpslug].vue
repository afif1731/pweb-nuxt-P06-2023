<template>
    <div>
      <navbar :renType="'csr'" />
    </div>
    <div>
      <landingtp :renType="'csr'" :tpname="tpname" />
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