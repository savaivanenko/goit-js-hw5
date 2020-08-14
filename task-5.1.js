const Account = function(login, email){
  this.login = login;
  this.email = email;
  Account.prototype.getInfo = function() {
    console.log(login);
  };
};





const mango = new Account({
  login: 'Mangozedog',
  email: 'mango@dog.woof',
});

console.log(Account.prototype.getInfo); // function
mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
  login: 'Poly',
  email: 'poly@mail.com',
});

poly.getInfo(); // Login: Poly, Email: poly@mail.com


// Напиши функцию-конструктор Account, которая создает объект со свойствами login и email.
//  В prototype функции-конструктора добавь метод getInfo(),
//   который выводит в консоль значения полей login и email объекта который его вызвал.