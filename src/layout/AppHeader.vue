<template>
    <header class="header-global">
        <base-nav class="navbar-main" transparent type="" effect="light" expand>
            <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
                Ecks Jewelry
            </router-link>

            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-brand">
                    <router-link class="nav-link" to="/">
                        <i class="fa fa-home d-lg-none"></i>
                        <span class="nav-link-inner--text">Home</span>
                    </router-link>

                </div>
                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>

            <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
                <router-link class="nav-link" to="pendants">
                    <i class="fa fa-circle d-lg-none"></i>
                    <span class="nav-link-inner--text">Pendants</span>
                </router-link>

                <router-link class="nav-link" to="rings">
                    <i class="fa fa-diamond d-lg-none"></i>
                    <span class="nav-link-inner--text">Rings</span>
                </router-link>

                <router-link class="nav-link" to="cufflinks">
                    <i class="ni ni-ui-04 d-lg-none"></i>
                    <span class="nav-link-inner--text">Cufflinks</span>
                </router-link>
            </ul>
            <ul class="navbar-nav align-items-lg-center ml-lg-auto">

                <li class="nav-item">
                    <router-link class="nav-link" to="about">
                    <i class="ni ni-ui-04 d-lg-none"></i>
                    <span class="nav-link-inner--text">About</span>
                    </router-link>
                </li>

                <li class="nav-item">
                    <router-link class="nav-link" to="contact">
                    <i class="ni ni-ui-04 d-lg-none"></i>
                    <span class="nav-link-inner--text">Contact</span>
                    </router-link>
                </li>

                <li class="nav-item">
                    <router-link class="nav-link" to="retail">
                    <i class="ni ni-ui-04 d-lg-none"></i>
                    <span class="nav-link-inner--text">Shop Retail</span>
                    </router-link>
                </li>

                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://www.facebook.com/ecksjewelry/" target="_blank" rel="noopener"
                       data-toggle="tooltip" title="Like us on Facebook">
                        <i class="fa fa-facebook-square"></i>
                        <span class="nav-link-inner--text d-lg-none">Facebook</span>
                    </a>
                </li>

                <li class="nav-item d-none d-lg-block ml-lg-4">
                    <a href="https://www.tribalhollywood.com/collections/ecks-mens-jewelry" target="_blank" rel="noopener"
                       class="btn btn-neutral btn-icon">
                        <span class="btn-inner--icon">
                        <i class="fa fa-shopping-cart mr-2"></i>
                        </span>
                        <span class="nav-link-inner--text">Shop Online</span>
                    </a>
                </li>
            </ul>
        </base-nav>
    </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown
  }
};
</script>
<style>
</style>
