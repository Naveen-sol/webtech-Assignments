function Student(name,collegeName) {
	this.name = name;
	this.college = new College(collegeName);
}
Student.prototype.toString = function(){
		return this.name + " , " + this.college;
}

function College(name){
	this.name = name;
}
College.prototype.toString = function(){
		return this.name;
}

function shallowCopy(obj){
	var newObj={};
	for(var prop in obj){
		if(obj.hasOwnProperty(prop)){
			newObj[prop] = obj[prop];	
		}
	}
	return newObj;
}

function deepCopy(obj){
	var newObj={};
	if(typeof obj === 'object'){
		for(var prop in obj){
			newObj[prop] = deepCopy(obj[prop]);
		}
	}
	else{
		newObj = obj;
	}
	return newObj;
}

var stud = new Student("John","Kongu");
var shallowCopyobj = shallowCopy(stud);
var deepCopyObj = deepCopy(stud);
document.getElementById("ShallowObj").innerHTML = shallowCopyobj.name + " , " + shallowCopyobj.college.name;
document.getElementById("DeepObj").innerHTML = deepCopyObj;	
document.getElementById("OriginalObj").innerHTML = stud;

function changeOrgObj(){
	stud.name = document.getElementById("StudName").value;
	stud.college.name = document.getElementById("CollegeName").value;	
	document.getElementById("OriginalObj").innerHTML = stud;
	document.getElementById("ShallowObj").innerHTML = shallowCopyobj.name + " , " + shallowCopyobj.college.name;
	document.getElementById("DeepObj").innerHTML = deepCopyObj;	
}