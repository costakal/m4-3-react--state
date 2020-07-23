import React from "react";
import styled from "styled-components";

const Typeahead = ({ suggestions, handleSelect }) => {
  const [value, setValue] = React.useState("");

  const clearValue = () => {
    setValue("");
  };

  const getMapppedSuggestions = () => {
    if (value !== "" && value.length >= 2) {
      const mappedSuggestions = suggestions.map((suggestion) => {
        if (suggestion.title.toLowerCase().includes(value.toLowerCase())) {
          return (
            <SugItem
              key={suggestion.id}
              onClick={() => handleSelect(suggestion.title)}
            >
              {suggestion.title}
            </SugItem>
          );
        }
      });
      return mappedSuggestions;
    }
  };

  return (
    <Wrapper>
      <input
        type="text"
        value={value || ""}
        onChange={(ev) => {
          setValue(ev.target.value);
        }}
        onKeyDown={(ev) => {
          if (ev.key === "Enter") handleSelect(value);
        }}
      />
      <button onClick={clearValue}>Clear</button>
      <SugList>{getMapppedSuggestions()}</SugList>
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

const SugList = styled.ul`
  box-shadow: 1px 10px 26px -8px rgba(0, 0, 0, 0.75);
  border-radius: 7px;
  width: 385px;
`;

const SugItem = styled.li`
  margin: 10px;
  padding: 10px;
  display: flex;

  &:hover {
    background-color: #4caf50;
    color: white;
    border-radius: 7px;
  }
`;

export default Typeahead;
