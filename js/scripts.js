var nextWeekday = function(day){
  var currentDate = new Date(); 
	var currentYear = currentDate.getFullYear(); 
	var currentMonth = currentDate.getMonth();  
	var currentDay = currentDate.getDay(); 
	var daysInNumbers = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	var inputtedDay = day.charAt(0).toUpperCase() + day.slice(1); 
	var numberedDay = 0; 	
	for (var i = 0; daysInNumbers.length > i; i++){
		if (inputtedDay === daysInNumbers[i]) {
			numberedDay = i;
		}
  }
	if (numberedDay <= currentDay) {
		numberedDay += 7;
	}
	var nextOccurenceMonthDay = new Date(currentDate.setDate(currentDate.getDate() + (numberedDay - currentDay)));
	var nextOccurenceDate = nextOccurenceMonthDay.getDate();
	var nextOccurenceMonth = nextOccurenceMonthDay.getMonth();
	var nextOccurenceFullDate = "" + (nextOccurenceMonth + 1) + "/" + nextOccurenceDate + "/" + currentYear;
	return nextOccurenceFullDate;
};

var weekdaysInMonth = function(day, month) {
	var currentDate = new Date(); 
	var currentYear = currentDate.getFullYear();   
	var monthsInNumbers = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var daysInNumbers = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	var inputtedDay = day.charAt(0).toUpperCase() + day.slice(1); 
  var inputtedMonth = month.charAt(0).toUpperCase() + month.slice(1); 
	var numberedDay = 0; 
  for (var i = 0; daysInNumbers.length > i; i++){
				if (inputtedDay === daysInNumbers[i]) {
					numberedDay = i;
				}
		  } 
  var numberedMonth = 0; 
	for (var i = 0; monthsInNumbers.length > i; i++){
				if (inputtedMonth === monthsInNumbers[i]) {
					numberedMonth = i;
				}
		  }
	var newDate = new Date(currentYear,numberedMonth); 
	var newWeekday = newDate.getDay(); 
	if (numberedDay <= newWeekday && (numberedDay - newWeekday) != 0) {
			numberedDay += 7
		}
  var nextOccurenceMonthDay = new Date(newDate.setDate(newDate.getDate() + (numberedDay - newWeekday))); 
  var nextOccurenceDate = nextOccurenceMonthDay.getDate();
	var newMonthDay = newDate.getDate(); 
	var newMonth = newDate.getMonth(); 
	var lastDayOfMonth = new Date(currentYear,numberedMonth + 1, 0).getDate();
  var allDatesInMonth = []; 
  while(newMonthDay <= lastDayOfMonth) {
  	allDatesInMonth.push(newMonthDay);
  	newMonthDay += 7;
  }
  var array = [];
  allDatesInMonth.forEach(function(date){
  	array.push((numberedMonth + 1 + "/") + ("" + date + "/") + currentYear);
  });
  return array;
};

$(document).ready(function(){
	$('#get-next-occurrence').click(function(){
		var dayInput = $('#next-weekday').val();
		var result = nextWeekday(dayInput);
		$('#added-next-occurrence p').text(result);
	});
	
	$('#get-dates-in-month').click(function(){
		var weekday = $('#weekday').val();
		var month = $('#month').val();
		var resultMonth = weekdaysInMonth(weekday,month);
		$('#added-dates-in-month p').text(resultMonth);
	});
});
