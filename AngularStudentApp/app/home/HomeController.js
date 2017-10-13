var App;
(function (App) {
    var HomeController = (function () {
        function HomeController() {
            console.log('home con');
        }
        return HomeController;
    }());
    angular.module("app").controller("HomeController", HomeController);
})(App || (App = {}));
//# sourceMappingURL=HomeController.js.map