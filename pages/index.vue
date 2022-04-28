<template>

  <div clas="">

    <Head>
      <Title>TAPADOO BOOKS | NUXT</Title>
      <Meta name="description" content="A programing test using books API with Nuxt" />
    </Head>

    <AppContainer>
      <h2>
        Ready for the Reading?
      </h2>
      <section class="authorSection">
        <i class="subtitle">Top Authors</i>
        <div class="authorsCarrousel">
          <div v-for="book in data" :key="book.id" class="authorItem">
            <p>{{ book.author }}</p>
          </div>
        </div>
      </section>
      <section class="booksContainer">

        <Book v-for="book in data" :key="book.id" :book="book" />
      </section>
    </AppContainer>
  </div>

</template>

<script setup  lang="ts" >
import type { IBasicBook } from "../utils/BookTypes"

import { TAPADOO_URL } from "../config"

const { data } = await useAsyncData<IBasicBook[]>("books", () => $fetch(`${TAPADOO_URL}/books`))

</script>

<style>
.booksContainer {
  padding-left: 1.5rem;
  /* max-height: 400px; */
  overflow-y: scroll;
}

.subtitle {
  color: #6c6c6c;
  font-weight: 600;
  margin: 1rem 0;
  display: block;
}

.authorsCarrousel {
  display: flex;
  margin: 1rem 0;
  padding: 1rem 2rem;
  flex-wrap: nowrap;
  overflow-x: scroll;
}

.authorItem::after {
  content: "";
  width: 100px;
  height: 3px;
  position: absolute;
  bottom: 10px;
  background: #00DC82;
  border-radius: 200px;
}

.authorItem {
  margin-right: 20px;
  min-width: 200px;
  padding: 1rem;
  padding-bottom: 20px;
  position: relative;
  /* display: grid; */
  /* place-content: center; */
  /* text-align: ; */
  font-size: .9rem;
  font-weight: 500;
  color: #4d4d4d;

  border-radius: 20px;
  background: white;
}
</style>