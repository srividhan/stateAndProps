import React from "react";
export default function Members(props){
    return (
        <div>
            {props.Name && <h5>Name : {props.Name}</h5>}
            {props.Age && <h5>Age : {props.Age}</h5>}
            {props.Gender && <h5>Gender : {props.Gender}</h5>}
            {props.Address && <h5>Address : {props.Address}</h5>}
            <hr></hr>
        </div>
    )
}