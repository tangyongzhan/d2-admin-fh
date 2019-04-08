<template>
  <d2-container :filename="filename">
    <template slot="header">lottery cqssc</template>
    Hello World  lottery cqssc
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
