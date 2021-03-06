import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import Joi from 'joi';
import UserVerify from 'models/entities/user.verify';
import User from '../models/entities/user';
import AuthModule from './auth.module';
import MailModule from './mail.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'test', 'production')
          .required(),
        DATABASE_NAME: Joi.string().required(),
        DATABASE_USER: Joi.string().required(),
        DATABASE_PASSWORD: Joi.string().required(),
        DATABASE_HOST: Joi.string().required(),
        DATABASE_PORT: Joi.number().required(),
        SERVER_PORT: Joi.number().required(),
      }),
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST as string,
      port: parseInt(process.env.DATABASE_PORT as string, 10),
      username: process.env.DATABASE_USER as string,
      password: process.env.DATABASE_PASSWORD as string,
      database: process.env.DATABASE_NAME as string,
      synchronize: process.env.NODE_ENV === 'development',
      logging: process.env.NODE_ENV === 'development',
      entities: [User, UserVerify],
    }),
    AuthModule,
    MailModule,
  ],
  controllers: [],
  providers: [],
})
export default class AppModule {}
