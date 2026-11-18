      //data for the table;
     // [
       // ["002", "assignment", "34", "23","77","66" ],
        //[ "003", "project", "67", "45", "88","98" ],
        //[ "004", "project", "159", "44", "88", "76"],
      //  [ "005", "project", "10", "459","98","89"],
       // [ "006", "project", "177", "5","78","98"]
        
     // ];

       // var tableBody = document.getElementById("body");

        //for (let index = 0; index < data.length; index++) {
       // let row = "<tr>";
       // row = row + "<td>"+ data[index][0]+"</td>";//serial
       // row = row + "<td>"+ data[index][1]+"</td>";//filename
        //row = row + "<td>"+ data[index][2]+"</td>";//mark 1
        //row = row + "<td>"+ data[index][3]+"</td>";//mark 2
         //row = row + "<td>"+ data[index][4]+"</td>";//mark 3
       // row = row + "<td>"+ data[index][5]+"</td>";//mark 4
  
       // let total = parseInt(data[index][2]) +  parseInt(data[index][3])  +  parseInt(data[index][4]) +  parseInt(data[index][5]);
       // row = row + "<td>" + total + "</td>" 
       // row = row + "<td></td>"; //empty cell
        

       // tableBody.innerHTML = tableBody.innerHTML + row;

        
       // }







     // const table = document.getElementById("fileTable");

     // const table _ body = document.createElement("thead");
     // const table_body = document.createElement("tbody");
      //table_body.style.color = 0xFFFFFF

      //table.innerHTML = "";

     // table.appendChild(table_head);
     // table.appendChild(table_body);

    // const head_row = document.createElement("tr");

     //for (let counter = 0; counter < header_information.length; counter++) {
       // const table_cell = document.createElement("th");
       // table_cell.textContent = headers header_information _information [counter];
       // head_row.appendChild(table_cell);
        
    // }

    // table_head.appendChild(head_row);

     //const files = [

        //[1, "report_q1,pdf",       240,12,35],
       // [2, "budget_2026.xlskf",   24,12,35],
        //[3, "logo_final.png",      520,2,35],
        //[4, "meeting_notes.dock",  733,92,35],
        //[5, "presentation.pptx",   356,22,35],
        //[6, "contract_draft.pdf",  345,2,35],
        //[7, "photo_team.jpg",      234,1,35],
        //[8, "invoice_0042.pdf",    678,74,35],
    // ];



    class Calulator {
      
      placer() {
        
        document.addEventListener('click', (event) => {
          const input = document.getElementById("input");;
          const zero = document.getElementById("zero");
          const one = document.getElementById("one");
          const two = document.getElementById("two");
          const three = document.getElementById("three");
          const four = document.getElementById("four");
          const five = document.getElementById("five");
          const six= document.getElementById("six");
          const seven = document.getElementById("seven");
          const eight = document.getElementById("eight");
          const nine = document.getElementById("nine");
          const clr= document.getElementById("clr");
          const plus = document.getElementById("plus");
          const minus = document.getElementById("minus");
          const percent= document.getElementById("percent");
          const dot = document.getElementById("dot");
          const multiply = document.getElementById("multiply");
          const equal= document.getElementById("equal");
          const divide= document.getElementById("divide");
          const del = document.getElementById("delete");
          var target = event.target.closest('[id]');
          if (!target) {
            return
          }

          switch (target.id) {
            case 'zero':
              console.log("one has been pressed")
              input.value += zero.textContent;
              break;
            case 'one':
              console.log("one has been pressed")
              input.value += one.textContent;
             break;
            case 'equal':
              var ansswer = eval(input.value);
              input.value = "";
              input.value = ansswer;

            //  const element = input.value[index];
            //  console.log("element: " + element)
            //  if (element === "%") {
            //      for (let index = 0; index < input.value.length; index++) {
            //      var location = index;
            //      var result = parseFloat(input.value[0] + "" + input.value[index])
            //      var divisor = parseFloat(input.value[index + 1] + "" + input.value[input.value.length - 1])
            
            //      var answer = parseFloat(result) / 100;
            //      console.log("answer: " + answer + " divisor: " + divisor)
            //      answer *= divisor
            //      input.value = answer;
            //      }
                  
                  
              break;
           case 'two':
              console.log("two has been pressed")
              input.value += two.textContent;
              break;
            case 'three':
              console.log("three has been pressed")
              input.value += three.textContent;
              break;
            case 'four':
              console.log("four has been pressed")
              input.value += four.textContent;
              break;
            case 'five':
              console.log("five has been pressed")
              input.value += five.textContent;
              break;
            case 'percent':
              input.value += percent.textContent;
              break;
            case 'six':
              input.value += six.textContent;
              break;
            case 'seven':
              input.value += seven.textContent;
              break;
            case 'eight':
              input.value += eight.textContent;
              break;
            case 'nine':
              input.value += nine.textContent;
              break;
            case 'zero':
              input.value += zero.textContent;
              break;
            case 'plus':
              input.value += plus.textContent;
              break;
            case 'minus':
              input.value += minus.textContent;
              break;
            case 'multiply':
              input.value += multiply.textContent;
              break;
            case 'divide':
              input.value += divide.textContent;
              break;
            case 'dot':
              input.value += dot.textContent;
              break;
              
            default:
              break;
          }
        })

      }
  }

  var calulator = new Calulator()
  calulator.placer();



  
  //class parent{
  //  constructor(name){
  //   var name = Goshen
  //  }
  //}