'use strict';

/**
 * @ngdoc directive
 * @name publickApp.directive:donat
 * @description
 * # donat
 */
function letters(str){
  var obj = {};
  var max = 1;
  var up = str.toUpperCase();
  var onlyLatter = up.match(/([A-Z]+)/g);
  var clearLeterrs = onlyLatter.join('');
  var arr = [];
  for(var i = 0; i < clearLeterrs.length; i++){
    var prop = clearLeterrs[i];
    if (obj[prop]) {
      obj[prop]++;
      if (max < obj[prop]) max = obj[prop];
    } else {
      obj[prop] = 1;
    }
  }
  for(var item in obj){
     arr.push({key :  item, value : obj[item]});
   }
  return arr;
}

angular.module('publickApp').
directive('barsChart', function() {
  //explicitly creating a directive definition variable
  //this may look verbose but is good for clarification purposes
  //in real life you'd want to simply return the object {...}
  var directiveDefinitionObject = {
    //We restrict its use to an element
    //as usually  <bars-chart> is semantically
    //more understandable
    restrict: 'E',
    //this is important,
    //we don't want to overwrite our directive declaration
    //in the HTML mark-up
    replace: false,
    //our data source would be an array
    //passed thru chart-data attribute
    scope: {
      data: '=chartData'
    },
    link: function(scope, element, attrs) {
      //in D3, any selection[0] contains the group
      //selection[0][0] is the DOM node
      //but we won't need that this time
      var chart = d3.select(element[0]);
      //to our original directive markup bars-chart
      //we add a div with out chart stling and bind each
      //data entry to the chart
       scope.$watch(function(newValue,oldValue){
        if(typeof scope.data === 'string'){
      var  arr = letters(scope.data);
      scope.data = arr;
      // var clear = chart.remove();
      chart.append("div").attr("class", "chart")
        .selectAll('div')
        .data(scope.data).enter().append("div")
        .transition().ease("elastic")
        .style("width", function(d) {
          return d['value'] + "%";
        })
        .text(function(d) {
          return d['key'] + " " + d['value'] + "%";
        });
      }
    });
      //a little of magic: setting it's width based
      //on the data value (d)
      //and text all with a smooth transition
    }
  };
  return directiveDefinitionObject;
});
