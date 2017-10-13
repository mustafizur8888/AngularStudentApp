module App {
    class HomeController {
        constructor() {
            console.log('home con');
        }

    }

    angular.module("app").controller("HomeController", HomeController);
}