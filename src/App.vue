<script setup>
import { RouterView } from 'vue-router'
console.log(1)
</script>

<template>
  <div class="container d-flex">
    <div data-only-signed>
      <div class="offcanvas-lg offcanvas-start sticky-lg-top" tabindex="-1" id="sidebar" style="width: 260px;">
        <div class="offcanvas-header d-block text-center">
          <a href="/" class="offcanvas-title display-1 text-decoration-none text-black" id="offcanvasLabel">PMS</a>
        </div>

        <div class="offcanvas-body d-block">
          <div class="list-group">
            <a href="/projects" class="list-group-item list-group-item-action">
              <i class="fa-solid fa-diagram-project me-2"></i>
              Projects
            </a>
            <a href="/2" class="list-group-item list-group-item-action">
              <i class="fa-solid fa-file-signature me-2"></i>
              Signed Projects
            </a>
          </div>

          <div class="ps-2 pt-3 mb-1 text-muted" data-only-admin>Admin</div>
          <div class="list-group" data-only-admin>
            <a href="/3" class="list-group-item list-group-item-action">
              <i class="fa-solid fa-users-gear me-2"></i>
              Users
            </a>
            <a href="/4" class="list-group-item list-group-item-action">
              <i class="fa-solid fa-diagram-project me-2"></i>
              Projects
            </a>
            <a href="/5" class="list-group-item list-group-item-action">
              <i class="fa-solid fa-chart-simple me-2"></i>
              Stats
            </a>
          </div>
        </div>
      </div>

    </div>

    <div class="flex-fill">
      <nav class="navbar navbar-expand-lg sticky-top bg-primary bg-gradient shadow rounded-bottom" data-only-signed>
        <div class="container">
          <button class="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#sidebar">
            <i class="fas fa-bars text-white py-1"></i>
          </button>
          <div class="ms-auto d-flex align-items-center column-gap-3">
            <a href="#" class="text-decoration-none text-white">@Username</a>
            <button class="btn btn-primary" id="btn_signOut">
              <i class="fa-solid fa-right-from-bracket"></i>
              Sign Out
            </button>
          </div>
        </div>
      </nav>
      <div class="container py-3">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const els = document.querySelectorAll("[data-only-admin]")
    for (const element of els) {
      element.remove()
    }

    const allLinksElements = document.querySelectorAll(".offcanvas-body a")
    const currentPathName = window.location.pathname
    for (const linkElement of allLinksElements) {
      const elHRefSplited = linkElement.href.split(location.host)
      const elHRef = elHRefSplited[elHRefSplited.length - 1]
      if (elHRef == currentPathName) {
        linkElement.classList.add("active")
      }
    }

    const btn_signOut = document.querySelector("#btn_signOut")
    btn_signOut.addEventListener("click", function() {
      location.replace("/SignPage")
    })

    if (location.pathname === "/SignPage") {
      const signedOnlyElements = document.querySelectorAll("[data-only-signed]")
      for (const element of signedOnlyElements) {
        element.remove()
      }
    }

  }
}
</script>