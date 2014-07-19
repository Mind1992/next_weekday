describe("nextWeekday", function(){
	it("should return the date of the next occurrence", function(){
		nextWeekday("Friday").should.equal("7/25/2014");
	});
});