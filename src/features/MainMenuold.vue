<template>
  <v-container>
    <v-row>
      <v-column>
        <v-row class="height: auto">
          <h1 class="display-2 font-weight-bold mb-7 ">
            The Book of Kinfolk
          </h1>
        </v-row>
        <v-row>
          <b> Kin: </b> Folk are kin 
        </v-row>
      <v-divider/>
      </v-column>
    </v-row>
    <v-row>
      <v-btn class="mb-2">Glossary</v-btn>
      <router-link to="/hero_management" style="text-decoration: none;">
        <v-btn class="mb-2">Hero Index</v-btn>
      </router-link>
    </v-row>
  </v-container>
</template>

<script>
export default {
}
  </script>
