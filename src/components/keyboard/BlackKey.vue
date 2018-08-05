<template>
  <div class="black-key">
    <div class="wrapper" v-bind:class="{active: active}">
      <div class="content">
        {{ config.keyboardLetter.toUpperCase() }}
        <br/>
        {{ config.note + (octave + config.relativeOctave) }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['config', 'octave', 'active']
}
</script>

<style lang="scss" scoped>
$button-width: 40px;

.black-key {
  width: 0;

  .wrapper {
    position: relative;
    z-index: 10;
    width: $button-width;
    height: 40px;
    background: black;
    color: white;
    text-align: center;
    margin-left: -$button-width / 2;

    .content {
      position: absolute;
      width: 100%;
      bottom: 0;
    }

    &.active {
      background: gray;
    }
  }
}
</style>
