/*

Atividade 7

A filtragem foi completamente removida do projeto. Descobriu-se que esse recurso simplesmente não era necessário para o usuário final e passamos muito tempo apenas porque nosso gerente de escritório nos disse para fazê-lo. Da próxima vez devemos em vez disso, ouça o gerenciamento de produtos.
De qualquer forma, temos um novo plano. O amigo do CEO Nick nos disse que se trocarmos aleatoriamente nomes de usuário de tempos em tempos na comunidade, seria muito engraçado e o projeto com certeza faria sucesso! Implementar swap que recebe 2 pessoas e as devolve em a ordem inversa. A função em si já está lá, na verdade. Nós só precisamos fornecê-lo com tipos adequados.
Além disso, esta função não deve necessariamente ser limitada a apenas Tipos de pessoa, vamos digitar para que funcione com quaisquer dois tipos Especificadas.

*/
interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}

function logUser(user: User) {
    const pos = users.indexOf(user) + 1;
    console.log(` - #${pos} User: ${user.name}, ${user.age}, ${user.occupation}`);
}

function logAdmin(admin: Admin) {
    const pos = admins.indexOf(admin) + 1;
    console.log(` - #${pos} Admin: ${admin.name}, ${admin.age}, ${admin.role}`);
}

const admins: Admin[] = [
    {
        type: 'admin',
        name: 'Will Bruces',
        age: 30,
        role: 'Overseer'
    },
    {
        type: 'admin',
        name: 'Steve',
        age: 40,
        role: 'Steve'
    }
];

const users: User[] = [
    {
        type: 'user',
        name: 'Moses',
        age: 70,
        occupation: 'Desert guide'
    },
    {
        type: 'user',
        name: 'Superman',
        age: 28,
        occupation: 'Ordinary person'
    }
];

export function swap(v1, v2) {
    return [v2, v1];
}

function test1() {
    console.log('test1:');
    const [secondUser, firstAdmin] = swap(admins[0], users[1]);
    logUser(secondUser);
    logAdmin(firstAdmin);
}

function test2() {
    console.log('test2:');
    const [secondAdmin, firstUser] = swap(users[0], admins[1]);
    logAdmin(secondAdmin);
    logUser(firstUser);
}

function test3() {
    console.log('test3:');
    const [secondUser, firstUser] = swap(users[0], users[1]);
    logUser(secondUser);
    logUser(firstUser);
}

function test4() {
    console.log('test4:');
    const [firstAdmin, secondAdmin] = swap(admins[1], admins[0]);
    logAdmin(firstAdmin);
    logAdmin(secondAdmin);
}

function test5() {
    console.log('test5:');
    const [stringValue, numericValue] = swap(123, 'Hello World');
    console.log(` - String: ${stringValue}`);
    console.log(` - Numeric: ${numericValue}`);
}

[test1, test2, test3, test4, test5].forEach((test) => test());
