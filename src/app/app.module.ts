import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { RoomComponent } from './room/room.component';
=======
import { RoomsComponent } from './rooms/rooms.component';
>>>>>>> bdb6117406fc492366ae3bb414c55e9cd9a98a7e

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    RoomComponent
=======
    RoomsComponent
>>>>>>> bdb6117406fc492366ae3bb414c55e9cd9a98a7e
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
