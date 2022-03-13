import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./SearchBox.css";

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      // history.push(`/search/${keyword}`);
    } else {
      // history.push("/");
    }
  };

  return (
    <Form className='searchbox-form' onSubmit={submitHandler} inline style={{ display: "flex" }}> 
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search Products..."
        className="mr-sm-2 ml-sm-5"
      ></Form.Control>
      {/* <Button
        // className="searchbox-buttom"
        type="submit"
        variant="outline-success"
        className="p-2 searchbox-buttom"
        style={{
          marginLeft: "2rem",
          borderColor: "#ffd700",
          color: "#ffd700",
        }}
      >
        Search
      </Button> */}
    </Form>
    
  );
};

export default SearchBox;
