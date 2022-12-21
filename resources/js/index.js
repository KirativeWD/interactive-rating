const app = new Vue({
    el: '#app',
    data: {
      rating: ''
    },
    methods: {
      submitForm: function() {
        document.querySelector('form').classList.toggle('hidden');
        document.querySelector('form').setAttribute('aria-hidden', 'true');
        document.querySelector('.input-cta').setAttribute('tabindex', '-1');
        document.querySelector('.btn').setAttribute('tabindex', '-1');
        setTimeout(function() {
          document.querySelector('.thank-you').classList.toggle('hidden');
          document.querySelector('.thank-you').setAttribute('aria-hidden', 'false');
          document.querySelector('form').style.zIndex = "-2";
        }, 1000);
      }
    }
  });
