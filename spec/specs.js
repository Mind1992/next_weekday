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
		weekdaysInMonth("friday", "october").should.eql(["10/6/2014","10/13/2014","10/20/2014","10/27/2014"]);
	});
});