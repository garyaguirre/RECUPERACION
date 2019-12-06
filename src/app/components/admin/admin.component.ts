import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { adminService } from 'src/app/services/admin.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  adminService: any;

constructor(private catalogoService: adminService,private formBuilder: FormBuilder ) { 
}
  admin
  Admin:FormGroup
  ngOnInit() {
    this.adminlist()
    this.admin = this.formBuilder.group({
      id:  [''],
      titulo: ['', [Validators.required]],
      codigo: ['', [Validators.required]],
      precio: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
  });
  this.borrar();
    
}
save(){
console.log(this.admin.value)
if(this.admin.value.id == null){
  this.adminService.add(this.admin.value).subscribe(response=>{
    this.catalogolist();
  });
}else{
  this.adminService.update( this.admin.value.id,this.admin.value).subscribe(response=>{
    this.adminlist();
  });
}
this.borrar();
}
  catalogolist() {
    throw new Error("Method not implemented.");
  }
borrar(){
this.admin.reset();
}
adminlist(){
  this.adminService.getList().subscribe(response=>{
    this.admin = response;
  })
}
delete(id){
  this.adminService.delete(id).subscribe(response=>{
    this.adminlist()
  })
  }

  

}
