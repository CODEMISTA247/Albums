import React, {useState} from 'react';

const CreateAlbum = () => {
    const navigate = useNavigate()
    const {allAlbums, setAllAlbums} = props
    const [errors, setErrors] = useState({})
    const [album, setAlbum] = useState({
        albumName: '',
        artist: '',
        releaseYear: 1900,
        genre: 'Rock',
        explicit: false 
    }) 
    return (
        <div>

        </div>
    )
}

export default CreateAlbum;
