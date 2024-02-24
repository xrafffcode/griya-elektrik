<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const isSticky = ref(false)
const isNavbarActive = ref(false)

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

function handleScroll() {
  isSticky.value = window.scrollY > 0
}

function toggleNavbar() {
  isNavbarActive.value = !isNavbarActive.value
}
</script>

<template>
  <nav :class="{ 'is-sticky': isSticky }">
    <VContainer>
      <div class="navbar">
        <div class="navbar-brand">
          <RouterLink
            to="/"
            class="navbar-item"
          >
            <img
              src="@images/griya-limabelas-purwokerto.png"
              alt="Vue Mastery"
            >
          </RouterLink>
          <a
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            @click="toggleNavbar"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div
          class="navbar-menu"
          :class="{ 'is-active': isNavbarActive }"
        >
          <div class="menu-header">
            <VIcon @click="toggleNavbar">
              mdi-close
            </VIcon>
          </div>
          <RouterLink
            to="/"
            class="navbar-item"
          >
            Home
          </RouterLink>
          <RouterLink
            to="/produk"
            class="navbar-item"
          >
            Produk
          </RouterLink>
          <RouterLink
            to="/kontak-kami"
            class="navbar-item"
          >
            Kontak
          </RouterLink>
          <RouterLink
            to="/tentang-kami"
            class="navbar-item"
          >
            Tentang Kami
          </RouterLink>
        </div>
      </div>
    </VContainer>
  </nav>

  <div
    class="navbar-overlay"
    :class="{ 'is-active': isNavbarActive }"
  />
</template>



<style>
nav {
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    z-index: 1000;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: .5rem 0;
}

.navbar-brand img {
    max-height: 3rem;
}

.navbar-menu {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.navbar-item {
    color: #333;
    text-decoration: none;
}

.navbar-burger {
    display: none;
}


.menu-header {
    display: none;
}

.router-link-exact-active {
    color: #273E86;
}

@media screen and (max-width: 768px) {
    .navbar-brand {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        flex-direction: row-reverse;
    }

    .navbar-menu {
        display: flex;
        flex-direction: column;
        position: fixed;
        left: 0;
        bottom: 0;
        top: 0;
        width: 300px;
        z-index: 999;
        overflow: hidden;
        overflow-y: auto;
        background-color: #fff;
        align-items: flex-start;
        padding: 1rem 0 1rem 1rem;
        transform: translateX(-100%);
        transition: transform .50s ease;
        transition: transform .50s ease, -webkit-transform .50s ease;
    }



    .navbar-burger {
        display: block;
    }

    .navbar-burger span {
        display: block;
        width: 25px;
        height: 3px;
        margin: 5px;
        background-color: #333;
    }

    .navbar-menu.is-active {
        transform: none;
    }

    .navbar-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 998;
        opacity: 0;
        transition: opacity .50s ease;
    }

    .navbar-overlay.is-active {
        opacity: 1;
    }


    .menu-header {
        display: flex;
        justify-content: flex-end;
        width: 100%;
        padding: 0 1rem;
    }

}

.is-sticky {
    position: fixed !important;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    animation: fadeInDown 0.5s;
}

@keyframes fadeInDown {
    from {
        transform: translateY(-100%);
    }

    to {
        transform: translateY(0);
    }
}
</style>
