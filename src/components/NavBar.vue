<template>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
     <RouterLink to="/" class="navbar-brand">
        Admin panel
     </RouterLink>
     
 <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
           <RouterLink to="/" class="nav-link">Usuarios</RouterLink>
          </li>
        </ul>
      </div>
    </nav>
</template>

<script setup>
import router from '@/router'

</script>

<style lang="scss" scoped>

</style>