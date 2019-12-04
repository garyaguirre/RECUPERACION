import { Component, OnInit } from '@angular/core';
import { CatalogoService } from 'src/app/services/catalogo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  catalogos
  constructor(private catalogoService: CatalogoService) { }

  ngOnInit() {
    this.catalogolist()

  }
  catalogolist(){
    this.catalogoService.getList().subscribe(response=>{
      this.catalogos = response;
    })
  }
}
