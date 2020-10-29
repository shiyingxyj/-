<template>
  <div>
    <header class="header">
      <slot name="left"></slot>
      <span class="header_title">
        <span class="header_title_text">
          {{ title }}
        </span>
      </span>
      <slot name="right"></slot>
    </header>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style lang="stylus">
.header {
    background-color: #02a774;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 45px;

    .header_title {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 50%;
        color: #fff;
        text-align: center;

        .header_title_text {
            font-size: 20px;
            color: #fff;
            display: block;
        }
    }
}
</style>
