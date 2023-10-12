<template>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-contact">
          <h3>联系我们</h3>
          <p>Email: info@example.com</p>
          <p>电话: 123-4560-7890</p>
        </div>
        <div class="footer-social">
          <h3>关于我们</h3>
          <ul>
            <li><a href="#" target="_blank">隐私政策</a></li>
            <li><a href="#" target="_blank">服务协议</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-copyright">
        &copy; 2023 校游网站。保留所有权利 京ICP备123456号。
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Page Footer Styles */
.site-footer {
  background-color: #333;
  color: #fff;
  margin-top: 10px;
  padding: 10px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 150px;
}

.footer-contact, .footer-social {
  flex: 1;
  padding: 10px;
}

.footer-contact h3, .footer-social h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

.footer-contact p, .footer-social ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.footer-contact p {
  font-size: 16px;
  margin-bottom: 10px;
}

.footer-social ul li {
  margin-bottom: 10px;
}

.footer-social ul li a {
  color: #fff;
  text-decoration: none;
  font-size: 16px;
}

.footer-copyright {
  text-align: center;
  margin-top: 10px;
  font-size: 14px;
}

/* Styling for links */
a {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s;
}

a:hover {
  color: #ff6600;
}
</style>