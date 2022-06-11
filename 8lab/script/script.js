// prototype inheritance  fot employeer`s

function Employee(name, lastName, baseSalary, experience){
  this.name = name;
  this.lastName = lastName;
  this.baseSalary = baseSalary;
  this.experience = experience;

};


Employee.prototype.giveSalary  = function() {
  return document.write("<p>" +this.name + " " + this.lastName + " отримує " + this.getSalary() + " шекелей "+ "</p>" )
}


Employee.prototype.getSalary = function() {
  let countedSalary  = this.baseSalary;
  if (this.experience >= 2 && this.experience < 5) {
    countedSalary  = countedSalary  + 200;}
  else if (this.experience >= 5) {
    countedSalary  = countedSalary  * 1.2 + 500;
  }
  return countedSalary ;
}


function Designer(name, lastName, baseSalary, experience, coef){
  Employee.call(this, name, lastName, baseSalary, experience);
  this.coef = coef;
};

Designer.prototype = Object.create(Employee.prototype);

Designer.prototype.getSalary = function() {
  let countedSalary  = Employee.prototype.getSalary.call(this);
  return countedSalary  * this.coef;
}

function Developer(name, lastName, baseSalary, experience){
  Employee.call(this, name, lastName, baseSalary, experience);
}

Developer.prototype = Object.create(Employee.prototype);







function Manager(name, lastName, baseSalary, experience, team){
  Employee.call(this, name, lastName, baseSalary, experience);
  this.team = team;
};

Manager.prototype = Object.create(Employee.prototype);



Manager.prototype.getSalary = function() {
    let countedSalary  = Employee.prototype.getSalary.call(this);
    
    if (this.team.length >= 5 && this.team.length < 10) {
      countedSalary  = countedSalary  + 200;
    }
    else if (this.team.length >= 10) {
      countedSalary  = countedSalary  + 300;
    }

    let facSlaves = 0;
    for(key in this.team){
      if(this.team[key] instanceof Developer ){
        facSlaves++;
      }
    }
    if (facSlaves > (this.team.length / 2)) {
      countedSalary   *= 1.1;
    }
    return countedSalary ;
}




function Department() {
  this.managers = [];
}


Department.prototype.giveSalary = function() {
  this.managers.forEach( function (manager){
      manager.giveSalary();
      manager.team.forEach(function (slaves)  {
          slaves.giveSalary();
      });
  });
}




 function main() {
  const dev = new Developer("Alan", "Mazon", 900, 3);
  const dev2 = new Developer("Mania", "Dei", 900, 1);
  const dev3 = new Developer("Dead", "Inside", 1000, 6);
  const dev4 = new Developer("Pashu", "bezostanovki", 1000, 9);
  const des = new Designer("Dizainer", "Otboga", 1300, 10, 0.5);
  const des1 = new Designer("Sto", "Poligobov", 1300, 6, 0.8);
  const manager = new Manager("Smotritel", "Zarabami", 1500, 25, [dev, dev2, dev3, dev4,des,des1]);
  
  const departmen = new Department();
  departmen.managers.push(manager);
  departmen.giveSalary();
}


main();