angular.module('app.services', []).factory('Sneaker', function($resource) {
  return $resource('/api/v1/sneakers/:id', { id: '@id' }, {
    update: {
      method: 'PUT'
    }
  });
}).service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});
