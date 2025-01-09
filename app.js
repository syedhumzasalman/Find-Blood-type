function result(char) {
  let firstName = document.getElementById("firstName");
  let lastName = document.getElementById("lastName");
  let email = document.getElementById("email");
  let city = document.getElementById("city");
  let age = document.getElementById("age");


  firstName.value += char;
  lastName.value += char;
  email.value += char;
  city.value += char;
  age.value += char;


  if(firstName.value){
      document.getElementById("greeting1").innerHTML = `FirstName: ` + firstName.value;
  } else{
    document.getElementById("greeting1").innerHTML = "FirstName: Please Enter your FirstName ";
  }

  if(lastName.value){
      document.getElementById("greeting2").innerHTML = "LastName: " +  lastName.value;
  } else{
    document.getElementById("greeting2").innerHTML = "LastName:  Please Enter your LastName";
  }

  if (email.value === "") {
    document.getElementById("greeting3").innerHTML = "Email: Please Enter Email";
  } else if (email.value.slice(-10) !== "@gmail.com") {
    document.getElementById("greeting3").innerHTML = "Email: Please Enter Correct Email";
  } else {
    document.getElementById("greeting3").innerHTML = "Email: " + email.value;
  }

  if(city.value === ""){
      document.getElementById("greeting4").innerHTML = "City: Please Enter Your City";
  }else{
    document.getElementById("greeting4").innerHTML = "City: " + city.value; 
  }

  if(age.value){
      document.getElementById("greeting5").innerHTML = "Age: " + age.value;
  }else{
    document.getElementById("greeting5").innerHTML = "Age: Please Enter Your Age ";
}

if(male.checked){
    document.getElementById("gender").innerHTML = "gender:  Male";
} else if(female.checked){
    document.getElementById("gender").innerHTML = "gender:  FeMale";
} else {
    document.getElementById("gender").innerHTML = "gender:  Specify your Gender";
}

const oMinus = ["O-"];
const oplus = ["O-", "O+"];
const bMiuns = ["O-","B-"];
const bplus = ["O-","O+","B-","B+"];
const aMiuns = ["O-","A-"]
const aplus = ["O-", "O+","A-","A+"];
const abMiuns = ["O-","B-","A-","AB-"];
const abPlus = ["O-", "O+","A-","A+","B-","B+","AB-","AB+"];

for(let i = 0; i < oMinus.length; i++){
    document.getElementById("bloodType").innerHTML 
}

}



