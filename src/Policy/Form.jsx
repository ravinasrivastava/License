import "./form.css";
import { useState } from "react";
import swal from "sweetalert";

function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');

  const saveData = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      let details = { firstName, lastName, phone, email, feedback };
      const response = await fetch(
        "https://jumunona.onrender.com/admin/feedback/createFeedbackForm",
        {
          method: "POST",
          body: JSON.stringify(details),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        swal("Success", "Form submitted successfully", "success");
      } else {
        const error = await response.text();
        swal("Error", error, "error");
      }
      console.log(response, "dddddddddddd");

      setFirstName("");
      setLastName("");
      setPhone("");
      setEmail("");
      setFeedback("");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-md-4">
          <div className="form__data">
            <div className="form-heading">
              <h1 style={{ fontFamily: "serif" }}>Support</h1>
            </div>
            <div className="head">
              <p>Need Some Help ?</p>
              <p>Feel Free To Get In-Touch With Us</p>
            </div>

            <div className="p-2">
              <form onSubmit={saveData}> {/* Attach onSubmit event handler */}
                <div className="row mt-2">
                  <div className="col-md-12">
                    <input
                      placeholder="First Name"
                      type="text"
                      className="form-control"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                      
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="form-control"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                     
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="form-control"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="email"
                      placeholder="Email"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                     
                    />
                  </div>
                  <div className="col-md-6">
                    <textarea
                      type="text"
                      placeholder="Write a message...."
                      className="form-control"
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                      required
                      
                    />
                  </div>
                </div>

                <div className="col mt-0">
                  <div className="mt-5 text-center">
                    <button className="login-btn" type="submit" onClick={saveData}>
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Form;
