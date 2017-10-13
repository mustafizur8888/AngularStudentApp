var App;
(function (App) {
    var StudentController = (function () {
        function StudentController() {
            console.log('student controller');
        }
        return StudentController;
    }());
    var StudentsController = (function () {
        function StudentsController() {
        }
        return StudentsController;
    }());
    angular.module("app")
        .controller("StudentController", StudentController)
        .controller("StudentsController", StudentsController);
})(App || (App = {}));
//# sourceMappingURL=StudentController.js.map