//Business Logic//
//select all inputs and store them into  variables//
//collect all input from html UI//
let inputs = document.querySelectorAll("input");

//return output via UI//
let outputs = document.querySelectorAll("#output>div>span");
//create a functio//
//create an array of 5 tax ranges//
//anything over 466,704 k we use number.MAX_VALUE//
//create an array of 5 minimum taxes for each tax range/bracket//
//create an array of 5 tax rates//
//create an empty arrayan call it "input values"//
function cal_Tax() {
  let Input_Values = [];
  let Income_Ranges = [0, 121968, 236880, 351792, 466704, Number.MAX_VALUE];
  let Minimum_Tax = [12196.8, 28425.6, 70358.4, 116767,140011.2];
  let Tax_Rates = [0.1, 0.15, 0.20, 0.25, 0.30,];
  let Tax_Return;
  let Tax_Payable;
  //create for loop//
  //collect all the input values above and store to empty array "input values"/

    for (let i = 0; i < inputs.length; i++) {
      let value = inputs[i].value; //create variable and loop goes through each input and stores the value in variable "value"//
      if (value === "") { //if value has empty string push an integer 0, else the value entered. use push to get integers and not strings//
        Input_Values.push(Number(0));
      } else {
        Input_Values.push(Number(value));
      }
    }
