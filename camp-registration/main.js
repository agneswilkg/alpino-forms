Vue.use(window.vuelidate.default);
const { required, minLength, numeric, maxLength, email, sameAs, alpha } = window.validators;


new Vue({
  el: '#camps',
  data: {
  	date: '',
    camps: [{
      title: 'Obóz narciarski',
      date: '22/01/2018 - 05/02/2018',
      winter: true
    }, {
      title: 'Obóz robienia baniek mydlanych',
      date: '14/07/2018 - 28/07/2018',
      winter: false
    }, {
      title: 'Obóz jeździecki',
      date: '15/08/2018 - 29/08/2018',
      winter: false
    }, {
      title: 'Obóz w Górach',
      date: '11/02/2018 - 25/02/2018',
      winter: true
    }]
  },
  validations: {
    //add validations if neccessary
  },
  methods: {
    submit: function(){
      alert('Zapisałeś się na obóz! Yay!')
    }
  }
})
