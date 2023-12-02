<template>
    <div>
        <navbar :renType="'csr'" />
    </div>
    <div>
        <blogpage :renType="'csr'" :id="blogid" />
    </div>
</template>

<script> 
export default {
  data() {
	  return {
	  	blogid: this.$route.params.id
    }
  }
}
</script>