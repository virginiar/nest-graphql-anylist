import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as argon from 'argon2';

import { AuthResponse } from './types/auth-response.types';
import { UsersService } from '../users/users.service';
import { LoginInput, SignUpInput } from './dtos/inputs';

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

  async login(loginInput: LoginInput): Promise<AuthResponse> {
    const { email, password } = loginInput;
    const user = await this.usersService.findOneByEmail(email);

    const validPassword = await argon.verify(user.password, password);
    if (!validPassword)
      throw new UnauthorizedException('Credentials are not valid (password)');

    // TODO
    const token = 'ABC123';

    return {
      token,
      user,
    };
  }
}
