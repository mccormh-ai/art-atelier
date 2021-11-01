import React, { useEffect } from "react";
import useFirestore from '../hooks/useFirestore';

const ImageGrid = ({ selectedArtist, setSelectedImg }) => {

    //const { artists } = queryFirestore('artatelier', 'artists')

    // if (select)
    const { docs } = useFirestore('artatelier');


    function filterbyArtist(item) {
        if (item.artist = selectedArtist) {
          return true
        } else {
            return false;
        }
        
      }
      
    //   let arrByID = arr.filter(filterByID)

    console.log(docs);
    console.log(selectedArtist);
    var newdocs = [];
    for (var doc, i = 0; doc = docs[i++];) {
        if (selectedArtist && doc.artist == selectedArtist) {
            newdocs.push(doc);
        } else if (!(selectedArtist) || selectedArtist == "all"){
            newdocs.push(doc);
        }
    }
    console.log(newdocs);

    return (
        <div className = "img-grid">
            { newdocs && newdocs.map(doc => (
                <div className="img-wrap" key={doc.id}
                onClick={() => setSelectedImg(doc.url)}
                >
                    <img src={doc.url} alt="uploaded pic"
                    />
                </div>
            ))}
        </div>
    )
};

export default ImageGrid;