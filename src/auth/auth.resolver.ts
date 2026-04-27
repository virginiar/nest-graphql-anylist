import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { SignUpInput } from './dtos/inputs/signup-input';
import { AuthResponse } from './types/auth-response.types';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => AuthResponse, { name: 'signup' })
  async signUp(
    @Args('signUpInput') signUpInput: SignUpInput,
  ): Promise<AuthResponse> {
    return this.authService.signUp(signUpInput);
  }

  // @Mutation(, { name: 'login' })
  // async login(
  //   /** loginInput */
  // ): Promise</** ??? */> {
  //   // return this.authService.login(/** ??? */)
  // }

  // @Query(, { name: 'revalidate' })
  // async revalidateToken() {
  //   // return this.authService.revalidateToken() /**??? */
  // }
}
