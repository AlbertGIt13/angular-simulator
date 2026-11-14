function sum(a: number, b: number): number {
  return a + b;
}

// 1. Interfaces

interface IUser {
  id: number;
  name: string;
  email: string;
  age?: number;
}

interface IAdmin extends IUser {
  role: string;
  permissions: string[];
}

// 2. Types

type UploadStatus = 'loading' | 'success' | 'error';

type TextFormat = 'uppercase' | 'lowercase' | 'capitalize';

let uploadStatus: UploadStatus = 'loading';

let textFormat: TextFormat = 'uppercase';

const user: IUser = {
  id: 1,
  name: 'Alex',
  email: 'alex@mail.com',
  age: 33
};

// Functions

function formatText(text: string, format: TextFormat): string {
  switch (format) {
    case 'uppercase':
      return text.toUpperCase();
    case 'lowercase':
      return text.toLowerCase();
    case 'capitalize':
      return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  }
}

console.log(formatText('привет мир', 'uppercase'));
console.log(formatText('ПРИВЕТ МИР', 'lowercase'));
console.log(formatText('привет мир', 'capitalize'));

function removeChar(text: string, char: string): string {
  return text.split(char).join('');
}

// Arrays

const usersArray: IUser[] = [
{ id: 1, name: 'Alex', email: 'alex@mail.com', age: 25 },
  { id: 2, name: 'Bob', email: 'bob@mail.com', age: 17 },
  { id: 3, name: 'Charlie', email: 'charlie@mail.com', age: 30 },
  { id: 4, name: 'Diana', email: 'diana@mail.com' }
];

const adultUsers: IUser[] = usersArray.filter(u => u.age !== undefined && u.age >= 18);

console.log('Пользователи старше 18:', adultUsers);