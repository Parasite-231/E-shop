import axios from 'axios';

const fetchItemData = async () => {
  try {
      const response = await axios.get('https://fakestoreapi.com/products', {
          next: {
            revalidate : 30
        }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default fetchItemData;