describe("nextWeekday", function(){
	it("should return the date of the next occurrence", function(){
		nextWeekday("Friday").should.equal("7/25/2014");
	});
	it("should return the date of a week from today", function(){
		nextWeekday("Saturday").should.equal("7/26/2014");
	});
});

describe("weekdaysInMonth", function(){
	it("should return all the dates of the given weekday in the given month", function(){
		weekdaysInMonth("Wednesday", "December").should.eql(["12/3/2014","12/10/2014","12/17/2014","12/24/2014","12/31/2014"]);
	});
});