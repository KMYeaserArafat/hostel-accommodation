import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ParkingService } from './parking.service';
import { parkingData_type } from 'src/Custom.dataType';

@Controller('parking')
export class ParkingController {
    constructor(private readonly parkingService:ParkingService) {}

    // 1. Register New Parking
    @Post('/registerNewParking')
    Register_New_Parking(@Body() parkingData:parkingData_type){
        return this.parkingService.Register_New_Parking(parkingData); 
    }



    // 2. Show Parking All information - Admin
    @Get()
    ShowAllParkingInfo_Admin(){
        return this.parkingService.ShowAllParkingInfo_Admin(); 
    }


    // 3. Show Just free parking Information - User
    @Get('/showParkingInfo_user')
    ShowParkingInfo_User(){
        return this.parkingService.ShowParkingInfo_User(); 
    }


    // 4. Search All Parking Information - Admin,
    @Get('/searchParking_Admin/:id')
    SearchAllParking_Admin(@Param('id') parkingId:string){
        return this.parkingService.SearchAllParking_Admin(parkingId); 
    }


    // 5. Search free Parking Information - User
    @Get('/searchParking_User/:id')
    SearchParking_User(@Param('id') searchId:string){
        return this.parkingService.SearchParking_User(searchId); 
    }


    // 6. Update Parking Information - Admin,
    @Put('/update_Parking_Info_Admin/:id')
    UpdateInfo_Admin(@Param('id') parkingId:string, @Body() updateData:parkingData_type){
        return this.parkingService.UpdateInfo_Admin(parkingId, updateData); 
    }
    
    // 7. Reserved only free Parking -User
    @Put('/update_Parking_Info_User/:id')
    UpdateInfo_User(@Param('id') parkingId:string, @Body() updateData:parkingData_type){
        return this.parkingService.UpdateInfo_User(parkingId, updateData); 
    }


    // 8. Delete Parking Information - admin
    @Delete('/removeParkingInfo_Admin/:id')
    Remove_Parking_Info_Admin(@Param('id') parkingID:string){
        return this.parkingService.Remove_Parking_Info_Admin(parkingID); 
    }
    
    
    
    
    
    
}