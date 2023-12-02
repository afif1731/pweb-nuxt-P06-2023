<template>
    <div>
        <navbar :renType="'ssr'" />
    </div>
    <div>
        <blogpage :renType="'ssr'" :id="blogid" />
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