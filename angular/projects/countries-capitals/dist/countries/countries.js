angular.module("CountriesCapitalsApp").controller("CountriesController",["$scope","CountryRepo",function(o,n){n.getCountryList().then(function(n){o.countries=n.geonames})}]);