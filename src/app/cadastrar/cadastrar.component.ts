import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AuthService } from '../service/auth.service';
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuario: Usuario = new Usuario
  usuarioLogin: UsuarioLogin = new UsuarioLogin()
  confirmSenha: string
  tipoUsuario: string

  constructor(
    private authService: AuthService,
    private router: Router,
    
    private alertas: AlertasService,

  ) { }

  ngOnInit() {
    window.scroll(0, 0)
  }

  confirmarSenha(event: any) {
    this.confirmSenha = event.target.value

  }

  tiparUsuario(event: any) {
    this.tipoUsuario = event.target.value
  }




  

  cadastrar() {
    this.usuario.tipo = this.tipoUsuario

    if (this.usuario.senha != this.confirmSenha){
      this.alertas.showAlertDanger('As senhas não coincidem. Digite corretamente!')
    }else{
      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario)=>{
            this.usuario = resp
            this.router.navigate(['/entrar'])
            this.alertas.showAlertInfo('Cadastro realizado com sucesso!')
          })
    }
  } 
      }
