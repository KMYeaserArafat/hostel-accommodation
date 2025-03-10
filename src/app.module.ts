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
import { AuthModule } from './auth/auth.module';
import { CartController } from './cart/cart.controller';
import { CartService } from './cart/cart.service';
import { CartModule } from './cart/cart.module';
import { MailController } from './mail/mail.controller';
import { MailService } from './mail/mail.service';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [RoomModule, NoticeModule, VisitorModule, LockerModule, ParkingModule, AuthModule, CartModule, MailModule],
  // controllers: [CartController, MailController],
  // providers: [CartService, MailService],
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





