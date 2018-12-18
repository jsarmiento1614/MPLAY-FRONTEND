import { Component, OnInit, Input } from '@angular/core';
import { LoginUser } from 'src/app/shared/model/login-user';
import { AutenticacionService } from 'src/app/shared/service/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginUser: LoginUser;
  constructor(private Autentificacion: AutenticacionService) {
    this.Autentificacion = Autentificacion;
   }

  ngOnInit() {
    this.loginUser = new LoginUser();
  }

  login(): void {
    this.Autentificacion.login(this.loginUser)
      .subscribe((data: any) => {
        localStorage.setItem('Token', data.access_token);
        localStorage.setItem('username', data.username);
      }, error => alert('Error'));
  }
}
