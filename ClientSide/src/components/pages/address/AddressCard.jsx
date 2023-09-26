import React, { useContext } from "react";
import { gState } from "../../../context/Context";
import { deleteAddress } from "../../../services/address.service";
const AddressCard = ({ address, editEnable, getId, getData }) => {
  const { setData } = useContext(gState);
  const handleDeleteButton = async (e, id) => {
    e.preventDefault();
    try {
      await deleteAddress(id);
      getData();
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditButton = async (e) => {
    e.preventDefault();
    editEnable(true);
    getId(address._id);
    await setData((prevState) => {
      return {
        ...prevState,
        addressEditForm: {
          addressLine: address.addressLine,
          country: address.country,
          city: address.city,
          state: address.state,
          postalCode: address.postalCode,
          phone: address.phone,
        },
      };
    });
    
  };

  // const SetDefaultAddress = async (id)=>{
  //   await setData((prevState) => {
  //     return {
  //       ...prevState,
  //       defaultAddressId: id,
  //     };
  //   });
  // };
  return (
    <div className="card" key={address._id}>
      <div className="card-body">
        <div>
          <p>{address.addressLine}</p>
          <p>{address.country}</p>
          <p>{address.state}</p>
          <p>{address.postalCode}</p>
          <p>{address.city}</p>
          <p>{address.phone}</p>
          <p>{address.isDefault &&(<>default Address</>)}</p>
          <button
            className="btn btn-dark btn-sm"
            id="send-butt"
            type="submit"
            onClick={(e) => handleEditButton(e)}
          >
            EDIT
          </button>
          <button
            className="btn btn-dark btn-sm ms-1"
            id="send-butt"
            type="submit"
            onClick={(e) => handleDeleteButton(e, address._id)}
          >
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
