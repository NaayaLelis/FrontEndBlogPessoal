import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AuthService } from '../service/auth.service';
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class  EntrarComponent implements OnInit {

  usuarioLogin = new UsuarioLogin 

  constructor(

  private auth : AuthService,
  private router :Router,
  private alertas: AlertasService,
  ){}

  ngOnInit() {
    window.scroll(0,0)
  }

  entrar(){
    this.auth.entrar(this.usuarioLogin).subscribe((resp: UsuarioLogin)=>{
      this.usuarioLogin = resp

    
          environment.token= this.usuarioLogin.token
            environment.nome = this.usuarioLogin.nome
            environment.foto = this.usuarioLogin.foto
            environment.id = this.usuarioLogin.id
            environment.tipo= this.usuarioLogin.tipo

            console.log(environment.token)
            console.log(environment.nome)
            console.log(environment.foto)
            console.log(environment.id)
            

            this.router.navigate(['/inicio'])
          }, erro=> {
            if(erro.status == 401){
              this.alertas.showAlertDanger('Email e/ou senha incorretos. Digite novamente.')
      }
    })

}
}
