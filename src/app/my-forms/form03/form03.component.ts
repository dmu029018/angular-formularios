import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form03',
  templateUrl: './form03.component.html',
  styleUrls: ['./form03.component.scss']
})
export class Form03Component implements OnInit {

  public placeholder = {
    "username": "Nombre de usuario (mín. 5 caracteres)",
    "userpass": "Contraseña de usuario (mín. 5 caracteres)",
    "realName": "Nombre completo (mín. 5 caracteres)",
    "email": "Dirección de correo electrónico (mín. 5 caracteres)",

  };

  public userData = {
    id: '',
    username: '',
    password: '',
    signingUpDate: '',
    email: '',
    continent: '',
    gender: 'M',
    upTo18: false
  };

  public genders = {
    H: {
      label: 'Hombre',
      id: 'gender_H',
      value: 'H',
      name: 'genderOption',
      checked: false
    },
    M: {
      label: 'Mujer',
      id: 'gender_M',
      value: 'M',
      name: 'genderOption',
      checked: true
    }
  };

  public continents = [
    {
      value: '0',
      text: 'Selecciona continente',
      selected: true,
      disabled: true
    },
    {
      value: 'EU',
      text: 'Europa',
      selected: false,
      disabled: false
    },
    {
      value: 'AM',
      text: 'América',
      selected: false,
      disabled: false
    },
    {
      value: 'AS',
      text: 'Asia',
      selected: false,
      disabled: false
    },
    {
      value: 'AF',
      text: 'África',
      selected: false,
      disabled: false
    },
    {
      value: 'OC',
      text: 'Oceanía',
      selected: false,
      disabled: false
    },
    {
      value: 'AN',
      text: 'Antártida',
      selected: false,
      disabled: false
    }
  ];

  constructor() {

   }

  ngOnInit() {
  }

  checkButton() {

  }

  onFormSubmit(form) {

  }

}
