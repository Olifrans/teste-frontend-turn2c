import { Component, OnInit} from '@angular/core';


import { HttpClient } from '@angular/common/http';

// Recebe o retorno da API será inserido neste Observable
import { Observable } from 'rxjs';

@Component({
  selector: 'app-consumindo-api-dog',
  templateUrl: './consumindo-api-dog.component.html',
  styleUrls: ['./consumindo-api-dog.component.css']
})
export class ConsumindoApiDogComponent implements OnInit {

  
  // Variavél Observable que recebe o retorno da API, com padrão de notação Filandesa$
  public thecatapi$!: Observable<any>;
  // public pokemons$: Observable<any>;

  // Construtor para injetar o HttpClient
  constructor(private http: HttpClient) {}

  //Importação do OnInit
  ngOnInit(): void {
    //Teste debug retorno da API
    this.http
      .get(' https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_ RNcTkLvQrnHKkidM2j1e5ucxnGS4mS WIiyUmA47kc4b3HrDXyAt1B1Tx9ngZ n1WM ')
      .subscribe((fr) => console.log(fr));

    //Faz requisição no BackEnd
    this.thecatapi$ = this.http.get(
      'https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_ RNcTkLvQrnHKkidM2j1e5ucxnGS4mS WIiyUmA47kc4b3HrDXyAt1B1Tx9ngZ n1WM'     
     
    );


    // this.thecatapi$ = this.http.post('url', { id: 'PGDFRWCat' });
    
  }



  


  
}
