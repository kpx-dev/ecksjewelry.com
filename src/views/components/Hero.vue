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
                    <b-carousel-slide img-src="img/home/1.jpg"></b-carousel-slide>
                    <b-carousel-slide img-src="img/home/2.jpg"></b-carousel-slide>

                    <b-carousel-slide img-src="img/home/3.jpg"></b-carousel-slide>
                    <b-carousel-slide img-src="img/home/4.jpg"></b-carousel-slide>

                    <b-carousel-slide img-src="img/home/5.jpg"></b-carousel-slide>
                    <b-carousel-slide img-src="img/home/6.jpg"></b-carousel-slide>

                    <b-carousel-slide img-src="img/home/7.jpg"></b-carousel-slide>
                    <b-carousel-slide img-src="img/home/8.jpg"></b-carousel-slide>

                    <b-carousel-slide img-src="img/home/9.jpg"></b-carousel-slide>
                    <b-carousel-slide img-src="img/home/10.jpg"></b-carousel-slide>

                    <b-carousel-slide img-src="img/home/11.jpg"></b-carousel-slide>
                    <b-carousel-slide img-src="img/home/12.jpg"></b-carousel-slide>

                    <b-carousel-slide img-src="img/home/13.jpg"></b-carousel-slide>
                    <b-carousel-slide img-src="img/home/14.jpg"></b-carousel-slide>

                    <b-carousel-slide img-src="img/home/15.jpg"></b-carousel-slide>
                    <b-carousel-slide img-src="img/home/16.jpg"></b-carousel-slide>

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
