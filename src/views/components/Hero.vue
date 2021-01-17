<template>
    <section class="section-hero section-shaped my-0">
        <div class="shape shape-style-1 shape-primary">
            <span class="span-150"></span>
            <span class="span-50"></span>
            <span class="span-50"></span>
            <span class="span-75"></span>
            <span class="span-100"></span>
            <span class="span-75"></span>
            <span class="span-50"></span>
            <span class="span-100"></span>
            <span class="span-50"></span>
            <span class="span-100"></span>
        </div>

        <div class="container shape-container d-flex align-items-center">
        <div class="col-lg-12 mb-lg-auto">
            <div class="rounded shadow-lg overflow-hidden">
                <b-carousel id="carousel1" controls indicators>
                    <!-- Text slides with image -->
                    <b-carousel-slide img-src="img/home/14570531_1793852407561667_3292771639665911179_o_1793852407561667.jpg"></b-carousel-slide>
                    <b-carousel-slide img-src="img/home/14589975_1793851307561777_1762155703271041792_o_1793851307561777.jpg"></b-carousel-slide>
                    <b-carousel-slide img-src="img/home/14680841_1793851994228375_3595296018439816710_o_1793851994228375.jpg"></b-carousel-slide>

                    <b-carousel-slide img-src="img/home/14680979_1793853064228268_967737282730335709_o_1793853064228268.jpg"></b-carousel-slide>
                    <b-carousel-slide img-src="img/home/14691922_1793853724228202_8431187937648648670_o_1793853724228202.jpg"></b-carousel-slide>
                    <b-carousel-slide img-src="img/home/14692056_1793852924228282_4261533688473836440_o_1793852924228282.jpg"></b-carousel-slide>

                </b-carousel>
            </div>
        </div>
        </div>
    </section>
</template>

<script>
import { BCarousel } from "bootstrap-vue/esm/components/carousel/carousel";
import { BCarouselSlide } from "bootstrap-vue/esm/components/carousel/carousel-slide";

export default {
  components: {
    BCarousel,
    BCarouselSlide
  }
};
</script>

<style>
</style>
