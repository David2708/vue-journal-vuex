<template>
  <div
    class="entry-container mb-3 pointer p-2"
    @click="$router.push({name: 'entry', params: {id:10}})">

    <!-- Titulo -->
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">15</span>
      <span class="mx-1 fs-5">Julio</span>
      <span class="mx-1 fw-light">2021, Jueves</span>
    </div>

    <div class="entry-description">
      Aute culpa nostrud excepteur laboris eiusmod minim nulla ex voluptate magna reprehenderit duis. Enim exercitation officia duis eu. Labore anim nisi amet proident aute consectetur adipisicing nostrud consectetur do sunt irure. Eiusmod id adipisicing in qui dolor in commodo ea. Esse elit tempor aute et non. Veniam pariatur adipisicing cillum aliqua id fugiat quis in.
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.entry-container{
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;

  &:hover {
    background-color: lighten($color: grey, $amount: 45);
  }

  .entry-description{
    font-size: 13px;
  }
}

</style>>