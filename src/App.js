import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import ImageBox from './ImageBox';

const App = () =>{

const APP_KEY = '26765978-4659a567ff69c7c116a094cc0'
const [images,setImages] = useState([]);
const [search,setSearch] = useState('');
const [query,setQuery] = useState('cats');

useEffect(() =>{
getimages()
},[query])

const getimages = async () =>{
  
  const response = await axios(`https://pixabay.com/api/?key=${APP_KEY}&q=${query}&image_type=photo`);
  const data = await response.data
  setImages(data.hits)

}
const getSearch = e =>{
  e.preventDefault();
  setQuery(search)
  setSearch('')
}

return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input type="text" className="search-bar"  value={search} onChange={e=>setSearch(e.target.value)}/>
        <button type="submit"  className="search-button">Search</button>
      </form>
      <div className="images">
      {images.map(image => (
          <>
          <ImageBox 
          key={image.id}
          picurl = {image.webformatURL}
          />
          </>
      ))}
              </div>
            </div>
  )
}

export default App;
