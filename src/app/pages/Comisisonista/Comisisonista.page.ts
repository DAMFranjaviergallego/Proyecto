import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';

@Component({
  selector: 'app-Comisisonista',
  templateUrl: './Comisisonista.page.html',
  styleUrls: ['./Comisisonista.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ComponentsModule]
})
export class Comisisonista implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
