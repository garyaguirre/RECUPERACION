import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { imagenService } from 'src/app/services/imagen.service'
import Swal from'sweetalert2';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.css']
})
export class ImagenesComponent implements OnInit {
  constructor(private imagenService: imagenService,private formBuilder: FormBuilder) { 
  }
  titularAlerta:string='';
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
if(this.imagenForm.value.id == null || this.imagenForm.value.id == ""){
  console.log("add")
  this.imagenService.add(this.imagenForm.value).subscribe(response=>{
    this.imagenList();
    const hola = response
    if(hola.success == true){
      console.log("imagen creada")
      Swal.fire(
        'Imagen Creada',
        'Se creó la imagen',
        'success'
      )
    }else{
      console.log("error en poner imagen revise si existe una imagen principal");
      Swal.fire(
        'Hay un error!',
        'Revise si existe una imagen principal',
        'error'
      )
    }
  });
}else{
  console.log("update")
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