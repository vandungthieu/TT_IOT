import { ConflictException, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "src/prisma/prisma.service";
import { RegisterDto } from "./dto/register.dto";
import * as bcrypt from "bcrypt"
import { Prisma, User } from "@prisma/client";
import { LoginDto } from "./dto/login.dto";

@Injectable()
export class AuthService{
    constructor(
        private readonly prisma : PrismaService,
        private readonly jwtService : JwtService
    ){}

    async register(dto: RegisterDto){
        try{
            const hasedPassword = await bcrypt.hash(dto.password,10)
            return this.prisma.user.create({
                data: {
                    ...dto,
                    password: hasedPassword
                }
            })
        } catch(err){
            if(err instanceof Prisma.PrismaClientKnownRequestError){
                if(err.code == "P2002"){
                    throw new ConflictException("Email already exists")
                }
            }
            throw err
        }
    }


    // xác thực tài khoản
   async validateUser(email: string, password: string){
    const user = await this.prisma.user.findUnique({where:{email}})
    
    if(!user || !(await bcrypt.compare(password, user.password))){
        throw new UnauthorizedException('Invalid Email or Password');
    }
    
    const {password: _password, ...userData} = user
    return userData
   }

   //create token
   async createToken(user: any){
    const payload = {sub: user.id, email: user.email, role: user.role}
    return{
        access_token: this.jwtService.sign(payload),
        user
    }
   }
    
}