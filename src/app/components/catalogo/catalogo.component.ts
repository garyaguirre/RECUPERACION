import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CatalogoService } from 'src/app/services/catalogo.service'

	// de paso poner tu services ejemplo :  import { nombredetuservices } from 'src/app/services/nombredetuservices'
@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  constructor(private catalogoService: CatalogoService,private formBuilder: FormBuilder ) { 
  }
  catalogos
  catalogo:FormGroup
  ngOnInit() {
    this.catalogolist()
    this.catalogo = this.formBuilder.group({
      id:  [''],
      titulo: ['', [Validators.required]],
      codigo: ['', [Validators.required]],
      precio: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
  });
  this.borrar();
    
}
save(){
console.log(this.catalogo.value)
if(this.catalogo.value.id == null){
  this.catalogoService.add(this.catalogo.value).subscribe(response=>{
    this.catalogolist();
  });
}else{
  this.catalogoService.update( this.catalogo.value.id,this.catalogo.value).subscribe(response=>{
    this.catalogolist();
  });
}
this.borrar();
}
borrar(){
this.catalogo.reset();
}
catalogolist(){
  this.catalogoService.getList().subscribe(response=>{
    this.catalogos = response;
  })
}
delete(id){
  this.catalogoService.delete(id).subscribe(response=>{
    this.catalogolist()
  })
  }
}
