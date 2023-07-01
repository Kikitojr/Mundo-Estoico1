// Texts
const frase = document.getElementById('text');
const autor = document.getElementById('text2');

// Datas
const data = new Date();
const dia = data.getDate();
const mes = data.getMonth() + 1; // Tava falando que estamos no mes 6, por isso +1

if (mes === 7 || mes === 8) {
  if (dia === 1) {
    frase.innerHTML = 'Demócrito morreu por vermes e Sócrates por outros vermes.';
  } else if (dia === 2) {
    frase.innerHTML = 'A vida é curta. Faça cada dia valer a pena.';
  } else if (dia === 3) {
    frase.innerHTML = 'A felicidade e a virtude são inseparáveis.';
  } else if (dia === 4) {
    frase.innerHTML = 'Encontre a tranquilidade dentro de si mesmo.';
  } else if (dia === 5) {
    frase.innerHTML = 'A vida é mudança, aceite-a de bom grado.';
  } else if (dia === 6) {
    frase.innerHTML = 'Pratique a gratidão diariamente.';
  } else if (dia === 7) {
    frase.innerHTML = 'A virtude é o único bem verdadeiro.';
  } else if (dia === 8) {
    frase.innerHTML = 'Seja gentil e compassivo com todos.';
  } else if (dia === 9) {
    frase.innerHTML = 'Não se preocupe com o que os outros pensam.';
  } else if (dia === 10) {
    frase.innerHTML = 'Aceite as coisas que você não pode mudar.';
  } else if (dia === 11) {
    frase.innerHTML = 'Seja paciente e perseverante em sua busca pela sabedoria.';
  } else if (dia === 12) {
    frase.innerHTML = 'Não desperdice energia em coisas insignificantes.';
  } else if (dia === 13) {
    frase.innerHTML = 'Concentre-se no presente, aproveite o momento.';
  } else if (dia === 14) {
    frase.innerHTML = 'Aprenda com os erros e siga em frente.';
  } else if (dia === 15) {
    frase.innerHTML = 'Seja humilde em suas conquistas.';
  } else if (dia === 16) {
    frase.innerHTML = 'Evite julgar os outros.';
  } else if (dia === 17) {
    frase.innerHTML = 'Valorize o poder da introspecção.';
  } else if (dia === 18) {
    frase.innerHTML = 'A verdadeira grandeza está em ser bom para com os outros.';
  } else if (dia === 19) {
    frase.innerHTML = 'Mantenha a calma em meio à adversidade.';
  } else if (dia === 20) {
    frase.innerHTML = 'Desenvolva a autodisciplina e o autocontrole.';
  } else if (dia === 21) {
    frase.innerHTML = 'Aja com justiça e equanimidade.';
  } else if (dia === 22) {
    frase.innerHTML = 'Cultive a serenidade e a paz interior.';
  } else if (dia === 23) {
    frase.innerHTML = 'Seja flexível e adaptável às circunstâncias.';
  } else if (dia === 24) {
    frase.innerHTML = 'Ame e respeite a natureza e todas as suas criaturas.';
  } else if (dia === 25) {
    frase.innerHTML = 'Aprenda a aceitar as críticas construtivas.';
  } else if (dia === 26) {
    frase.innerHTML = 'Busque a sabedoria em todas as coisas.';
  } else if (dia === 27) {
    frase.innerHTML = 'Valorize a amizade verdadeira e leal.';
  } else if (dia === 28) {
    frase.innerHTML = 'Aproveite as pequenas coisas da vida.';
  } else if (dia === 29) {
    frase.innerHTML = 'Não se deixe levar pelas emoções negativas.';
  } else if (dia === 30) {
    frase.innerHTML = 'Tenha cuidado com suas palavras e ações.';
  } else if (dia === 31) {
    frase.innerHTML = 'Pratique a empatia e coloque-se no lugar dos outros.';
  }

  autor.innerHTML = 'De: Marco Aurélio';
}
