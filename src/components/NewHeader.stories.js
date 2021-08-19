import NewHeader from './NewHeader';

export default {
  title: 'Flare/NewHeader',
  component: NewHeader,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args, {
  argTypes
}) => ({
  components: {
    NewHeader
  },
  props: Object.keys(argTypes),
  template: `
  <new-header v-bind="$props">

    <template v-slot:headerMainNavigation>
    </template>

    <template v-slot:headerActions></template>

  </new-header>`,
});

export const Primary = Template.bind({});
Primary.args = {
  mode: `full`,
  logo: 'flare--white.png',
  mainNavigation: [
    {
      title: 'Eat',
      to: '/eat',
    },
    {
      title: 'More',
      to: '/more',
    },
    {
      title: 'Tacos',
      to: '/tacos',
    },
  ],
  actions: [
    {
      title: '🌶',
      to: '/',
    },
    {
      title: '🌮',
      to: '/',
    },
  ],
};