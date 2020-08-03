import React from 'react';

const AddUser = () => {
return (
    <div className="container">
    <div className="w-75 mt-5 mx-auto shadow p-5">
      <h2 className="text-center mt-0">Add A Contact</h2>
      <form>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Your Name"
            name="name"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Your LastName"
            name="lastname"
                />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control form-control-lg"
            placeholder="Enter Your E-mail Address"
            name="email"
              />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Your Phone Number"
            name="phone"
              />
        </div>

    <div class="custom-control custom-radio mr-3 ">
  <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input" />
  <label class="custom-control-label" for="customRadio1">Active</label>
</div>
<div class="custom-control custom-radio">
  <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input" />
  <label class="custom-control-label" for="customRadio2">Inactive</label>
</div>
        
        <button className="btn btn-success btn-block">Add Contact</button>
      </form>
    </div>
  </div>
);
};

export default AddUser;