
<template>
  <div class="container">
    <nav class="headerNav">
      <a :href="link" class="burger icon ">
        {{ icon }}
      </a>
      <div class="rightNav">
        <div class="icon disabled">↯ </div>
        <div class="icon disabled">☀</div>

      </div>

    </nav>
    <slot>

    </slot>

  </div>
</template>

<script setup lang="ts">

interface Props {
  link?: string,
  icon?: string;
}
const { link, icon } = defineProps<Props>()
</script>

<style>
.container {
  width: min(100vw, 900px);
  padding: 2rem;
  min-height: 100vh;

  background: #F4F4F4;
  border-radius: 10px;
  box-shadow: 5px 11px 9px 0px #dbdbdb;
}

.headerNav {
  width: 100%;
  padding: 1rem 0;
  margin-bottom: 5vh;
  display: flex;
  justify-content: space-between;

}

.rightNav {
  display: inherit;

}



.icon {
  width: 30px;
  height: 30px;
  border-radius: 100%;
  margin-right: 20px;

  display: grid;
  place-items: center;
  background: #fff;
  cursor: pointer;
}

.disabled {
  cursor: not-allowed;
  color: #ccc
}

@media screen and (min-width: 758px) {
  .container {
    margin: 10vh auto;
    min-height: min(100vh, 650px);

  }
}
</style>