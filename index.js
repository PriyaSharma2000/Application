let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let option4 = document.getElementById("option4");
let option5 = document.getElementById("option5");
let calc = document.getElementById("calc");

option1.addEventListener("click", () => {
  calc.innerHTML = simpleCalc;
  let operators = document.getElementById("operators");
  let num1 = document.getElementById("num1");
  let num2 = document.getElementById("num2");

  num1.addEventListener("input", myFunction);
  operators.addEventListener("input", myFunction);
  num2.addEventListener("input", myFunction);

  function myFunction() {
    let operators = document.getElementById("operators");
    let output = document.getElementById("output");
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    if (operators.value == "+") {
      output.innerHTML = Number(num1) + Number(num2);
    } else if (operators.value == "-") {
      output.innerHTML = num1 - num2;
    } else if (operators.value == "*") {
      output.innerHTML = num1 * num2;
    } else {
      output.innerHTML = Math.floor(num1 / num2);
    }
  }
});

option2.addEventListener("click", function () {
  calc.innerHTML = wordLengthCalc;
  let clearbtn = document.getElementById("clearbtn");
  let lengthCalc = document.getElementById("lengthCalc");

  lengthCalc.addEventListener("input", function () {
    let answer = document.getElementById("answer");
    let lengthCalc = document.getElementById("lengthCalc");
    let count = lengthCalc.value.trim().split(/\s+/);
    answer.innerHTML = count.length;
    if (lengthCalc.value == 0) {
      answer.innerHTML = 0;
      lengthCalc.value = lengthCalc.value.trim();
      lengthOutput.innerHTML = 0;
    }
    var countOb = {};
    var string = [];
    for (var i = 0; i < count.length; i++) {
      if (string.indexOf(count[i]) == -1) {
        string.push(count[i]);
        countOb[count[i]] = 1;
      } else {
        countOb[count[i]] = countOb[count[i]] + 1;
      }
    }
    let lengthOutput = document.getElementById("lengthOutput");
    var str = "";
    lengthOutput.innerHTML = "";
    for (var i = 0; i < string.length; i++) {
      str = string[i];
      lengthOutput.innerHTML +=
        "<div>" + str + " : " + countOb[string[i]] + "</div>";
    }
  });
  clearbtn.addEventListener('click',()=>{
    lengthCalc.value = "";
    answer.innerHTML = "";
    lengthOutput.innerHTML = "";
  })
});

option3.addEventListener("click", () => {
  calc.innerHTML = wordAlphabet;
  let alphabet = document.getElementById("alphabet");
  let word = document.getElementById("word");
  alphabet.addEventListener("input", (e) => {
    let obj = {
      a: "America",
      b: "Boston",
      c: "Colombia",
      d: "Denmark",
      e: "England",
      f: "Finland",
      g: "Germany",
      h: "Hong Kong",
      i: "India",
      j: "Japan",
      k: "Korea",
      l: "Laos",
      m: "Mongolia",
      n: "Netherlands",
      o: "Oman",
      p: "Philippines",
      q: "Qatar",
      r: "Russia",
      s: "Saudi Arabia",
      t: "Thailand",
      u: "Uganda",
      v: "Vietnam",
      w: "Washington",
      x: "Xerox",
      y: "Yemen",
      z: "Zambia",
    };
    let alphabet = document.getElementById("alphabet");
    let letter = e.data;
    word.innerHTML = obj[letter];
    console.log(e);
    alphabet.value = e.data;
  });
});

option4.addEventListener("click", () => {
  calc.innerHTML = recordData;
  let savebtn = document.getElementById("savebtn");
  var get = JSON.parse(localStorage.getItem("myObj")) || [];
  get.forEach((el) => {
    let result = document.getElementById("result");
    var tdata = "";
    tdata =
      "<tr><td>" +
      el.fname +
      "</td><td>" +
      el.lname +
      "</td><td>" +
      el.birthplace +
      "</td><td>" +
      el.age +
      "</td></tr>";
    result.innerHTML += tdata;
  });

  savebtn.addEventListener("click", () => {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let birthplace = document.getElementById("birthplace").value;
    let age = document.getElementById("age").value;

    if (fname == "" || lname == "" || birthplace == "" || age == "") {
      alert("Please Enter The Values !!");
    } else {
      var myObj = {
        fname: fname,
        lname: lname,
        birthplace: birthplace,
        age: age,
      };
      var get = JSON.parse(localStorage.getItem("myObj")) || [];
      // arr = get;
      get.push(myObj);
      localStorage.setItem("myObj", JSON.stringify(get));
      let result = document.getElementById("result");
      get.forEach((element) => {
        var tdata = "";
        tdata =
          "<tr><td>" +
          element.fname +
          "</td><td>" +
          element.lname +
          "</td><td>" +
          element.birthplace +
          "</td><td>" +
          element.age +
          "</td></tr>";
        result.innerHTML += tdata;
      });
      document.getElementById("fname").value = "";
      document.getElementById("lname").value = "";
      document.getElementById("birthplace").value = "";
      document.getElementById("age").value = "";
    }
  });
  let result = document.getElementById("result");
  result.addEventListener("click", (e) => {
    var val = e.target.parentNode;
    console.log(val)
    document.getElementById("fname").value = val.children[0].innerHTML;
    document.getElementById("lname").value = val.children[1].innerHTML;
    document.getElementById("birthplace").value = val.children[2].innerHTML;
    document.getElementById("age").value = val.children[3].innerHTML;
  });
});

// option5.addEventListener('click',()=>{
//   calc.innerHTML = fruitVeg;
//   let btn1 = document.querySelectorAll(".btn1");
//   btn1.forEach((btn)=>btn.addEventListener('click', (e)=>{
//     var fruitChoice = e.target.parentNode.parentNode;
//     console.log(fruitChoice);
//     let fruit = document.getElementById("fruit");
//     let veg = document.getElementById("veg");
//     let vegTable = document.getElementById("vegTable");
//     vegTable.append(fruitChoice)
//   }))
//   let btn2 = document.querySelectorAll(".btn2");
//   btn2.forEach((btns)=>btns.addEventListener('click',(e)=>{
//     var vegChoice = e.target.parentNode.parentNode;
//     console.log(vegChoice);
//     let fruitRow = document.getElementById("fruitRow");
//     fruitRow.appendChild(vegChoice);
//   }))
// })
