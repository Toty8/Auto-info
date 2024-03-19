import { Injectable } from '@angular/core';
import { UserForAuth } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: UserForAuth | undefined;
  USER_KEY = '[user]';

  get isLogged():boolean{
    return !!this.user;
  }

  constructor() { 
    try{
      const lsUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(lsUser);
    }
    catch(error){
      this.user = undefined;
    }
  }

  login(){
    this.user = {
      _id: '5fa64a072183ce1728ff3719',
      username: 'Admin',
      email: 'Admin@gmail.com',
      password: '123456'
    }

    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
  }

  logout(){
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY);
  }
}
