// import React from 'react'

import { useState } from "react";

const Fields = ({ initData, setInitData }) => {
    const initFields = {
        id: "",
        nameValue: "",
        email: "",
        number: "",
        url: "",
        
    }
    const [details, setDetails] = useState({
        ...initFields,
    });
    const changeHandler = (property, newValue) => {
        setDetails((prevDetails) => {
            return {
                ...prevDetails,
                [property]: newValue,
            };
        });
    };
    const submitHandler = (e) => {
        e.preventDefault();
        // const id = new Date();
        // console.log(details)
        


        //To check whther all elements are filled or not in our website.


        // const isFormValid = Object.values(details).every(
        //     (value) => value.trim() !== ""
        // );
        // if (!isFormValid) {
        //     return alert("please enter all fields!!!");
        // }

        //above code does required process
        setDetails((prevDetail) => {
            return {
                ...prevDetail,
                id: Date.now(),
            };
        });
        setInitData((initData) => {
            return [...initData, details];
        });
        // console.log(initData);
        setDetails(initFields);
        // console.log(...details+"hello")
    };
    return (
        <form
            onSubmit={submitHandler}
            autoComplete="off"
            className="js-form column"
        >
            <div className="name">
                <i
                    className="far fa-user"
                    aria-hidden="true"
                ></i>
                <input
                    type="text"
                    required
                    id="fullName"
                    value={details.nameValue}
                    placeholder="Enter name"
                    onChange={(e) => changeHandler("nameValue", e.target.value)}
                />
            </div>
            <div className="email">
                <i
                    className="fas fa-at"
                    aria-hidden="true"
                ></i>
                <input
                    type="email"
                    required=""
                    id="myEmail"
                    value={details.email}
                    placeholder="Enter email"
                    onChange={(e) => changeHandler("email", e.target.value)}
                ></input>
            </div>
            <div className="number">
                <i
                    className="fas fa-phone"
                    aria-hidden="true"
                ></i>
                <input
                    type="tel"
                    required=""
                    id="myTel"
                    value={details.number}
                    placeholder="Enter number"
                    onChange={(e) => changeHandler("number", e.target.value)}
                />
            </div>
            <div className="img">
                <i
                    className="far fa-image"
                    aria-hidden="true"
                ></i>
                <input
                    type="url"
                    required=""
                    id="imgurl"
                    value={details.url}
                    placeholder="Enter image url"
                    onChange={(e) => changeHandler("url", e.target.value)}
                />
            </div>
            <button onClick={submitHandler}>submit</button>
        </form>
    );
};

export default Fields;
