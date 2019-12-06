import { Component, OnInit } from '@angular/core';
import { CatalogoService } from 'src/app/services/catalogo.service';
import Swal from'sweetalert2';

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
  hol(){
    const ipAPI = '//api.ipify.org?format=json'

Swal.queue([{
  title: 'Your public IP',
  confirmButtonText: 'Show my public IP',
  text:
    'Your public IP will be received ' +
    'via AJAX request',
  showLoaderOnConfirm: true,
  preConfirm: () => {
    return fetch(ipAPI)
      .then(response => response.json())
      .then(data => Swal.insertQueueStep(data.ip))
      .catch(() => {
        Swal.insertQueueStep({
          icon: 'error',
          title: 'Unable to get your public IP'
        })
      })
  }
}])
  }
}
