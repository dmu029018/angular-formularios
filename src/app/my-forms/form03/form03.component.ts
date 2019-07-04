import { Component, OnInit } from '@angular/core';
import { FullUser } from 'src/app/shared/classes/full-user';

@Component({
  selector: 'app-form03',
  templateUrl: './form03.component.html',
  styleUrls: ['./form03.component.scss']
})

export class Form03Component implements OnInit {

  botonDesactivado = false;

  public placeholder = {
    "username": "Nombre de usuario (mín. 5 caracteres)",
    "password": "Contraseña de usuario (mín. 5 caracteres)",
    "realname": "Nombre completo (mín. 5 caracteres)",
    "email": "Dirección de correo electrónico (mín. 5 caracteres)",

  };

  public userData = {
    realname: '',
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    continent: '0',
    gender: 'H',
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
  user: FullUser;

  constructor() {

   }

  ngOnInit() {
  }

  /**
   * Comprueba si el botón de enviar debe estar activado o no
   */
  checkButton() {
    this.botonDesactivado = (
      this.userData.realname === '' ||
      this.userData.username === '' ||
      this.userData.password === '' ||
      this.userData.confirmPassword === '' ||
      this.userData.password !== this.userData.confirmPassword ||
      this.userData.email === '' ||
      this.userData.continent === '0' ||
      this.userData.upTo18 === false
    );
  }


  saveUser() {
    this.user = new FullUser();
    this.user.setRealName(this.userData.realname);
    this.user.setUsername(this.userData.username);
    this.user.setPassword(this.userData.password);
    this.user.setEmail(this.userData.email);
    this.user.setGender(this.userData.gender);
    this.user.setContinent(this.userData.continent);
  }

}
