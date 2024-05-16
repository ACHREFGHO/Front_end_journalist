<template>
  <div class="event-component">
    <h2>Add Event</h2>
    <form @submit.prevent="addEvent" class="event-form">
      <div class="form-group">
        <label for="title">Event Title:</label>
        <input type="text" id="title" v-model="title" required>
      </div>
      <div class="form-group">
        <label for="photos">Event Photos:</label>
        <input type="file" id="photos" @change="onPhotosChange" accept="image/*" multiple required>
      </div>
      <button type="submit" :disabled="!isValidForm">Add Event</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Event',
  data() {
    return {
      title: '',
      photos: []
    };
  },
  computed: {
    isValidForm() {
      return this.title && this.photos.length > 0;
    }
  },
  methods: {
    onPhotosChange(event) {
      this.photos = Array.from(event.target.files);
    },
    async addEvent() {
      try {
        const formData = new FormData();
        formData.append('title', this.title);
        this.photos.forEach(photo => {
          formData.append('photos', photo);
        });

        const response = await axios.post('http://51.75.133.118:3000/addevent', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        console.log(response.data);
        // Optionally, handle the response here
      } catch (error) {
        console.error('Error adding event:', error);
        // Optionally, handle errors here
      }
    }
  }
};
</script>

<style scoped>
.event-component {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
}

.event-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 20px;
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
