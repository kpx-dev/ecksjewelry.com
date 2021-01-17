<template>
    <footer class="footer has-cards">

        <div class="container">
            <hr>
            <div class="row align-items-center justify-content-md-between">
                <div class="col-md-6">
                    <div class="copyright">
                        &copy; {{year}} Ecks Jewelry
                    </div>
                </div>
                <div class="col-md-6">
                    <ul class="nav nav-footer justify-content-end">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/">
                                <span class="nav-link-inner--text">Home</span>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="about">
                                <span class="nav-link-inner--text">About</span>
                            </router-link>

                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
  name: 'app-footer',
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
};
</script>
<style>
</style>
