var GroceryApp = angular.module('GroceryApp',[]);


GroceryApp.controller('GroceryControl',['$scope',function($scope){
  $scope.Total = 0;
  $scope.order = 0;
  $scope.discount=0;
  $scope.Groceries = [
    {
      name : 'Ginger',
      price : 30,
        quantity : $scope.order,

    },
    {
      name : 'Carrots',
      price : 40,
      quantity : $scope.order,

    },
    {
      name : 'Orange',
      price : 30,
        quantity : $scope.order
    },
    {
      name : 'Tomato',
      price : 30,
        quantity :$scope.order
    },
    {
      name : 'Apple',
      price : 30,
        quantity : $scope.order
    },
    {
      name : 'Pinapple',
      price : 30,
        quantity : $scope.order

    }
  ]

   $scope.DiscountNo = parseInt($scope.discount);


  console.log($scope.GrandTotal);
 //  for(var i=0 ; i<=6 ; i++)
 //  {
 // $scope.Total +=$scope.Groceries[i].net ;
 // }
// $scope.Groceries[0].net = parseInt($scope.Groceries[0].price) * parseInt($scope.order);
// console.log($scope.Groceries[0].net );
}])
