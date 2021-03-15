import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

const Search = () => {

    const [movieName, setMovieName] = useState("");
    const [data, setData] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const config = { params: { query_term: movieName } };

        axios.get("https://yts.mx/api/v2/list_movies.json", config)
            .then((res) => {
                setData(res.data.data.movies);
            })
            .catch((err) => {
                console.log(err);
            });

    }

    const handleChange = (e) => {
        setMovieName(e.target.value);
    }

    return (
        <div>
            <h3>Welcome to the world with no hassle!</h3>
            <h4>Search your movie here without any annoying adds and download through torrent</h4>
            <h4>If you don't know what torrent is ........ -_-. It's okay ,not all of us know about the good stuff.</h4>
            <p>Be sure to check for typos!</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Movie Name: </label>
                <input type="text" id="name" onChange={handleChange}></input>
                <button >Show merci my lord</button>
            </form>
            {(data && data.length > 0) ? (
                <div>
                    <h3>Here you go! grab some popcorns, a soda and enjoy yourself :)</h3>
                    <h2>And if this goddamn thing did save you from the unnecessary troubles ,spare some time to send good wishes to the developer!</h2>
                    {data.map((ele) => {
                        return < Results data={ele} key={ele.id} />
                    })}
                </div>
            ) : null}

            {(data && data.length > 0) ? (
                <h4>Sayonara</h4>
            ) : null}
            {(data) ? null : (<h3>No movies, try something else!</h3>)}
        </div >
    );
}

export default Search;