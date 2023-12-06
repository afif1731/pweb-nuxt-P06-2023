<template>
    <div class="container text-center">
        <h2 class="my-5">Discover All Available Top-picks!</h2>
        <div class="row align-items-center nihtp">
            <div class="col my-3 d-flex " v-for="tp in toppik.docs">
                <div class="card" style="width: 18rem;">
                    <img :src="tp.tpimg.sizes.thumbnail.url" class="card-img-top" :alt="tp.tpimg.sizes.thumbnail.filename">
                    <div class="card-body">
                        <h5 class="card-title">tp/{{ tp.tpname }}</h5>
                        <p class="card-text">{{ tp.tpdesc }}</p>
                        <NuxtLink :to="`/${renType}/tp/${tp.tpname}`" class="btn btn-primary">visit tp/{{ tp.tpname }}</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios'
const { renType } = defineProps(['renType'])
const { data:toppik } = await useAsyncData(async() => {
    const res= await axios.get("http://127.0.0.1:5000/api/toppick?sort=tpslug&invoke=c6dad947-472a-44a6-a408-73f2eba545d6")
    return res.data
})
</script>

<style>
    .nihtp {
        margin: 3rem 5%;
    }
    @Media (max-width: 991px) {
        .nihtp {
            margin: 1rem 0
        }
    }
</style>