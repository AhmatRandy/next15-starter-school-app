export enum Action {
  Delete = "Delete",
  Edit = "Edit",
  Add = "Add",
}

export type Teacher = {
  id: string;
  username: string;
  name: string;
  surname: string;
  email: string | null;
  phone: string | null;
  address: string;
  img: string | null;
  bloodType: string;
  sex: string;
  createdAt: Date;
  birthday: Date;
};

export type Student = {
  id: string;
  username: string;
  name: string;
  surname: string;
  email: string | null;
  phone: string | null;
  address: string;
  img: string | null;
  bloodType: string;
  sex: string;
  createdAt: Date;
  parentId: string;
  classId: number;
  gradeId: number;
  birthday: Date;
};
