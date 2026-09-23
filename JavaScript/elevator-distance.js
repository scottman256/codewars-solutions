function elevatorDistance(array) {
  var currentFloor = array[0];
  var distanceTraveled = 0;
  for (var i = 1; i < array.length; i++)
    {
      distanceTraveled += Math.abs(currentFloor - array[i]);
      currentFloor = array[i];
    }
  return distanceTraveled;
}