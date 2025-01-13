import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Popup from "../components/Popup";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    mobile: "",
    email: "",
    description: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName) newErrors.firstName = "First name is required.";
    if (!formData.lastName) newErrors.lastName = "Last name is required.";
    if (!formData.age || formData.age < 18 || formData.age > 100)
      newErrors.age = "Age must be between 18 and 100.";
    if (!formData.mobile || !/^\d{10}$/.test(formData.mobile))
      newErrors.mobile = "Mobile number must be 10 digits.";
    if (
      !formData.email ||
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    )
      newErrors.email = "Invalid email address.";
    if (!formData.description)
      newErrors.description = "Description cannot be empty.";
    if (!formData.password || formData.password.length < 8)
      newErrors.password = "Password must be at least 8 characters.";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess("");
    } else {
      setErrors({});
      setSuccess("Account created successfully!");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      age: "",
      mobile: "",
      email: "",
      description: "",
      password: "",
      confirmPassword: "",
    });
    setErrors({});
    setSuccess("");
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClosePopup = () => {
    setSuccess(""); // Close the popup
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-6xl w-full flex flex-col md:flex-row">
        {/* Left Image Section */}
        <div className="w-full md:w-2/5">
          <img
            src="./src/assets/Web.png"
            alt="Side Illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-3/5 p-8">
          <h2 className="text-2xl font-lato font-semibold  text-brand-Default mb-6 text-center">
            Create an Account
          </h2>

          {/* {success && <p className="text-green-600 mb-4">{success}</p>} */}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* First Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-brand-Default font-lato font-semibold mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full p-2 border ${
                    errors.firstName ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:outline-none`}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.firstName}
                  </p>
                )}
              </div>

              <div>
                <label className="block  text-brand-Default font-lato font-semibold mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full p-2 border ${
                    errors.lastName ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:outline-none`}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                )}
              </div>

              <div>
                <label className="block text-brand-Default font-lato font-semibold mb-1">
                  Age
                </label>
                <input
                  type="number"
                  name="age"
                  placeholder="Age"
                  value={formData.age}
                  onChange={handleChange}
                  className={`w-full p-2 border ${
                    errors.age ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:outline-none`}
                />
                {errors.age && (
                  <p className="text-red-500 text-sm mt-1">{errors.age}</p>
                )}
              </div>
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-brand-Default font-lato font-semibold mb-1">
                  Mobile
                </label>
                <input
                  type="number"
                  name="mobile"
                  placeholder=" +94 x xxx xxx xxx"
                  value={formData.mobile}
                  onChange={handleChange}
                  className={`w-full p-2 border ${
                    errors.mobile ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:outline-none`}
                />
                {errors.mobile && (
                  <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
                )}
              </div>

              <div>
                <label className="block  text-brand-Default font-lato font-semibold mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="abc@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-2 border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:outline-none`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Third Row */}
            <div>
              <label className="block text-brand-Default font-lato font-semibold mb-1">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className={`w-full p-2 border ${
                  errors.description ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:outline-none`}
              ></textarea>
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.description}
                </p>
              )}
            </div>

            {/* Fourth Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <label className="block  text-brand-Default font-lato font-semibold mb-1">
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full p-2 border ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:outline-none `}
                />
                <button
                  type="button"
                  className="absolute right-3 bottom-1 transform -translate-y-1/2"
                  onClick={togglePassword}
                >
                  {showPassword ? (
                    <FaEyeSlash className="text-brand-Default" />
                  ) : (
                    <FaEye className="text-brand-Default" />
                  )}
                </button>

                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}
              </div>

              <div className="relative">
                <label className="block text-brand-Default font-lato font-semibold mb-1">
                  Confirm Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`w-full p-2 border ${
                    errors.confirmPassword
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded-lg focus:outline-none`}
                />
                <button
                  type="button"
                  className="absolute right-3 bottom-1 transform -translate-y-1/2  "
                  onClick={togglePassword}
                >
                  {showPassword ? (
                    <FaEyeSlash className="text-brand-Default" />
                  ) : (
                    <FaEye className="text-brand-Default" />
                  )}
                </button>

                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-4">
              <button
                type="button"
                onClick={handleReset}
                className="bg-white text-brand-Default font-lato font-semibold py-2 px-6 rounded-3xl border-2 border-brand-Default hover:bg-brand-Default  hover:text-white"
              >
                Reset
              </button>
              <button
                type="submit"
                className="bg-white text-brand-Default font-lato font-semibold py-2 px-6 rounded-3xl border-2 border-brand-Default hover:bg-brand-Default  hover:text-white"
              >
                Submit
              </button>
            </div>
          </form>

          {/* Success Popup */}
          {success && <Popup message={success} onClose={handleClosePopup} />}
          
        </div>
      </div>
    </div>
  );
};

export default Form;
