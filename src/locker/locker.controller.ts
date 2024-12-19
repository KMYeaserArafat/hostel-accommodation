import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { LockerService } from './locker.service';
import { locker_Data, Reserve_Locker_type } from 'src/Custom.dataType';

@Controller('locker')
export class LockerController {
    constructor(private readonly lockerService: LockerService) {}
    

    // Show All Locker for admin, 
    @Get('/show_locker_admin')
    ShowAllLocker_Admin(){
       return this.lockerService.ShowAllLocker_Admin(); 
    }


    // Show Locker Status for user, 
    @Get()
    ShowAllLocker_User(){
       return this.lockerService.ShowAllLocker_User(); 
    }


    // Adding new locker - admin, 
    @Post('/add_New_Locker')
    Add_New_Locker(@Body() lockerData:locker_Data){
        return this.lockerService.Add_New_Locker(lockerData)
    }


    // Update locking information - admin, 
    @Put('/update_locker_Information_admin/:id')
    Update_locker_Info_Admin(@Param('id') lockerId:string, @Body() updateLockerData:locker_Data){
        return this.lockerService.update_Locker_Info_Admin(lockerId, updateLockerData); 
    }

    // book(Update) locker - user,
    @Put('/booking_locker_user/:id')
    Reserve_Locker(@Param('id') lockerId:string, @Body() booked_Data:Reserve_Locker_type){
        return this.lockerService.Reserved_locker_User(lockerId, booked_Data); 
    }
    
    
    // Search Locker by admin
    @Get('/search_Locker_Admin/:id')
    Search_Locker_Admin(@Param('id') search_Locker_Id:string){
        return this.lockerService.searchLocker_Admin(search_Locker_Id); 
    }



    // Search locker by user, 
    @Get('/search_Locker_User/:id')
    Search_Locker_User(@Param('id') search_Locker_Id:string){
        return this.lockerService.search_Locker_user(search_Locker_Id); 
    }


    // delete locker by admin, 
    @Delete('/delete_locker/:id')
    Delete_Locker_Admin(@Param('id') deleteId:string){
        return this.lockerService.delete_Locker(deleteId); 
    }

}
