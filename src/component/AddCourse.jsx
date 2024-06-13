import React, { useState } from "react";
import axios from "axios";
import Partner from '../component/Partner';

const AddCourse = () => {
 
  const [response, setResponse] = useState(null);
  const [responseError, setResponseError] = useState(false);
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const [postCategory, setPostCategory] = useState('');
  const [postPrice, setPostPrice] = useState('');
  const [postImage, setPostImage] = useState(null);
  const [postVideos, setPostVideos] = useState([]);

  const handleApiCall = async (apiCall) => {
    try {
      const res = await apiCall();
      setResponse(res.data);
      setResponseError(false);
    } catch (error) {
      setResponse(error.message);
      setResponseError(true);
    }
  };

 

 
  const testCreatePost = () => {
    const formData = new FormData();
    formData.append('title', postTitle);
    formData.append('content', postContent);
    formData.append('category', postCategory);
    formData.append('price', postPrice);
    if (postImage) {
      formData.append('photo', postImage);
    }
    postVideos.forEach((video, index) => {
      formData.append('videos', video);
    });

    return handleApiCall(() => axios.post('http://localhost:7000/api/posts', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }));
  };

  


  const handleCreatePostSubmit = (event) => {
    event.preventDefault();
    testCreatePost();
  };

  const handleImageChange = (event) => {
    setPostImage(event.target.files[0]);
  };

  const handleVideoChange = (event) => {
    setPostVideos([...event.target.files]);
  };

  return (
    <>
    <div className="flex flex-col justify-center items-center p-8">
        <div className="flex flex-col w-1/4 justify-between gap-y-4">
          <h1 className="text-xl font-bold">Uplod your File</h1>
          <form onSubmit={handleCreatePostSubmit} className="flex flex-col gap-y-4">
      
        <input
          type="text"
          placeholder="Title"
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
          className="p-5 bg-white text-black border border-[#4a154b]"

          
        />
        <textarea
          placeholder="Content"
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
          className="p-5 bg-white text-black border border-[#4a154b]"
        />
        <input
          type="text"
          placeholder="Category"
          value={postCategory}
          onChange={(e) => setPostCategory(e.target.value)}
          className="p-5 bg-white text-black border border-[#4a154b]"
          
        />
        <input
          type="number"
          placeholder="Price"
          value={postPrice}
          onChange={(e) => setPostPrice(e.target.value)}
          className="p-5 bg-white text-black border border-[#4a154b]"

        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="p-5 bg-white text-black border border-[#4a154b]"

        />
        <input
          type="file"
          accept="video/*"
          multiple
          onChange={handleVideoChange}
          className="p-5 bg-white text-black border border-[#4a154b]"

        />
        <button type="submit" 
        className="bg-[#4a154b] text-white font-bold text-lg hover:bg-[#4a153b] p-5 mt-8">Create Post</button>
      </form>
      
    </div>
    </div>
    <Partner />
    </>
  );
};

export default AddCourse;
