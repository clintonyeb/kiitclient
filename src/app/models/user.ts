export class AuthUser {
  username: string;
  role: string;
  token: string;

  constructor(username: string, role: string, token: string) {
    this.username = username;
    this.role = role;
    this.token = token;
  }
}

export class User extends AuthUser{
   id: number;
   password: string;
   avatar: Avatar;
   enabled: boolean;
   uniqueId: number;
   gender: string;


  constructor(username:string, role:string, token: string, obj?: any){
      super(username, role, token);
       this.id = obj.id || '';
       this.username = obj.username || null;
       this.password =  obj.password || null;
       this.token =  obj.token || null;
       this.avatar =  obj.avatar || null;
       this.enabled = obj.enabled || true;
       this.uniqueId = obj.uniqueId ? obj.uniqueId : obj.username;
       this.gender =  obj.gender;
  }
}


export class Avatar {

  avatarByte: string;
  avatarContentType : string;
  lastUpdated: string;

  constructor(obj?: any){
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


  constructor(bio: string, contact: string, address: string, emailId: string, avatar: Avatar, user: User,
              socialNetworks: Array<string>) {
    this.bio = bio;
    this.contact = contact;
    this.address = address;
    this.emailId = emailId;
    this.avatar = avatar;
    this.user = user;
    this.socialNetworks = socialNetworks;
  }
}
