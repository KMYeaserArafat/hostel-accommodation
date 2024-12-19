import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoomController } from './room/room.controller';
import { RoomService } from './room/room.service';
import { RoomModule } from './room/room.module';
import { NoticeController } from './notice/notice.controller';
import { NoticeService } from './notice/notice.service';
import { NoticeModule } from './notice/notice.module';
import { VisitorController } from './visitor/visitor.controller';
import { VisitorService } from './visitor/visitor.service';
import { VisitorModule } from './visitor/visitor.module';
import { LockerController } from './locker/locker.controller';
import { LockerService } from './locker/locker.service';
import { LockerModule } from './locker/locker.module';
import { ParkingController } from './parking/parking.controller';
import { ParkingService } from './parking/parking.service';
import { ParkingModule } from './parking/parking.module';

@Module({
  imports: [RoomModule, NoticeModule, VisitorModule, LockerModule, ParkingModule],
  // controllers: [ParkingController],
  // providers: [ParkingService],
  // controllers: [LockerController],
  // providers: [LockerService],
  // controllers: [VisitorController],
  // providers: [VisitorService],
  // controllers: [NoticeController],
  // providers: [NoticeService],
  // controllers: [AppController, RoomController],
  // providers: [AppService, RoomService],
})
export class AppModule {}
