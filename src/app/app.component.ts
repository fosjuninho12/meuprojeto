import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome: String = 'Carlos';

  add(){
    console.log(`${this.nome} foi adicionado.`);
  }

}