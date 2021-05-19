var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    function Department(owner, id) {
        this.workers = [];
        this.owner = owner;
        this.id = id;
    }
    Department.prototype.createWorker = function (a) {
        this.workers.push(a);
    };
    Department.prototype.showEmployeesInfo = function () {
        console.log("La cantidad de empleados que hay en el departamento son: " + this.workers.length);
        console.log(this.workers);
    };
    Department.prototype.verow = function () {
        return this.owner;
    };
    return Department;
}());
var departamento1 = new Department("Maritza Chipana Copa", 1);
departamento1.createWorker("empleado1");
departamento1.createWorker("empleado2");
departamento1.createWorker("empleado3");
departamento1.showEmployeesInfo();
var CEODeparment = /** @class */ (function (_super) {
    __extends(CEODeparment, _super);
    function CEODeparment(owner, id, admins) {
        var _this = _super.call(this, owner, id) || this;
        _this.admins = [];
        _this.admins = admins;
        return _this;
    }
    return CEODeparment;
}(Department));
var ins = new CEODeparment("Maria", 2, ["AUTHOR", "ADMIN", "ADM"]);
console.log(ins.admins);
var ReportsDepartment = /** @class */ (function (_super) {
    __extends(ReportsDepartment, _super);
    function ReportsDepartment(owner, id) {
        var _this = _super.call(this, owner, id) || this;
        _this.reports = [];
        return _this;
    }
    ReportsDepartment.prototype.addReport = function (a) {
        this.reports.push(a);
    };
    ReportsDepartment.prototype.verRepor = function () {
        return this.reports;
    };
    ReportsDepartment.prototype.greet = function () {
        console.log("Hello " + this.verow() + " there are " + this.reports.length + " reports");
    };
    return ReportsDepartment;
}(Department));
var ins2 = new ReportsDepartment("maria2", 3);
//ins2.reports.push("task 004 failed");
ins2.addReport("task 004 failed");
ins2.addReport("succeeded");
ins2.addReport("Task timed out after 3.00 seconds");
console.log(ins2.verRepor());
ins2.greet();
var Person = /** @class */ (function () {
    function Person(Name, age) {
        this.Name = "Mari";
        this.age = 22;
        this.Name = Name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        console.log("Hola " + this.Name + " de " + this.age);
    };
    return Person;
}());
