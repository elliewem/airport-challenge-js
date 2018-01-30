describe('Airport', function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  describe('Land', function() {

    it('A plane can land at an airport', function() {
      airport.land(plane);
      expect(airport.hangar()).toContain(plane);
    });
  });
});
