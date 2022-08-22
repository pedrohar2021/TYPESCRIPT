/*

Atividade 12

Nossa tentativa de Open Source não funcionou tão bem esperado. Acontece que já havia muitas bibliotecas JS funcionais existentes.
Todos os desenvolvedores restantes deixaram a empresa como. Nós vamos. Parece que eles estão se juntando a um grupo muito startup ambiciosa que reinventou um espremedor e arrecadou milhões de dólares. Pena que não podemos competir com esse tipo de financiamento, embora acreditemos que nossa ideia é excelente.
É hora de brilhar pela última vez e publicar nossa nova invenção: construtor de objetos como nosso CTO deu o nome. Uma pequena biblioteca que ajuda manipulação de um objeto.
Aqui está uma biblioteca que ajuda a manipular objetos.
Tentamos escrever anotações de tipo e falhamos. Por favor ajude!

*/

export class ObjectManipulator {

    constructor(protected obj) {}

    public set(key, value) {
        return new ObjectManipulator({...this.obj, [key]: value});
    }

    public get(key) {
        return this.obj[key];
    }

    public delete(key) {
        const newObj = {...this.obj};
        delete newObj[key];
        return new ObjectManipulator(newObj);
    }

    public getObject() {
        return this.obj;
    }
}