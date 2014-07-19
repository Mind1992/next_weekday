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
		weekdaysInMonth("Friday", "August").should.equal(["8/1/2014","8/8/2014","8/15/2014","8/22/2014","8/29/2014"]);
	});
});