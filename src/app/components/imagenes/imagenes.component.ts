import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { imagenService } from 'src/app/services/imagen.service'


@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.css']
})
export class ImagenesComponent implements OnInit {
  constructor(private imagenService: imagenService,private formBuilder: FormBuilder ) { 
  }
  imagenes
  imagen:FormGroup
  ngOnInit() {
    this.imagenList()
    this.imagen = this.formBuilder.group({
      id:  [''],
      titulo: ['', [Validators.required]],
      detalles: ['', [Validators.required]],
      url_imagen: ['', [Validators.required]],
      id_youtube: ['', [Validators.required]],
      url_audio: ['', [Validators.required]],
      principal: ['', [Validators.required]],
      catalogosid: ['', [Validators.required]],
  });
  this.borrar();
    
}
save(){
  console.log(this.imagen.value)
if(this.imagen.value.id == null){
  this.imagenService.add(this.imagen.value).subscribe(response=>{
    this.imagenList();
  });
}else{
  this.imagenService.update( this.imagen.value.id,this.imagen.value).subscribe(response=>{
    this.imagenList();
  });
}
this.borrar();
}
borrar(){
this.imagen.reset();
}
imagenList(){
  this.imagenService.getList().subscribe(response=>{
    this.imagen = response;
  })
}
}