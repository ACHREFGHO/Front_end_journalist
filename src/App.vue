  
 <template>
  <div id="app" class="full-height" style="margin: 0;">
    <nav class="navbar">
      <div class="logo">
        <router-link to="/">
          <img src="@/assets/Logo.png" alt="Logo" class="logo-image">
        </router-link>
      </div>
      <ul class="nav-links">
        <li v-for="(link, index) in navLinks" :key="index">
          <router-link :to="link.route" class="nav-link">{{ link.text }}</router-link>
        </li>
        <li><hr class="nav-line"></li>
      </ul>
    </nav>
    <hr class="nav-line">
<div class="container">
    <router-view></router-view>
  </div>
    <footer class="footer">
      <div class="footer-content">
        <div class="contact-info">
          <p><strong>Hamid Chouigui</strong></p>
          <p>Email: <a href="mailto:Hamid.Chouigui@gmail.com">chouiguiabdelhamid@gmail.com</a></p>
          <p>Phone: <a href="tel:+216 90 158 956">+216 90 158 956</a></p>
        </div>
        <div class="description">
          <p>مرحبًا بكم على موقعنا! نحن نسعد بتقديم أحدث الأخبار الرياضية على الصعيدين الوطني والعالمي. نقدم تغطية شاملة لأبرز الأحداث والنتائج في عدة رياضات مثل كرة القدم، كرة السلة وغيرها الكثير. تابعونا للحصول على تحليلات مميزة وتقارير شاملة تغطي أحدث التطورات والمباريات الحاسمة في الساحة الرياضية العالمية والمحلية</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    document.body.style.margin= '0'; 
  },
  data() {
    return {
      navLinks: [
        { text: 'الأخبار الوطنية', route: '/page1' },
        { text: 'الأخبار العالمية', route: '/page2' },
        { text: 'كرة اليد', route: '/page3' },
        { text: 'كرة السلة', route: '/Page4' },
        { text: 'كرة الطائرة', route: '/page5' },
        { text: 'أخبار متفرقة', route: '/page6' },
        { text: 'صور', route: '/page7' }
      ],
    };
  },
};
</script>

<style scoped>


.container {
padding: 20px;


min-height: 100vh;

}


.nav-line {
  border: none;
  border-bottom: 1px solid #6b89ca;
  margin: 0;
  padding: 0;
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 9999;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-image: url('@/assets/footer-bg.jpg');
}

.logo {
  margin-right: 2rem;
}

.logo-image {
  width: 140px;
  height: 90px;
  max-width: 100%;
  height: auto;
  margin: 10px;
  box-shadow: 8px 8px 10px rgba(0, 0, 0, 0.5);
  background-color: rgb(70, 11, 11);
  padding: 6px;
  border-radius: 5%;

}

.nav-links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-end;
}

.nav-link {
  margin-right: 1rem;
  background-color: #72b2cd;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  text-decoration: none;
  color: #333;
}

.nav-link:hover {
  background-color: #0d72b9;
  color: #fff;
}
.template{
  margin: 0;
 }
 .footer {
  background-image: url('@/assets/footer-bg.jpg');
  background-size: cover;
  background-position: center;
  text-align: center;
  padding: 1rem 0;
  position: relative;
  bottom: 0;
  width: 100%;
  color: white;
  font-family: Arial, sans-serif;
}

.footer a {
  color: white;
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
}

.footer-content {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.contact-info {
  margin-right: 1rem;
  text-align: left;
}

.description {
  max-width: 500px;
  text-align: right;
}

.copyright {
  margin-top: 1rem;
  font-size: 0.8rem;
}
</style>





