import { User } from './user';

export class FullUser extends User {

  private realName: string;
  private signingUpDate: string;
  private email: string;
  private continent: string;
  private gender: string;
  private upTo18: boolean;

  constructor() {
    super();
    this.setSigningUpDate(this.getActualDate());
    this.continent = '';
    this.realName = '';
    this.upTo18 = false;
    this.gender = '';
    this.email = '';

  }

  private getActualDate() {
    const actualDate = new Date();
    const actualDay = actualDate.getDay().toString().padStart(2);
    const actualMonth = actualDate.getMonth().toString().padStart(2);
    const actualyear = actualDate.getFullYear().toString();
    return `${actualDay}-${actualMonth}-${actualyear}`;
  }

  public getRealName() {
    return this.realName;
  }

  public getSigningUpDate() {
    return this.signingUpDate;
  }

  public getEmail() {
    return this.email;
  }

  public getContinent() {
    return this.continent;
  }

  public getGender() {
    return this.gender;
  }

  public getUpTo18() {
    return this.upTo18;
  }

  public setRealName(realName) {
    this.realName = realName;
  }

  public setSigningUpDate(signingUpDate) {
    this.signingUpDate = signingUpDate;
  }

  public setEmail(email) {
     this.email = email;
  }

  public setContinent(continent) {
     this.continent = continent;
  }

  public setGender(gender) {
    this.gender = gender;
  }

  public setUpTo18(upTo18) {
    this.upTo18 = upTo18;
  }


}
