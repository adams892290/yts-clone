import React from "react";

const Torrents = (props) => {
    const { torrent } = props;
    return (
        <div>
            <h4>{`Type: ${torrent.type}, Quality: ${torrent.quality}`}</h4>
            <p>{`Size: ${torrent.size}, Seeds: ${torrent.seeds}, Peers: ${torrent.peers}`}</p>
            <a href={torrent.url}>Download this torrent amigo/amiga</a>

        </div>
    );
}

const Results = (props) => {

    const { data } = props;

    return (
        <div>
            <hr />
            <img src={data.medium_cover_image} />
            <br />
            <h2>{data.title_long}</h2>
            <span>Generes: </span>
            {data.genres.map((ele) => {
                return <span><b>{ele} </b></span>
            })}
            <br />
            <h3>{`IMDB: ${data.rating}`}</h3>
            <p><b>{data.year}</b></p>
            {data.torrents.map((ele) => {
                return <Torrents torrent={ele} />
            })}

        </div>
    );
}

export default Results;