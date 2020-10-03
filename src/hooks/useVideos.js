import { useState, useEffect } from 'react';
import youtube, { defaultParams } from '../apis/youtube';

const useVideos = defaultSearchTerm => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
        ...defaultParams
      }
    });

    setVideos(response.data.items);
  };

  return [videos, search];
};

export default useVideos;
