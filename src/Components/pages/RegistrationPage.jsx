import React, { Fragment, useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import { RegistrationResolver } from "../validation/registrationResolver";
import "react-phone-input-2/lib/style.css";
import { AddressFinder } from "@knocode/address-finder";
import "./RegistrationPage.css";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

export default function RegistrationPage(props) {
    const inputEl = useRef(null);
    const [getnum, setnum] = useState(0);
    const [getmsg, setmsg] = useState("");
    const [getAddress, setAddress] = useState([]);
    let history = useHistory();

    useEffect(() => {
        AddressFinder.setup({
            inputField: "#line_1",
            outputFields: {
                line_1: "#line_1",
                line_2: "#line_2",
                post_town: "#post_town",
                postcode: "#postcode",
            },
            onAddressRetrieved: ({ line_1, line_2, post_town, postcode }) => {
                var add = { line_1, line_2, post_town, postcode }
                setAddress(add);
            },
        });
    }, []);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: RegistrationResolver });
    const onSubmit = async (data) => {
        // console.log("data", data, getAddress);
        // console.log("getnum", getnum);

        if (getnum === 0) {
            setmsg("Number name is required field");
            alert("required");
        } else if (getnum.rawPhone === /^[0-9\b]+$/) {
            alert(" not ok");
            setmsg("Please Enter a valid  Number");
        } else {
            setmsg("");
            // alert("ok");
        }
        var body = {
            "username": data.username,
            "email": data.email,
            "phone": getnum.rawPhone,
            "country": getnum.country.name,
            "address": Object.values(getAddress),

        }
        // console.log("body", body);
        // pass data
        Swal.fire("Success", "Recored Submit ", "success");

        history.replace("/home", body);
    };
    return (
        <Fragment>
            <div className="bgRegistration">
                <Container>
                    <Row style={{ display: "flex", justifyContent: "center" }}>
                        <Col lg={10}>
                            <form
                                onSubmit={handleSubmit(onSubmit)}
                                className=" regitrationCard"
                            >
                                <div className="row">
                                    <div className="form-group mb-3  col-md-6 ">
                                        <label htmlFor="exampleInputEmail1">Name</label>

                                        <input
                                            placeholder="Name"
                                            name="username"
                                            type="text"
                                            {...register("username")}
                                            className={`form-control ${errors.username ? "is-invalid" : ""
                                                }`}
                                        />
                                        <div className="invalid-feedback">
                                            {errors.username?.message}
                                        </div>
                                    </div>
                                    <div className="form-group mb-3  col-md-6 ">
                                        <label htmlFor="exampleInputEmail1">Email</label>
                                        <input
                                            placeholder="Email"
                                            name="email"
                                            type="text"
                                            {...register("email")}
                                            className={`form-control ${errors.email ? "is-invalid" : ""
                                                }`}
                                        />
                                        <div className="invalid-feedback">
                                            {errors.email?.message}
                                        </div>
                                    </div>

                                    <div className="form-group   col-md-6 ">
                                        <label htmlFor="exampleInputEmail1">Phone</label>
                                        <PhoneInput
                                            ref={inputEl}
                                            inputClass="w-100"
                                            country="us"
                                            name="Number"
                                            autoFormat
                                            placeholder="enter No"
                                            searchClass="search-class"
                                            searchStyle={{
                                                margin: "0",
                                                width: "97%",
                                                height: "30px",
                                            }}
                                            className="phninput"
                                            enableSearchField
                                            countryCodeEditable={false}
                                            onChange={(value, country, data) => {
                                                let rawPhone = value
                                                    .replace(/[^0-9]+/g, "")
                                                    .slice(country.dialCode.length);
                                                // console.log(
                                                //     "aa",
                                                //     {
                                                //         rawPhone: value
                                                //             .replace(/[^0-9]+/g, "")
                                                //             .slice(country.dialCode.length),
                                                //     },
                                                //     country
                                                // );

                                                setnum({ rawPhone, country });
                                            }}
                                            disableSearchIcon
                                            enableSearch
                                        />
                                        <span style={{ color: "red", fontSize: "12px" }}>
                                            <p>{getmsg}</p>
                                        </span>
                                    </div>
                                    <div className="form-group   col-md-6 ">
                                        <label htmlFor="address2"> Address </label>
                                        <input
                                            name="address2"
                                            id="line_1"

                                            placeholder="Start typing your address..."
                                            {...register("address2")}
                                            className={`form-control ${errors.address2 ? "is-invalid" : ""
                                                }`}
                                        />
                                        <div className="invalid-feedback">
                                            {errors.address2?.message}
                                        </div>
                                    </div>


                                    <div className="form-group mb-3  col-md-6 ">
                                        <label htmlFor="Addressline2">Address Line 2</label>
                                        <input
                                            name="Addressline2"
                                            id="line_2"
                                            placeholder="Address Line 2"
                                            // {...register("addressline_2")}
                                            className={`form-control ${errors.addressline_2 ? "is-invalid" : ""
                                                }`}
                                            disabled={true}
                                        />
                                        <div className="invalid-feedback">
                                            {errors.addressline_2?.message}
                                        </div>
                                    </div>
                                    <div className="form-group mb-3  col-md-6 ">
                                        <label htmlFor="exampleInputEmail1">Post town</label>
                                        <input
                                            name="post_town"
                                            id="post_town"
                                            placeholder="Post town"
                                            // {...register("post_town")}
                                            className={`form-control ${errors.post_town ? "is-invalid" : ""
                                                }`}
                                            disabled={true}
                                        />
                                        <div className="invalid-feedback">
                                            {errors.post_town?.message}
                                        </div>
                                    </div>
                                    <div className="form-group mb-3  col-md-6 ">
                                        <label htmlFor="exampleInputEmail1">Post code </label>
                                        <input
                                            name="postcode"
                                            id="postcode"
                                            placeholder="Postcode"
                                            // {...register("postcode")}
                                            className={`form-control ${errors.postcode ? "is-invalid" : ""
                                                }`}
                                            disabled={true}
                                        />
                                        <div className="invalid-feedback">
                                            {errors.postcode?.message}
                                        </div>
                                    </div>

                                    <div className="form-group col-12 ml-0 pl-0 text-center">
                                        <button className="btn btn-dark">Submit</button>
                                    </div>
                                </div>
                            </form>{" "}
                        </Col>
                    </Row>
                </Container>
            </div>
        </Fragment>
    );
}
