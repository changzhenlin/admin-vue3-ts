export interface IloqinForm {
  username: string;
  password: string;
}

export class Login {
  ruleForm: IloqinForm = {
    username: '',
    password: ''
  };
}