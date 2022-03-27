import React, { useState, useEffect } from "react";

const Quotes = ({ quote1, counts }) => {
  return (
    <div className="Quotes">
    <h3><i><q>{quote1[counts].quote}</q></i></h3>
    <br/>
    <h4>Author : {quote1[counts].author}</h4>

    </div>
  )
}
export default Quotes
