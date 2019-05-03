var answer ;


function onLoad() {
	
	
	console.log(Math.max(2,4));
	console.log(Math.min(2,4)*100);
	
	/* answer = confirm("Ну что, поехали?"); */
	
	console.log(" answer : ", answer);
	
	answer = "Рауф";   /*prompt("Введите Ваше имя ...", "Петя"); */
	
	console.log(" answer : ", answer);
	show_answer(answer)
	
	var theNumber = 2; /*Number(prompt("Выбери число", ""));	*/
	
	if (!isNaN(theNumber))
		
	  show_answer("Твоё число – квадратный корень из " + theNumber * theNumber);
	  
	else
		
	  show_answer("Ну ты что число-то не ввёл?");
	  
	 
	show_answer(5+5)
	show_answer(Number(4+"r"))
	show_answer(Number(444/"r"))
	show_answer(Number(444*0.5))
	show_answer(Number(444%444))
	
	  
	var num = 55; /* Number(prompt("Выбери число", "0")); */

	if (num < 10)
	  show_answer("Маловато");
	else if (num < 100)
	  show_answer("Нормально");
	else
	  show_answer("Многовато");
	

	var number = 0;
	while (number <= 12) {
	
		console.log(number);
		number = number + 2;
		
	}
	
	var result = 1;
	var counter = 0;

	while (counter < 10) {
		
	  result = result * 2;
	  counter = counter + 1;
	}
	console.log(result);
	
	
for (var current = 20; ; current++) {
		console.log(" cycle # 1 ", current);
		
		if (current % 30 == 0)		
		break;
	}
	
for (var number = 0; number <= 12; number += 2)
  console.log(" cycle # 2 ", number);

}

function show_answer(param_to_show) {
	console.log(" answer : ", param_to_show);
}