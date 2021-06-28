export class JwtResponse{
    user:JwtUser;
    token: string;
}


export class JwtUser{
    _id: string;
    email: string;
    __v: number;
}