export interface IUser{
  id:string;
  name:string;
  email:string;
}

export interface IUserForm{
  email:string;
  password:string;
}

export const UserEmptyState : IUser = {
  id: '', 
  name:'',
  email:''
}