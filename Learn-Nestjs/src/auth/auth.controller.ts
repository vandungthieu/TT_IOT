import { Controller, Post, Request, UseGuards, Get, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from 'src/auth/guard/local-auth.guard';
import { RegisterDto } from './dto/register.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from 'src/users/user.entity';
import { LoginDto } from './dto/login.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({summary:"đăng ký người dùng mới"})
  @ApiResponse({ status: 201, description: 'Người dùng đã được tạo thành công', type:LoginDto })
  @ApiResponse({ status: 400, description: 'Dữ liệu đầu vào không hợp lệ' })
  @ApiResponse({ status: 409, description: 'Email đã tồn tại' })
  @Post('register')
  register(@Body() dto:RegisterDto){
    return this.authService.register(dto)
  }

  @UseGuards(LocalAuthGuard)
  @ApiOperation({ summary: 'Đăng nhập người dùng và trả về token' })
  @Post('login')
  async login(@Request() req) {
    return this.authService.createToken(req.user);
  }

}
