(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {

  var itemBuyer = this;
  itemBuyer.items = ShoppingListCheckOffService.getToBuyItems();

  itemBuyer.moveItem = function (itemIndex) {
    ShoppingListCheckOffService.moveItem(itemIndex);
  }

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {

  var boughtList = this;
  boughtList.items = ShoppingListCheckOffService.getBoughtItems();

}

function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var toBuyItems = [ 
  {   
    name: "Milk",
    quantity: "1"
  },
  {
    name: "Eggs",
    quantity: "12"
  },
  {
    name: "Carrots",
    quantity: "3"
  },
  {
    name: "Oranges",
    quantity: "6"
  },
  {
    name: "Bananas",
    quantity: "5"
  },
  {
    name: "Chicken Nuggets",
    quantity: "20"
  },
  {
    name: "Ice Cream",
    quantity: "1"
  },
  {
    name: "Apple Juice",
    quantity: "4"
  }];

  var boughtItems = [];

  service.moveItem = function (itemIdex) {
    var item = toBuyItems[itemIdex];
    
    boughtItems.push(item);
    toBuyItems.splice(itemIdex, 1);
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };
}

})();