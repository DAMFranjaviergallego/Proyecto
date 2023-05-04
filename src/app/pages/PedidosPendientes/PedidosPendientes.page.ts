import { Component, ErrorHandler, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';


@Component({
  selector: 'app-PedidosPendientes',
  templateUrl: './PedidosPendientes.page.html',
  styleUrls: ['./PedidosPendientes.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ComponentsModule]
})
export class PedidosPendientes implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  

}


