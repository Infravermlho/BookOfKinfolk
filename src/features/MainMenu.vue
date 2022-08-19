<template>
  <div id="wrapper">
    <p class="text-h1">
      The Book of Kinfolk
    </p>
    <p class="text-subtitle-2 text-medium-emphasis"><b> Kin: </b> Folk are kin </p>
    <v-divider/>
    <v-container class="mt-1" fluid>
        <v-row>
          <v-btn class="mb-5"
            variant="outlined"
            color="primary"
          >
            Glossary
          </v-btn>
        </v-row>
        <v-row>
          <router-link to="/hero_management" style="text-decoration: none;">
            <v-btn class="mb-5"
              variant="outlined"
              color="primary"
            >
              Hero Index
            </v-btn>
          </router-link>
        </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  #wrapper {
    margin-left: 20px;
  }
</style>