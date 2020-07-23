import React from "react";
import styled from "styled-components";

import GlobalStyles from "./GlobalStyles";
import Typeahead from "./Typehead";

const App = ({ data }) => {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Typeahead
          suggestions={data}
          handleSelect={(suggestion) => {
            window.alert(suggestion);
          }}
        />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 250px;
`;

export default App;
