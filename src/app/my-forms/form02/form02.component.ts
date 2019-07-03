import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/classes/user';

@Component({
  selector: 'app-form02',
  templateUrl: './form02.component.html',
  styleUrls: ['./form02.component.scss']
})
export class Form02Component implements OnInit {

  public user: User = new User();

  public placeholder = {
    "username": "Nombre de usuario (mín. 5 caracteres)",
    "userpass": "Contraseña de usuario (mín. 5 caracteres)"
  };

  /**
   *
   */
  constructor() {

  }

  /**
   *
   */
  ngOnInit() {

  }


  /**
   * Se llama al enviar el formulario.
   *
   * @param username
   * @param password
   */
  onFormSubmit(formulario) {
    this.user.setUsername(formulario[0].value);
    this.user.setPassword(formulario[1].value);

  }

}
