import React from 'react';

const Top5Movies = () => {
const movies = [
    {
      Title: "The Amazing Spiderman T4 Premiere Special",
      Year: 2012,
      imdbID: "tt2233044",
    },
    { Title: "Amazing Spiderman Syndrome", Year: 2012, imdbID: "tt2586634" },
    { Title: "The Road to Ironman", Year: 2012, imdbID: "tt1712051" },
    { Title: "Ironman Triathlon Special", Year: 2012, imdbID: "tt2622884" },
    { Title: "Boundless Maze", Year: 2012, imdbID: "tt2260208" },
    { Title: "Maze", Year: 2012, imdbID: "tt2290460" },
    {
      Title: "Harry Dean Stanton: Partly Fiction",
      Year: 2012,
      imdbID: "tt2372776",
    },
    {
      Title: "Harry Potter and the Ten Years Later",
      Year: 2012,
      imdbID: "tt2335590",
    },
    {
      Title: "Ain't It Cool with Harry Knowles",
      Year: 2012,
      imdbID: "tt2189892",
    },
    {
      Title: "Creating the World of Harry Potter, Part 8: Growing Up",
      Year: 2012,
      imdbID: "tt2339417",
    },
  ];
  
  const title = movies.map(movies => 
    movies.Title);
  const Number1 = title.slice(0,1);
  const Number2 = title.slice(1,2)
  const Number3 = title.slice(2,3)
  const Number4 = title.slice(3,4)
  const Number5 = title.slice(4,5)
    return(
      <div><b>Number 1:</b> {Number1} 
      <br /><b>Number 2:</b> {Number2} 
      <br /><b>Number 3:</b> {Number3} 
      <br /><b>Number 4:</b> {Number4} 
      <br /><b>Number 5:</b> {Number5}
      </div>
    )
}

export default Top5Movies