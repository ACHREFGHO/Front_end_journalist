<template>
  <div class="article-uploader">
    <h2 class="uploader-title">تحميل مقالة</h2>
    <form @submit.prevent="uploadArticle" class="upload-form">
      <div class="form-group">
        <label for="title">العنوان :</label>
        <input type="text" id="title" v-model.trim="title" required>
      </div>
      <div class="form-group">
        <label for="description">الوصف :</label>
        <textarea id="description" v-model.trim="description" required class="description-field"></textarea>
      </div>
      <div class="form-group">
        <label for="photo">الصورة:</label>
        <input type="file" id="photo" @change="onFileChange" accept="image/*" required>
      </div>
      <div class="form-group">
        <label>الأنواع:</label>
        <div class="types-container">
          <div v-for="type in articleTypes" :key="type.value" class="type-item">
            <input type="checkbox" :id="type.value" :value="type.value" v-model="selectedTypes">
            <label :for="type.value">{{ type.label }}</label>
          </div>
        </div>
      </div>
      <button type="submit" :disabled="!isValidForm" class="submit-button">تحميل المقالة</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Article',
  data() {
    return {
      title: '',
      description: '',
      photo: null,
      selectedTypes: [],
      articleTypes: [
        { label: 'الأخبار العالمية', value: 'الأخبار العالمية' },
        { label: 'الأخبار الوطنية', value: 'الأخبار الوطنية' },
        { label: 'كرة اليد', value: 'كرة اليد' },
        { label: 'كرة السلة', value: 'كرة السلة' },
        { label: 'كرة الطائرة', value: 'كرة الطائرة' },
        { label: 'أخبار متفرقة', value: 'أخبار متفرقة' }
        // Add more types as needed
      ]
    };
  },
  computed: {
    isValidForm() {
      return this.title && this.description && this.photo && this.selectedTypes.length > 0;
    }
  },
  methods: {
    onFileChange(event) {
      this.photo = event.target.files[0];
    },
    async uploadArticle() {
      try {
        const formData = new FormData();
        formData.append('title', this.title);
        formData.append('description', this.description);
        formData.append('photo', this.photo);
        formData.append('types', this.selectedTypes.join(',')); // Convert array to comma-separated string

        const response = await axios.post('http://51.75.133.118:3000/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        console.log(response.data);
        // Optionally, you can handle the response here
      } catch (error) {
        console.error('Error uploading article:', error);
        // Optionally, you can handle errors here
      }
    }
  }
};
</script>

<style scoped>
.article-uploader {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
}

.uploader-title {
  text-align: center;
  font-size: 1.8rem;
  margin-bottom: 20px;
}

.upload-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 20px;
}

.types-container {
  display: flex;
  flex-wrap: wrap;
}

.type-item {
  margin-right: 10px;
}

.submit-button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
}

.submit-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

/* Preserve line breaks and whitespace in description */
.description-field {
  white-space: pre-line;
}
</style>
