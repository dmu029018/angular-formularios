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

  getRealName() {
    return this.realName;
  }

  getSigningUpDate() {
    return this.signingUpDate;
  }

  getEmail() {
    return this.email;
  }

  getContinent() {
    return this.continent;
  }

  getGender() {
    return this.gender;
  }

  setRealName(realName) {
    this.realName = realName;
  }

  setSigningUpDate(signingUpDate) {
    return this.signingUpDate = signingUpDate;
  }

  setEmail(email) {
    return this.email = email;
  }

  setContinent(continent) {
    return this.continent = continent;
  }

  setGender(gender) {
    return this.gender = gender;
  }




}
