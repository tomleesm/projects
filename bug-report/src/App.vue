<template>
  <h1>Home</h1>
  <a href="/issues/create" class="btn btn-primary" data-cy="new-issue">New issue</a>

  <ol>
    <li>
      <router-link to="/home">Home</router-link>
    </li>
    <li>
      <router-link to="/about">About</router-link>
    </li>
  </ol>

  <router-view></router-view>
</template>
