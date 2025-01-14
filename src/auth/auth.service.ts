import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Blacklist } from './blacklist.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Blacklist)
    private blacklistRepository: Repository<Blacklist>, 
    private jwtService: JwtService,
  ) {}

  async register(usermail:string,fullName: string,age:string,gender:string,phoneNumber: string,password: string): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = this.userRepository.create({ usermail,fullName,age,gender,phoneNumber, password: hashedPassword });
    return this.userRepository.save(user);
  }

  async login(usermail: string, password: string): Promise<{ token: string }> {
    const user = await this.userRepository.findOne({ where: { usermail } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const token = this.jwtService.sign({ id: user.id, usermail: user.usermail });
    return { token };
  }

  async logout(token: string) {
    const blacklist = this.blacklistRepository.create({ token });
    await this.blacklistRepository.save(blacklist);
    return {
      message: "logout Successfully"
    }
  }
}