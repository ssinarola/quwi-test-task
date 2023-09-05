<template>
  <div>
    <div class="project-listing">
      <div v-if="projects && $store.state.allProjects.length > 0" v-for="(project, index) in $store.state.allProjects"
        :key="index">
        <div class="c-issue" @click.prevent="itemSelectorHandler(project)">
          <NuxtLink to="#" target="_blank" class="b-issue js-issue has-title">
            <div class="e-border-line"></div>
            <div class="b-top">
              <div class="b-left">
                <span class="e-id">{{ project.position }} </span>
                <span class="e-title">{{ project.name }} </span>
              </div>
            </div>
            <div class="b-middle">
              <div class="b-image">
                <img :src=project.logo_url alt="Screenshot" height="78" class="c-protected-image" />
              </div>
              <div class="b-text">
                <div class="e-desc">
                  {{ project.inv_sample_text }}
                </div>
              </div>
            </div>
            <div class="b-bottom">
              <div class="b-left">
                <span class="e-date">1 Sep</span>
              </div>
              <div class="b-right">
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
    <update-project-modal v-show="isOpenUpdateModal && selectedProject" :project="selectedProject"
      @closeModal="isOpenUpdateModal = false" />
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  head: {
    title: 'Home'
  },
  data() {
    return {
      projects: [],
      isOpenUpdateModal: false,
      selectedProject: null
    }
  },
  mounted() {
    this.$store.dispatch('fetchAllProjects')
  },
  methods: {
    itemSelectorHandler(project) {
      this.selectedProject = project
      this.isOpenUpdateModal = true;
    },
  },

}
</script>
<style lang="scss">
@import "~/assets/styles/index.scss";
</style>
