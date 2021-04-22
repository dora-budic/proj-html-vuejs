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
        url: '#',
      },
      {
        family: 'fas',
        prefix: 'fa-',
        type: 'envelope',
        text: 'hello@example.com',
        url: '#',
      },
      {
        family: 'fab',
        prefix: 'fa-',
        type: 'facebook-f',
        text: '',
        url: '#',
      },
      {
        family: 'fab',
        prefix: 'fa-',
        type: 'twitter',
        text: '',
        url: '#',
      },
      {
        family: 'fab',
        prefix: 'fa-',
        type: 'linkedin-in',
        text: '',
        url: '#',
      }
    ],
    navLinks: [
      {
        name:'home',
        icon: '',
        url: '#',
      },
      {
        name:'about',
        icon: '',
        url: '#',
      },
      {
        name:'services',
        icon: '',
        url: '#',
      },
      {
        name:'team',
        icon: '',
        url: '#',
      },
      {
        name:'blog',
        icon: '',
        url: '#',
      },
      {
        name: 'profile',
        icon: 'far fa-user',
        url: '#',
      },
      {
        name:'get in touch',
        icon: '',
        url: '#',
      },
    ],
    jumbtron: [
      {
        img: 'bg-1.jpg',
        title: 'Business Consulting',
        description: 'We drive product and service innovation, improve financial performance, accelerate market speed.',
      },
      {
        img: 'bg-2.jpg',
        title: 'Financial Risk',
        description: 'The right outcomes depend on continuous rigor in governance, models, and processes across the finance function.',
      },
      {
        img: 'bg-3.jpg',
        title: 'Audit & Assurance',
        description: 'Our focus is to map the technologies to solve the business transformation, offering services.',
      }
    ],
    currentIndex: 0,
    statsInfo: [
      {
        number: 128,
        name: 'Certifications',
      },
      {
        number: 230,
        name: 'Employees',
      },
      {
        number: 517,
        name: 'Customers',
      },
      {
        number: 94,
        name: 'Countries Served',
      },
    ],
    experts: [
      {
        img: 'team-1.jpg',
        name: 'David Cooper',
        position: 'cto & co-founder',
        facebook: '#',
        twitter: '#',
        linkedin: '#',
      },
      {
        img: 'team-3.jpg',
        name: 'Oliver Jones',
        position: 'chief procurement',
        facebook: '#',
        twitter: '#',
        linkedin: '#',
      },
      {
        img: 'team-2.jpg',
        name: 'Emma Lopez',
        position: 'chief marketing',
        facebook: '#',
        twitter: '#',
        linkedin: '#',
      },
      {
        img: 'team-4.jpg',
        name: 'T.Johnson',
        position: 'ceo & president',
        facebook: '#',
        twitter: '#',
        linkedin: '#',
      },
    ]
  },
  mounted: function () {
    setInterval(() => {
      if (this.currentIndex < this.jumbtron.length - 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }
    }, 10000)
  },
  methods: {
    getName: function (object) {
      if (object.icon != '') {
        return '';
      } else {
        return object.name;
      }
    },
    changeJumbo: function (index) {
      this.currentIndex = index;
    }

  }
});
