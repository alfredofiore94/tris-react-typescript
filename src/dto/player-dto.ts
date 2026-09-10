export interface PlayerDTO {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  hair: Hair;
  birthDate: string;
}

interface Hair {
  color: string;
  type: string;
}
