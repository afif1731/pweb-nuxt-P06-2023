<script setup>
import axios from 'axios'
const { renType, tpname } = defineProps(['renType', 'tpname'])

const { pending, data: tpblog } = await $fetch(`http://localhost:5000/api/toppick?where%5Bor%5D%5B0%5D%5Band%5D%5B0%5D%5Btpname%5D%5Bequals%5D=${tpname}`).then((res) => {
    return axios.get(`http://localhost:5000/api/blog?sort=createdAt&where%5Bor%5D%5B0%5D%5Band%5D%5B0%5D%5Bthistp%5D%5Bequals%5D=${res.docs[0].id}`)
})
</script>

<template>
    <div class=" container-fluid ">
        <div class=" utama row-1">
            <div class=" col border border-3 border-black border-opacity-50 shadow w-auto p-3 rounded-3 mb-5">
                <p v-if="pending"></p>
                <h3>tp/{{ tpname }}</h3>
            </div>
            
            <div class="semua-konten" v-for="knten in tpblog.docs">
                <div class=" blog-col col border border-3 border-black border-opacity-50 shadow w-auto p-3 rounded-3 my-4">
                    <div class="blog-img-outer">
                        <div class=" blog-img d-flex rounded-3">
                            <img :src="`${knten.blogimg.sizes.thumbnail.url}`">
                        </div>
                    </div>
                    <div class=" blog-isi">
                        <NuxtLink :to="`/${renType}/tp/${knten.thistp.tpname}-blog/${knten.id}`" class=" blog-jdul text-decoration-none">{{ knten.judulblog }}</NuxtLink>
                        <p class=" mt-4 ">By: {{ knten.uploader.username }}</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>
    .utama {
        margin: 5rem 15%
    }
    .blog-col {
        display: flex;
    }
    .blog-img {
        display: block;
        min-width: 200px;
        position: relative;
        width: 200px;
        height: 200px;
        overflow: hidden;
    }
    .blog-img img {
        position: absolute;
        left: 50%;
        top: 50%;
        height: 100%;
        width: auto;
        -webkit-transform: translate(-50%,-50%);
            -ms-transform: translate(-50%,-50%);
                transform: translate(-50%,-50%);
    }
    .blog-isi {
        padding: 0 2%;
        position: relative;
    }
    .blog-jdul {
        font-size: 24px;
        font-weight: 600;
        color: rgba(4, 2, 18, 100)
    }
    @Media (max-width: 991px) {
        .utama {
            margin: 5rem 7%
        }
    }
    @media (max-width: 650px) {
        .blog-col {
            display: block;
        }
        .blog-img-outer {
            display: flex;
            justify-content: center;
        }
        .blog-img {
            display: flex;
        }
        .blog-isi {
            text-align: center;
            padding: 2% 0;
            display: block;
        }
        .blog-jdul {
            font-size: 20px;
        }
    }
</style>