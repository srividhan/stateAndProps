import React from "react";
import Members from "./Members";
import MembersDetails from "./MembersDetails";

export default function App(){
  const Details=MembersDetails.map(detail =>{
    return <Members Name={detail.Name} Age={detail.Age} Gender={detail.Gender} Address={detail.Address}></Members>
  })
  return (
    <div>
      {Details}
    </div>
  )
}