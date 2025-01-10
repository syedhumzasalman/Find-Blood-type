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
      document.getElementById("greeting1").innerHTML = "<b>FirstName:</b> " + firstName.value;
  } else{
    document.getElementById("greeting1").innerHTML = "<b>FirstName:</b> Please Enter your FirstName ";
  }

  if(lastName.value){
      document.getElementById("greeting2").innerHTML = "<b>LastName:</b> " +  lastName.value;
  } else{
    document.getElementById("greeting2").innerHTML = "<b>LastName:</b>  Please Enter your LastName";
  }

  if (email.value === "") {
    document.getElementById("greeting3").innerHTML = "<b>Email:</b> Please Enter Email";
  } else if (email.value.slice(-10) !== "@gmail.com") {
    document.getElementById("greeting3").innerHTML = "<b>Email:</b> Please Enter Correct Email";
  } else {
    document.getElementById("greeting3").innerHTML = "<b>Email:</b> " + email.value;
  }

  if(city.value === ""){
      document.getElementById("greeting4").innerHTML = "<b>City:</b> Please Enter Your City";
  }else{
    document.getElementById("greeting4").innerHTML = "<b>City:</b> " + city.value; 
  }

  if(age.value){
      document.getElementById("greeting5").innerHTML = "<b>Age:</b> " + age.value;
  }else{
    document.getElementById("greeting5").innerHTML = "<b>Age:</b> Please Enter Your Age ";
}

if(male.checked){
    document.getElementById("gender").innerHTML = "<b>gender:</b>  Male";
} else if(female.checked){
    document.getElementById("gender").innerHTML = "<b>gender:</b>  FeMale";
} else {
    document.getElementById("gender").innerHTML = "<b>gender:</b>  Specify your Gender";
}


let blood = document.getElementById("blood");

const bloodtype = {
 1 : ["O-"],
 2 : ["O-", "O+"],
 3 : ["O-","B-"],
 4 : ["O-","O+","B-","B+"],
 5 : ["O-","A-"],
 6 : ["O-", "O+","A-","A+"],
 7 : ["O-","B-","A-","AB-"],
 8 : ["O-", "O+","A-","A+","B-","B+","AB-","AB+"],
};

if(bloodtype[blood.value]){
   document.getElementById("bloodtypeshow").innerHTML = "<b>You can Take These Blood Groups:</b> " + bloodtype[blood.value];
}else{
  document.getElementById("bloodtypeshow").innerHTML = "<b>Select the Blood Type:</b> "
}

if(firstName.value === "" || lastName.value === "" || email.value === "" || city.value === "" || age.value === ""){
  document.getElementById("bloodtypeshow").innerHTML = "<b>Please provide all the information in the given boxes.</b> "
}else if (email.value.slice(-10) !== "@gmail.com"){
  document.getElementById("bloodtypeshow").innerHTML = "<b>Enter the Correct Email</b> "
}
}
