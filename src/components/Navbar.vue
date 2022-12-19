<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">My Habit App</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <router-link class="nav-link" to="/">Home</router-link>
          <router-link class="nav-link" to="/about">About</router-link>
          <router-link class="nav-link" to="/habits">Habits</router-link>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Logs
            </a>
            <ul class="dropdown-menu">
              <router-link class="dropdown-item" to="/daily">daily</router-link>
              <router-link class="dropdown-item" to="/weekly">weekly</router-link>
              <router-link class="dropdown-item" to="/monthly">monthly</router-link>
              <router-link class="dropdown-item" to="/annually">annually</router-link>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>

</style>
