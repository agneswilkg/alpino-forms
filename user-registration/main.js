Vue.use(window.vuelidate.default);
const { required, minLength, numeric, maxLength, email, sameAs, alpha } = window.validators;



Vue.component('person', {
  template: '\
      <li style="padding-left: 20px">\
        <div class="row">\
          <div class="col-md-2">{{ name }} {{ surname}}</div>\
          <div class="col-md-1"><button class="btn btn-default btn-xs person" v-on:click="$emit(\'edit\')">Edytuj</button></div>\
          <div class="col-md-1"><button class="btn btn-default btn-xs person" v-on:click="$emit(\'remove\')">Usuń</button></div>\
        </div>\
        <br/>\
      </li>\
  ',
  props: ['name', 'surname']
});


new Vue({
  el: '#form',
  data: {
    email: '',
    password: '',
    repeatedPassword: '',
  	person: {
    	name: '',
      surname: '',
      pesel: '',
      phone: '',
      city: '',
      //postCode: '',
      street: '',
      number: '',
    },
    people: [
      {
        id: 1,
        name: 'harry',
        surname: 'dirty',
        city: 'atlanta'
      },
      {
        id: 2,
        name: 'adolf',
        surname: 'hitler',
        street: 'somewhere in germany'
      },
      {
        id: 3,
        name: 'alfred',
        surname: 'hitchcock'
      }
    ],
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(8),
      maxLength: maxLength(12)
    },
    repeatedPassword: {
      sameAs: sameAs('password')
    },
    person: {
      name: {
        required,
        alpha,
        minLength: minLength(3)
      },
      surname: {
        required,
        minLength: minLength(3)
      },
      pesel: {
      	required,
        numeric,
        minLength: minLength(11),
        maxLength: maxLength(11)
      },
      city: {
        required,
        minLength: minLength(3)
      },
      street: {
        required,
        minLength: minLength(3)
      },
      number: {
        required,
        numeric,
      }
    }
  },
  methods: {
    //Adds new person to the account
    addPerson: function (e) {
      e.preventDefault()
      this.people.push({
      	name: this.person.name,
        surname: this.person.surname,
        pesel: this.person.pesel,
        phone: this.person.phone,
        city: this.person.city,
        //postCode: this.person.postCode,
        street: this.person.street,
        number: this.person.number
      })
      this.person.name = '';
      this.person.surname= '';
      this.person.pesel = '';
      this.person.phone = '';
    },
    //Edits the info about person
    edit: function(person, index){
      this.person.name = person.name;
      this.person.surname = person.surname;
      this.person.pesel = person.pesel;
      this.person.phone = person.phone;
      this.person.city = person.city;
      //this.person.postCode = person.PostCode;
      this.person.street = person.street;
      this.person.number = person.number;
      this.people.splice(index, 1)
    },
    submit: function(){
      alert('Formularz został wysłany!')
    }
  }
})
