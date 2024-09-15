import { RequestHolder } from './request.holder'
import { UserCreateRequest, UserCreatedResponse } from './models';
export class AuthController extends RequestHolder{
   
   async createNewUser (data:UserCreateRequest) : Promise<UserCreatedResponse> {
    const resp = await this.request.post('https://mental-arline-testingtalk-42e6e59b.koyeb.app/api/Users/', 
    {
      data
    }
   );
   
    return resp.json() as Promise<UserCreatedResponse>;
   }
     
}

