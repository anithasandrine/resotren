/// <reference types="vite/client" />
type YearOfStudyAttributes = {
  id: string;
  name: string;
};

type StudentAtribute = {
  id: string;
  department: string;
  updatedEmail: string;
  name: string;
  updatedPhone: string;
  regNo: string;
  YearOfStudy: YearOfStudyAttributes;
  profilePicture: string;
  phoneToken: string | null;
  emailToken: string | null;
  storeEmail: string | null;
  storePhone: string | null;
  Department: {
    id: string;
    name: string;
  };
};

type OfficeAttributes = {
  name:string
  title:string
  startDate:string
  endDate:string
  location:string
};

type StudentSignupATributes = {
  regNo: string;
  updatedEmail: string;
  updatedPhone: string;
  password: string;
  confirmPassword: string;
};

type Responce = {
  message: string;
  JWT?: string;
  role?: string;
  [key: string]: string;
};

type RoginResponce = {
  JWT: string;
  role: string;
  profilePicture: string;
  name: string;
  id: string;
  message: string;
};
type ErrorAtributes = {
  isOperational: boolean;
  originalError: string;
  statusCode: number;
};

type VerficationAttributes = {
  id: string;
  [key: string]: string | number;
};

type PhoneToken = {
  token: string;
};

type LoginAttributes = {
  userName: string;
  password: string;
};

type LoggedInUser = {
  accessToken: string;
  role: string;
  profilePicture: string;
  name: string;
  id: string;
};

type forgetPasswordAttributes = {
  userName: string;
  to: string;
};
type resetPasswordAttributes = {
  verificationToken: string;
  newPassword: string;
  confirmPassword: string;
};

type updateStudentAttributes = {
  name: string;
  updateEmail: string;
  updatedPhone: string;
};

type ConfirmStudentAttributes = {
  phoneToken: string;
  emailToken: string;
};
type UpdatePasswordAttributes = {
  oldPassword: string;
  password: string;
  confirmPassword: string;
};

type UpdateStudentAttributes = {
  name: string;
  updatedEmail: string;
  updatedPhone: string;
};
type UpdateOfficeAttributes = {
  userName: string;
  officePhone: string;
  officeEmail: string;
  officeName: string;
};

type CreateOfficeAttributes = {
  userName: string;
  officeName: string;
  officeEmail: string;
  officePhone: string;
  password: string;
  confirmPassword: string;
};

type EditOfficeAttributes = {
  userName: string;
  officeName: string;
  officeEmail: string;
  officePhone: string;
};
type Receiver = {
  school: string[];
  department: string[];
  class: { department: string; year: string }[];
  year: string[];
  student: string[];
};
type CommunicationMessage = {
  receiver: Receiver;
  channel: string[];
  subject: string;
  content: string;
  coppiedOffice: string[];
  communicateCps: boolean;
};

type Departement = {
  id: string;
  name: string;
};
type School = {
  id: string;
  name: string;
  fullName: string;
  Departments: Departement[];
};

type CareerPostAtributes = {
  title: string;
  description: string;
  category: string;
  author: string;
  image: string;
};

type PostAtributes = {
  id: string;
  title: string;
  description: string;
  category: string;
  author: string;
  image: string;
  createdAt: Date;
};

type SessionAttribute = {
  id: string;
  Student: Partial<StudentAtribute>;
  bookingReason: string;
  replay?: string;
};

type CardAttributes = {
  image: string;
  title: string;
  description: string;
  author: string;
  category: string;
  id;
};

type SessionAttributes = {
  subject: string;
  content: string;
};


type UpcommingEvents = {
  _id: string,
      name: string,
      title: string,
      startDate: string,
      endDate: string,
      location: string,
      
}