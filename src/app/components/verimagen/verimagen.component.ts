import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { imagenService } from 'src/app/services/imagen.service';

@Component({
  selector: 'app-verimagen',
  templateUrl: './verimagen.component.html',
  styleUrls: ['./verimagen.component.css']
})
export class VerimagenComponent implements OnInit {
  datos: any;
  otros: any;

  constructor( private router: Router,
    private route: ActivatedRoute,private imagenServicem:imagenService) { }
  id
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.verdatos()
  }
  verdatos(){
    this.imagenServicem.getById2(this.id).subscribe(response => {
      this.datos=response
      console.log(response)
    });
  }
  detalles(id){
    console.log(id)
    this.imagenServicem.getById(id).subscribe(response => {
      this.otros=response
      console.log(response)
    });
  }
}
