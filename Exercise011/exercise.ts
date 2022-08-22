/*

Atividade 11

Por algum motivo desconhecido, a maioria de nossos desenvolvedores saiu da empresa. Precisamos contratar ativamente agora.
Na mídia, lemos que as empresas que inventam de publicar novas tecnologias atraem mais potencial candidatos. Precisamos aproveitar esta oportunidade e inventar e publicar alguns pacotes npm. Seguindo a nova tendência de programação funcional em JS nós decidimos desenvolver uma biblioteca de utilidade funcional. Isso nos colocará no limite, já que estamos quase certos de que ninguém mais fez nada semelhante.
Nós também fornecemos alguns jsdoc junto com as funções, mas às vezes pode ser impreciso.

Exercício:
Forneça a digitação adequada para as funções especificadas.

Bônus:
Você poderia também redigir o código para reduzir duplicação de código? Você pode precisar de algum tipo de conversão excessiva para fazer é realmente curto.

*/

/**
 * 2 argumentos passados: retorna um novo array
 * que é o resultado da entrada sendo mapeada usando
 * o mapeador especificado.
 *
 * 1 argumento passado: retorna uma função que aceita
 * uma entrada e retorna um novo array que é um resultado
 * da entrada sendo mapeada usando o mapeador original.
 *
 * 0 argumentos passados: retorna a si mesmo.
 *
 * @param {Function} mapper
 * @param {Array} input
 * @return {Array | Function}
 */
 export function map(mapper, input) {
    if (arguments.length === 0) {
        return map;
    }
    if (arguments.length === 1) {
        return function subFunction(subInput) {
            if (arguments.length === 0) {
                return subFunction;
            }
            return subInput.map(mapper);
        };
    }
    return input.map(mapper);
}

/**
 * 2 argumentos passados: retorna um novo array
 * que é o resultado da entrada sendo filtrada usando
 * a função de filtro especificada.
 *
 * 1 argumento passado: retorna uma função que aceita
 * uma entrada e retorna um novo array que é um resultado
 * da entrada sendo filtrada usando o filtro original
 *função.
 *
 * 0 argumentos passados: retorna a si mesmo.
 *
 * @param {Function} filterer
 * @param {Array} input
 * @return {Array | Function}
 */
export function filter(filterer, input) {
    if (arguments.length === 0) {
        return filter;
    }
    if (arguments.length === 1) {
        return function subFunction(subInput) {
            if (arguments.length === 0) {
                return subFunction;
            }
            return subInput.filter(filterer);
        };
    }
    return input.filter(filterer);
}

/** 
* 3 argumentos passados: reduz o array de entrada usando o
 * redutor especificado e valor inicial e retornos
 * o resultado.
 *
 * 2 argumentos passados: retorna uma função que aceita
 * array de entrada e reduz usando especificado anteriormente
 *redutor e valor inicial e retorna o resultado.
 *
 * 1 argumento passado: retorna uma função que:
 * * quando 2 argumentos são passados ​​para a subfunção, ela
 * reduz a matriz de entrada usando inicial especificada
 * valor e redutor e retornos previamente especificados
 *     o resultado.
 * * quando 1 argumento é passado para a subfunção, ele
 * retorna uma função que espera o array de entrada
 * e reduz a matriz de entrada especificada usando
 * redutor e valor inicial previamente especificados.
 * * quando o argumento 0 é passado para a subfunção, ele
 * retorna a si mesmo.
 *
 * 0 argumentos passados: retorna a si mesmo.
 *
 * @param {Function} reducer
 * @param {*} initialValue
 * @param {Array} input
 * @return {* | Function}
 */
export function reduce(reducer, initialValue, input) {
    if (arguments.length === 0) {
        return reduce;
    }
    if (arguments.length === 1) {
        return function subFunction(subInitialValue, subInput) {
            if (arguments.length === 0) {
                return subFunction;
            }
            if (arguments.length === 1) {
                return function subSubFunction(subSubInput) {
                    if (arguments.length === 0) {
                        return subSubFunction;
                    }
                    return subSubInput.reduce(reducer, subInitialValue);
                };
            }
            return subInput.reduce(reducer,subInitialValue);
        }
    }
    if (arguments.length === 2) {
        return function subFunction(subInput) {
            if (arguments.length === 0) {
                return subFunction;
            }
            return subInput.reduce(reducer, initialValue);
        };
    }
    return input.reduce(reducer, initialValue);
}

/**
 * 2 argumentos passados: retorna a soma de a e b.
 *
 * 1 argumento passado: retorna uma função que espera
 * b e retorna a soma de a e b.
 *
 * 0 argumentos passados: retorna a si mesmo.
 *
 * @param {Number} a
 * @param {Number} b
 * @return {Number | Function}
 */
export function add(a, b) {
    if (arguments.length === 0) {
        return add;
    }
    if (arguments.length === 1) {
        return function subFunction(subB) {
            if (arguments.length === 0) {
                return subFunction;
            }
            return a + subB;
        };
    }
    return a + b;
}

/**
 * 2 argumentos passados: subtrai b de a e
 * retorna o resultado.
 *
 * 1 argumento passado: retorna uma função que espera
 * b e subtrai b de a e retorna o resultado.
 *
 * 0 argumentos passados: retorna a si mesmo.
 *
 * @param {Number} a
 * @param {Number} b
 * @return {Number | Function}
 */
export function subtract(a, b) {
    if (arguments.length === 0) {
        return subtract;
    }
    if (arguments.length === 1) {
        return function subFunction(subB) {
            if (arguments.length === 0) {
                return subFunction;
            }
            return a - subB;
        };
    }
    return a - b;
}

/**
* 2 argumentos passados: retorna o valor da propriedade
 * propName do objeto especificado.
 *
 * 1 argumento passado: retorna uma função que espera
 * propName e retorna o valor da propriedade propName
 * do objeto especificado.
 *
 * 0 argumentos passados: retorna a si mesmo.
 * @param {Object} obj
 * @param {String} propName
 * @return {* | Function}
 */
export function prop(obj, propName) {
    if (arguments.length === 0) {
        return prop;
    }
    if (arguments.length === 1) {
        return function subFunction(subPropName) {
            if (arguments.length === 0) {
                return subFunction;
            }
            return obj[subPropName];
        };
    }
    return obj[propName];
}

/**
* 0 argumentos passados: espera que cada argumento seja
 * uma função. Retorna uma função que aceita o
 * mesmos argumentos da primeira função. Passa estes
 * argumentos para a primeira função, o resultado de
 * a primeira função passa para a segunda função,
 * o resultado da segunda função para a terceira
 *função... e assim por diante. Retorna o resultado da
 * última execução da função.
 *
 * 0 argumentos passados: retorna a si mesmo.
 *
 * TODO TypeScript
 * * Deve tratar adequadamente pelo menos 5 argumentos.
 * * Também deve certificar-se de argumento do próximo
 * função corresponde ao tipo de retorno da anterior
 *função.
 *
 * @param {Function[]} functions
 * @return {*}
 */
export function pipe(...functions) {
    if (arguments.length === 0) {
        return pipe;
    }
    return function subFunction() {
        let nextArguments = Array.from(arguments);
        let result;
        for (const func of functions) {
            result = func(...nextArguments);
            nextArguments = [result];
        }
        return result;
    };
}