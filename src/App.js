import React from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import Filters from './comps/Filters';
import { useState } from 'react';

function App() {

  const [selectedImg, setSelectedImg] = useState(null);
  const [selectedArtist, setSelectedArtist] = useState(null);

  return (
    <div className="App">
      <Title/>
      <UploadForm/>
      <Filters selectedArtist={selectedArtist} setSelectedArtist={setSelectedArtist} />
      <ImageGrid selectedArtist={selectedArtist} setSelectedImg={setSelectedImg}/>
      {selectedImg && <Modal selectedImg = {selectedImg} setSelectedImg={setSelectedImg}/>}
    </div>
  );
}

export default App;
