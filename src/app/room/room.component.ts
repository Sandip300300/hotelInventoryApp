import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css'],
})
export class RoomComponent implements OnInit {
  hotelName = 'My Hotel';
  selectedRoom!:RoomList;
  numberOfRoom = 10;
  hideRoom = false;
  roomlist:RoomList[]=[];
  rooms: Room = {
    totalRoms: 20,
    availableRooms:10,
    bookedRooms: 5,
  };


  constructor() {}

  ngOnInit(): void {
   this.roomlist= [
      {
        roomNumber:101,
        roomType: 'Delux Room',
        amenities: 'Air Condition,Free Wifi,Tv,Bathroom',
        price: 500,
        photos:
          'https://www.thespruce.com/thmb/iMt63n8NGCojUETr6-T8oj-5-ns=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/PAinteriors-7-cafe9c2bd6be4823b9345e591e4f367f.jpg',
        checkinTime: new Date('11-Nov-2021'),
        checkoutTime: new Date('12-Nov-2021'),
        rating:5,
      },
      {
        roomNumber:102,
        roomType: 'Private suit Room',
        amenities: 'Air Condition,Free Wifi,Tv,Bathroom',
        price: 1000,
        photos:
          'https://www.thespruce.com/thmb/iMt63n8NGCojUETr6-T8oj-5-ns=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/PAinteriors-7-cafe9c2bd6be4823b9345e591e4f367f.jpg',
        checkinTime: new Date('11-Nov-2021'),
        checkoutTime: new Date('12-Nov-2021'),
        rating:4.7
      },
      {
        roomNumber:103,
        roomType: 'Single',
        amenities: 'Air Condition,Free Wifi,Tv,Bathroom',
        price: 200,
        photos:
          'https://www.thespruce.com/thmb/iMt63n8NGCojUETr6-T8oj-5-ns=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/PAinteriors-7-cafe9c2bd6be4823b9345e591e4f367f.jpg',
        checkinTime: new Date('11-Nov-2021'),
        checkoutTime: new Date('12-Nov-2021'),
        rating:3.6
      },
    ];
  }

  toggle() {
    this.hideRoom = !this.hideRoom;
  }
  selectRoom(Room:RoomList){
    this.selectedRoom=Room;
  }
  addRoom(){
    const room:RoomList={
      roomNumber:105,
        roomType: 'Single Room',
        amenities: 'Air Condition,Free Wifi,Tv,Bathroom',
        price: 500,
        photos:
          'https://www.thespruce.com/thmb/iMt63n8NGCojUETr6-T8oj-5-ns=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/PAinteriors-7-cafe9c2bd6be4823b9345e591e4f367f.jpg',
        checkinTime: new Date('11-Nov-2021'),
        checkoutTime: new Date('12-Nov-2021'),
        rating:6,
    }
    this.roomlist.push(room);
  }
}
