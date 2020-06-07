<template>
    <v-container>
      <v-row>
        <v-col cols="12" v-for="(bike, index) in bikeList" :key="index">
          <bike-list-item :listItem="bike" />
          <v-divider v-if="index + 1 < bikeList.length" />
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
import BikeListItem from './BikeListItem.vue';

export default {
  name: 'BikeList',
  components: {
    BikeListItem,
  },
  computed: {
    bikeList() {
      return this.$store.state.bikeList;
    },
  },
};
</script>
