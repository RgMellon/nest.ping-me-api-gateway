import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { ProxyrmqModule } from 'src/proxyrmq/proxyrmq.module';
import { UsersService } from './users.service';

@Module({
  imports: [ProxyrmqModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
