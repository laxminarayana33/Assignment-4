var app = angular.module('myApp', []);

// app.config("$routerProvider", function($routerProvider){
//   $routerProvider
//   .when('/cart',{
//     templateUrl: 'cart.html',
//     controller:'myCtrl'
//   })
// });
app.controller('myCtrl', function ($scope) {
  $scope.searchItems = [
    {
      
      section: 'table',
      id: 1,
      name: 'Old Model Trendy Car',
      desc: 'The best Brandy in the Liquor',
      image: 'images/table_car.jpg',
      price: 1200,
    },
    {
      section: 'table',
      id: 2,
      name: 'Cycle',
      desc: 'Best for Parties in the Night Time',
      image: 'images/table_cycle.jpg',
      price: 1400,
    },
    {
      section: 'Table',
      id: 3,
      name: 'Firangi',
      desc: 'Martell is the most drinkable brand',
      image: 'images/table_firangi.jpg',
      price: 1550,
    },
    {
      section: 'table',
      id: 4,
      name: 'Jumbo Elephant',
      desc: 'The most Preferd Brandy for parties',
      image: 'images/table_jumbo_elephant.jpg',
      price: 1150,
    },
    {
      section: 'table',
      id: 5,
      name: 'Lamp',
      desc: 'Remy Martin is the best selling Brandy',
      image: 'images/table_lamp.jpg',
      price: 1050,
    },
    {
      section: 'table',
      id: 6,
      name: 'Old Music Player',
      desc: 'The smoothest Whisky for drinking ',
      image: 'images/table_music.jpg',
      price: 4000,
    },
    {
      section: 'table',
      id: 7,
      name: 'Paradise Tribal Rajastani',
      desc: 'The most Prefred whisky by indians',
      image: 'images/table_paradise_tribal.jpg',
      price: 3500,
    },
    {
      section: 'table',
      id: 8,
      name: 'Hand made Bowls',
      desc: 'Best Night Occations drinking Whisky',
      image: 'images/table_things.jpg',
      price: 600,
    },
    {
      section: 'wall',
      id: 9,
      name: 'Birds Nest',
      desc: 'Most popular Whisky in india ',
      image: 'images/w_bird_nest.jpg',
      price: 900,
    },
    {
      section: 'wall',
      id: 10,
      name: 'Birds',
      desc: 'The best party drink is jack',
      image: 'images/w_bird.jpg',
      price: 800,
    },
    {
      section: 'wall',
      id: 11,
      name: 'Dream Catcher',
      desc: 'Best drink for get together ',
      image: 'images/wall_dream_catcher.jpg',
      price: 1800,
    },
    {
      section: 'wall',
      id: 12,
      name: 'Dream Catcher',
      desc: 'Reserved classic officailly for drinks',
      image: 'images/wall_dream_catcher2.jpg',
      price: 1000,
    },
    {
      section: 'wall',
      id: 13,
      name: 'Fish Family',
      desc: 'The best Drink in Winter Times',
      image: 'images/wall_fish_family.jpg',
      price: 2200,
    },
    {
      section: 'wall',
      id: 14,
      name: 'Hanging Bells',
      desc: 'Offical Party Drink for classic peoples',
      image: 'images/wall_hanging.jpg',
      price: 1000,
    },
    {
      section: 'wall',
      id: 15,
      name: 'Pots',
      desc: 'The beast of the liquors',
      image: 'images/wall_pots.jpg',
      price: 2850,
    },
    {
      section: 'wall',
      id: 15,
      name: 'Subha Labh',
      desc: 'The beast of the liquors',
      image: 'images/wall_shub_labh.jpg',
      price: 2850,
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
    localStorage.setItem("carts", JSON.stringify(carts));
    // console.log(carts);
    // return carts
   }
  }

  var carts = JSON.parse(localStorage.getItem("carts"));
   
$scope.total = 0
  
  $scope.setTotals = function(cart) {
    if(cart){
      $scope.total += cart.price
    }
   
  }

  $scope.remove = function(cart){
    if(cart){
      $scope.carts.splice($scope.carts.indexOf(cart),1);
      $scope.total -= cart.price;
    }
  }
  // Adding Item

  $scope.newItem = [
    naem='',
    section = '',
    price = '',
    image=''
  ]

  $scope.upload = function(item){
    if($scope.newItem){
      $scope.searchItems.push({section:$scope.section, id:$scope.id, name:$scope.name, desc:$scope.desc, image:$scope.image, price:$scope.price})
      console.log($scope.searchItems)
    }
  }

  $scope.increase = false;
  $scope.decrease = false;
  $scope.count = '';

  $scope.increment = function(){
    if(increase){
      return
    }
    $scope.count++
    increase =  true;
  }
  $scope.decrement = function(){
    if(decrease){
      return
    }
    $scope.count++
    decrease =  true;
  }

  $scope.liked = false;

  $scope.payment = function(){
    alert("payment done")
  }

  
  // $scope.like = function(item){
  //   if(color = false){
  //     return color.fill = 'green'
  //   }
  // }

  // $scope.showModal = false;
  // $scope.open = function(){
  //   $scope.showModal = !$scope.showModal;
  // }

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


app.controller('formCtrl', function ($scope) {
  $scope.user = [
    Name= '',
    surname= '',
    email= '',
    phonenumber= '',
    password= '',
    confirmpassword= '',
]
  $scope.message = '';
  $scope.users = [];


  $scope.formGroup = function () {
    if ($scope.user) {
      $scope.users.push({
        Name: $scope.Name,
        surname: $scope.surname,
        email: $scope.email,
        phonenumber: $scope.phonenumber,
        password: $scope.password,
        confirmpassword: $scope.confirmpassword,
      })
      console.log($scope.users);
    // $scope.form = '';
    }
  }
  if(password == confirmpassword)$scope.message = 'Password is matched'
  if(password == !confirmpassword)$scope.message = 'Password is Miss matched'

  $scope.formpage = false;
  $scope.show = function(){
    $scope.formpage = $scope.formpage? false : true;
  }


})
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


app.controller('myctrl', function($modal){
  $scope.payment = function(cart){
    $scope.selected =  cart;
  }
$scope.payment = function(cart){
  $modal.open({
    templateUrl:'payment.html',
    backdrop:true,
    windowClass : 'modal',
    controller:function($scope, $instance){
      $scope.selected = cart
      $scope.save=function(){
        console.log('everything ok')
      }
      $scope.cancel = function(){
        $instance.dismiss('cancel');
      };
    }
  
  })
}
})