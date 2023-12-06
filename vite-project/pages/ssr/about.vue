<template>
    <navbar :renType="'ssr'" />
    <div class="container text-center">
        <h2 class="my-3">Meet the Creator</h2>
        <div class="row align-items-center nihtp">
            <div class="col my-2 d-flex ">
                <div class="card" style="width: 18rem;">
                    <img :src="'/media/apep.jpg'" class="card-img-top" alt="apep">
                    <div class="card-body">
                        <h5 class="card-title">Muhammad Afif</h5>
                        <p class="card-text">NRP: 5027221032</p>
                    </div>
                </div>
            </div>
            <div class="col my-2 d-flex ">
                <div class="card" style="width: 18rem;">
                    <img :src="'/media/subkh.jpg'" class="card-img-top" alt="subkhan">
                    <div class="card-body">
                        <h5 class="card-title">Subkhan Mas Udi</h5>
                        <p class="card-text">NRP: 5027221044</p>
                    </div>
                </div>
            </div>
            <div class="col my-2 d-flex ">
                <div class="card" style="width: 18rem;">
                    <img :src="'/media/epul.jpg'" class="card-img-top" alt="epul">
                    <div class="card-body">
                        <h5 class="card-title">Fazrul Ahmad Fadhillah</h5>
                        <p class="card-text">NRP: 5027221025</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

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