import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MovieRow from './components/MovieRow';

const trendingMovies = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1',
    title: 'Movie 1'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1535016120720-40c646be5580',
    title: 'Movie 2'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0',
    title: 'Movie 3'
  },
  // Add more movies as needed
];

const popularMovies = [
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b',
    title: 'Movie 4'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728',
    title: 'Movie 5'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1',
    title: 'Movie 6'
  },
  // Add more movies as needed
];

function App() {
  return (
    <div className="relative h-screen bg-black">
      <Navbar />
      <Hero />
      <div className="relative -mt-32 z-20 pb-20">
        <MovieRow title="Trending Now" movies={trendingMovies} />
        <MovieRow title="Popular on Netflix" movies={popularMovies} />
      </div>
    </div>
  );
}

export default App;