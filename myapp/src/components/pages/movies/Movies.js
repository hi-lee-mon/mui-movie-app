import { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress, Grid } from "@mui/material";
import ContentDetails from "../../contentDetails/ContentDetails";
import { AppPagination } from "../../pagination/AppPagination";
import Genres from "../../genres/Genres";
import { Box } from "@mui/system";
import ErrorComponent from "../../errors/ErrorComponent";
import { genresIds } from "../../../utils/genresIds";
const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(10);
  const [loading, setLoading] = useState(true);
  const [isErr, setIsErr] = useState(false);
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);

  const genreIds = genresIds(selectedGenres);

  //Fetch Movies
  const fetchMovies = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=${page}&with_genres=${genreIds}`
      );
      setMovies(data?.results);
      setLoading(false);
      setNumberOfPages(data?.total_pages);
    } catch (error) {
      console.error(error);
      setIsErr(true);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [page, selectedGenres]);

  return (
    <>
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", m: "10px" }}>
          <CircularProgress style={{ color: "red" }} />
        </Box>
      ) : isErr ? (
        <ErrorComponent />
      ) : (
        <>
          <Genres
            genres={genres}
            setGenres={setGenres}
            selectedGenres={selectedGenres}
            setSelectedGenres={setSelectedGenres}
          />
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            {movies?.map((movie) => (
              <Grid item md={6}>
                <ContentDetails movie={movie} />
              </Grid>
            ))}
          </Grid>
          <AppPagination setPage={setPage} pageNumber={numberOfPages} />
        </>
      )}
    </>
  );
};

export default Movies;
