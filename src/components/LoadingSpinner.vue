<script setup></script>

<template>
  <span class="loader"></span>
</template>

<style>
.loader {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  border: 2px solid #ff3d00;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
.loader::after {
  content: '';
  box-sizing: border-box;
  position: absolute;
  left: 33px;
  top: 33px;
  border: 2px solid orange;
  width: 75px;
  height: 75px;
  border-radius: 50%;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
