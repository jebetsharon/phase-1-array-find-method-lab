// Function to find the year the Denver Broncos won the Superbowl
function superbowlWin(record) {
    // Use find() to locate the first game with result 'W' (win)
    const win = record.find(game => game.result === "W");
    
    // If a win is found, return the year; otherwise, return undefined
    return win ? win.year : undefined;
  }
  
  // Sample record data for testing
  const record = [
    { year: "2015", result: "W" },  // Example win
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" }
  ];
  
  // Testing the function
  console.log(superbowlWin(record));  // Output: "2015"
  
  // You can add more test cases as needed, for example:
  const noWinRecord = [
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" }
  ];
  console.log(superbowlWin(noWinRecord));  // Output: undefined
  