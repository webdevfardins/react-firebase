import React, { Component } from "react";
import Details from "./Details";
import Question from "./Question";
import { v4 as uuidv4 } from "uuid";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyChYV14tvXg5ZySCRAD5HCLQe4MOs4mcnM",
  authDomain: "fs-survey.firebaseapp.com",
  databaseURL: "https://fs-survey-default-rtdb.firebaseio.com",
  projectId: "fs-survey",
  storageBucket: "fs-survey.appspot.com",
  messagingSenderId: "417398510873",
  appId: "1:417398510873:web:1ffe708df51656052a2188",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: uuidv4(),
      name: null,
      email: null,
      question: {
        q1: null,
        q2: null,
        q3: null,
        other: null,
      },
      isSubmitted: false,
    };
  }
  detailsubmit = (event) => {
    const name = event.target.name.value;
    const email = event.target.email.value;
    this.setState({ name, email }, () => {
      console.log(this.state);
    });
    event.preventDefault();
  };
  questionsubmit = (event) => {
    const questions = {};
    questions.q1 = event.target.q1.value;
    questions.q2 = event.target.q2.value;
    questions.q3 = event.target.q3.value;
    questions.other = event.target.other.value;
    const isSubmitted = true;
    this.setState({ questions ,isSubmitted }, () => {
      console.log(this.state);
    });
    event.preventDefault();
    const db = getDatabase();
    set(ref(db, "survey/" + this.state.id), {
      name: this.state.name,
      email: this.state.email,
      questions: questions,
    });
  };

  render() {
    return (
      <>
        <div className="container-fluid">
          <div className="container card mt-2">
            <h1 className="text-center text-primary"> fs survey</h1>
          </div>
        </div>
        {this.state.isSubmitted  ? (
          <div className=" container card mt-10">
            <h1>Thank you</h1>
          </div>
        ):
        this.state.name === null && this.state.email === null ? (
          <Details submit={this.detailsubmit} />
        ) : (
          <Question submit={this.questionsubmit} />
        )}
      </>
    );
  }
}

export default Container;
