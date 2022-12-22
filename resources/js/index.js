const app = new Vue({
    el: '#app',
    data: {
      rating: ''
    },
    methods: {
      submitForm: function() {
        document.querySelector('button').style.display = 'none';
        setTimeout(function() {
          document.querySelector('.form-cta').classList.toggle('hidden');
          document.querySelector('.form-cta').setAttribute('aria-hidden', 'true');
          setTimeout(function() {
            document.querySelector('.form-cta').style.display = 'none';
            document.querySelector('.thank-you').classList.toggle('hidden');
            document.querySelector('.thank-you').setAttribute('aria-hidden', 'false');
          }, 1000)
        }, 500);
      }
    }
  });