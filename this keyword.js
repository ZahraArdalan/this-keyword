console.log(this);

const calcage = function (birthyear) {
  console.log(2037 - birthyear);
  console.log(this);
};
calcage(1999);

const calcagearrow = (birthyear) => {
  console.log(2037 - birthyear);
  console.log(this);
};
calcagearrow(1980);

const zahra = {
  year: 1991,
  calcage: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
zahra.calcage();

const matilda = {
  year: 2017,
};
matilda.calcage = zahra.calcage;
matilda.calcage();
