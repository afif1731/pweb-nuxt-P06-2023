<template>
    <div>
      <navbar :renType="'csr'" />
    </div>
    <h1>Topik ke- {{ tpslug }}</h1>
</template>

<script> 
export default {
  data() {
	  return {
	  	tpslug: this.$route.params.tpslug
    }
  }
}
</script>