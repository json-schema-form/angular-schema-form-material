angular
    .module('test')
    .controller('TestCtrl', function($scope, $http, $location, $timeout, $q) {

    $scope.tests = [
      { name: "Material Flex Grid", data: 'data/grid.json' },
      { name: "Simple", data: 'data/simple.json' },
      { name: "Basic JSON Schema Type", data: 'data/types.json' },
      { name: "Autocomplete", data: 'data/autocomplete.json' },
      { name: "Switch", data: 'data/switch.json'},
      { name: "TitleMap Examples", data: 'data/titlemaps.json' },
      /*{ name: "Complex Key Support", data: 'data/complex-keys.json' },*/
      /*{ name: "Array", data: 'data/array.json' },*/
      /*{ name: "Tab Array", data: 'data/tabarray.json' },*/
      { name: "Tabs", data: 'data/tabs.json' },
      { name: "Kitchen Sink", data: 'data/sink.json' },
      { name: "Hack: Conditional required", data: 'data/conditional-required.json' },
    ];
  
    /////////////////////////////////////////////////////////////////////////
    //// Autocomplete code //////////////////////////////////////////////////
    $scope.arnieFlix = loadFlix();
    $scope.searchText    = null;
    $scope.simulateQuery = false;
    $scope.querySearch   = querySearch;
    /**
     * Search for arnieFlix... use $timeout to simulate
     * remote dataservice call.
     */
    function querySearch (query) {
      var results = query ? $scope.arnieFlix.filter( createFilterFor(query) ) : $scope.arnieFlix,
          deferred;
      if ($scope.simulateQuery) {
        deferred = $q.defer();
        $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
        return deferred.promise;
      } else {
        return results;
      }
    };
  
    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);
      return function filterFn(item) {
        return (item.value.indexOf(lowercaseQuery) === 0);
      };
    };
  
    function loadFlix() {
      var films = [
        { "year": undefined, "title": "The Legend of Conan" },
        { "year": undefined, "title": "Triplets" },
        { "year": 2015, "title": "Terminator Genisys" },
        { "year": 2015, "title": "Maggie" },
        { "year": 2014, "title": "The Expendables 3" },
        { "year": 2014, "title": "Sabotage" },
        { "year": 2013, "title": "Escape Plan" },
        { "year": 2013, "title": "The Last Stand" },
        { "year": 2012, "title": "The Expendables 2" },
        { "year": 2010, "title": "The Expendables" },
        { "year": 2005, "title": "The Kid & I" },
        { "year": 2004, "title": "Around the World in 80 Days" },
        { "year": 2003, "title": "Welcome to the Jungle" },
        { "year": 2003, "title": "Terminator 3: Rise of the Machines" },
        { "year": 2002, "title": "Collateral Damage" },
        { "year": 2000, "title": "The 6th Day" },
        { "year": 1999, "title": "End of Days" },
        { "year": 1997, "title": "Batman & Robin" },
        { "year": 1996, "title": "Jingle All the Way" },
        { "year": 1996, "title": "Eraser" },
        { "year": 1994, "title": "Junior" },
        { "year": 1994, "title": "True Lies" },
        { "year": 1993, "title": "Last Action Hero" },
        { "year": 1993, "title": "Dave" },
        { "year": 1991, "title": "Terminator 2: Judgment Day" },
        { "year": 1990, "title": "Kindergarten Cop" },
        { "year": 1990, "title": "Total Recall" },
        { "year": 1988, "title": "Twins" },
        { "year": 1988, "title": "Red Heat" },
        { "year": 1987, "title": "The Running Man" },
        { "year": 1987, "title": "Predator" },
        { "year": 1986, "title": "Raw Deal" },
        { "year": 1985, "title": "Commando" },
        { "year": 1985, "title": "Red Sonja" },
        { "year": 1984, "title": "The Terminator" },
        { "year": 1984, "title": "Conan the Destroyer" },
        { "year": 1982, "title": "Conan the Barbarian" },
        { "year": 1980, "title": "The Jayne Mansfield Story" },
        { "year": 1979, "title": "Scavenger Hunt" },
        { "year": 1979, "title": "The Villain" },
        { "year": 1976, "title": "Stay Hungry" },
        { "year": 1974, "title": "Happy Anniversary and Goodbye" },
        { "year": 1973, "title": "The Long Goodbye" },
        { "year": 1969, "title": "Hercules in New York" },
        { "year": 1969, "title": "Hercules" }
      ];
      return films.map( function (film) {
        film.name = film.title;
        film.value = film.title.toLowerCase();
        return film;
      });
    };
  
    // $scope.autocompleteTmpl = `
    //   <span class="item-year">
    //     <span> {{item.year}} </span>
    //   </span>
    //   <span class="item-title">
    //     <strong>{{item.title}}</strong>
    //   </span>`;
    //// Autocomplete code end //////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////
  
    $scope.navbarMode = 'default';
    //$scope.hasFlash = swfobject.hasFlashPlayerVersion('9');
  
    // Load data from gist.
    if (false || $location.path().length > 4) {
      $scope.navbarMode = 'loaded';
      var gistId = $location.path().replace('/','');
      $scope.loading = true;
      $http.get('https://api.github.com/gists/' + gistId).success(function(res) {
        $scope.error = null;
        $scope.tests.unshift({name: 'Gist'});
        $scope.selectedTest = $scope.tests[0];
        $scope.loadedData = {
          created: moment(res.created_at).fromNow(),
          user: res.user !== null ? res.user.login : 'Anonymous'
        }
        $scope.loading = false;
        $scope.schemaJson = res.files['schema.json'].content;
        $scope.formJson   = res.files['form.json'].content;
        $scope.modelData  = JSON.parse(res.files['model.json'].content);
      }).error(function() {
        $scope.loadedData = 'dummy';
        $scope.error = 'Failed to load gist.';
        $scope.selectedTest = $scope.tests[0];
      });
    } else {
      $scope.selectedTest = $scope.tests[0];
    }
  
    $scope.$watch('selectedTest',function(val){
      if (val && val.data !== undefined) {
        $http.get(val.data).then(function(res) {setNewData(res.data);});
      }
    });
  
    $scope.itParses     = true;
    $scope.itParsesForm = true;
  
  
    $scope.$watch('schemaJson',function(val,old){
      if (val && val !== old) {
        try {
          $scope.schema = JSON.parse($scope.schemaJson);
          $scope.itParses = true;
        } catch (e){
          $scope.itParses = false;
        }
      }
    });
  
    $scope.$watch('formJson',function(val,old){
      if (val && val !== old) {
        try {
          $scope.form = JSON.parse($scope.formJson);
          $scope.itParsesForm = true;
        } catch (e){
          $scope.itParsesForm = false;
        }
      }
    });
  
    var setNewData = function(data) {
      $scope.schema = data.schema;
      $scope.form   = data.form;
      $scope.schemaJson = JSON.stringify($scope.schema,undefined,2);
      $scope.formJson   = JSON.stringify($scope.form,undefined,2);
      $scope.modelData = data.model || {};
    };
  
    $scope.pretty = function(){
      return typeof $scope.modelData === 'string' ? $scope.modelData : JSON.stringify($scope.modelData, undefined, 2);
    };
  
    $scope.log = function(msg){
      console.log("Simon says",msg);
    };
  
    $scope.sayNo = function() {
      alert('Noooooooo');
    };
  
    $scope.say = function(msg) {
      alert(msg);
    };
  
    $scope.save = function() {
      // To be able to save invalid json and point out errors, we
      // don't save the schema/form but rather the ones in the input.
  
      $scope.navbarMode = 'saved';
  
      var gist = {
        "description": "A saved configuration for a schema form example, http://textalk.github.io/angular-schema-form/examples/bootstrap-example.html",
        "public": true,
        "files": {
          "schema.json": {
            "content": $scope.schemaJson
          },
          "form.json": {
            "content": $scope.formJson
          },
          "model.json": {
            "content": JSON.stringify($scope.modelData, undefined, 2)
          }
        }
      };
  
      $http.post('https://api.github.com/gists', gist).success(function(data) {
        $scope.error = null;
        $location.path('/' + data.id);
        $scope.savedGistData = {
          data: data,
          url: $location.absUrl()
        };
      }).error(function() {
        $scope.error = 'Failed to save gist.';
      });
    };
  
    $scope.submitForm = function(form) {
      // First we broadcast an event so all fields validate themselves
      $scope.$broadcast('schemaFormValidate');
      // Then we check if the form is valid
      if (form.$valid) {
        alert('You did it!');
      }
    };
  
  });