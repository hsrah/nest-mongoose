import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private fakeUsers = [{username: 'harsh', email:'iharsh.gmail.com'}, {username: 'diyara', email:'idiyara.gmail.com'}]; 
    fetchUsers() {
        return this.fakeUsers;
    }
}
