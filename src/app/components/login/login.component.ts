import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private authenticationService: AuthenticationService, private ruta:Router) {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]]
    });
  }

  ngOnInit(): void {
  }

  get Username() {
    return this.form.get('username');
  }
  get Password() {
    return this.form.get('password');
  }

  onEnviar(event:Event){
    event.preventDefault();
    let usuario:User = new User();
    usuario.username = this.form.value.username;
    usuario.password = this.form.value.password;

    if (this.form.valid) {
      this.authenticationService.Login(usuario).subscribe(
        (data) => {
          console.log("data: " + JSON.stringify(data));
          this.ruta.navigate(['/portfolio']);
        }
      );
    }
  }

}
