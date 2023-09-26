import React, { useState, useEffect, useContext } from "react";
import { gState } from "../../../context/Context";
import {
  updateAddress,
  getAddressById,
} from "../../../services/address.service";

const EditAddress = ({ id, getData, editEnable }) => {
  const { data } = useContext(gState);
  const { addressEditForm } = data;
  const formError = sessionStorage.getItem("EditFormError");
  const [addressLine, setAddressLine] = useState(addressEditForm.addressLine);
  const [country, setCountry] = useState(addressEditForm.country);
  const [city, setCity] = useState(addressEditForm.city);
  const [state, setState] = useState(addressEditForm.state);
  const [postalCode, setPostalCode] = useState(addressEditForm.postalCode);
  const [phone, setPhone] = useState(addressEditForm.phone);
  const getAddressData = async () => {
    try {
      const data = await getAddressById(id);
      setAddressLine(data.address.addressLine);
      setCountry(data.address.country);
      setCity(data.address.city);
      setState(data.address.state);
      setPostalCode(data.address.postalCode);
      setPhone(data.address.phone);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getAddressData();
  }, [id]);

  const handleEditAddress = async (e) => {
    e.preventDefault();
    editEnable(false);
    const newData = {
      addressLine: addressLine,
      country: country,
      city: city,
      state: state,
      postalCode: postalCode,
      phone: phone,
    };

    try {
      await updateAddress(id, newData);
      getData();
      setAddressLine("");
      setCountry("");
      setCity("");
      setState("");
      setPostalCode("");
      setPhone("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="col-md-6">
      <div className="row ">
        <div className="col-12">
          <form>
            <div className="row">
              <h4>Edit Address</h4>
              <h6 className="text-center text-danger fw-bold">{formError}</h6>
              <div className="col-md-6 gy-2">
                <div className="form-floating ">
                  <input
                    className="form-control border-1 border-dark bg-white"
                    type="text"
                    name="First-name"
                    id="First-name"
                    placeholder="First name"
                    required
                  />
                  <label htmlFor="First-name" className="form-label">
                    First name
                  </label>
                </div>
              </div>
              <div className="col-md-6 gy-2">
                <div className="form-floating ">
                  <input
                    className="form-control border-1 border-dark bg-white"
                    type="text"
                    name="Last name"
                    id="Last-name"
                    placeholder="Last name"
                    required
                  />
                  <label htmlFor="Last-name" className="form-label">
                    Last name
                  </label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-md-6  gy-2">
                <div className="form-floating ">
                  <input
                    className="form-control  border-1 border-dark bg-white"
                    type="text"
                    name="Company"
                    id="Company"
                    placeholder="Company"
                    required
                  />
                  <label htmlFor="Company" className="form-label">
                    Company
                  </label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-md-6  gy-2">
                <div className="form-floating ">
                  <input
                    className="form-control  border-1 border-dark bg-white"
                    type="text"
                    name="Address"
                    id="Address"
                    placeholder="Address Line"
                    required
                    onChange={(e) => setAddressLine(e.target.value)}
                    value={addressLine}
                  />
                  <label htmlFor="Address" className="form-label">
                    Address Line
                  </label>
                </div>
              </div>
            </div>

            <div className="row ">
              <div className="col-md-6 gy-2">
                <div className="form-floating ">
                  <input
                    className="form-control border-1 border-dark bg-white"
                    type="text"
                    name="State"
                    id="State"
                    placeholder="State"
                    onChange={(e) => setState(e.target.value)}
                    value={state}
                    required
                  />
                  <label htmlFor="State" className="form-label">
                    State
                  </label>
                </div>
              </div>
              <div className="col-md-6 gy-2">
                <div className="form-group">
                  <select
                    className="form-control bg-light border-1 border-dark bg-white h-50"
                    id="arab-countries"
                    name="arab-countries"
                    onChange={(e) => setCountry(e.target.value)}
                    value={country}
                  >
                    <option value="">Select Country</option>
                    <option value="Bahrain">Bahrain</option>
                    <option value="Comoros">Comoros</option>
                    <option value="Djibouti">Djibouti</option>
                    <option value="Egypt">Egypt</option>
                    <option value="Iraq">Iraq</option>
                    <option value="Jordan">Jordan</option>
                    <option value="Kuwait">Kuwait</option>
                    <option value="Lebanon">Lebanon</option>
                    <option value="Libya">Libya</option>
                    <option value="Mauritania">Mauritania</option>
                    <option value="Morocco">Morocco</option>
                    <option value="Oman">Oman</option>
                    <option value="Palestine">Palestine</option>
                    <option value="Qatar">Qatar</option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="Somalia">Somalia</option>
                    <option value="Sudan">Sudan</option>
                    <option value="Syria">Syria</option>
                    <option value="Tunisia">Tunisia</option>
                    <option value="United Arab Emirates">
                      United Arab Emirates
                    </option>
                    <option value="Yemen">Yemen</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row ">
              <div className="col-md-6 gy-2">
                <div className="form-group">
                  <select
                    className="form-control bg-light border-1 border-dark bg-white "
                    id="cities"
                    name="cities"
                    onChange={(e) => setCity(e.target.value)}
                    value={city}
                  >
                    <option value="">Select City</option>
                    <option value="Cairo">Cairo</option>
                    <option value="Alexandria">Alexandria</option>
                    <option value="Giza">Giza</option>
                    <option value="Shubra El-Kheima">Shubra El-Kheima</option>
                    <option value="Port Said">Port Said</option>
                    <option value="Suez">Suez</option>
                    <option value="Luxor">Luxor</option>
                    <option value="Aswan">Aswan</option>
                    <option value="Mansoura">Mansoura</option>
                    <option value="Tanta">Tanta</option>
                    <option value="Fayoum">Fayoum</option>
                    <option value="Zagazig">Zagazig</option>
                    <option value="Ismailia">Ismailia</option>
                    <option value="Kafr El Sheikh">Kafr El Sheikh</option>
                    <option value="Asyut">Asyut</option>
                    <option value="Damietta">Damietta</option>
                    <option value="Damanhur">Damanhur</option>
                    <option value="El-Mahalla El-Kubra">
                      El-Mahalla El-Kubra
                    </option>
                    <option value="Minya">Minya</option>
                    <option value="Qena">Qena</option>
                    <option value="Sohag">Sohag</option>
                    <option value="Hurghada">Hurghada</option>
                    <option value="El Arish">El Arish</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6 gy-2">
                <div className="form-floating ">
                  <input
                    className="form-control border-1 border-dark bg-white"
                    type="number"
                    name="code"
                    id="code"
                    placeholder="code"
                    onChange={(e) => setPostalCode(e.target.value)}
                    value={postalCode}
                    required
                  />
                  <label htmlFor="code" className="form-label">
                    Postal code
                  </label>
                </div>
              </div>
            </div>
            <div className="row ">
              <div className="col-md-6 gy-2">
                <div className="form-floating ">
                  <input
                    className="form-control border-1 border-dark bg-white"
                    type="number"
                    name="Phone"
                    id="AddressPhone"
                    placeholder="Phone"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                    required
                  />
                  <label htmlFor="AddressPhone" className="form-label">
                    Phone
                  </label>
                </div>
              </div>
              <div className="col-md-6 gy-2 gx-3">
                <input type="checkbox" />
                Set as default address
              </div>
            </div>
            <div className="row">
              <div className="col gy-2">
                <button
                  className="btn btn-dark "
                  id="send-butt"
                  type="submit"
                  onClick={(e) => handleEditAddress(e)}
                >
                  Edit ADDRESS
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditAddress;
