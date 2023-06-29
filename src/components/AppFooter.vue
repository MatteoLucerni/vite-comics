<script>
</script>

<template>
  <footer>
    <div class="container">
      <div class="navbar">
        <a class="btn" href="#">SIGNUP NOW!</a>
        <ul>
          <li>
            <h3>FOLLOW US</h3>
          </li>
          <li>
            <a href="#">
              <img src="../assets/img/footer-facebook.png" alt="facebook logo">
            </a>
          </li>
          <li>
            <a href="#">
              <img src="../assets/img/footer-twitter.png" alt="Twitter logo">
            </a>
          </li>
          <li>
            <a href="#">
              <img src="../assets/img/footer-youtube.png" alt="Youtube logo">
            </a>
          </li>
          <li>
            <a href="#">
              <img src="../assets/img/footer-pinterest.png" alt="Pinterest logo">
            </a>
          </li>
          <li>
            <a href="#">
              <img src="../assets/img/footer-periscope.png" alt="Periscope logo">
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use '../assets/scss/vars' as *;

footer {
  background-color: $gray;
  padding: 24px 0;
}

ul {
  display: flex;
  align-items: center;

  li {
    margin: 10px;
  }

  h3 {
    color: $blue;
  }
}

img {
  vertical-align: middle;
}
</style>
