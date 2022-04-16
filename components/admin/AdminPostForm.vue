<template>
  <form @submit.prevent="onSave">
    <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>
    <AppControlInput v-model="editedPost.title">Title</AppControlInput>
    <AppControlInput v-model="editedPost.thumbnail"
      >Thumbnail Link</AppControlInput
    >
    <AppControlInput control-type="textarea" v-model="editedPost.content"
      >Content</AppControlInput
    >
    <AppControlInput control-type="textarea" v-model="editedPost.previewText"
      >Preview text</AppControlInput
    >
    <AppButton type="submit">Save</AppButton>
    <AppButton
      type="button"
      style="margin-left: 10px"
      btn-style="cancel"
      @click="onCancel"
      >Cancel</AppButton
    >
  </form>
</template>

<script lang="ts">
import Vue from "vue";
import AppControlInput from "../UI/AppControlInput.vue";
import AppButton from "../UI/AppButton.vue";

interface Data {
  editedPost: Props["post"];
}

interface Methods {
  onSave(): void;
  onCancel(): void;
}

interface Computed {
  postLink: string;
}

interface Props {
  post: {
    title: string;
    author: string;
    thumbnail: string;
    content: string;
    previewText: string;
  };
}

export default Vue.extend<Data, Methods, Computed, Props>({
  components: {
    AppControlInput,
    AppButton,
  },
  props: {
    post: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      editedPost: this.post
        ? this.post
        : {
            author: "",
            title: "",
            thumbnail: "",
            content: "",
            previewText: "",
          },
    };
  },
  methods: {
    onSave() {
      this.$emit("submit", { ...this.editedPost, updatedDate: new Date() });
    },
    onCancel() {
      // Navigate back
      this.$router.push("/admin");
    },
  },
});
</script>
