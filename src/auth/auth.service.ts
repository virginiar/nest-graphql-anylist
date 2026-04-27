import { Injectable } from '@nestjs/common';
import { AuthResponse } from './types/auth-response.types';
import { SignUpInput } from './dtos/inputs/signup-input';

@Injectable()
export class AuthService {
  constructor() {}

  async signUp(signUpInput: SignUpInput): Promise<AuthResponse> {
    console.log({ signUpInput });
    // return {
    //     token: 'adasd',
    //     user: new User()
    // }

    throw new Error('No implementado');
  }
}
