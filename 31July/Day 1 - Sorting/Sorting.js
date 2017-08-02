function Student(name,id) {
	this.name = name;
	this.id = id;
}

Student.prototype.toString = function(){
		return this.name;
}

var s1 = new Student("John",12);
var s2 = new Student("Cody",20);
var s3 = new Student("Doe",65);
var s4 = new Student("Lara",06);

var arrayOfStud = [s1,s2,s3,s4]
document.getElementById("GivenArray").innerHTML = arrayOfStud.toString();


var sortFun = function(employee1, employee2){
    return employee1.name > employee2.name;
}

document.getElementById("SortedArray").innerHTML = arrayOfStud.sort(sortFun).toString();
