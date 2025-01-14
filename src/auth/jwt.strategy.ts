import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Blacklist } from './blacklist.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(Blacklist)
        private blacklistRepository: Repository<Blacklist>, 
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'secretKey',
    });
  }

  // async validate(payload: any) {
  //   return { id: payload.id, username: payload.username };
  // }

  async validate(payload: any) {
    const isBlacklisted = await this.blacklistRepository.findOne({ where: { token: payload } });
    if (isBlacklisted) {
      throw new UnauthorizedException('Token is invalidated.');
    }
    return { id: payload.id, username: payload.username };
  }
}
