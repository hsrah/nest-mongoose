import { Body, Controller, Get, Param, Post, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { Request, Response, response } from 'express';
import { request } from 'http';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService){

    }

    @Get()
    getUsers(){
        return this.userService.fetchUsers();
    }

    @Get('posts')
    getUsersPosts(){
        return [{postid:1}, {postid:2}];
    }

    @Post('create')
    @UsePipes(new ValidationPipe())
    createUser(@Body() userpayload: CreateUserDto, @Res() response: Response) {
        console.log(userpayload);
        return this.userService.createUser(userpayload);  
    }

    @Get(':userid/posts/:postid')
    getUserById(@Param('userid') uid: string, @Param('postid') pid: string){
        return {
            pid
        }
    }

}
