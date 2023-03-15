<template>
  <button @click="$emit('on:click')" class="btn btn-primary">
    <i :class="iconClas"></i>
  </button>
</template>

<script>

export default {

    props:{
        icon:{
            type: String,
            default: "fa-plus"
        }
    },

    computed:{
        iconClas(){
            return `fa fa-1x ${this.icon}`
        }
    }

}
</script>

<style lang="scss" scoped>

button {
    border-radius: 100%;
    bottom: 20px;
    height: 50px;
    width: 50px;
    position: fixed;
    right: 20px;
}

</style>>
