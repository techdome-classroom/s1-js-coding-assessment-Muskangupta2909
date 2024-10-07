const getTotalIsles = function (grid) {


  if (grid.length === 0) return 0;
    
  let islandCount = 0;
  const rows = grid.length;
  const cols = grid[0].length;
  
  // Helper function to perform DFS and mark connected 'L' as visited
  function dfs(grid, row, col) {
      // Check for boundaries and if the current cell is water ('W') or already visited
      if (row < 0 || row >= rows || col < 0 || col >= cols || grid[row][col] === 'W') {
          return;
      }

      // Mark the current land cell as 'W' (visited)
      grid[row][col] = 'W';

      // Explore the four possible directions: up, down, left, right
      dfs(grid, row - 1, col); // Up
      dfs(grid, row + 1, col); // Down
      dfs(grid, row, col - 1); // Left
      dfs(grid, row, col + 1); // Right
  }

  // Traverse every cell in the grid
  for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
          // If we find an unvisited landmass ('L'), perform DFS
          if (grid[row][col] === 'L') {
              islandCount++;
              dfs(grid, row, col); // Mark the entire island as visited
          }
      }
  }

  return islandCount;

};

module.exports = getTotalIsles;