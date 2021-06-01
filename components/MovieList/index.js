

import MoviesGridContainer from './MoviesGridContainer';
import MovieListItem from './MovieListItem';
import Pagination from 'components/Pagination';

const MovieList = ({
  movies,
  baseUrl
}) => (
  <>
    <MoviesGridContainer>
      {movies.results.map(movie => (
        <MovieListItem
          key={movie.id}
          movie={movie}
          baseUrl={baseUrl} />
      ))}
    </MoviesGridContainer>
    <Pagination
      page={movies.page}
      totalPages={movies.total_pages} />
  </>
);

export default MovieList;
