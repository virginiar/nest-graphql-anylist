import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as argon from 'argon2';

import { User } from './entities/user.entity';
import { SignUpInput } from '../auth/dtos/inputs/signup-input';

@Injectable()
export class UsersService {
  private logger = new Logger('UsersService');

  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async create(signUpInput: SignUpInput): Promise<User> {
    try {
      const { password, ...userData } = signUpInput;
      // Generar el hash del password
      const hash = await argon.hash(password);
      // console.log(hash);
      const newUser = this.usersRepository.create({
        ...userData,
        password: hash,
      });

      return await this.usersRepository.save(newUser);
    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  async findAll(): Promise<User[]> {
    return [];
  }

  findOne(id: string): Promise<User> {
    throw new Error(`findOne method not implement`);
  }

  block(id: string): Promise<User> {
    throw new Error(`block method not implement`);
  }

  private handleDBErrors(error: any): never {
    this.logger.error(error);

    if (error.code === '23505') {
      throw new BadRequestException(error.detail.replace('Key', ''));
    }

    throw new InternalServerErrorException('Please check server logs');
  }
}
