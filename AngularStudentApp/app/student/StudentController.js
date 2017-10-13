var App;
(function (App) {
    var StudentController = (function () {
        function StudentController(studentService) {
            this.student = new Student();
            this.studentService = studentService;
        }
        StudentController.prototype.add = function () {
            var self = this;
            var suc = function (response) {
                self.reset();
            };
            var err = function (erroirResponce) {
            };
            this.studentService.save(this.student).then(suc, err);
        };
        StudentController.prototype.reset = function () {
            this.student = new Student();
        };
        return StudentController;
    }());
    StudentController.$inject = ["StudentService"];
    var StudentsController = (function () {
        function StudentsController(studentService) {
            this.studentService = studentService;
            this.students = [];
            var self = this;
            var suc = function (sucresponce) {
                console.log(sucresponce);
                self.students = sucresponce.data;
                console.log(this.students);
            };
            var err = function (errresponce) {
                console.log(errresponce);
            };
            studentService.get().then(suc, err);
        }
        return StudentsController;
    }());
    StudentsController.$inject = ["StudentService"];
    var Student = (function () {
        function Student() {
        }
        return Student;
    }());
    App.Student = Student;
    angular.module('app').controller("StudentController", StudentController).controller("StudentsController", StudentsController);
})(App || (App = {}));
//# sourceMappingURL=StudentController.js.map