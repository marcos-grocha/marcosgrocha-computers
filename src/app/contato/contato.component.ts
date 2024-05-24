import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  formContato = this.fb.group({
    nome: ['', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20)
    ]],
    assunto: ['', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(50)
    ]],
    telefone: ['', [
      Validators.required,
      Validators.minLength(11),
      Validators.maxLength(20)
    ]],
    email: ['', [
      Validators.required,
      Validators.email
    ]],
    mensagem: ['', [
      Validators.required,
      Validators.minLength(20),
      Validators.maxLength(99)
    ]]
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  enviarFormulario() {
    alert("A mensagem foi enviada!");
    this.formContato.reset();
  }
}
