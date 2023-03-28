import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const OneAlbum=(props) => {
    const {id} = useParams()
    const [album, setAlbum] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
    axios.get(`http://localhost:8000/api/oneAlbum/${id}`)
        .then((res) => {
            console.log(res.data);
            setAlbum(res.data)
        })
        .catch((err) => {
            console.log(err);
        })

    }, [id])

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/deleteAlbum/${id}`)
            .then((res) => {
                console.log(res);
                navigate("/")


    
            })
            .catch((err) => {
                console.log(err);
            })
    
    }
    
    return (
        <div>
            <h2>Album Name: {album.albumName} </h2>
            <h3>By: {album.artist}</h3>
            <p>Released in: {album.releaseYear}</p>
            <p>Genre: {album.genre}</p>
            {
                album.explicit? // is true 
                <p>Explicit: <span className='text-danger'>&#127348;</span></p>:
                <p>Clean ✔️</p>
            }
            
            <button className='btn btn-primary' onClick={deleteHandler} >Delete Album</button> 
        </div>

) }

export default OneAlbum; 
