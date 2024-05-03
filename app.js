 let count;
      let btn1 = document.getElementById("btn1");
      let btn2 = document.getElementById("btn2");
      let player1 = document.querySelector(".display1");
      let player2 = document.querySelector(".display2");
      let reset = document.getElementById("reset");
      btn1.setAttribute("disabled", "");
      btn2.setAttribute("disabled", "");
      reset.setAttribute("disabled", "");
      function set() {
        count = parseInt(document.getElementById("forCounter").value);
        btn1.removeAttribute("disabled");
        btn2.removeAttribute("disabled");
        if (count === "" || isNaN(count) || count === null) {
          alert("Please enter a Number in second");
        } else if (count <= 0) {
          alert("value in minus are not allowed");
        } else {
          let set = setInterval(() => {
            count = parseInt(count);
            const minutes = Math.floor(count / 60);
            const seconds = count % 60;
            count--;
            document.getElementById(
              "count"
            ).innerHTML = `${minutes} : ${seconds
              .toString()
              .padStart(2, "0")} `;
            if (count < 0) {
              clearInterval(set);
              btn1.setAttribute("disabled", "");
              btn2.setAttribute("disabled", "");
              reset.removeAttribute("disabled");
              reset.style.display = "unset"
              winner(parseInt(player1.innerHTML), parseInt(player2.innerHTML));
            }
          }, 1000);
        }
      }

      let result = document.querySelector(".result");
      function winner(player1, player2) {
        if (player1 > player2) {
          result.innerText = "player 1 Winner";
        } else if (player2 > player1) {
          result.innerText = "player 2 Winner";
        } else {
          result.innerText = "its a tie";
        }
      }

      function addIncount1() {
        let countVal1 = parseInt(player1.innerHTML);
        countVal1++;
        player1.innerHTML = countVal1;
      }
      function addIncount2() {
        let countVal2 = parseInt(player2.innerHTML);
        countVal2++;
        player2.innerHTML = countVal2;
      }

      function resetBtn() {
        window.location.reload(true);
      }