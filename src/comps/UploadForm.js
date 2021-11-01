import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {


    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg'];

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    
    today = mm + '/' + dd + '/' + yyyy;

    const changeHandler = (e) => {
        let selected = e.target.files[0];
        console.log(selected);

        const split = selected.name.split("_")
        const topic = split[0]
        const publishedDate = split[1]
        const artist = split[2].split(".")[0] 

        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('Please select an image file file (png or jpeg)');
        }
    }

    return (
        <form>
            <p>File must be in the format:</p> 
            <p>(topic in any one word text)_(date in mm.dd.yy format)_(name of creator in one word).(file format) </p>
            <input type="file" onChange={changeHandler} />

            <span>+</span>
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div className="file">{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>
    )
};

export default UploadForm;