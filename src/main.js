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
        family: 'fas',
        prefix: 'fa-',
        type: 'map-marker-alt',
        text: 'Main Avenue, 987',
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
        url: '#video',
      },
      {
        name:'services',
        icon: '',
        url: '#services',
      },
      {
        name:'team',
        icon: '',
        url: '#team',
      },
      {
        name:'blog',
        icon: '',
        url: '#news',
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
        img: 'team-2.jpg',
        name: 'Emma Lopez',
        position: 'chief marketing',
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
        img: 'team-4.jpg',
        name: 'T.Johnson',
        position: 'ceo & president',
        facebook: '#',
        twitter: '#',
        linkedin: '#',
      },
    ],
    articles: [
      {
        img: 'news-1.jpg',
        author: 'Andrea Miller',
        time: '2 Days Ago',
        title: 'Increasing creativity is possible for everyone',
        about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
      },
      {
        img: 'news-2.jpg',
        author: 'John Smith',
        time: '9 Days Ago',
        title: 'Because market research is part of the business plan',
        about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
      },
      {
        img: 'news-3.jpg',
        author: 'Andrea Miller',
        time: '16 Days Ago',
        title: 'Working from home is now a trend',
        about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
      },
    ],
    aboutList: [
      {
        name: 'The Company',
        url: '#',
      },
      {
        name: 'Institutional',
        url: '#',
      },
      {
        name: 'Social & Events',
        url: '#',
      },
      {
        name: 'Innovation',
        url: '#',
      },
      {
        name: 'Environment',
        url: '#',
      },
      {
        name: 'Technology',
        url: '#',
      },
    ],
    servicesList: [
      {
        name: 'Audit & Assurance',
        url: '#',
      },
      {
        name: 'Financial Advisory',
        url: '#',
      },
      {
        name: 'Analytics and M&A',
        url: '#',
      },
      {
        name: 'Middle Marketing',
        url: '#',
      },
      {
        name: 'Legal Consulting',
        url: '#',
      },
      {
        name: 'Regulatory Risk',
        url: '#',
      },
    ],
    supportList: [
      {
        name: 'Responsibility',
        url: '#',
      },
      {
        name: 'Terms of Use',
        url: '#',
      },
      {
        name: 'About Cookies',
        url: '#',
      },
      {
        name: 'Privacy Policy',
        url: '#',
      },
      {
        name: 'Accessibility',
        url: '#',
      },
      {
        name: 'Information',
        url: '#',
      },
    ],
    sideWindow: false,
    registerWindow: false,
  },
  mounted: function () {
    // Cambio jumbtron background e testo
    setInterval(() => {
      if (this.currentIndex < this.jumbtron.length - 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }
    }, 10000)

    // Nascondo top nav, sposto bottom nav al scroll e al cambio viewport width
    let prevScrollpos = 0;
    let topNav = document.getElementsByClassName('navbar-top');
    let contact = document.getElementsByClassName('contacts');
    let jumbo = document.getElementsByClassName('jumbtron');
    let bottomNav = document.getElementsByClassName('navbar-bottom');

    // Prendo oggetto media query
    let widthCondition = window.matchMedia("(min-width: 992px)");
    // Chiamo la funzione per l'effetto sulla nav e passo il parametro
    fixedNav(widthCondition);
    // Fai partire la funzione al cambio dello stato
    widthCondition.addListener(fixedNav);

    function fixedNav(x) {
      if (x.matches) {
        let currentScrollPos = window.pageYOffset;
        mobileStyle(currentScrollPos);

        window.onscroll = function() {
          let currentScrollPos = window.pageYOffset;
          mobileStyle(currentScrollPos);
        }
      } else {
        let currentScrollPos = window.pageYOffset;
        desktopStyle(currentScrollPos);

        window.onscroll = function() {
          let currentScrollPos = window.pageYOffset;
          desktopStyle(currentScrollPos);
        }
      }
    }

    // Cambiamenti della nav nel desktop version
    function desktopStyle(position) {
      if (prevScrollpos == position) {
        contact[0].style.display = "none";
        topNav[0].style.height = "60px";
        topNav[0].style.display = "none";
        bottomNav[0].style.top = "0";
        jumbo[0].style.margin = "0";
      } else {
        contact[0].style.display = "none";
        topNav[0].style.height = "70px";
        topNav[0].style.display = "flex";
        bottomNav[0].style.top = "0";
        jumbo[0].style.margin = "0";
      }
    }

    // Cambiamenti della nav nel mobile/tablet version
    function mobileStyle(position) {
      if (prevScrollpos == position) {
        topNav[0].style.display = "flex";
        contact[0].style.display = "flex";
        topNav[0].style.height = "60px";
        bottomNav[0].style.top = "80px";
      } else {
        topNav[0].style.display = "flex";
        contact[0].style.display = "none";
        topNav[0].style.height = "70px";
        bottomNav[0].style.top = "0";
      }
    }
  },
  methods: {
    // Jumbtron slider
    changeJumbo: function (index) {
      this.currentIndex = index;
    },
    // Slide in effect > sign in/menu window
    showWindow: function (e) {
      if (e.target.className == 'fas fa-bars') {
        this.sideWindow = true;
        document.getElementsByClassName('hamburger-menu')[0].style.right = '0';
      } else {
        this.sideWindow = true;
        document.getElementsByClassName('sign-in')[0].style.right = '0';
      }
    },
    // Slide out effect > sign in/register/menu window
    hideWindow: function (e) {
      if (e.target.parentElement.className == 'sign-in') {
        this.sideWindow = false;
        document.getElementsByClassName('sign-in')[0].style.right = '-500px';
      } else if (e.target.parentElement.className == 'register') {
        this.registerWindow = false;
        document.getElementsByClassName('register')[0].style.right = '-500px';
      } else {
        this.registerWindow = false;
        document.getElementsByClassName('hamburger-menu')[0].style.right = '-500px';
      }
    },
    // Al click chiudo sign in window e faccio vedere register e viceversa
    changeWindow: function (e) {
      if (e.target.innerHTML == 'Register Now.') {
        this.sideWindow = false;
        document.getElementsByClassName('sign-in')[0].style.right = '-500px';
        setTimeout(() => {
          this.registerWindow = true;
          document.getElementsByClassName('register')[0].style.right = '0';
        }, 500);
      } else {
        this.registerWindow = false;
        document.getElementsByClassName('register')[0].style.right = '-500px';
        setTimeout(() => {
          this.sideWindow = true;
          document.getElementsByClassName('sign-in')[0].style.right = '0';
        },500);
      }
    }
  }
});
