var App;
(function (App) {
    var StudentService = (function () {
        function StudentService(http, q) {
            this.http = http;
            this.q = q;
            this.students = [];
        }
        StudentService.prototype.get = function () {
            var self = this;
            var defferd = self.q.defer();
            var f1 = function (successresponse) {
                defferd.resolve(successresponse);
            };
            var f2 = function (errorrepsonce) {
                defferd.reject();
            };
            self.http.get("http://localhost:62384/api/Students").then(f1, f2);
            return defferd.promise;
        };
        StudentService.prototype.save = function (student) {
            var self = this;
            var defferd = self.q.defer();
            var f1 = function (successresponse) {
                defferd.resolve(successresponse);
            };
            var f2 = function (errorrepsonce) {
                defferd.reject();
            };
            self.http.post("http://localhost:62384/api/Students", student).then(f1, f2);
            return defferd.promise;
        };
        return StudentService;
    }());
    StudentService.$inject = ["$http", "$q"];
    App.StudentService = StudentService;
    angular.module("app").service("StudentService", StudentService);
})(App || (App = {}));
//# sourceMappingURL=StudentService.js.map