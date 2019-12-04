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
  imagenForm:FormGroup
  ngOnInit() {
    this.imagenList()
    this.imagenForm = this.formBuilder.group({
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
  console.log(this.imagenForm.value)
if(this.imagenForm.value.id == null){
  this.imagenService.add(this.imagenForm.value).subscribe(response=>{
    this.imagenList();
  });
}else{
  this.imagenService.update( this.imagenForm.value.id,this.imagenForm.value).subscribe(response=>{
    this.imagenList();
  });
}
this.borrar();
}
borrar(){
this.imagenForm.reset();
}
imagenList(){
  this.imagenService.getList().subscribe(response=>{
    this.imagenes = response;
  })
}
delete(id){
  this.imagenService.delete(id).subscribe(response=>{
    this.imagenList()
  })
  }
}