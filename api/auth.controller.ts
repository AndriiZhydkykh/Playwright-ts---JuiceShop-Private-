import { RequestHolder } from './request.holder'

export class AuthController extends RequestHolder{
    constructor(request){
     super(request)
    }

   async createNewUser (data){
    const resp = await this.request.post('https://rough-casey-testingtalk-13d498f2.koyeb.app/api/Users/', {
      data
    }
   );
    return resp.json();
   }
     
}

