import Vue from 'vue';
import registryApp from './components/app.vue';

document.addEventListener('DOMContentLoaded', () => new Vue({
  el: '#js-vue-registry-images',
  components: {
    registryApp,
  },
  data() {
    const dataset = document.querySelector(this.$options.el).dataset;
    return {
      endpoint: dataset.endpoint,
    };
  },
  render(createElement) {
    return createElement('registry-app', {
      props: {
        endpoint: this.endpoint,
      },
    });
  },
}));
