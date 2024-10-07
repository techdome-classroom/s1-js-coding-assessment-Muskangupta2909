const decodeTheRing = function (s, pa) {

  const m = s.length;
  const p = pa.length;
  
  // DP table of size (p+1) x (m+1)
  const dp = Array.from({ length: p + 1 }, () => Array(m + 1).fill(false));
  
  // Base case: empty pattern matches empty message
  dp[0][0] = true;

  // Initialize the first row (pattern with only stars can match an empty message)
  for (let i = 1; i <= p; i++) {
      if (pa[i - 1] === '*') {
          dp[i][0] = dp[i - 1][0]; // '*' can match empty sequence
      } else {
          break; // If we hit a non-star character, it can't match empty message
      }
  }

  // Fill the DP table
  for (let i = 1; i <= p; i++) {
      for (let j = 1; j <= m; j++) {
          if (pa[i - 1] === '*') {
              // '*' can match an empty sequence or one or more characters
              dp[i][j] = dp[i - 1][j] || dp[i][j - 1];
          } else if (pa[i - 1] === '?' || pa[i - 1] === s[j - 1]) {
              // '?' matches any single character, or exact character match
              dp[i][j] = dp[i - 1][j - 1];
          }
      }
  }

  return dp[p][m];

  };
  
  module.exports = decodeTheRing;