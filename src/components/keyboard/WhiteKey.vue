<template>
  <div class="white-key" v-bind:class="{active: active}">
    <div class="content">
      {{ config.keyboardLetter.toUpperCase() }}
      <br/>
      {{ config.note + (octave + config.relativeOctave) }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['config', 'octave', 'active']
}
</script>

<style lang="scss" scoped>
.white-key {
  position: relative;
  width: 50px;
  height: 80px;
  border: 1px solid black;
  text-align: center;

  .content {
    position: absolute;
    width: 100%;
    bottom: 0;
  }

  &.active {
    background: gray;
  }
}
</style>
