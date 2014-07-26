describe("nextWeekday", function(){
	it("should return the date of the next occurrence", function(){
		nextWeekday("Friday").should.equal("8/1/2014");
	});
	it("should return the date of a week from today", function(){
		nextWeekday("Saturday").should.equal("8/2/2014");
	});
});

describe("weekdaysInMonth", function(){
	it("should return all the dates of the given weekday in the given month", function(){
		weekdaysInMonth("friday", "october").should.eql(["10/3/2014","10/10/2014","10/17/2014","10/24/2014","10/31/2014"]);
	});
});