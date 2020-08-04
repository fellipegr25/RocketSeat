// /** Variáveis */

// console.log('Variáveis');

// var nome = 'Fellipe Geiger';
// console.log(nome);

// var idade = 35;
// console.log(idade);

// var total = idade + 10;
// console.log(total);

// total = 50;
// console.log(total);

// var total = 100;
// console.log(total);

// /** Strings */

// console.log('Strings');

// var nome = 'Programando JavaScript';
// console.log(nome);

// console.log(nome.length);

// console.log('Programando'.length);

// console.log(nome.toUpperCase());

// console.log(nome.toLowerCase());

// console.log(nome.indexOf('ando'));
// /** Neste método é retornado o valor do indice inicial, do trecho ou intervalo desta string  */

// console.log(nome.indexOf('teste'));
// /** Para este método será retornado -1, pois não haverá correspeondente na string */

// console.log(nome.replace('Programando', 'Desenvolvendo'));
// /** Ne método replace são utilizados dois parametro, onde o primeiro é substituido pelo segundo */

// console.log(nome.slice(3, 8));
// /** Este método retorna o trecho da string selecionado a partir de seus indices */

// var canalYoutube = '   Programando em JavaScript    ';
// console.log(canalYoutube);

// console.log(canalYoutube.trim());

// var autor = 'Fellipe';

// console.log('O canal do YouTube ' + canalYoutube.trim() + ' foi criado por ' + autor);

// console.log(`O canal do Youtube ${canalYoutube.trim()} foi criado por ${autor}`);

// /** Operadores aritiméticos */

// console.log(10 + 5 + 3 + 4);
// console.log(50 - 10 - 5 + 2);

// console.log(5 * 5);

// console.log(10 / 2);

// console.log(7 ** 2);

// var a = 10;
// var b = 18;

// console.log(a + b);

// console.log(10 % 2);
// console.log(10 % 3);
// console.log(10 % 4);

// var a = 1;
// a = a + 1;
// console.log(a);

// a++;
// console.log(a);

// console.log(a++);
// console.log(a);

// console.log(++a);

// console.log(--a);

// /** Tipos Booleanos (verdadeiro / Falso) */

// var a = true;
// console.log(a);

// var b = false;
// console.log(b);

// console.log('3 < 5', 3 < 5);
// console.log('3 > 5', 3 > 5);
// console.log('5 >= 5', 5 >= 5);
// console.log('5 >= 6', 5 >= 6);
// console.log('5 <= 7', 5 <= 7);
// console.log('5 <= 4', 5 <= 4);
// console.log('10 != 10', 10 != 10);
// console.log('10 != 5', 10 != 5);
// console.log('4 == 4', 4 == 4);
// console.log('5 == 4', 5 == 4);

// var nome1 = 'Fellipe';
// var nome2 = 'Geiger';

// console.log('nome1 == nome2', nome1 == nome2);
// console.log('nome1 != nome2', nome1 != nome2);
// console.log('4 === 4', 4 === 4);
// console.log('4' === 4);

// /** Operadores lógcos */

// var a = true;
// var b = false;

// console.log('!a', !a);
// console.log('!b', !b);

// console.log('!!a', !!a);
// console.log('!!b', !!b);

// // null, undefined, '', false, 0
// //
// console.log('!!null', !!null);
// console.log('!!undefined', !!undefined);
// console.log(" '' ", !!'');
// console.log('!!0', !!0);

// console.log("!!'texto'", !!'texto');
// console.log('!!20', !!20);

// // Operador AND (apenas se todas as condições forem verdadeiras será verdadeiro)

// console.log(10 && 'texto' && 'Programador');

// console.log(null && 'Programador');

// console.log('Passa' && 0 && 'Dev');

// console.log('Passou' && null);

// console.log('Passou' && 0);

// console.log("false" && 100 && '' && 'teste' && null);

// console.log(10 > 5 && 7 < 10);

// console.log(10 > 5 && 10 > 11);

// // Operador OR (será verdadeiro caso uma das condições seja verdadeira)

// console.log(null || 'Programador');

// console.log(null || 'Programador' || 26);

// console.log(null || '' || 26);

// console.log('Programador a Bordo' || 'teste');

// console.log(10 > 5 || 10 < 11);
// console.log(10 > 5 || 10 > 11);
// console.log(10 < 5 || 10 > 11);
// console.log(null || false || 0);

// console.log('Programador' && 2050 || '' && 26);

// console.log('Programador' && 2050 && 'javascript' || 0);

// console.log(null || !'' && 'Programador');

// // Condicionais

// if (true) {
//   console.log('Hello World!');
// }

// if (false) {
//   console.log('Não vai ser');
// }

// if (3 > 4) {
//   console.log('3 > 4');
// }

// if (3 <= 4) {
//   console.log('3 <= 4');
// }

// var textoVazio = '';
// if (!textoVazio) {
//   console.log('textoVazio');
// }

// if (textoVazio) {
//   console.log('oi');
// } else {
//   console.log('Olá');
// }

// if (10 > 20) {
//   console.log('10 > 20');
// } else if (10 <= 12) {
//   console.log('10 <= 12')
// } else {
//   console.log("Programador");
// }

// if (10 > 20) {
//   console.log('10 > 20');
// } else if (10 >= 12) {
//   console.log('10 >= 12');
// } else {
//   console.log('else');
// }

// // Operador ternário forma reduzida do if

// console.log(true ? 'Programador' : 'Designer');
// console.log(false ? 'Programador' : 'Designer');

// console.log(idade >= 18 ? 'Maior de idade' : 'Menor de idade');

// // Tipo switch case

// var cor = 'amarelo';
// switch (cor) {
//   case "azul":
//     console.log('Cor azul');
//     break;

//   case 'amarelo':
//     console.log('Cor amarelo');
//     break;

//   case 'vermelho':
//     console.log('Cor vermelho');
//     break;
// }

// var cor = 'amarelo';
// switch (cor) {
//   case "azul":
//     console.log('Cor azul');
//     break;

//   case 'verde':
//     console.log('Cor verde');
//     break;

//   case 'vermelho':
//     console.log('Cor vermelho');
//     break;
  
//   default:
//     console.log('Cor rosa');
// }

// switch (cor) {
//   case 'vermelho':
//   case 'amarelo':
//   case 'laranja':
//     console.log('Cor quente');
//     break;
  
//   case 'verde':
//   case 'azul':
//   case 'roxo':
//     console.log('Cor fria');
//     break;

//   default:
//     console.log('Não identificado');
//     break;
// }

// // Arrays

// var numeros = [5, 3, 12, 17, 10, 99];

// // Mostra todo o array
// console.log(numeros);

// // Mostra o item do array de acordo com o seu índice
// console.log(numeros[2]);
// console.log(numeros[5]);
// console.log(numeros[0]);

// // Mostra a quantidade de itens em um array
// console.log(numeros.length);

// // Métodos de um array

// // remove o utimo número
// var numeroRetornado = numeros.pop(); 
// console.log('numetoRetornado', numeroRetornado);
// console.log(numeros);

// // recorta uma parte do array
// var numeros_arr = [5, 3, 12, 17, 10, 99]; 
// console.log(numeros_arr.slice(2, 5));
// console.log(numeros_arr.slice(3));

// var usuario = [
//   'Fellipe',
//   35,
//   'Desenvolvedor',
//   2020,
//   'Brasileiro'
// ];

// console.log(usuario);

// //Adiciona um novo item ao fim do array
// usuario.push('RJ');

// console.log(usuario);

// // verifica se existe o elemento no array, retornando verdadeiro caso encontre e falso se não encontrar
// console.log(usuario.includes('Brasileiro'));
// console.log(usuario.includes('Japonês'));
// console.log(usuario.includes(2020));

// // verifica se existe o elemento no array, retornando o numero de seu indice, caso não encontre retorna -1.
// console.log(usuario.indexOf(2020));
// console.log(usuario.indexOf('Japonês'));

// // concatenando arrays
// var arr1 = [3, 2, 1];
// var arr2 = ['Programador', 'em', 'JavaScript'];

// var resultado = arr1.concat(arr2);
// console.log(resultado);

// var resultado1 = arr2.concat(arr1).concat(['teste', 'fulano', 'ciclano']);
// console.log(resultado1);

// // "..." junta de maneira mais reduzida os arrays
// console.log([...arr1, ...arr2]);

// // acessando itens dentro do array
// console.log(usuario);

// var nome = usuario[0];
// var idade = usuario[1];
// var ano = usuario[3];

// console.log(nome, idade, ano);

// var [ nome, idde, , , nacionalidade ] = usuario;
// console.log(nome, idade, nacionalidade);

// Condicionais loop whilw e for

// // Método While - testa a expressão enquanto for verdadeira
// var contador = 0;
// while (contador < 5) {
//   if (contador === 3) {
//     break;
//   }
//   console.log(contador);
//   ++contador;
// }

// var contador1 = 0;

// while (contador1 < 100) {
//   if (contador1 % 3 === 0 && contador1 % 5 === 0) {
//     console.log(`${contador1} - PING PONG`);
//   } else if (contador1 % 3 === 0) {
//     console.log(`${contador1} - PING`);
//   } else if (contador1 % 5) {
//     console.log(`${contador1} - PONG`);
//   }
//   ++contador1;
// }

// Método For

// for (var contador = 0; contador < 10; contador++) {
//   console.log(contador);
// }

// var numerosAleatorios = [3, 5, 10, 2, 19, 21, 13];
// for (var contador = 0; contador < numerosAleatorios.length; 
//   contador++) {
//     console.log(`${contador} - ${numerosAleatorios[contador]}`);
//   }

// for (var i = numerosAleatorios.length - 1; i >= 0; i--) {
//   console.log(`Posição ${i} com decremento: ${numerosAleatorios[i]}`);
// }

// var i = 0;
// for (; i < numerosAleatorios.length;) {
//   console.log(`Sem valor inicial e incremento: ${numerosAleatorios[i]}`);
//   i++;
// }

// var condicao = true;
// var contador = 1;

// for (; condicao; ) {
//   if (contador % 5 === 0) {
//     condicao = false;
//   }
//   console.log(`condicao booleana simples: ${contador}`);
//   ++contador;
// }

// for (var i = 0; i < 10; i++) {
//   if (i === 5) {
//     break;
//   }
//   console.log(`Utilizando break ${i}`);
// }

// for (var i = 0; i < 50; i++) {
//   if (i % 2 === 0) {
//     continue;
//   }
//   console.log('utilizando o continue', i);
// }

// // For of
// //

// var numerosAleatorios = [3, 5, 'Fellipe', 10, 2, 19, 21, 13];
// for (var num of numerosAleatorios) {
//   console.log('for of', num);
// }

// for (var i = 1; i <= 5; i++) {
//   for (var j = 1; j <= 50; j++) {
//     if (j % 2 === 0) {
//       continue;
//     }
//     if (j > 7) {
//       break;
//     }
//     console.log(`i: ${i}; j: ${j}`);
//   }
// }

// for (var i = 0; i < 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(i, 'PING PONG');
//   } else if (i % 3 === 0) {
//     console.log(i, 'PING');
//   } else if (i % 5 === 0) {
//     console.log(i, 'PONG');
//   }
// }

// Functions
//

// function escreva() {
//   console.log('Ola, Programador!');
// }
// escreva();
// escreva();
// console.log('Teste');
// escreva();
// escreva();

// function escrevaMensagem(mensagem) {
//   console.log(mensagem);
// }

// escrevaMensagem('Hello World!');

// function soma(a, b) {
//   return a + b;
// }

// var resultadoSoma = soma(10, 5);
// console.log(resultadoSoma);
// console.log(soma(10, 5));

// function somaItensArray(numeros) {
//   var total = 0;
//   for (var num of numeros) {
//     total = total + num;
//   }
//   return total;
// }

// var arrayNumeros = [ 3, 5,7, 10, 9, 12 ]
// var resultadoSomaArray = somaItensArray(arrayNumeros);
// console.log(resultadoSomaArray);

// function escreverEndereco(rua, cidade, pais, ...complementos) {
//   console.log(rua);
//   console.log(cidade);
//   console.log(pais);
  
//   console.log(complementos);

// }

// escreverEndereco('Rua Itaituba', 'Rio de Janeiro', 'Brasil', 'CEP', '21000-000',
//  'Bloco 15');

//  //Função auto-executável

//  (function autoExecuta(nome) {
//    console.log('Executei!', nome);
//  } ('Fellipe'));

//  //Função como variável

//  var subtraiDoisNumeros = function subtrai(a, b) {
//    return a - b;
//  };

//  console.log(subtraiDoisNumeros(10, 4));

//  //Função anonima

//  var subtraiTresNumeros = function (a, b, c) {
//    return a - b - c;
//  };

//  console.log(subtraiTresNumeros(15, 3, 6));

//  //Função de callback

//  function somaCallback(a, b, fncallback) {
//    return fncallback(a + b);
//  }
//  console.log(somaCallback(10, 3, function(total) {
//     return total * 2;
//  }));

//  function subtraiCallback(a, b, fncallback) {
//    return fncallback(a - b);
//  }

//  var totalSubtraiMultiplica = function(resultadoSubtrai) {
//   return resultadoSubtrai * 2;
//  };

//  console.log(subtraiCallback(10, 3, totalSubtraiMultiplica));

//  //Função com parametro com valor padrão

//  function escreverNome(nome = 'Fellipe', idade = 35) {
//    console.log(nome);
//    console.log(idade);
//  }

//  escreverNome();
//  escreverNome('Geiger', 36);

// Objetos - variáveis com parametros
