import React from "react";

export default function Question(props) {
  return (
    <div className="container-fluid">
      <div className="col md-5 m-auto">
        <div className="mt-3">
          <div className="card text-left">
            <div className="card-body">
              <form onSubmit={props.submit}>
                <div className="form-group">
                  <label htmlFor="">
                  {" "}
                    <b>3.</b>What are you currently doing ?
                  </label>
                  <br></br>
                  <input
                    type="radio"
                    id="teacher"
                    value="teacher"
                    name="q1"
                    autoComplete="off"
                  />
                  <label htmlFor="Teacher">teaching</label>{' '}
                  
                  <input
                    type="radio"
                    id="Student"
                    value="student"
                    name="q1"
                    autoComplete="off"
                  />
                  <label htmlFor="student">Student</label>{' '}
                  
                  <input
                    type="radio"
                    id="programmer"
                    value="programmer"
                    name="q1"
                    autoComplete="off"
                  />
                  <label htmlFor="Teacher">Programmer</label>{' '}
                  
                  <input type="radio" id="other" name="q1" autoComplete="off" />
                  <label htmlFor="">Other</label>{' '}
                  <input
                    type="text"
                    className="form-control"
                    name="other"
                    
                    placeholder="type here is not listed."
                    autoComplete="off"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">
                  {" "}
                    <b>4.</b>Please rate our cource ?
                  </label>
                  <br></br>
                  <input type="radio" id="poor" value="poor" name="q2" autoComplete="off" />
                  <label htmlFor="">Poor</label>
                  {' '}
                  <input type="radio" id="good" value="good" name="q2" autoComplete="off" />
                  <label htmlFor="">Good</label>{' '}
                  
                  <input
                    type="radio"
                    id="excellent"
                    name="q2"
                    value="excellent"
                    autoComplete="off"
                  />{' '}
                  <label htmlFor="">Excellent</label>
                  
                </div>
                <div className="form-group">
                  <label htmlFor="">
                  {" "}
                    <b>5.</b>write your review here.
                  </label>
                  <br></br>
                  <textarea className="form-control" name="q3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  save
                </button>
              </form>
              <center>
                <span className="badge badge-pill disabled">1</span>
                <span className="badge badge-pill badge-primary ">2</span>
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
