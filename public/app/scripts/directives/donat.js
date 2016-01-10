'use strict';

/**
 * @ngdoc directive
 * @name publickApp.directive:donat
 * @description
 * # donat
 */
function link(scope, el) {
  var data = []; // тут наши буквы посчитаные
  var color = d3.scale.category20();
  var el = el[0];
  var width = el.clientWidth;
  var height = el.clientHeight;
  var min = Math.min(width, height);
  // var arc = d3.svg.atc()
  //   .outerRadius(min / 2 * 0.9)
  //   .innerRadius(min / 2 * 0.5);
  var svg = d3.select(el).append('svg')
  //   .attr({
  //     width: width,
  //     height: height
  //   })
  //   .append('g')
  //   .attr('transform', 'traslate(' + width / 2 + ',' + ')');
  // svg.selectAll('path').data(pie(data))
  //   .enter().append('path');
  console.log('scope', scope, '\n', 'element', el);
}
angular.module('publickApp')
  .directive('donat', function() {
    return {
      templateUrl: 'views/d3.html',
      restrict: 'E',
      controller: 'D3Ctrl',
      link: link
    };
  });
