import React, { useState } from 'react';
import './Profile.css';
import boy from '../images/Untitled.jpeg'


function Profile() {
  const [profileImage, setProfileImage] = useState(null);

  const handleImageUpload = (event) => {
    const selectedImage = event.target.files[0];
    if (selectedImage) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  return (
    <div className=' ms-16 '>
      <div className="pro flex justify-center">
        <label htmlFor="upload-profile-pic">
          <div className="prf ms-5 flex items-center justify-center">
            {profileImage ? (
              <div className='relative'>
                <img src={profileImage} alt='Profile' className='rounded-full h-44 w-44 cursor-pointer' />
                <h1 className='pf absolute bottom-0 left-0 w-full text-center mb-64'>Your Name</h1>
              </div>) : (
                

              <div className="rounded-full h-80 w-44 bg-gray-300 cursor-pointer">

                <span className="text-gray-500"><img className=' h-80 w-44 bg-gray-300 cursor-pointer' src={boy} alt="" /></span>
                <div className='justify-center ms-8'>
                  <h1>Your Name</h1>
                </div>
              </div>
            )}
          </div>
          <input
            id="upload-profile-pic"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}

          />
        </label>
        <div className="prf1 ms-5 overflow-y-auto" style={{ maxHeight: '450px' }}>
          <h1 className='text-center text-black'>SAVED</h1>
          <div className='flex justify-center'>
            <div className='bg-black w-24 h-36  rounded-lg'>
              <img className='bg-black w-24 h-36   rounded-lg' src="https://i.pinimg.com/736x/b9/c2/11/b9c21177bd238a7757ada7c5ac18feda.jpg" alt="" />
            </div>
            <div className='bg-black w-48 h-36 ms-2 rounded-lg'>
              <img className='bg-black w-48 h-36 ms-2 rounded-lg' src="https://i.pinimg.com/564x/8a/a7/f3/8aa7f39e153dc80ca16855071320063c.jpg" alt="" />
            </div>
          </div>
          <div className='flex justify-center mt-2'>
            <div className='bg-black w-24 h-24 ms-2 rounded-lg'>
              <img className='w-24 h-24  rounded-lg' src="https://i.pinimg.com/564x/61/3a/17/613a17c9b3d1a47dc88d60221c81ad86.jpg" alt="" />
            </div>
            <div className='bg-black w-24 h-24 ms-2 rounded-lg'>
              <img className='w-24 h-24  rounded-lg' src="https://i.pinimg.com/564x/03/35/63/033563f5e7494503c9ea2efa31a35539.jpg" alt="" />
            </div>
            <div className='bg-black w-24 h-24 ms-2 rounded-lg'>
              <img className='w-24 h-24  rounded-lg' src="https://i.pinimg.com/564x/1c/7e/95/1c7e95d61776f535bb0c082a86cf830f.jpg" alt="" />
            </div>
          </div>
          <div className='flex justify-center mt-2'>
            <div className='bg-black w-80 h-44 ms-2 rounded-lg'>
              <img className='bg-black w-80 h-44  rounded-lg' src="https://i.pinimg.com/564x/11/4d/94/114d943696d93d837ecf8cea306c0799.jpg" alt="" />
            </div>
          </div>
          <div className='flex justify-center mt-2'>
            <div className='bg-black w-24 h-24 ms-2 rounded-lg'>
              <img className='w-24 h-24  rounded-lg' src="https://i.pinimg.com/564x/61/3a/17/613a17c9b3d1a47dc88d60221c81ad86.jpg" alt="" />
            </div>
            <div className='bg-black w-24 h-24 ms-2 rounded-lg'>
              <img className='w-24 h-24  rounded-lg' src="https://i.pinimg.com/564x/03/35/63/033563f5e7494503c9ea2efa31a35539.jpg" alt="" />
            </div>
            <div className='bg-black w-24 h-24 ms-2 rounded-lg'>
              <img className='w-24 h-24  rounded-lg' src="https://i.pinimg.com/564x/1c/7e/95/1c7e95d61776f535bb0c082a86cf830f.jpg" alt="" />
            </div>
          </div>
          <div className='flex justify-center mt-2'>
            <div className='bg-black w-24 h-24 ms-2 rounded-lg'>
              <img className='w-24 h-24  rounded-lg' src="https://i.pinimg.com/564x/61/3a/17/613a17c9b3d1a47dc88d60221c81ad86.jpg" alt="" />
            </div>
            <div className='bg-black w-24 h-24 ms-2 rounded-lg'>
              <img className='w-24 h-24  rounded-lg' src="https://i.pinimg.com/564x/03/35/63/033563f5e7494503c9ea2efa31a35539.jpg" alt="" />
            </div>
            <div className='bg-black w-24 h-24 ms-2 rounded-lg'>
              <img className='w-24 h-24  rounded-lg' src="https://i.pinimg.com/564x/1c/7e/95/1c7e95d61776f535bb0c082a86cf830f.jpg" alt="" />
            </div>
          </div>
          <div className='flex justify-center mt-2'>
            <div className='bg-black w-80 h-44 ms-2 rounded-lg'>
              <img className='bg-black w-80 h-44  rounded-lg' src="https://i.pinimg.com/564x/11/4d/94/114d943696d93d837ecf8cea306c0799.jpg" alt="" />
            </div>
          </div>
          <div className='flex justify-center mt-2'>
            <div className='bg-black w-24 h-24 ms-2 rounded-lg'>
              <img className='w-24 h-24  rounded-lg' src="https://i.pinimg.com/564x/61/3a/17/613a17c9b3d1a47dc88d60221c81ad86.jpg" alt="" />
            </div>
            <div className='bg-black w-24 h-24 ms-2 rounded-lg'>
              <img className='w-24 h-24  rounded-lg' src="https://i.pinimg.com/564x/03/35/63/033563f5e7494503c9ea2efa31a35539.jpg" alt="" />
            </div>
            <div className='bg-black w-24 h-24 ms-2 rounded-lg'>
              <img className='w-24 h-24  rounded-lg' src="https://i.pinimg.com/564x/1c/7e/95/1c7e95d61776f535bb0c082a86cf830f.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="prf2 ms-5 ">
          <h1 className='text-center text-black'>OTHER PERSONAL DETAILS</h1>
         
        </div>
      </div>
    </div>
  );
}

export default Profile;
