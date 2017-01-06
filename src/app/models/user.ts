export class AuthUser {
  username: string;
  roles: string[];
  access_token: string;

  /*constructor(username: string, roles: string[], access_token: string) {
   this.username = username;
   this.roles = roles;
   this.access_token = access_token;
   }*/
}

export class User {
  id: number;
  password: string;
  avatar: Avatar;
  enabled: boolean;
  uniqueId: number;
  gender: string;
  authUser: AuthUser;


  constructor(obj?: any) {
    this.authUser = new AuthUser();
    this.authUser.username = obj.username || '';
    this.authUser.roles = obj.roles || '';
    this.authUser.access_token = obj.access_token || '';
    this.id = obj.id || '';
    this.password = obj.password || null;
    this.avatar = obj.avatar || null;
    this.enabled = obj.enabled || true;
    this.uniqueId = obj.uniqueId ? obj.uniqueId : obj.username;
    this.gender = obj.gender;
  }
}


export class Avatar {

  avatarByte: string;
  avatarContentType: string;
  lastUpdated: string;

  constructor(obj?: any) {
    this.avatarByte = obj.avatarByte || null;
    this.avatarContentType = obj.avatarContentType || '';
    this.lastUpdated = obj.lastUpdated || '';
  }
}

export class Profile {

  bio: string;
  contact: string;
  address: string;
  emailId: string;
  avatar: Avatar;
  user: User;
  socialNetworks: Array<string>;


  constructor(obj?: any) {
    this.bio = obj.bio || null;
    this.contact = obj.contact || null;
    this.address = obj.address || null;
    this.emailId = obj.emailId || null;
    this.avatar = obj.avatar || null;
    this.user = obj.user || null;
    this.socialNetworks = obj.socialNetworks || null;
  }
}
