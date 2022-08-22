/* 

Atividade 2

Vamos adicionar alguns administradores. Inicialmente, tínhamos apenas usuários no banco de dados na memória.
Depois de apresentar os Admins (que possuem a propriedade role), precisamos corrigir os tipos para que tudo funcione bem em conjunto.
O tipo "Person" está ausente, por favor, defina-o e use-o na array persons e na função logPerson para corrigir todos os erros.

*/

interface User {
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    name: string;
    age: number;
    role: string;
}

export type Person = unknown;

export const persons: User[] /* <- Person[] */ = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

export function logPerson(user: User) {
    console.log(` - ${user.name}, ${user.age}`);
}

persons.forEach(logPerson);
