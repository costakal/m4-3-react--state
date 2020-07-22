import React from "react";
import styled from "styled-components";

const Typeahead = ({ suggestions, handleSelect }) => {
  const [value, setValue] = React.useState();
  const clearValue = () => {
    setValue("");
  };

  return (
    <Wrapper>
      <input
        type="text"
        value={value}
        onChange={(ev) => {
          setValue(ev.target.value);
          // function that sets another hook (list of book titles that includes search term which is === value ***.includes())
        }}
        onKeyDown={(ev) => {
          if (ev.key === "Enter") handleSelect(value);
        }}
      />
      <button onClick={clearValue}>Clear</button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  input {
    font-size: 30px;
    padding: 3px 10px 10px;
    border-radius: 15px;
    border: solid black 2px;
  }
  button {
    background-color: #4caf50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    font-size: 16px;
    margin: 4px 2px;
    border-radius: 15px;
  }
`;

export default Typeahead;
