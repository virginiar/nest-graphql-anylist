import { Injectable } from '@nestjs/common';
import { AuthResponse } from './types/auth-response.types';
import { SignUpInput } from './dtos/inputs/signup-input';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async signUp(signUpInput: SignUpInput): Promise<AuthResponse> {
    // TODO: Crear usuario
    const user = await this.usersService.create(signUpInput);

    // TODO: Crear JWT
    const token = 'ABC123';

    return { token, user };
  }
}
