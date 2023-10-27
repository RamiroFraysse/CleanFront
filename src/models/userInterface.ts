export interface IUser{
  id:string;
  name:string;
  email:string;
}

export const UserEmptyState : IUser = {
  id: '', 
  name:'',
  email:''
}