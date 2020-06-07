<template>
  <v-row align="center">
    <v-col>
      {{listItem.title}}
    </v-col>
    <v-col>
      {{listItem.description}}
    </v-col>
    <v-col>
      {{getDate}}
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'BikeListItem',
  props: {
    listItem: Object,
  },
  computed: {
    getDate() {
      const date = this.listItem.dateFound || this.listItem.dateLost || this.listItem.dateStolen;
      return new Date(date).toDateString();
    },
  },
};
</script>

<style>

</style>
