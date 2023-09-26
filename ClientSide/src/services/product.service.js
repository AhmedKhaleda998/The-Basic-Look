import axios from "axios";

export const getProducts = async () => {
  try {
    console.log("get products running");
    localStorage.setItem("loading", "true");
    const axiosResponse = await axios.get(
      "https://chicwardrobe-znz5.onrender.com/products",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const products = axiosResponse.data;
    const status = axiosResponse.status;
    if (status === 200) {
      localStorage.setItem("loading", "false");
      console.log("Get Products Finished");
    }

    console.log(products);
    return products;
  } catch (error) {
    console.error(error);

    throw error;
  }
};

export const getProductById = async (id) => {
  try {
    localStorage.setItem("loading", "true");
    const response = await axios.get(
      `https://chicwardrobe-znz5.onrender.com/products/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const product = response.data.product;
    console.log(product.description);
    localStorage.setItem("loading", "false");
    return product;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export const getProductsByCollection = async (collection) => {
  try {
    console.log("get productsByCollection running");
    localStorage.setItem("loading", "true");
    const response = await axios.get(
      `https://chicwardrobe-znz5.onrender.com/products/collections/${collection}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const product = response.data;
    localStorage.setItem("loading", "false");
    console.log("Get productsByCollection Finished");
    return product;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteProductById = async (id) => {
  console.log("Deleting item:", id);

  try {
    const authToken = localStorage.getItem("authToken");
    console.log(authToken);
    console.log(id);
    const response = await axios.delete(
      `https://chicwardrobe-znz5.onrender.com/products/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
      }
    );

    console.log("Item deleted successfully");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error deleting item:", error);
  }
};
export const addNewProduct = async (newItemData) => {
  try {
    console.log("Adding item:");
    const authToken = localStorage.getItem("authToken");
    console.log(authToken);
    console.log(newItemData);

    const formData = new FormData();
    formData.append("name", newItemData.name);
    formData.append("price", newItemData.price);
    formData.append("size", newItemData.size);
    formData.append("description", newItemData.description);
    formData.append("gender", newItemData.gender);
    formData.append("collectionSeason", newItemData.collectionSeason);
    formData.append("image", newItemData.image);

    const response = await axios.post(
      `https://chicwardrobe-znz5.onrender.com/products`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${authToken}`,
        },
      }
    );

    console.log("Item Added successfully");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error Adding item:", error);
    throw error;
  }
};

export const updateProduct = async (id, updateData) => {
  try {
    console.log("Updating item:", id);
    const authToken = localStorage.getItem("authToken");
    console.log(authToken);
    console.log(updateData);

    const formData = new FormData();
    formData.append("name", updateData.name);
    formData.append("price", updateData.price);
    formData.append("size", updateData.size);
    formData.append("description", updateData.description);
    formData.append("gender", updateData.gender);
    formData.append("collectionSeason", updateData.collectionSeason);
    formData.append("image", updateData.image);

    const response = await axios.put(
      `https://chicwardrobe-znz5.onrender.com/products/${id}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${authToken}`,
        },
      }
    );

    console.log("Item Updated successfully");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error Updated item:", error);
    throw error;
  }
};

export const searchByName = async (keyword) => {
  try {
    const authToken = localStorage.getItem("authToken");

    const response = await axios.get(
      `https://chicwardrobe-znz5.onrender.com/products/search?$keyword=${keyword}`,
      
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${authToken}`,
        },
      }
    );

   
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error Updated item:", error);
    throw error;
  }
};
