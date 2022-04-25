import Movies from '../Movies/Movies';

function SavedMovies(props) {
    return (
        <>
            <Movies
                openNavigation={props.openNavigation}
                movies={props.movies}
                width={props.width}
                handleMovieDelete={props.handleMovieDelete}
                // savedMovies={props.savedMovies}
            />
        </>
    )
}
export default SavedMovies