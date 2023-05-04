import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-AccionesComerciales',
  templateUrl: './AccionesComerciales.page.html',
  styleUrls: ['./AccionesComerciales.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AccionesComerciales implements OnInit {
  favorito: boolean=false

  constructor() { }

  ngOnInit() {
  }

  onClick(){
this.favorito = !this.favorito
  }

}
