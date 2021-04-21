Vue.config.devtools = true;

var app = new Vue ({
  el: '#root',
  data: {
    contacts: [
      {
        family: 'fas',
    		prefix: 'fa-',
    		type: 'phone-alt',
        text: '+1 (305) 1234-5678',
      },
      {
        family: 'fas',
        prefix: 'fa-',
        type: 'envelope',
        text: 'hello@example.com',
      },
      {
        family: 'fab',
        prefix: 'fa-',
        type: 'facebook-f',
        text: '',
      },
      {
        family: 'fab',
        prefix: 'fa-',
        type: 'twitter',
        text: '',
      },
      {
        family: 'fab',
        prefix: 'fa-',
        type: 'linkedin-in',
        text: '',
      }
    ],
    navLinks: ['home','about','services','team','blog'],
  },
  methods: {

  }
});
