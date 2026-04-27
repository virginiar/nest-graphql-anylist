import { Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(, { name: 'signup' })
  async signUp(
    /** signUpInput */
  ): Promise</** ??? */> {
    // return this.authService.signUp(/** ??? */)
  }

  @Mutation(, { name: 'login' })
  async login(
    /** loginInput */
  ): Promise</** ??? */> {
    // return this.authService.login(/** ??? */)
  }

  @Query(, { name: 'revalidate' })
  async revalidateToken() {
    // return this.authService.revalidateToken() /**??? */
  }
}
