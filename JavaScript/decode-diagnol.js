function getDiagonalCode(grid) {
    grid = grid.replace(/ /g,"");
    if (grid.indexOf("\n") == -1) return grid.charAt(0);
    var gridArray = grid.split("\n");
    var direction = "down";
    var message = "";
    var letter = 0;
    var row = 0;

    while(letter < gridArray[row].length)
    {
        message += gridArray[row].charAt(letter);
        letter++;
        if (direction == "down" && row < gridArray.length - 1)
            row++;
        else if (direction == "up" && row > 0)
            row--;
        else if (direction == "down" && row >= gridArray.length - 1)
        {
            direction = "up";
            row --;
        }
        else
        {
            direction = "down";
            row ++;
        }
    }

    return message;
}