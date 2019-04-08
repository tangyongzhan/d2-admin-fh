<template>
  <d2-container :filename="filename">
    <template slot="header">lottery xyf1</template>
    Hello World  lottery xyf1
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
