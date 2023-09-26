import React, { useState } from 'react'; 
import { addNewProduct } from '../../services/product.service';
import { useNavigate } from 'react-router-dom';

const AddForm = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [size, setSize] = useState('');
  const [description, setDescription] = useState('');
  const [gender, setGender] = useState('');
  const [collectionSeason, setCollectionSeason] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const handleAdd = async() => {
    const newData = {
      name: name,
      price: price,
      size: size,
      description: description,
      gender: gender,
      collectionSeason: collectionSeason,
      image: image
    };

    // Perform the necessary actions with the new data
    console.log(newData);
    try {
      await addNewProduct(newData)
      navigate('/admin')
    } catch (error) {
      console.error(error)
    }

    // Reset the form fields
    setName('');
    setPrice('');
    setSize('');
    setDescription('');
    setGender('');
    setCollectionSeason('');
    setImage(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <div className="container">
      <h2>Add Form</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            step="0.01"
            className="form-control"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="size">Size:</label>
          <input
            type="text"
            className="form-control"
            id="size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            className="form-control"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <input
            type="text"
            className="form-control"
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="collectionSeason">Collection Season:</label>
          <input
            type="text"
            className="form-control"
            id="collectionSeason"
            value={collectionSeason}
            onChange={(e) => setCollectionSeason(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            name='image'
            className="form-control"
            id="image"
            onChange={(e) => handleImageChange(e)}
          />
        </div>
        <button type="button" className="btn btn-dark mt-1" onClick={handleAdd}>
          Add
        </button>
      </form>
    </div>
  );
};

export default AddForm;