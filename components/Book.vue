<template>
  <div class="book">
    <h5> {{ props.book.title }} - {{ props.book.author }} </h5>
    <NuxtLink :to="'/books/' + props.book.id">
      <div class="arrow">
        >
      </div>
    </NuxtLink>
  </div>
</template>

<script setup  lang="ts" >
import { IBasicBook } from '../utils/BookTypes'

interface Props {
  book: IBasicBook
}
const props = defineProps<Props>()

</script>

<style>
.book {
  background: white;
  padding: 20px;
  width: 100%;
  margin: 20px 0;

  display: flex;
  justify-content: space-between;
  border-radius: 15px;
}

.book>h5 {
  padding-right: 15px;
}

.arrow {
  height: 30px;
  width: 30px;
  font-size: .8rem;
  color: white;
  font-weight: bolder;
  text-decoration: none;

  display: grid;
  place-content: center;

  border-radius: 100%;
  background: #C4C4C4;
}
</style>