<template>
  <d2-container :filename="filename">
    <template slot="header">helper plate2</template>
    Hello World  helper plate2
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
