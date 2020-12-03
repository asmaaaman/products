import axiosInstance from '../apis/axios'

export const fetchProducts = async () => {
    const response = await axiosInstance.get();
  
    if (response.data) return response.data;
  
    console.log(response.data)
    return [];
  };
  export const fetchSingleProduct = async (id) => {
    const response = await axiosInstance.get(id);
  
    if (response.data) return response.data;
  
    return {};
  };

  