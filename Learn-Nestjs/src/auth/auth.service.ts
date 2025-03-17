import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService{
    constructor(
        private userService: UsersService,
        private jwtService  : JwtService
    ){}

    async validateUser(email : string, password: string): Promise<any>{
        const user = await this.userService.validateUser(email, password)
        if(user){
            return user
        }
        return null
    }

    async login(user: any){
        const payload = {email: user.email, sub: user.id}
        return {
            access_token: this.jwtService.sign(payload)
        }
    }

    async register(dto: any){
        return this.userService.createUser(dto)
    }
}