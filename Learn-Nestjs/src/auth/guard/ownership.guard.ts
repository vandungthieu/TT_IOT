import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from "@nestjs/common";

@Injectable()
export class OwnershipGuard implements CanActivate{
    canActivate(context: ExecutionContext): boolean  {
        const request = context.switchToHttp().getRequest()
        const user = request.user // lấy user từ JWT
        console.log('User from JWT:', user);

        const userId = request.params.id || request.body.userId // lấy id từ user và lấy userId từ profile hoặc post

        console.log('UserId from request:', userId);
        
        if (user.role === 'admin') {
            return true;
          }

        // kiểm tra userId trong request với userId đăng nhập
        if(user.id !== Number(userId)){
            throw new ForbiddenException('You are not authorized to access this resource')
        }

        return true
    }
}