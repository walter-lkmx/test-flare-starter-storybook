<template>
  <header class="new-header">
    <column :mode="mode">
      <block class="new-header__content">

        <button v-on:click="toggleMenu" class="header__menu">
          <img src="../assets/icon-menu-open.svg" v-if="!isNavOpen" alt="Menu" />
          <img src="../assets/icon-menu-close.svg" v-if="isNavOpen" alt="Menu" />
        </button>

        <div class="logo-container">
          <slot name="headerLogo">
            <img class="header__logo" :src="require(`../assets/${logo}`)" alt="">
          </slot>
        </div>

        <nav class="main-navigation" aria-label="main-navigation">
          <a v-for="(nav, index) in mainNavigation" :key="index" :href="nav.to">
            <slot name="headerMainNavigation">{{nav.title}}</slot>
          </a>
        </nav>

        <nav class="actions" aria-label="actions">
          <!-- v-for="(tab, index) in tabs" -->
          <a v-for="(action, index) in actions" :key="index" :href="action.to">
            <slot name="headerActions">{{action.title}}</slot>
          </a>
        </nav>

      </block>
    </column>
  </header>
</template>

<script>
  export default {
    data: function () {
      return {
        isNavOpen: false,
      };
    },
    props: {
      mode: {
        type: String,
        required: false,
      },
      logo: {
        type: String,
        required: false,
      },
      mainNavigation: {
        type: Array,
        required: false,
        to: [
          {
            title: String,
            url: String,
          }
        ]
      },
      actions: {
        type: Array,
        required: false,
        to: [
          {
            title: String,
            url: String,
          }
        ]
      },
    },
    methods: {
      toggleMenu() {
        this.isNavOpen = !this.isNavOpen;

        const headerEl = document.querySelector('header.new-header');
        const headerMainNavIsOpenEl = document.querySelector('.navIsOpen');
        const navEl = document.querySelector('nav.main-navigation');
        const navAnchorEl = document.querySelectorAll('nav.main-navigation a');
        const bodyEl = document.querySelector('body');

        const navIsClosed = () => {
          navEl.classList.remove('navIsOpen');
          bodyEl.classList.remove('fixed');
          this.isNavOpen = false;
        };

        if (this.isNavOpen) {
          navEl.classList.add('navIsOpen');
          bodyEl.classList.add('fixed');
          headerEl.style.setProperty("--calcHeaderHeight", headerEl.offsetHeight + 'px');
          for (const anchor of navAnchorEl) {
            anchor.addEventListener('click', navIsClosed);
          }
        } else {
          navIsClosed();
        }
      },
    },
  };

</script>

<style lang="scss">
  @import "@lkmx/flare/src/functions/_respond-to.scss";

  .new-header {
    z-index: 10;

    .--flare {
      display: grid;
      grid-auto-flow: column;

      .content {
        .box {
          min-height: var(--f-gutter-xl);
          height: var(--f-header-height);

          color: var(--f-header-text-color);
          background-color: var(--f-header-background-color);

          height: 100%;

          display: grid;
          grid-auto-flow: column;
          align-items: center;
          justify-items: start;
          justify-content: space-between;
          gap: var(--f-gutter);

          a {
            color: var(--f-header-text-color);
          }

          @include respond-to("<=m") {
            grid-template-columns: 100px 1fr;
          }

          .header__menu {
            display: none;
            margin: 0;

            @include respond-to("<=m") {
              display: grid;
              gap: var(--f-gutter);
              align-items: center;
              justify-content: center;
              justify-items: center;
              grid-template-columns: 1fr;
              grid-auto-flow: row;

              height: var(--f-gutter-xl);
              width: var(--f-gutter-xl);
            }
          }

          .logo-container {
            display: grid;
            gap: var(--f-gutter);
            align-items: center;
            justify-content: center;
            justify-items: center;
            grid-template-columns: 1fr;
            grid-auto-flow: row;
            height: auto;

            .header__logo {
              width: 110px;
              height: 100%;
              padding: var(--f-gutter-xxs) 0;
              object-fit: contain;

              @include respond-to("<=m") {
                width: 130px;
                position: absolute;
                left: 0;
                right: 0;
                // top: var(--f-gutter);
                margin-left: auto;
                margin-right: auto;
              }
            }
          }

          nav {
            &:not(.actions) {
              a {
                padding: 0 var(--f-gutter);
              }
            }

            &.main-navigation {
              @include respond-to("<=m") {
                display: none;

                &.navIsOpen {
                  display: grid;
                  gap: var(--f-gutter);
                  align-items: center;
                  justify-content: center;
                  justify-items: center;
                  grid-template-columns: 1fr;
                  grid-auto-flow: row;
                  grid-template-rows: repeat(5, minmax(10px, 60px));
                  z-index: -1;
                  background: var(--f-header-background-color);
                  position: fixed;
                  overflow-y: scroll;
                  top: var(--f-header-height);
                  right: 0;
                  bottom: 0;
                  left: 0;
                  width: 100%;
                  height: calc(100vh - var(--calcHeaderHeight));

                  &::-webkit-scrollbar {
                    width: 0;
                    background: transparent;
                  }
                }
              }
            }

            &.actions {
              display: grid;
              gap: var(--f-gutter);
              align-items: center;
              justify-content: center;
              justify-items: center;
              grid-template-columns: 1fr;
              grid-auto-flow: column;
            }

            a {
              text-decoration: none;
            }
          }
        }
      }
    }
  }

</style>
