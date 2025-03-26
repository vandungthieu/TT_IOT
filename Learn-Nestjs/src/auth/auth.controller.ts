import { Controller, Post, Request, UseGuards, Get, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from 'src/auth/guard/local-auth.guard';
import { RegisterDto } from './dto/register.dto';
import { ApiOperation, ApiProperty, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';

// DTO để mô tả response của login (token)
class LoginResponseDto {
  @ApiProperty({ description: 'JWT access token', example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' })
  access_token: string;
}

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
  @ApiResponse({status:201, description:"đăng nhập thành công", type: LoginResponseDto})
  @ApiResponse({status: 401, description:"Thông tin đăng nhập không hợp lên"})
  @Post('login')
  async login(@Request() req) { // lấy đối tượng request 
    return this.authService.createToken(req.user);
  }

}
