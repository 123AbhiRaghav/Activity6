class Person {
    constructor(firstName,lastName,age,gender,email,mobile,city,department,language) {
       this.firstName = firstName;
       this.lastName = lastName;
       this.age = age;
       this.gender = gender;
       this.email = email;
       this.mobile = mobile;
       this.city = city;
       this.department = department;
       this.language = language;
    }
    getPersonDetails(){
      return `Name: ${this.firstName} ${this.lastName}
              age: ${this.age} 
              gender:${this.gender}
              email: ${this.email} 
              mobile:${this.mobile}
              city:${this.city} 
              department:${this.department}
              language:${this.language}`
    }
}
const person = new Person("Abhishek","Raghav D",25,"Male","abhiraghavd@gmail.com",7204601510,"Bangalore","Computer","Telugu")
console.log(person.getPersonDetails())

// Output:
// Name: Abhishek Raghav D
// age: 25 
// gender:Male
// email: abhiraghavd@gmail.com 
// mobile:7204601510
// city:Bangalore 
// department:Computer
// language:Telugu