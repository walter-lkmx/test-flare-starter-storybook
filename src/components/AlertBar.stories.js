import AlertBar  from './AlertBar';

export default {
  title: 'Flare/AlertBar',
  component: AlertBar,
  decorators: [() => ({ template: '<body style="margin: 0 !important;"><story/></body>' })],
};

const Template = (args, { argTypes }) => ({
  components: { AlertBar },
  props: Object.keys(argTypes),
  template: `<alert-bar v-bind="$props"></alert-bar>`,
});

export const Primary = Template.bind({});
Primary.args = { 
  message: `A solar flare is a sudden flash of increased brightness on the Sun, usually observed near its surface and in close proximity to a sunspot group. ☀️`,
 };

 

