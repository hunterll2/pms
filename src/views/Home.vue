<template>
  <div class="row gy-4" id="div_parentNode">
    <div class="col-lg-4 col-md-12">
      <div class="card shadow">
        <div class="card-header placeholder-glow">
          <span class="placeholder col-6"></span>
        </div>
        
        <svg class="bd-placeholder-img" width="100%" height="100%" style="aspect-ratio: 1/1;" xmlns="http://www.w3.org/2000/svg">
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#868e96"></rect>
        </svg>

        <div class="card-body placeholder-glow">
          <span class="placeholder col-7"></span>
          <span class="placeholder col-4"></span>
          <span class="placeholder col-4"></span>
          <span class="placeholder col-6"></span>
          <span class="placeholder col-8"></span>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-12">
      <div class="card shadow">
        <div class="card-header placeholder-glow">
          <span class="placeholder col-6"></span>
        </div>
        
        <svg class="bd-placeholder-img" width="100%" height="100%" style="aspect-ratio: 1/1;" xmlns="http://www.w3.org/2000/svg">
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#868e96"></rect>
        </svg>

        <div class="card-body placeholder-glow">
          <span class="placeholder col-7"></span>
          <span class="placeholder col-4"></span>
          <span class="placeholder col-4"></span>
          <span class="placeholder col-6"></span>
          <span class="placeholder col-8"></span>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-12">
      <div class="card shadow">
        <div class="card-header placeholder-glow">
          <span class="placeholder col-6"></span>
        </div>
        
        <svg class="bd-placeholder-img" width="100%" height="100%" style="aspect-ratio: 1/1;" xmlns="http://www.w3.org/2000/svg">
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#868e96"></rect>
        </svg>

        <div class="card-body placeholder-glow">
          <span class="placeholder col-7"></span>
          <span class="placeholder col-4"></span>
          <span class="placeholder col-4"></span>
          <span class="placeholder col-6"></span>
          <span class="placeholder col-8"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "@/plugins/Firebase"
import { collection, getDocs, updateDoc, doc, getDoc, addDoc, deleteDoc } from 'firebase/firestore';

async function loadProjects(parentNode, projectsCollectionRef) {
  const placeHolderHtml = `
      <div class="col-lg-4 col-md-12">
        <a href="/project?id=%project_id%" class="text-decoration-none">
          <div class="card shadow">
            <div class="card-header text-bg-primary bg-gradient">
              %project_name%
            </div>
            <img src="%project_image%" alt="alt" width="100%" height="auto" style="aspect-ratio: 1/1;">
            <div class="card-body">
              <p class="card-text">
                %project_description%
              </p>
            </div>
          </div>
        </a>
      </div>
    `

  //
  const projectsSnapshot = await getDocs(projectsCollectionRef)

  let child = parentNode.firstElementChild
  while (child) {
    child.remove()
    child = parentNode.firstElementChild
  }

  for (let doc of projectsSnapshot.docs) {
    const project = doc.data()

    let html = placeHolderHtml.replace("%project_name%", project.name)
    html = html.replace("%project_description%", project.description)
    html = html.replace("%project_image%", project.imageUrl ? project.imageUrl : "https://placehold.co/100")

    html = html.replaceAll("%project_id%", doc.id)

    parentNode.insertAdjacentHTML("afterbegin", html)
  }
}

export default {
  async mounted() {
    window.loading(true)

    const parentNode = document.querySelector("#div_parentNode")
    const projectsCollectionRef = collection(db, "projects")

    await loadProjects(parentNode, projectsCollectionRef)

    window.loading(false)
  }
}
</script>

<style>
.card:hover .card-body {
  background-color: var(--bs-tertiary-bg) !important;
}</style>