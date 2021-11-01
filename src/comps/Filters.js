import React, { useEffect } from 'react'
import useFirestore from '../hooks/useFirestore';

const Filters = ({ selectedArtist, setSelectedArtist }) => {

    const { docs } = useFirestore('artatelier');

    var lookup = {};
    var result = [];
    for (var doc, i = 0; doc = docs[i++];) {
        var name = doc.artist;

        if (!(name in lookup)) {
            lookup[name] = 1;
            result.push(name);
        }
    }
    result.unshift('all')
    console.log(result);
    let filterList=result.map((item,index)=>{

    return <option value={item}>{item}</option>
    
    })

    const changeHandler = (e) => {
        let selected = e.target.value;
        // console.log(selected.target.value);

        // const split = selected.name.split("_")
        // const topic = split[0]
        // const publishedDate = split[1]
        // const artist = split[2].split(".")[0] 

        if (selected == 'all') {
            setSelectedArtist(null);
        } else if (selected) {
            setSelectedArtist(selected);
        } else {
            setSelectedArtist(null);
        }
    }


    return (
        <div>
            <select id="dropdown" options={result} onChange={event => changeHandler(event)}>
                {filterList}
            </select>
            <p></p>
            <p>{selectedArtist}</p>
        </div>
    )
};

export default Filters;