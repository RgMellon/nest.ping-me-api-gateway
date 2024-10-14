import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(config: ConfigService) {
    const publicKey = config.get('JWT_PUBLIC_KEY');
    console.log('public', publicKey);

    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: Buffer.from(publicKey, 'base64'),
      algorithms: ['RS256'],
    });
  }

  async validate(payload: any) {
    if (!payload || !payload.sub || typeof payload.sub !== 'string') {
      throw new Error('Invalid token payload');
    }

    return { userId: payload.sub };
  }
}
