const user = {
  name: "Mariana",
  transactions: [],
  balance: 0,
};

function createTransaction(transaction) {
  user.transactions.push(transaction);
}

/**
 * criar função createTransaction
 * adicionar nova transacao no array
 * receber um parametro como um objeto do array
 * somar valor de credito e incluir total no balance
 * subtrair valor de debito do total no balance
 * usar metodo push  */
