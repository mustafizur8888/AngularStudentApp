module App {
    export class StudentService {

        http: angular.IHttpService;
        q: angular.IQService;
        students: Student[];
        static $inject = ["$http", "$q"];
        constructor(http: angular.IHttpService, q: angular.IQService) {
            this.http = http;
            this.q = q;
            this.students = [];
        }
        get(): angular.IPromise<any> {
            var self = this;
            var defferd = self.q.defer();

            var f1 = function (successresponse) {
                defferd.resolve(successresponse);
            }
            var f2 = function (errorrepsonce) {
                defferd.reject();
            }
            self.http.get("http://localhost:62384/api/Students").then(f1, f2);
            return defferd.promise;
        }

        save(student: Student): angular.IPromise<any> {
            var self = this;
            var defferd = self.q.defer();
            var f1 = function (successresponse) {
                defferd.resolve(successresponse);
            }
            var f2 = function (errorrepsonce) {
                defferd.reject();
            }
            self.http.post("http://localhost:62384/api/Students", student).then(f1, f2);

            return defferd.promise;
        }
    }

    angular.module("app").service("StudentService", StudentService);
}