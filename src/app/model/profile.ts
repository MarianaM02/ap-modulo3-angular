export interface Profile {
  id:number;
  name:string;
  lastName:string;
  profilePic:string;
  title:string;
  location:string;
  about:string;
  linkedinUrl:string;
  githubUrl:string;
  phone:string; 
  // https://wa.me/<number>
  // https://wa.me/whatsappphonenumber?text=urlencodedtext
}