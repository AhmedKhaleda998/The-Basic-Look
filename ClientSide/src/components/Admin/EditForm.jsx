import React, { useState ,useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { gState } from '../../context/Context';
import { updateProduct } from '../../services/product.service';

const EditForm = () => {
  const { data } = useContext(gState);
  const {adminEditForm} = data;

  const [name, setName] = useState(adminEditForm.name);
  const [price, setPrice] = useState(adminEditForm.price);
  const [size, setSize] = useState(adminEditForm.size);
  const [description, setDescription] = useState(adminEditForm.description);
  const [gender, setGender] = useState(adminEditForm.gender);
  const [collectionSeason, setCollectionSeason] = useState(
    adminEditForm.collectionSeason
  );
  const [image, setImage] = useState(null);

  const navigate = useNavigate();
    const productId=adminEditForm.id;
    console.log(productId)
  const handleSave = async() => {
    const updatedData = {
      name: name,
      price: price,
      size: size,
      description: description,
      gender: gender,
      collectionSeason: collectionSeason,
      image: image
    };
    try {
      await updateProduct(productId,updatedData);
      navigate('/admin')
    } catch (error) {
      console.error(error)
    }
    
  };

  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   setImage(file);
  // };

  return (
    <div className="container">
      <h2>Edit Form</h2>
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
            className="form-control"
            name='image'
            id="image"
            onChange={(e) =>setImage(e.target.files[0])}
          />
        </div>
        <button
          type="button"
          className="btn btn-dark mt-1"
          onClick={handleSave}
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default EditForm;