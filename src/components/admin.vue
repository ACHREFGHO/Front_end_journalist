<template>
  <div>
    <div style="display: flex; justify-content: center;">
      <router-link to="/article" style="margin-right: 16px;">
        <button style="font-size: 1.5em; padding: 12px 24px; background-color: blue; color: white;">Ajouter un article</button>
      </router-link>
      <router-link to="/event">
        <button style="font-size: 1.5em; padding: 12px 24px; background-color: red; color: white;">Ajouter un Événement</button>
      </router-link>
    </div>
    <div style="display: flex; justify-content: center; margin-top: 16px;">
      <router-link to="/suppart" style="margin-right: 16px;">
        <button style="font-size: 1.5em; padding: 12px 24px; background-color: gray; color: white;">Supprimer un article</button>
      </router-link>
      <router-link to="/suppevent">
        <button style="font-size: 1.5em; padding: 12px 24px; background-color: gray; color: white;">Supprimer un Événement</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'admin',
};
</script>

<style scoped>
/* Add some basic styling to the buttons */
button {
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  opacity: 0.8;
}
</style>