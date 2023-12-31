<script setup>
import { RouterView } from 'vue-router'
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
            <a href="/" class="list-group-item list-group-item-action">
              <i class="fa-solid fa-diagram-project me-2"></i>
              Projects
            </a>
            <a href="/user/projects" class="list-group-item list-group-item-action">
              <i class="fa-solid fa-file-signature me-2"></i>
              Signed Projects
            </a>
          </div>

          <div class="ps-2 pt-3 mb-1 text-muted d-none" data-only-admin>Admin</div>
          <div class="list-group d-none" data-only-admin>
            <a href="/admin/users" class="list-group-item list-group-item-action">
              <i class="fa-solid fa-users-gear me-2"></i>
              Users
            </a>
            <a href="/admin/projects" class="list-group-item list-group-item-action">
              <i class="fa-solid fa-diagram-project me-2"></i>
              Projects
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
          <div class="d-flex align-items-center text-white d-none" id="loading">
            <div class="spinner-border"></div>
            <span class="ms-2">Loading...</span>
          </div>

          <div class="ms-auto d-flex align-items-center column-gap-3">
            <a href="#" class="text-decoration-none text-white" id="a_userName">@Username</a>
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
import { auth, db } from "@/plugins/Firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

window.loading = function (status, message = "Loading...", usePlaceholder = false) {
  const method = status ? "remove" : "add"
  document.querySelector("#loading").classList[method]("d-none")
  document.querySelector("#loading > span").textContent = message

  if (usePlaceholder && status) {
    const allNonPlaceholders = document.querySelectorAll("[data-placeholder] ~ *")
    for (const el of allNonPlaceholders) el.classList.add("d-none")
  }
  else if (!status) {
    const allNonPlaceholders = document.querySelectorAll("[data-placeholder] ~ *")
    for (const el of allNonPlaceholders) el.classList.remove("d-none")

    const allPlaceholders = document.querySelectorAll("[data-placeholder]")
    for (const el of allPlaceholders) el.classList.add("d-none")
  }
}

export default {
  async mounted() {
    //
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        if (!user.emailVerified) {
          if (location.pathname !== "/verify_email" && location.pathname !== "/SignPage") {
            location.replace("/verify_email")
          }
          return
        }

        const a_userName = document.querySelector("#a_userName")
        a_userName.textContent = "@" + user.email.substring(0, user.email.indexOf("@"))

        let isAdmin = false

        const docRef = doc(db, `users/${user.uid}`);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const userData = docSnap.data()
          isAdmin = userData.isAdmin
        }

        const els = document.querySelectorAll("[data-only-admin]")
        for (const element of els) {
          if (isAdmin) {
            element.classList.remove("d-none")
          } else {
            element.remove()
          }
        }
      } else {
        if (location.pathname !== "/SignPage") {
          location.replace("/SignPage")
        }
      }
    });

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
    btn_signOut.addEventListener("click", function () {
      signOut(auth)
      location.replace("/")
    })

    // if user in "sign page" or "verify email page" hide navbar and sidebar
    if (location.pathname === "/SignPage" || location.pathname === "/verify_email") {
      const signedOnlyElements = document.querySelectorAll("[data-only-signed]")
      for (const element of signedOnlyElements) {
        element.remove()
      }
    }

  }
}
</script>