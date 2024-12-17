import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Movie {
  id: number;
  image: string;
  title: string;
}

interface MovieRowProps {
  title: string;
  movies: Movie[];
}

export default function MovieRow({ title, movies }: MovieRowProps) {
  const scrollLeft = () => {
    const slider = document.getElementById('slider-' + title);
    if (slider) slider.scrollLeft -= 500;
  };

  const scrollRight = () => {
    const slider = document.getElementById('slider-' + title);
    if (slider) slider.scrollLeft += 500;
  };

  return (
    <div className="space-y-2 px-4 md:px-16">
      <h2 className="text-white text-xl md:text-2xl font-semibold">{title}</h2>
      <div className="relative group">
        <ChevronLeft
          onClick={scrollLeft}
          className="absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition group-hover:opacity-100 bg-black/30 rounded-full p-2 text-white hover:scale-125"
        />
        <div
          id={`slider-${title}`}
          className="flex items-center space-x-4 overflow-x-scroll scrollbar-hide scroll-smooth"
        >
          {movies.map((movie) => (
            <div key={movie.id} className="relative min-w-[180px] cursor-pointer transition hover:scale-105">
              <img
                src={movie.image}
                alt={movie.title}
                className="rounded-sm object-cover w-full h-[250px]"
              />
            </div>
          ))}
        </div>
        <ChevronRight
          onClick={scrollRight}
          className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition group-hover:opacity-100 bg-black/30 rounded-full p-2 text-white hover:scale-125"
        />
      </div>
    </div>
  );
}