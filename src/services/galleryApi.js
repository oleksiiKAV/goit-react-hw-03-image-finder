import axios from 'axios';

const getSearchGalleryApi = (query, page = 1) => {
  const URL = 'https://pixabay.com/api/';
  const API_KEY = '35854962-95aa6da93a9a5ed946bcb6885';
  const options = {
    params: {
      key: API_KEY,
      q: query,
      page,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  };
  return axios.get(URL, options).then(res => {
    return res.data;
  });
};

// import PT from 'prop-types';
// ImageGalleryItem.propTypes = {
//   gallery: PT.shape({
//     id: PT.number.isRequired,
//     largeImageURL: PT.string.isRequired,
//     tags: PT.string.isRequired,
//   }),
//   openModal: PT.func,
// };

export default getSearchGalleryApi;
