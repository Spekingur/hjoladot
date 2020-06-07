<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Bikerings</v-toolbar-title>
      <v-spacer />
      <v-btn>
        Login
      </v-btn>
    </v-app-bar>

    <v-content>
      <progress-circular v-if="isGettingInitialData" />
      <bike-list v-else />
    </v-content>
  </v-app>
</template>

<script>
import BikeList from './components/BikeList.vue';
import ProgressCircular from './components/common/ProgressCircular.vue';

export default {
  name: 'App',

  components: {
    BikeList,
    ProgressCircular,
  },

  data: () => ({
    //
  }),
  computed: {
    isGettingInitialData() {
      return this.$store.state.gettingInitialData;
    },
  },
  created() {
    this.$store.dispatch('getInitialData');
  },
};
</script>
