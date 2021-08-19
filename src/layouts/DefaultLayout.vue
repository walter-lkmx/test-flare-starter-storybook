<template>
  <simple-layout>
    <template #header>
      <alert-bar
        message="A solar flare is a sudden flash of increased brightness on the Sun, usually observed near its surface and in close proximity to a sunspot group. ☀️" />
      <new-header mode="full" logo="flare--white.png"
        :mainNavigation='[{"title":"Eat","to":"/eat"},{"title":"More","to":"/more"},{"title":"Tacos","to":"/tacos"}]'
        :actions='[{"title":"🌶","to":"/"},{"title":"🌮","to":"/"}]' />
    </template>

    <page>

      <slot></slot>

    </page>

    <template #footer>
      <simple-footer>
        <p>Flare Project</p>
      </simple-footer>
    </template>

  </simple-layout>
</template>

<static-query>
  query {
  metadata {
  siteName
  }
  }
</static-query>

<style lang="scss">
  .header {
    &__logo {
      height: 60px;
      padding: var(--f-gutter-s) var(--f-gutter);
    }
  }

</style>
