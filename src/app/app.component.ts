import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Componente } from './Interfaces/interfaces';
import { DataService } from './services/data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule,FormsModule]
})

export class AppComponent implements OnInit{

  componentess: Observable<Componente[]> | Componente | any


  ngOnInit() {
    this.componentess = this.dataService.getMenuOpts()
  }
  constructor(private dataService: DataService) {}
}



