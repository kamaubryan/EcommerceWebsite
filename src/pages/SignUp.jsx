import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SignUp = () => {
  const [registrationDetails, setRegistrationDetails] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  // State variables for form inputs
  // const [fullName, setFullName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem(
      registrationDetails,
      JSON.stringify(registrationDetails)
    );

    // Handle form submission logic here
    console.log("Submitted:", registrationDetails);
  };

  return (
    <StyledWrapper>
      <div className="wrapping">
        <div className="form-box">
          <form className="form" onSubmit={handleSubmit}>
            <span className="title">Sign up</span>
            <span className="subtitle">
              Create a free account with your email.
            </span>
            <div className="form-container">
              <input
                type="text"
                className="input"
                placeholder="Full Name"
                value={registrationDetails.fullName}
                onChange={(e) =>
                  setRegistrationDetails({
                    ...registrationDetails,
                    fullName: e.target.value,
                  })
                }
              />
              <input
                type="email"
                className="input"
                placeholder="Email"
                value={registrationDetails.email}
                onChange={(e) =>
                  setRegistrationDetails({
                    ...registrationDetails,
                    email: e.target.value,
                  })
                }
              />
              <input
                type="password"
                className="input"
                placeholder="Password"
                value={registrationDetails.password}
                onChange={(e) =>
                  setRegistrationDetails({
                    ...registrationDetails,
                    password: e.target.value,
                  })
                }
              />
            </div>
            <button type="submit">Sign up</button>
          </form>
          <div className="form-section">
            <p>
              Have an account? <Link to="/login"> login</Link>
            </p>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .wrapping {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .form-box {
    max-width: 300px;
    background: #f1f7fe;
    overflow: hidden;
    border-radius: 16px;
    color: #010101;
  }

  .form {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 32px 24px 24px;
    gap: 16px;
    text-align: center;
  }

  /*Form text*/
  .title {
    font-weight: bold;
    font-size: 1.6rem;
  }

  .subtitle {
    font-size: 1rem;
    color: #666;
  }

  /*Inputs box*/
  .form-container {
    overflow: hidden;
    border-radius: 8px;
    background-color: #fff;
    margin: 1rem 0 0.5rem;
    width: 100%;
  }

  .input {
    background: none;
    border: 0;
    outline: 0;
    height: 40px;
    width: 100%;
    border-bottom: 1px solid #eee;
    font-size: 0.9rem;
    padding: 8px 15px;
  }

  .form-section {
    padding: 16px;
    font-size: 0.85rem;
    background-color: #e0ecfb;
    box-shadow: rgb(0 0 0 / 8%) 0 -1px;
  }

  .form-section a {
    font-weight: bold;
    color: #0066ff;
    transition: color 0.3s ease;
  }

  .form-section a:hover {
    color: #005ce6;
    text-decoration: underline;
  }

  /*Button*/
  .form button {
    background-color: #0066ff;
    color: #fff;
    border: 0;
    border-radius: 24px;
    padding: 10px 16px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .form button:hover {
    background-color: #005ce6;
  }
`;

export default SignUp;
