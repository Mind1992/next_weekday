var nextWeekday = function(day){

  var currentDate = new Date(); 
	var currentYear = currentDate.getFullYear();
	var currentMonth = currentDate.getMonth(); 
	var currentDay = currentDate.getDay(); 
	var currentDayAsMonthDay = currentDate.getDate(); 
	
	var monthsInNumbers = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var daysInNumbers = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	
	var inputtedDay = day.charAt(0).toUpperCase() + day.slice(1); 
  
  for (var i = 0; daysInNumbers.length > i; i++){
		if (inputtedDay === daysInNumbers[i]) {
			inputtedDayAsNumber = i;
		};
	}

	var inputtedDayAsNumber; 
	var nextOccurenceMonthDay = currentDayAsMonthDay - (currentDay - inputtedDayAsNumber) + 7; 
	var nextOccurenceFullDate = "" + (currentMonth + 1) + "/" + nextOccurenceMonthDay + "/" + currentYear;
	return nextOccurenceFullDate;
}
