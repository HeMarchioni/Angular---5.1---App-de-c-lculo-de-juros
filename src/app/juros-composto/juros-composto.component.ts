import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-juros-composto',
  templateUrl: './juros-composto.component.html',
  styleUrls: ['./juros-composto.component.css']
})


export class JurosCompostoComponent implements OnInit {

  formulario!: FormGroup;

  valorInicio: number = 0;
  taxa: number = 0;
  periodo: number = 0;
  valoresList = [];
  displayTable: string = 'd-none';  // -> display none na div da tabela para começar nao visível


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.formulario = this.formBuilder.group({   //-> fromGroup (construtor de FormBuilder
      inicio: [null ,[Validators.required,Validators.min(0.01)]],    // -> pode colocar a validação aqui
      taxa: [null,[Validators.required,Validators.min(0.01)]],
      periodo: [null,[Validators.required,Validators.min(1),Validators.pattern("^[1-9]\\d*$")]]
    })


  }

  onSubmit() {
    this.valorInicio = this.formulario.value.inicio;   // -> pega os valores das variável do input inicio
    this.taxa = this.formulario.value.taxa/100;  // -> taxa em %
    this.periodo = this.formulario.value.periodo;
    this.formulario.reset(); // -> reset o formulário
    this.valoresList = [];
    this.calculoJurosS();
    this.displayTable = 'd-block' // -> deixa a div da tabela visível

  }

  calculoJurosS() {
    for (let i = 1;i <= this.periodo;i++ ) {
      // @ts-ignore
      this.valoresList.push((this.valorInicio * Math.pow(1 + this.taxa , i)).toFixed(2));
    }
  }

  verificaValidTouched(campo: string | (string | number)[]) {
   // @ts-ignore
    return this.formulario.get(campo).invalid && this.formulario.get(campo).touched  // -> verifica o campo
  }


  aplicaCssErro(campo: any) {  // -> retorna o Css da validação
    return {
      'is-invalid': this.verificaValidTouched(campo)  // -> is-invalid (css padrão bootstrap)
    }
  }
}