import react from "react";

const Contact = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center mb-5">Contact Us</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-10 mx-auto"></div>
            <form>
              <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label">
                  Fullname
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput"
                  placeholder="Enter your name"
                />
              </div>
              <div class="mb-3">
                <label for="formGroupExampleInput2" class="form-label">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Enter your email"
                />
              </div>
              <div class="mb-3">
                <label for="formGroupExampleInput2" class="form-label">
                  Phone Number
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Enter your phone number"
                />
              </div>

              <div class="mb-3">
                <label for="formGroupExampleInput2" class="form-label">
                  Massage
                </label>
                <textarea
                  className="form-control"
                  id="exampleformControlTextarea1"
                  rows="3"
                />
              </div>
              <div class="col-12">
                <button type="submit" class="btn btn-outline-primary">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
