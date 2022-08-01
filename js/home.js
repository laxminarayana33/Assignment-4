var app = angular.module('myApp', [])
app.controller('myCtrl', function ($scope) {
  $scope.searchItems = [
    {
      
      section: 'table',
      id: 1,
      name: 'Old Model Trendy Car',
      desc: 'The best Brandy in the Liquor',
      image: 'images/table_car.jpg',
      price: '1200',
    },
    {
      section: 'table',
      id: 2,
      name: 'Cycle',
      desc: 'Best for Parties in the Night Time',
      image: 'images/table_cycle.jpg',
      price: '1400',
    },
    {
      section: 'Table',
      id: 3,
      name: 'Firangi',
      desc: 'Martell is the most drinkable brand',
      image: 'images/table_firangi.jpg',
      price: '1550',
    },
    {
      section: 'table',
      id: 4,
      name: 'Jumbo Elephant',
      desc: 'The most Preferd Brandy for parties',
      image: 'images/table_jumbo_elephant.jpg',
      price: '1150',
    },
    {
      section: 'table',
      id: 5,
      name: 'Lamp',
      desc: 'Remy Martin is the best selling Brandy',
      image: 'images/table_lamp.jpg',
      price: '1050',
    },
    {
      section: 'table',
      id: 6,
      name: 'Old Music Player',
      desc: 'The smoothest Whisky for drinking ',
      image: 'images/table_music.jpg',
      price: '4000',
    },
    {
      section: 'table',
      id: 7,
      name: 'Paradise Tribal Rajastani',
      desc: 'The most Prefred whisky by indians',
      image: 'images/table_paradise_tribal.jpg',
      price: '3500',
    },
    {
      section: 'table',
      id: 8,
      name: 'Hand made Bowls',
      desc: 'Best Night Occations drinking Whisky',
      image: 'images/table_things.jpg',
      price: '600',
    },
    {
      section: 'wall',
      id: 9,
      name: 'Birds Nest',
      desc: 'Most popular Whisky in india ',
      image: 'images/wall_birds_nest.jpg',
      price: '900',
    },
    {
      section: 'wall',
      id: 10,
      name: 'Birds',
      desc: 'The best party drink is jack',
      image: 'images/wall_birds.jpg',
      price: '800',
    },
    {
      section: 'wall',
      id: 11,
      name: 'Dream Catcher',
      desc: 'Best drink for get together ',
      image: 'images/wall_dream_catcher.jpg',
      price: '1800',
    },
    {
      section: 'wall',
      id: 12,
      name: 'Dream Catcher',
      desc: 'Reserved classic officailly for drinks',
      image: 'images/wall_dream_catcher2.jpg',
      price: '1000',
    },
    {
      section: 'wall',
      id: 13,
      name: 'Fish Family',
      desc: 'The best Drink in Winter Times',
      image: 'images/wall_fish_family.jpg',
      price: '2200',
    },
    {
      section: 'wall',
      id: 14,
      name: 'Hanging Bells',
      desc: 'Offical Party Drink for classic peoples',
      image: 'images/wall_hanging.jpg',
      price: '1000',
    },
    {
      section: 'wall',
      id: 15,
      name: 'Pots',
      desc: 'The beast of the liquors',
      image: 'images/wall_pots.jpg',
      price: '2850',
    },
    {
      section: 'wall',
      id: 15,
      name: 'Subha Labh',
      desc: 'The beast of the liquors',
      image: 'images/wall_shub_labh.jpg',
      price: '2850',
    },
  ];
  
  $scope.carts = []
  $scope.message = ''
  // $scope.isVisible = false
  // $scope.show = function () {
  //   $scope.isVisible = $scope.isVisible ? fasle : true
  // }
  
  $scope.store = function(item){
    if(item){
    $scope.carts.push({section:item.section, id:item.id, name:item.name, desc:item.desc, image:item.image, price:item.price})
    // console.log($scope.foundList)
   }
  }
  $scope.total = 0;
  $scope.setTotals = function(cart) {
    if(cart){
      $scope.total += cart.price;
       console.log($scope.total)
    }
  }
  $scope.remove = function(cart){
    if(cart){
      $scope.carts.splice($scope.carts.indexOf(cart),1);
      // $scope.total -= cart.price;
    }
  }
});

//filter Search method
app.filter('searchFor', function () {
  return function (arr, searchString) {
    if (!searchString) {
      return arr
    }
    var result = []
    searchString = searchString.toLowerCase()
    angular.forEach(arr, (item) => {
      if (item.name.toLowerCase().indexOf(searchString) !== -1) {
        result.push(item)
      }
    })
    return result
  }
});

//Routing method

// app.config(function($routerProvider){
//   $routerProvider
//   .when("/cart", {
//     templateUrl: 'Cart.html',
//     controller: 'cartCtrl'
//   });
// })
// app.controller('cart',function($scope, $routerParams){
//   $scope.cart = $routerParams.cart; 
// })
