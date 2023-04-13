import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

const DisplayAllAlbums = (props) => {

    const{allAlbums, setAllAlbums} = props
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/allAlbums', {withCredentials:true})
            .then((allAlbums) => {
            console.log(allAlbums);
            setAllAlbums(allAlbums.data)
            })
            .catch((err) => {
            console.log(err);
            })
        })


    return (
        <div>
            <h2>Check out our album collection</h2>
            {
                allAlbums.map((album) => (
                    <div className='border border-success ' key={album._id}>
                        <p>Album Name: {album.albumName}</p>
                        <p>Artist: {album.artist}</p>
                        <p>Release Year: {album.releaseYear}</p>
                        <p>Album Name: {album.albumName}</p>
                        {
                            album.explicit? // is true 
                            <p>Explicit: Yes</p>: // is not 
                            <p>Explicit: No</p>
                        }
                        <Link to={`/editAlbum/${album._id}`}>Edit</Link>
                        <Link to={`/oneAlbum/${album._id}`}>Details</Link>
                    </div>
                ))
            }
        </div>
    
)}

export default DisplayAllAlbums;