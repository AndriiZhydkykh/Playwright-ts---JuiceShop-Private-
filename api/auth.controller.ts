import { RequestHolder } from './request.holder'
import { UserCreateRequest, UserCreatedResponse } from './models';
export class AuthController extends RequestHolder{
   
   async createNewUser (data:UserCreateRequest) : Promise<UserCreatedResponse> {
    const resp = await this.request.post('https://rough-casey-testingtalk-13d498f2.koyeb.app/api/Users/', 
    {
      data
    }
   );
   
    return resp.json() as Promise<UserCreatedResponse>;
   }
     
}

