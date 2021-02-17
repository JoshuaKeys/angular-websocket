import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatHomeComponent } from './components/chat-home/chat-home.component';
import { RouterModule, Routes } from '@angular/router';
import { WsService } from './services/ws.service';

const chatRoutes: Routes = [
  {
    path: '',
    component: ChatHomeComponent,
    children: [

    ]
  }
]

@NgModule({
  declarations: [ChatHomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(chatRoutes)
  ],
  providers: [
    WsService
  ]
})
export class ChatModule { }
