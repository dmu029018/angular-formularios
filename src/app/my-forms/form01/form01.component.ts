import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/classes/user';

@Component({
  selector: 'app-form01',
  templateUrl: './form01.component.html',
  styleUrls: ['./form01.component.scss']
})
export class Form01Component implements OnInit {

  placeholder = {
    "username": "Nombre de usuario (mín. 5 caracteres)",
    "userpass": "Contraseña de usuario (mín. 5 caracteres)"
  };

  usernameReceived = '';
  userpassReceived = '';

  constructor() {

  }

  ngOnInit() {

  }

  /**
   * Se llama al enviar el formulario.
   *
   * @param username
   * @param password
   */
  onFormSubmit(usernameField, userpassField) {
    this.usernameReceived = usernameField.value;
    this.userpassReceived = userpassField.value;

  }


}
