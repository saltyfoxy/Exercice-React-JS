import React from 'react';

const MovieInfo = (props) => {
    return (
        <div>
            <div className="container movie-detail">
                <div className="row controls" onClick={props.closeMovieInfo} style={{ cursor: "pointer", paddingTop: 50 }}>
                    <i className="fas fa-arrow-left"></i>
                    <span style={{ marginLeft: 10 }}>Go back</span>
                </div>
                <div className="row container-all-details">
                    <div className="col s12 m4 picture-detail">
                        {props.currentMovie.poster_path == null ? <img className="" src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`} alt="Card image cap" style={{
                            width: "100%",
                            height: 360
                        }} /> : <img className="" src={`http://image.tmdb.org/t/p/w185${props.currentMovie.poster_path}`} alt="Card image" style={{
                            width: "100%",
                            height: 360
                        }} />}
                    </div>
                    <div className="col s12 m8">
                        <div className="info-container movie-detail text-details">
                            <h1>{props.currentMovie.title}</h1>
                            <p>{props.currentMovie.release_date.substring(6).split("-").concat(props.currentMovie.release_date.substring(0, 4)).join("/")}</p>
                            <p>{props.currentMovie.overview}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieInfo;