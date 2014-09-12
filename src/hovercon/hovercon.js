angular.module('johnrob1880.directives.hovercon', [])
    .directive('hovercon', function () {
        return {
            restrict: 'EA',
            scope: {
                color: '@',
                bgColor: '@',
                whenClick: '&'
            },
            controller: function ($scope) {

            },
            link: function ($scope, element, attrs) {

                var options = attrs && attrs.hovercon,
                    opts = options && options.split(';') || [],
                    styles = {};

                opts.forEach(function (name, key) {
                   var arr = opts[key].split(':'),
                       k = arr[0] && ( arr[0].substring(0, 1) == ' ' ? arr[0].slice(1) : arr[0]),
                       v = arr[1] && ( arr[1].substring(0, 1) == ' ' ? arr[1].slice(1) : arr[1]);

                    if (typeof k !== 'undefined' && k !== '') {
                        styles[k] = v;
                    }
                });

                if (styles.color) {
                    attrs.color = styles.color;
                }
                if (styles.background) {
                    attrs.bgColor = styles.background;
                }
                if (styles.animate) {
                    attrs.animate = styles.animate;
                }

                console.log([options, opts, styles]);

                $scope.origColor = element.css('color');
                $scope.origBgColor = element.css('background-color');

                element.addClass('hovercon');


                element.bind('mouseenter', function () {
                    element.addClass('hovercon-over');
                    if (attrs.color) {
                        element.css('color', attrs.color)
                    }
                    if (attrs.bgColor) {
                        element.css('background-color', attrs.bgColor)
                    }
                    if (attrs.animate) {
                        if (attrs.animate.toLowerCase() == 'spin'
                            || attrs.animate.toLowerCase().indexOf('spin') > 0) {
                            element.addClass('hovercon-spin');
                        }
                    }
                });
                element.bind('mouseleave', function () {
                    element.removeClass('hovercon-over');
                    element.removeClass('hovercon-spin');
                    element.css('color', $scope.origColor);
                    element.css('background-color', $scope.origBgColor);
                });

                if (attrs.whenClick) {


                    element.bind('click', function () {
                            element.addClass("hovercon-clicked");
                            $scope.whenClick(); }
                    );
                }
            }
        };
    });