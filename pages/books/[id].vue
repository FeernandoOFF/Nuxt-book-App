<template>
  <AppContainer>
    <div class="title">
      <h2>Book Title: {{ data.title }} </h2>
      <p>
        <span class="authorName"> {{ data.author }}</span>
        <span class="bookMetadata">
          $ {{ data.price }} - {{ data.currencyCode }}
        </span>
      </p>
    </div>
    <section>
      <p>
        {{ data.description }}
      </p>
    </section>


  </AppContainer>
</template>

<script setup>
import { TAPADOO_URL } from '~~/config';

const { params: { id: bookId } } = useRoute()

const { data } = await useAsyncData(`book-${bookId}`, () => $fetch(`${TAPADOO_URL}/book/${bookId}`))

</script>

<style>
.title {
  margin: 50px 0;
}

h2 {
  margin: 20px 0px
}

.authorName {
  color: rgb(65, 65, 65);
  font-size: 1.2rem;
  font-weight: bold;
  margin: 20px 5px;
}

.bookMetadata {
  padding: 10px;
  margin-left: 50px;
  border-radius: 20px;
  background: #00DC82;
  color: white;
  font-weight: bold;
}
</style>