<template>
  <div>
    <div class="events-container">
      <div v-for="event in events" :key="event.eventInfo.id" class="event">
        <div class="event-details" @click="toggleImages(event)" :class="{ 'active': event.showImages }">
          <h2>{{ event.eventInfo.title }}</h2>
          <button @click="deleteEventConfirmation(event)" class="delete-button">Delete</button>
        </div>
        <div v-if="event.showImages" class="event-images">
          <div class="image-container">
            <img v-for="(image, index) in event.images" :key="index" :src="'http://51.75.133.118:3000/' + image" :alt="event.eventInfo.title + ' Image ' + (index + 1)">
          </div>
          <p v-if="event.images.length === 0" class="no-images">No images available for this event.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'suppevent',
  data() {
    return {
      events: []
    };
  },
  mounted() {
    this.getAllEvents();
  },
  methods: {
    getAllEvents() {
      axios.get('http://51.75.133.118:3000/Getevent')
        .then(response => {
          this.events = response.data.map(event => {
            const images = event.images || [];
            event.images = images;
            event.showImages = false;
            return event;
          });
        })
        .catch(error => {
          console.error('Error fetching events:', error);
        });
    },
    toggleImages(event) {
      event.showImages = !event.showImages;
    },
    deleteEventConfirmation(event) {
      if (confirm("Are you sure you want to delete this event?")) {
        this.deleteEvent(event.eventInfo.id);
      }
    },
    deleteEvent(eventId) {
      axios.delete(`http://51.75.133.118:3000/delevent/${eventId}`)
        .then(response => {
          // Remove the deleted event from the local array
          this.events = this.events.filter(event => event.eventInfo.id !== eventId);
          console.log(response.data);
        })
        .catch(error => {
          console.error('Error deleting event:', error);
        });
    }
  }
}
</script>

<style scoped>
.events-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.event {
  width: calc(33.33% - 20px); /* Adjust the width based on the number of events you want to display per row */
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
}

.event-details {
  padding: 20px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.event-details.active {
  background-color: #f0f0f0;
}

.event-images {
  padding: 20px;
}

.image-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.image-container img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.no-images {
  margin-top: 10px;
  font-style: italic;
}
</style>
