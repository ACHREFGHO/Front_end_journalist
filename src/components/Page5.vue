<template>
    <div>
      <div class="articles-container">
        <div v-for="article in articles" :key="article.id" class="article">
          <div class="article-box" @click="showDescription(article)">
            <div class="article-overlay">
              <h2 class="article-title">{{ article.articleInfo.title }}</h2>
            </div>
            <img :src="'http://localhost:3000/articles/' + article.articleInfo.id + '/' + article.articleInfo.photo" :alt="article.articleInfo.photo" class="article-image">
          </div>
        </div>
      </div>
      <!-- Modal for article description -->
      <div v-if="selectedArticle" class="modal">
        <div class="modal-content">
          <span class="close" @click="closeDescription">&times;</span>
          <h2 class="modal-title">{{ selectedArticle.articleInfo.title }}</h2>
          <p class="modal-description" v-html="selectedArticle.articleInfo.description"></p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'Page5',
    data() {
      return {
        articles: [],
        selectedArticle: null
      };
    },
    created() {
      this.fetchArticles();
    },
    methods: {
      fetchArticles() {
        axios.get('http://localhost:3000/Getarticle')
          .then(response => {
            // Filter articles based on the types
            this.articles = response.data.filter(article => article.articleInfo.types.includes('كرة الطائرة'));
          })
          .catch(error => {
            console.error('Error fetching articles:', error);
          });
      },
      showDescription(article) {
        this.selectedArticle = article;
      },
      closeDescription() {
        this.selectedArticle = null;
      }
    }
  };
  </script>
  
  
  <style scoped>
  .articles-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
  .article {
    width: 48%; /* Set the width to 48% for two items in a row */
    margin-bottom: 20px;
  }
  
  .article-box {
    position: relative;
    background-color: #f0f0f0;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    height: 300px; /* Set a fixed height for uniformity */
  }
  
  .article-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 30px; /* Increased padding for the title */
  }
  
  .article-title {
    color: #fff;
    font-size: 1.2rem;
    font-weight: bold;
    margin: 0;
    line-height: 1.2;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
  
  .article-image {
    width: 100%;
    height: 100%; /* Ensure the image fills the container */
    object-fit: cover; /* Maintain aspect ratio */
    border-radius: 10px;
  }
  
  /* Modal styles */
  .modal {
    display: block;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);
  }
  
  .modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
  }
  
  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }
  
  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
  
  .modal-title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .modal-description {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 20px;
    white-space: pre-line; /* Preserve line breaks */
  }
  </style>
  