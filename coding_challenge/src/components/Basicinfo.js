import React from "react";

const Basicinfo = ({
  name,
  number,
  dateOfBirth,
  gender,
  active,
  toggleFunc,
  num,
}) => {
  return (
    <>
      <p>{name}</p>
      <p>{number}</p>
      <p>{dateOfBirth}</p>
      <p>{gender}</p>
      <p>{`${active}`}</p>
      <button onClick={() => toggleFunc(num)}>toggle</button>
    </>
  );
};

export default Basicinfo;
