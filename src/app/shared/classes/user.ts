export class User {

  private _id: string;
  private _username: string;
  private _password: string;

  constructor() {
    this._id = this.uniqueID();
    this._username = '';
    this._password = '';
  }

  public setUsername(username: string) {
    this._username = username;
  }

  public setPassword(password: string) {
    this._password = password;
  }

  public setId(id: string) {
    this._id = id;
  }

  public getUsername() {
    return this._username;
  }

  public getPassword() {
    return this._password;
  }

  public getId() {
    return this._id;
  }

  private uniqueID() {
    const thisMS: number = Date.now();
    const shake = Math.random();
    let unique: string = Math.pow(thisMS, shake).toString();
    unique = unique.toString().replace('.', thisMS.toString());
    return unique;

  }

}
