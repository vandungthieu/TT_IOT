import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { ROLES_KEY } from "../decorator/roles.decorator";

@Injectable()
export class RolesGuard implements CanActivate{
    constructor (private reflector : Reflector){} // Reflector để thao tác với metadata từ Handler
    canActivate(context: ExecutionContext): boolean  {
        const requiredRoles = this.reflector.get<string[]>(ROLES_KEY, context.getHandler())
        if(!requiredRoles) return true

        const request = context.switchToHttp().getRequest()
        const user = request.user
        console.log('User in RolesGuard:', user);

        if(!user || !requiredRoles.includes(user.role)){
            throw new ForbiddenException('You do not have permission to access this resource')
        }

        return true
    }
}