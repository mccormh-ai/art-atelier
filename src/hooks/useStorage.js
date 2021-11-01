import { async } from '@firebase/util';
import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore , timestamp} from '../firebase/config';

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        // references
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection('artatelier')

        const split = file.name.split("_")
        const topic = split[0]
        const publishedDate = split[1]
        const artist = split[2].split(".")[0]
        console.log(topic)  
        console.log(publishedDate)  
        console.log(artist)   

        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            const createdDate = timestamp()
            collectionRef.add({url: url, createdDate: createdDate, artist:artist, topic:topic, publishedDate:publishedDate})
            setUrl(url);
        }
        )
    }, file);

    return {progress, url, error};

}

export default useStorage;

