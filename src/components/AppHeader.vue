<script>
export default {
  data() {
    return {
      links: [
        {
          text: 'Characters',
          url: '#',
          current: false,
        },
        {
          text: 'Comics',
          url: '#',
          current: true,
        },
        {
          text: 'Movies',
          url: '#',
          current: false,
        },
        {
          text: 'TV',
          url: '#',
          current: false,
        },
        {
          text: 'Games',
          url: '#',
          current: false,
        },
        {
          text: 'Collectibles',
          url: '#',
          current: false,
        },
        {
          text: 'Videos',
          url: '#',
          current: false,
        },
        {
          text: 'Fans',
          url: '#',
          current: false,
        },
        {
          text: 'News',
          url: '#',
          current: false,
        },
        {
          text: 'Shop',
          url: '#',
          current: false,
        },
      ]
    }
  }
}
</script>

<template>
  <div class="container">
    <nav class="navbar">
      <a href="#">
        <img src="../assets/img/dc-logo.png" alt="DC Comics Logo">
      </a>
      <ul>
        <li v-for="link in links">
          <a :class="{ active: link.current }" href="#">{{ link.text.toUpperCase() }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
nav {
  height: 100px;
  margin-bottom: 7px;
}

img {
  height: 80px;
}

ul {
  display: flex;
  height: 100%;

  li {
    margin: 0 10px;
  }
}

a {
  color: black;
  font-weight: 700;
  font-size: 0.8rem;
  height: 100%;
  display: flex;
  align-items: center;
  box-sizing: content-box;
}
</style>
