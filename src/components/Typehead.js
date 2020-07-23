import React from "react";
import styled from "styled-components";

const Typeahead = ({ suggestions, handleSelect }) => {
  const [value, setValue] = React.useState("");
  let [selectedSuggestionIndex, setSelectedSuggestionIndex] = React.useState(0);

  const clearValue = () => {
    setValue("");
    setSelectedSuggestionIndex(0);
  };

  let filteredSuggestions = suggestions.filter((suggestion) =>
    suggestion.title.toLowerCase().includes(value.toLowerCase())
  );

  const getMapppedSuggestions = () => {
    if (value !== "" && value.length >= 2) {
      const mappedSuggestions = filteredSuggestions.map((suggestion, index) => {
        let bookTitle = suggestion.title;
        let firstHalf = bookTitle.slice(
          0,
          bookTitle.toLowerCase().indexOf(value) + value.length
        );
        let secondHalf = bookTitle.slice(firstHalf.length, bookTitle.length);

        let isSelected = false;
        if (selectedSuggestionIndex === index) {
          isSelected = true;
        }
        return (
          <SugItem
            key={suggestion.id}
            style={{
              background: isSelected
                ? "hsla(50deg, 100%, 80%, 0.25"
                : "transparent",
            }}
            onMouseEnter={() =>
              setSelectedSuggestionIndex(
                () => (selectedSuggestionIndex = index)
              )
            }
            onClick={() => handleSelect(suggestion.title)}
          >
            <span>
              {firstHalf}
              <Prediction>{secondHalf}</Prediction>
            </span>
            <span> in </span>
            <CategoryId>{suggestion.categoryId}</CategoryId>
          </SugItem>
        );
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
          switch (ev.key) {
            case "Enter": {
              handleSelect(filteredSuggestions[selectedSuggestionIndex].title);
              return;
            }
            case "ArrowUp": {
              if (selectedSuggestionIndex > 0) {
                setSelectedSuggestionIndex(selectedSuggestionIndex - 1);
              }
              break;
            }
            case "ArrowDown": {
              if (selectedSuggestionIndex < filteredSuggestions.length - 1) {
                setSelectedSuggestionIndex(selectedSuggestionIndex + 1);
              }
              break;
            }
            default:
          }
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

  /* &:hover {
    background-color: #4caf50;
    color: white;
    border-radius: 7px;
    span {
      color: white;
    }
  } */
`;

const CategoryId = styled.span`
  padding: 5px 0px;
  color: purple;
  font-style: italic;
`;

const Prediction = styled.span`
  font-weight: bold;
`;

export default Typeahead;
