var nextWeekday = function(day){

  var currentDate = new Date(); 
	var currentYear = currentDate.getFullYear();
	var currentMonth = currentDate.getMonth(); 
	var currentDay = currentDate.getDay(); 
	var monthDay = currentDate.getDate(); 
	var daysInNumbers = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	var inputtedDay = day.charAt(0).toUpperCase() + day.slice(1); 
  
  var  dateStringToNumber = function(array,string,number) {
			for (var i = 0; array.length > i; i++){
				if (string === array[i]) {
					number = i;
				}
		  }
		return number;
		};

	var numberedDay = dateStringToNumber(daysInNumbers,inputtedDay,numberedDay); 
	var nextOccurenceMonthDay = monthDay - (currentDay - numberedDay) +7; 
	var nextOccurenceFullDate = "" + (currentMonth + 1) + "/" + nextOccurenceMonthDay + "/" + currentYear;
	
	return nextOccurenceFullDate;
};

var weekdaysInMonth = function(day, month) {
	var currentDate = new Date(); 
	var currentYear = currentDate.getFullYear();   
	var monthsInNumbers = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var daysInNumbers = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	var inputtedDay = day.charAt(0).toUpperCase() + day.slice(1); 
  var inputtedMonth = month.charAt(0).toUpperCase() + month.slice(1); 

		var  dateStringToNumber = function(array,string,number) {
			for (var i = 0; array.length > i; i++){
				if (string === array[i]) {
					number = i;
				}
		  }
		return number;
		};
	
	var numberedMonth = dateStringToNumber(monthsInNumbers,inputtedMonth,numberedMonth); 
	var numberedDay = dateStringToNumber(daysInNumbers,inputtedDay,numberedDay); 
	var newDate = new Date(currentYear,numberedMonth, numberedDay); 
	var newMonthDay = newDate.getDate(); 
  var allDatesInMonth = [];
  
  while(newMonthDay < 32) {
  	allDatesInMonth.push(newMonthDay);
  	newMonthDay += 7;
  }
  
  var array = [];
  
  allDatesInMonth.forEach(function(date){
  	array.push((numberedMonth + 1 + "/") + ("" + date + "/") + currentYear);
  });
  return array;
};