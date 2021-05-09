import { Injectable } from "@nestjs/common";
import { Admin } from "../model/admin";

@Injectable()
export class AdminRepository {

  private readonly admins: Admin[];
  constructor(){
    this.admins = [
      {
        id: 0,
        login: "Sasha",
        password: "12345"
      },
      {
        id: 1,
        login: "Vova",
        password: "54321"
      },
      {
        id: 2,
        login: "Mama",
        password: "123"
      }
    ];
  }

  async findByLogin(login: string): Promise<Admin | undefined>{
    return this.admins.find(admin => admin.login === login);
  }
  

}