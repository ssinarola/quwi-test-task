<template>
    <div class="modal-overlay">
        <div class="modal">
            <form>
                <div class="form-container">
                    <header>
                        <h2>Update Project Details</h2>
                    </header>
                    <div style="width: 100%;">
                        <div class="input-group">
                            <label>Project Name</label>
                            <input id="projectName" class="form-input" type="text" :value="project?.name"
                                @change="handleInput" />
                            <span class=" error-msg" v-if="this.error">{{ error }}</span>
                        </div>
                        <div class="input-group">
                            <label>Project Description</label>
                            <textarea rows="5" cols="33" type="text" placeholder="Description"
                                :value="project?.inv_sample_text" disabled></textarea>
                        </div>
                        <div class="footer-button">
                            <button type="button" @click.prevent="updateHandler();">Save</button>
                            <button type="button" @click="$emit('closeModal')">Cancel</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>

    </div>
</template>
  
<script>
export default {
    name: 'UpdateProjectModal',
    props: {
        project: { type: Object }
    },
    data() {
        return {
            projectName: "",
            error: ""
        }
    },
    methods: {
        handleInput(e) {
            this.projectName = e.target.value
        },
        updateHandler() {
            this.$axios.post(`projects-manage/update?id=${this.project.id}`, { name: this.projectName }
            ).then(async () => {
                this.$store.dispatch('fetchAllProjects')
                this.$emit('closeModal');
                this.error = ""
            }).catch(error => {
                this.error = error?.response?.data?.first_errors?.name;
            })
        }
    }
}
</script>

<style scoped>
input[class="form-input"] {
    margin: 5px;
    padding: 5px;
    font-family: 'Abel', sans-serif;
    color: #5E6472;
    outline: none;
    border-radius: 0px 5px 5px 0px;
    border: 1px solid #dadada;
    width: 40%;
    margin-left: 45px;
}

input {
    &:focus {
        transform: translateX(-2px);
        border-radius: 5px;
    }
}

.input-group {
    text-align: left;
    padding-left: 25px;
    display: flex;
}

.modal-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    background-color: #000000da;
}

.modal {
    text-align: center;
    background-color: white;
    height: fit-content;
    width: 40%;
    margin-top: 5%;
    border-radius: 10px;
}

button {
    background-color: #c44512;
    height: 35px;
    color: white;
    font-size: 14px;
    border-radius: 5px;
    margin: 5px;
    padding: 6px;
}

.footer-button {
    display: flex;
    justify-content: flex-end;
    margin: 15px;
}

.error-msg {
    color: #d40000;
}

textarea {
    margin-left: 5px;
    padding: 5px;
    width: 38%;
    line-height: 1.5;
    border-radius: 5px;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 1px #999;
}

textarea::-webkit-scrollbar {
    width: 5px;
}

textarea::-webkit-scrollbar-track {
    background: #f1f1f1;
}

textarea::-webkit-scrollbar-thumb {
    background: #888;
}

textarea::-webkit-scrollbar-thumb:hover {
    background: #555;
}
</style>