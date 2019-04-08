<template>
  <d2-container :filename="filename">
    <template slot="header">lottery xyft</template>
    Hello World  lottery xyft
  </d2-container>
</template>

<script>
export default {
  name: 'page1',
  data () {
    return {
      filename: __filename
    }
  }
}
</script>
