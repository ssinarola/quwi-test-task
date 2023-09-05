export const state = () => ({
  allProjects: [],
});

export const getters = {
  getAllProjects(state) {
    return state.allProjects;
  },
};

export const mutations = {
  setAllProjects(state, payload) {
    state.allProjects = payload;
  },
};

export const actions = {
  async fetchAllProjects({ commit }) {
    try {
      const { data } = await this.$axios.get("projects-manage");
      commit("setAllProjects", data?.projects);
      return data?.projects;
    } catch (e) {
      console.log(e);
      this.$toast.error(
        error?.response
          ? error?.response.data?.message
          : "Something went wrong !"
      );
      return null;
    }
  },
};
