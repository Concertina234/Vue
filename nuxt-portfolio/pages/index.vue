<template>
  <div>
    <div class="hero">
      <nuxt-img src="/images/index-hero.jpg" alt="hero" format="webp" />
      <div class="textContainer">
        <h1>I'm Abe Hiroki!</h1>
        <h3>JavaScript Developer</h3>
      </div>
    </div>
    <div class="container">
      <div class="profile">
        <div>
          <h2>JavaScript Nerd</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <nuxt-img src="/images/profile.jpg" alt="profile" format="webp" />
      </div>
      <div class="skills">
        <h2>Skills</h2>
        <div class="skillsContainer">
          <div><img src="/images/javascript.svg" alt="javascript"><span>JavaScript / 10years</span></div>
          <div><img src="/images/react.svg" alt="react"><span>React / 4years</span></div>
          <div><img src="/images/vue.svg" alt="vue"><span>Vue / 4years</span></div>
          <div><img src="/images/nuxt.svg" alt="nuxt"><span>Nuxt / 3years</span></div>
        </div>
      </div>
      <div class="ctaButton">
        <NuxtLink to="/contact">Make It Happen!</NuxtLink>
      </div>
    </div>
  </div>
</template>