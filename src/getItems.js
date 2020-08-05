import axios from 'axios';

async function getItems(filter) {
  return await axios.get(`/items?filter=${filter}`);
}

export default getItems;