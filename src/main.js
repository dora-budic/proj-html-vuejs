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
    navLinks: [
      {
        name:'home',
        icon: ''
      },
      {
        name:'about',
        icon: ''
      },
      {
        name:'services',
        icon: ''
      },
      {
        name:'team',
        icon: ''
      },
      {
        name:'blog',
        icon: ''
      },
      {
        name: 'profile',
        icon: 'far fa-user'
      },
      {
        name:'get in touch',
        icon: ''
      },
    ],
  },
  methods: {
    getName: function (object) {
      if (object.icon != '') {
        return '';
      } else {
        return object.name;
      }
    }
  }
});
