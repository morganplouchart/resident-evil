<template>
<div style="position: fixed;left: 0;bottom: 0;width: 100%;">
<v-footer
dark
height="50px"
>
<v-card
class="flex"
flat
tile
>
<v-card-title style="background:#000; border-top:1px solid red">
  <span class="subheading" style="color:red;">  &copy;2019 Umbrella corporation : Morgan Plouchart</span>

  <v-spacer></v-spacer>

  <v-btn
    v-for="icon in icons"
    :key="icon"
    class="mx-3"
    dark
    icon
  >
    <v-icon size="24px">{{ icon }}</v-icon>
  </v-btn>
</v-card-title>
</v-card>
</v-footer>
</div>
</template>

<script>
export default {
  data() {
    return{
      icons: [
        'fab fa-google-plus',
        'fab fa-linkedin'
      ]
    }
  }
}
</script>

<style>
@media only screen and (max-width: 600px) {
  .subheading {
    display:none;
  }
}
</style>
