function catMouse(x, j){
    let catLocation = x.indexOf('C');
    let mouseLocation = x.indexOf('m');
    let dogLocation = x.indexOf('D');
    let distance = Math.abs(mouseLocation - catLocation);

    if (catLocation == -1 || mouseLocation == -1 || dogLocation == -1)
        return 'boring without all three';
  
    let pathToMouse = x.substring(Math.min(catLocation, mouseLocation),
                                    Math.max(catLocation, mouseLocation));
    let dogInTheMiddle = pathToMouse.includes("D");
  
    if (distance <= j)
      if (!dogInTheMiddle)
        return 'Caught!';
      else
        return 'Protected!';
    else if (distance > j)
        return 'Escaped!';
    else
      return "I don't know what to do in this case... :-(";
  }