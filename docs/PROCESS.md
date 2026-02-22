# Process.md 
I decided to build a calculation history feature for my React calculator so users can see previous solutions. The micro-iterations felt natural for 
the most part because I was able to break down each step and review any issues in the code. When I self-reviewed, it identified a couple of 
potential issues even though nothing was currently broken in my second step. For example, using key={i} (the array index) in the history.map() list 
could cause problems in the future if items are ever removed or reordered, because React might reuse the wrong DOM elements. It recommended adding a 
stable id to each history entry and using key={entry.id} instead. I also liked using Claude on the web because it provided detailed explanations of 
each bug and issue when reviewing the code. It clearly displayed all the changes made to my repository.
