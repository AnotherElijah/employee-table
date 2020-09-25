type Office = 'Tallinn'|'Vilnius'|'Riga';

interface Tag {
  name: string
  _id?: string
}

export interface Worker {
  birthDate: string
  firstName: string
  secondName: string
  office:Office
  phoneNumber: number
  tags: Tag[]
  _id?: string
}
