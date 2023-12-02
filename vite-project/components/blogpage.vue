<script setup>
const { renType, id } = defineProps(['renType', 'id'])

const { pending, data: blogknten } = await useFetch(`http://localhost:5000/api/blog/${id}`)

</script>

<template>
    <div class=" container-fluid">
        <div class="utama row-1">
            <div class=" col border border-3 border-black border-opacity-50 shadow w-auto p-4 rounded-3 mb-5">
                <p v-if="pending">Loading for content...</p>
                <div>
                    <h3 class=" text-center fw-bold px-5 py-3 ">{{ blogknten.judulblog }}</h3>
                </div>
                <div class=" d-flex justify-content-center mb-5">
                    <img :src="blogknten.blogimg.sizes.konten.url" class="bloggmbar">
                </div>
                <div v-for="kata in blogknten.kontenblog">
                    <br v-if="kata.children[0].text == ''" />
                    <span v-else class=" fs-5 fw-normal ">{{ kata.children[0].text }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .utama {
        margin: 1rem 15%
    }
    .bloggmbar {
        width: 300px;
    }

</style>