import React, { useState, useRef } from 'react';
import './AddVideos.css';
function AddVideos() {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('No file chosen');
  const [description, setDescription] = useState('');
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailName, setThumbnailName] = useState('No thumbnail chosen');
  const [language, setLanguage] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const fileInputRef = useRef(null);
  const thumbnailInputRef = useRef(null);
  const [videoTitle, setVideoTitle] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    if (selectedFile) {
      setFileName(selectedFile.name);
    } else {
      setFileName('No file chosen');
    }
  };

  const handleThumbnailChange = (e) => {
    const selectedThumbnail = e.target.files[0];
    setThumbnail(selectedThumbnail);

    if (selectedThumbnail) {
      setThumbnailName(selectedThumbnail.name);
    } else {
      setThumbnailName('No file chosen');
    }
  };

  const handleUpload = () => {
    if (file) {
      console.log('File uploaded:', file);
      console.log('Description:', description);
      setFile(null);
      setFileName('No file chosen');
      setDescription('');
      setThumbnail(null);
      setLanguage('');
      setCategory('');
      setDate('');
    } else {
      console.log('No file selected');
    }
  };

  const categories = ['Gaming', 'Cooking', 'Travel', 'Science ', 'Technologies','Fitness','Art','Comedy','Education','News','Vlogs','Lifestyle'];



  const handleChooseFileClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();

      // Reset state for various fields after file selection
      setFile(null);
      setFileName('No file chosen');
      setDescription('');
      setThumbnail(null);
      setLanguage('');
      setCategory('');
      setDate('');
    } else {
      console.log('No file selected');
    }
  };
  <select
    value={category}
    onChange={(e) => setCategory(e.target.value)}
    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 mt-4"
  >
    <option value="">Choose Category</option>
    <option value="Category 1">Category 1</option>
    <option value="Category 2">Category 2</option>
    <option value="Category 3">Category 3</option>
    {/* Add more options as needed */}
  </select>




  return (
    <div className='mt-24 ms-16  '>
     
      <h1 className='flex justify-center'>ADD VIDEO</h1>
      <div className="max-w-full p-6rounded-lg grid grid-cols-2 gap-6 mt-14">

        <div className="col-span-1 ms-16">
        <input
            type="text"
            placeholder="Video Title"
            value={videoTitle}
            onChange={(e) => setVideoTitle(e.target.value)}
            className="w-full mx-auto flex justify-center p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 mt-4 mb-6 h-16"
          />

          <textarea
            placeholder="Add video description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mx-auto flex justify-center  w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 h-80"
          />
          <br />
          <div className="brdr mx-auto flex justify-center">
            <div className="mb-4 mt-10 mx-auto flex justify-center">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
              />
              <div className="flex items-center">
                <button
                  onClick={handleChooseFileClick}
                  className="bg-green-300  text-gray-800 py-2 px-4 rounded-md hover:bg-gray-400 focus:outline-none focus:ring focus:border-gray-500 ms-16 mb-3"
                >
                  Choose File
                </button>
                <span className="text-white font-bold mb-3 ms-2">{fileName}</span>
              </div>
            </div>
          </div>
          <br />
          <br />
          
          <input
            type="file"
            ref={thumbnailInputRef}
            onChange={handleThumbnailChange}
            className="hidden"
          />
          <div className="brdr mb-4 mt-6 mx-auto flex justify-center">
            <input
              type="file"
              ref={thumbnailInputRef}
              onChange={handleThumbnailChange}
              className="hidden"
            />
            <button
              onClick={() => thumbnailInputRef.current.click()}
              className="bg-green-300 text-gray-800 py-2 px-4 mt-10 mb-16 rounded-md hover:bg-gray-400 focus:outline-none focus:ring focus:border-gray-500 ms-16 mb-3"
            >
              Choose Thumbnail
            </button>
            <span className="text-white font-bold mb-3 ms-2 mt-12">{thumbnailName}</span>
          </div>
        </div>
        <div className="col-span-1 me-16 mt-4">

          {/* Language input */}
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="mx-auto flex justify-center w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 h-16"
            style={{ backgroundColor: 'white', color: 'black' }}
          >
            <option value="">Choose Language</option>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Tamil">Tamil</option>
            <option value="Telungu">Telungu</option>
            <option value="Kannada">Kannada</option>
            <option value="Malayalam">Malayalam</option>
            <option value="Punjabi">Punjabi</option>
            <option value="Spanish">Spanish</option>
            <option value="Korean">Korean</option>
            <option value="Arabic">Arabic</option>


            {/* Add more language options as needed */}
          </select>
          {/* Category input */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mx-auto flex justify-center w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 mt-4 h-16"
            style={{ backgroundColor: 'white', color: 'black' }}
          >
            <option value="">Choose Category</option>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>



          {/* Date input */}

          <input
            type="date"
            placeholder="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mx-auto flex justify-center w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 mt-4 h-16"
          />
          <br />
          <br />
          <button
            onClick={handleUpload}
            className="mx-auto flex justify-center bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 w-full h-24"
          >
            <h1>Upload Video</h1>
          </button>

        </div>
      </div>
      <h2 className='dm'>bd</h2>
      <h2 className='dm'>bd</h2>
      <h2 className='dm'>bd</h2>
      <h2 className='dm'>bd</h2>


    </div>
  );
}
export default AddVideos;
