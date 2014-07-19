var nextWeekday = function(day){

  var currentDate = new Date(); 
	var currentYear = currentDate.getFullYear();
	var currentMonth = currentDate.getMonth(); 
	var currentDay = currentDate.getDay(); 
	var currentDayAsMonthDay = currentDate.getDate(); 
	
	var daysInNumbers = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	
	var inputtedDay = day.charAt(0).toUpperCase() + day.slice(1); 
  
  var  dateStringToNumber = function(array,string,number) {
			for (var i = 0; array.length > i; i++){
				if (string === array[i]) {
					number = i;
				};
		  }
		return number;
		}

	var inputtedDayAsNumber = dateStringToNumber(daysInNumbers,inputtedDay,inputtedDayAsNumber); 
	
	var nextOccurenceMonthDay = currentDayAsMonthDay - (currentDay - inputtedDayAsNumber) +7; 
	var nextOccurenceFullDate = "" + (currentMonth + 1) + "/" + nextOccurenceMonthDay + "/" + currentYear;
	return nextOccurenceFullDate;
}

var weekdaysInMonth = function(day, month) {
	var currentDate = new Date(); 
	var currentYear = currentDate.getFullYear();
	var currentMonth = currentDate.getMonth(); 
	var currentDay = currentDate.getDay(); 
	var currentDayAsMonthDay = currentDate.getDate(); 
	
	var monthsInNumbers = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var daysInNumbers = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	
	var inputtedDay = day.charAt(0).toUpperCase() + day.slice(1); 
  var inputtedMonth = month.charAt(0).toUpperCase() + month.slice(1); 

		var  dateStringToNumber = function(array,string,number) {
			for (var i = 0; array.length > i; i++){
				if (string === array[i]) {
					number = i;
				};
		  }
		return number;
		}
	
	var inputtedMonthAsNumber = dateStringToNumber(monthsInNumbers,inputtedMonth,inputtedMonthAsNumber);
	var inputtedDayAsNumber = dateStringToNumber(daysInNumbers,inputtedDay,inputtedDayAsNumber); 

}