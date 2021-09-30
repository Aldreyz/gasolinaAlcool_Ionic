import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public resultado:String="resultado"
  public precoAlcool: number
  public precoGasolina: number


  calcular(){
     if(this.precoAlcool && this.precoGasolina){
       
        var pAlcool = this.precoAlcool
        var pGasolina = this.precoGasolina

        var res = pAlcool / pGasolina 

        if(res>=0.7){
          this.resultado = "Melhor utilizar gasolina"
        }else{
          this.resultado = "Melhor utilizar alcool"
        }

     }else{
        this.resultado="Preencha corretamente os campos!"
     }
  }

}