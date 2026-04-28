import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as argon from 'argon2';
import { JwtService } from '@nestjs/jwt';

import { AuthResponse } from './types/auth-response.types';
import { UsersService } from '../users/users.service';
import { LoginInput, SignUpInput } from './dtos/inputs';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  private getJwtToken(userId: string) {
    return this.jwtService.sign({ id: userId });
  }

  async signUp(signUpInput: SignUpInput): Promise<AuthResponse> {
    // TODO: Crear usuario
    const user = await this.usersService.create(signUpInput);

    const token = this.getJwtToken(user.id);

    return { token, user };
  }

  async login(loginInput: LoginInput): Promise<AuthResponse> {
    const { email, password } = loginInput;
    const user = await this.usersService.findOneByEmail(email);

    const validPassword = await argon.verify(user.password, password);
    if (!validPassword)
      throw new UnauthorizedException('Credentials are not valid (password)');

    const token = this.getJwtToken(user.id);

    return {
      token,
      user,
    };
  }
}
