import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'tabs/account',
        // loadChildren: () => import('../app/pages/avatar/avatar.page').then((c) => c.AvatarPage),
      },
    ]),
  ]
})
export class AppModule { }
