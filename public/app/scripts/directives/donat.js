'use strict';

/**
 * @ngdoc directive
 * @name publickApp.directive:donat
 * @description
 * # donat
 */
function link(scope, el, attr) {
  scope.$watch(function(newValue,oldValue){
    if(newValue.item){
      var data = letters(newValue.item.title); // тут наши буквы посчитаные
      var color = d3.scale.category20b();
      var el = el[0];
      var width = el.clientWidth;
      var height = el.clientHeight;
      var min = Math.min(width, height);
      // var arc = d3.svg.arc()
      // .innerRadius(min / 2 * 0.5)
      //   .outerRadius(min / 2 * 0.9);
      var svg = d3.select(el).append('svg')
        // .attr("width", width)
        //  .attr("height", height)
        //  .append("g")
        //  .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
      var path = svg.selectAll("path")
        // .data(pie(dataset.apples))
        // .enter().append("path")
        // .attr("fill", function(d, i) {
        //   return color(i);
        // })
        // .attr("d", arc);
      console.log('scope', '\n', 'element', el);
    }
    }
  });

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

angular.module('publickApp')
  .directive('donat', function() {
    return {
      templateUrl: 'views/d3.html',
      restrict: 'E',
      scope:{
        text : "@"
      },
      controller: 'DonatCtrl',
      link: link
    };
  });
