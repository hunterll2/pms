<template>
  <div class="row gy-4">
    <div class="col-lg-4 col-md-12">
      <a href="/1" class="text-decoration-none">
        <div class="card shadow">
          <div class="card-header text-bg-primary bg-gradient">
            Prject Id
          </div>
          <img src="https://placehold.co/100" alt="alt">
          <div class="card-body">
            <h5>Prject Title</h5>
            <p class="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi aliquam nam nobis voluptas adipisci natus quae
              amet explicabo ullam rerum quod odio accusantium ea, accusamus, iure consectetur eius tenetur porro!
            </p>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    window.loading(true)
    //
    // window.loading(false)
  }
}
</script>

<style>
.card:hover .card-body {
  background-color: var(--bs-tertiary-bg) !important;
}
</style>