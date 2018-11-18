'use strict'

class Hamburger {
    /**
     * @constructor
     * @param {String} size - Размер
     * @param {String} stuffing - Начинка
     */
    constructor(size, stuffing) {
      this._size = size;
      this._stuffing = stuffing;
      this._toppings = [];
    }
  
    /**
     * Добавить topping к гамбургеру. Можно добавить несколько topping, при условии, что они разные.
     * @param {String} topping - Тип добавки
     */
    addTopping(topping) {
        if(!this._toppings.includes(topping)){
          this._toppings.push(topping)
        }
    };
    removeTopping(topping) {
      if(this._toppings.includes(topping)){
        this._toppings.pop(topping)
      }
    }
    get toppings() {return this._toppings}

    get size() {return this._size}

    get stuffing() {return this._stuffing}
  
    /**
     * Узнать цену гамбургера
     * @returns {Number} - Цена в деньгах
     *
     * Попробуйте сделать это геттером чтобы можно было обращаться как obj.price и нам вернет сумму.
     */
    get price() {
      let priceSize = Hamburger.SIZES[this._size].price;
      let priceStuffing = Hamburger.STUFFINGS[this._stuffing].price;
      let priceToppings= this._toppings.map((str) => Hamburger.TOPPINGS[str].price).reduce((acc, item) => acc + item, 0);
      this._price =priceSize+priceStuffing+priceToppings;
      return this._price;
    }
  
    /**
     * Узнать калорийность
     * @returns {Number} - Калорийность в калориях
     *
     * Попробуйте сделать это геттером чтобы можно было обращаться как obj.calories и нам вернет сумму.
     */
    get calories() {
      let calSize= Hamburger.SIZES[this._size].calories;
      let calStiffings= Hamburger.STUFFINGS[this._stuffing].calories;
      let calToppings=this._toppings.map((str)=>Hamburger.TOPPINGS[str].calories).reduce((acc,item)=>acc+item,0);
      this._calories=calSize+calStiffings+calToppings;
      return this._calories;
    }
  }
  
  /*
    Размеры, виды добавок и начинок объявите как статические поля класса.
    Добавьте отсутсвующие поля по аналогии с примером.
  */
  Hamburger.SIZE_SMALL = 'SIZE_SMALL';
  Hamburger.SIZE_LARGE = 'SIZE_LARGE'
  
  Hamburger.SIZES = {
    [Hamburger.SIZE_SMALL]: {
      price: 30,
      calories: 50,
    },
    [Hamburger.SIZE_LARGE]: {
      price: 50,
      calories: 100,
    }
  };
  
  Hamburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
  Hamburger.STUFFING_SALAD = 'STUFFING_SALAT'
  Hamburger.STUFFING_MEAT = 'STUFFING_MEAT'
  
  Hamburger.STUFFINGS = {
    [Hamburger.STUFFING_CHEESE]: {
      price: 15,
      calories: 20,
    },
    [Hamburger.STUFFING_SALAT]: {
      price: 20,
      calories: 5,
    },
    [Hamburger.STUFFING_MEAT]: {
      price: 25,
      calories: 15,
    }
  };
  
  Hamburger.TOPPING_SPICE = 'TOPPING_SPICE';
  Hamburger.TOPPING_SAUCE = 'TOPPING_SAUCE';
  
  Hamburger.TOPPINGS = {
    [Hamburger.TOPPING_SPICE]: {
      price: 10,
      calories: 0,
    },
    [Hamburger.TOPPING_SAUCE]: {
      price: 15,
      calories: 5,
    }
  };
  
  /* Вот как может выглядеть использование этого класса */
  
  // Маленький гамбургер с начинкой из сыра
  const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
  
  // Добавка из приправы
  hamburger.addTopping(Hamburger.TOPPING_SPICE);
  
  // Спросим сколько там калорий
  console.log("Calories: ", hamburger.calories);
  
  // Сколько стоит?
  console.log("Price: ", hamburger.price);
  
  // Я тут передумал и решил добавить еще соус
  hamburger.addTopping(Hamburger.TOPPING_SAUCE);
  
  // // А сколько теперь стоит?
  console.log("Price with sauce: ", hamburger.price);
  
  // Проверить, большой ли гамбургер?
  console.log("Is hamburger large: ", hamburger.size === Hamburger.SIZE_LARGE); // -> false
  
  // Убрать добавку
  hamburger.removeTopping(Hamburger.TOPPING_SPICE);
  
  // Смотрим сколько добавок
  console.log("Hamburger has %d toppings", hamburger.toppings.length); // 1
  
