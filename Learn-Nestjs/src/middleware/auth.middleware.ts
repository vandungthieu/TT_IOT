import { Injectable, NestMiddleware, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class AuthMiddleware implements NestMiddleware{
    constructor(private jwtService: JwtService){}
    use(req: Request, res: Response, next: NextFunction) {
        const authHeader = req.headers.authorization
        if(!authHeader || !authHeader.startsWith('Bearer ')){
            throw new UnauthorizedException("Invalid authorization header")
        }
        const token = authHeader.split(' ')[1] // lấy token từ header

        let decoded: any;
        try{
            decoded = this.jwtService.verify(token) // xác thực token
            console.log('Decoded token:', decoded);

            // gán user vào request
            (req as any).user = decoded;
            next()
        }catch (err) {
            // Xử lý lỗi chi tiết
            if (err.name === 'TokenExpiredError') {
                throw new UnauthorizedException('Token has expired');
            } else if (err.name === 'JsonWebTokenError') {
                throw new UnauthorizedException('Invalid token');
            } else {
                throw new UnauthorizedException('Unable to authenticate token');
            }
        }
    }

}
