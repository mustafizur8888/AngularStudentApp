module App {
    class StudentController {
        student: Student;
        information: string;
        studentService: StudentService;
        static $inject = ["StudentService"];

        constructor(studentService: StudentService) {
            this.student = new Student();
            this.studentService = studentService;
        }

        add(): void {
            var self = this;
            let suc = function (response) {
                self.reset();
            }
            let err = function (erroirResponce) {

            }
            this.studentService.save(this.student).then(suc, err);
        }

        reset(): void {
            this.student = new Student();
        }
    }
    class StudentsController {
        students: Student[];
        studentService: StudentService;
        static $inject = ["StudentService"];

        constructor(studentService: StudentService) {
            this.studentService = studentService;
            this.students = [];
            var self = this;
            let suc = function (sucresponce) {
                console.log(sucresponce);
                self.students = sucresponce.data;
                console.log(this.students);
            }
            let err = function (errresponce) {
                console.log(errresponce);
            }
             studentService.get().then(suc, err);
        }
    }
    export class Student {
        public id: string;
        public name: string;
        public phone: string;
    }



    angular.module('app').controller("StudentController", StudentController).controller("StudentsController", StudentsController);
}