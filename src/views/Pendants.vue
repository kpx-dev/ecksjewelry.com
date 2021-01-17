<template>
    <div>
        <div class="position-relative">
            <section class="section-shaped my-0">
                <div class="shape shape-style-1 shape-default shape-skew">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="container shape-container d-flex">
                    <div class="col px-0">
                        <div class="row">
                            <div class="col-lg-12">
                                <h1 class="display-3 text-white">Pendants</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <section class="section section-lg pt-lg-0 mt--200">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12">

                    <ul class="list-unstyled mt-5" id="gallery">
                        <li v-for="item in pendants" :key="item.src">
                            <img :src="item.src" class="img-fluid rounded">
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script>
import {pendants} from './gallery';

export default {
  components: {
  },

  data () {
    return { pendants }
  },
};
</script>
