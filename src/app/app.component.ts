import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

// Recebe o retorno da API será inserido neste Observable
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})


export class AppComponent {

  title = 'teste-frontend-turn2c';

}
