<template>
  <d2-container :filename="filename">
    <template slot="header">lottery bjl</template>
    Hello World  lottery bjl
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
