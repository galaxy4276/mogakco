import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtPayload } from './jwt.payload';

@Injectable()
class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: Request) => {
          return request?.cookies['x-token'];
        },
      ]),
      secretOrKey: 'ACCESS_TOKEN_!@#',
    });
  }

  async validate(payload: any) {
    const { email }: JwtPayload = payload;
    return { email };
  }
}

export default JwtStrategy;
