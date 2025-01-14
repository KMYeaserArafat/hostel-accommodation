import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { RoomService } from './room.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('room')
export class RoomController {
    constructor(private readonly roomService: RoomService) {}

    
    // Basic Hostel Room Home Page 
    @Get()
    getRoom_HomePae():string{
        return this.roomService.setRoom_HomePage(); 
    }


    // Show All Room, 
    @Get('/showAllRoom')
    getAll_Room(){
        return this.roomService.getAll_Room(); 
    }
    // Search Just One Room, 
    @Get('/searchRoom/:id')
    getSearchRoom(@Param('id') id:string){
        return this.roomService.getSearchRoom(id); 
    }

    // Add new Room by admin 
    @Post('/addNewRoom')
    @UseGuards(AuthGuard('jwt'))
    addNewRoom(@Body() data:any){
        return this.roomService.addNewRoom(data); 
    }
    // Update Room Information by admin 
    @Put('/updateRoom/:id')
    @UseGuards(AuthGuard('jwt'))
    updateRoom(@Param('id') updateId:string, @Body() updatedData:any){
        return this.roomService.updateRoom(updateId, updatedData); 
    }

    // Delete Room by admin, 
    @Delete('/deleteRoom/:id')
    @UseGuards(AuthGuard('jwt'))
    deleteRoom(@Param('id') id:string){
        return this.roomService.deleteRoom(id); 
    }
}
