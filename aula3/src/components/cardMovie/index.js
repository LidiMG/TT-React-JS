import "./style.css"

export const CardMovie = ({ movie }) => {

    return (
        <div className="container">
            <h1>{movie.name}</h1>
            <img className="card-imagem" src={movie.photo} alt="{movie.photo}" />
            <p>Disponibilidade: {movie.done ? "Livre" : "Indisponível"}</p>
            <p>{movie.email}</p>
        </div>
    );
};