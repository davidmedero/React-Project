import React, { useEffect } from "react";
import axios from "axios";
import SerpApi from "google-search-results-nodejs";
function Forever21(props) {
  //   useEffect(() => {
  //     axios
  //       .get(
  //         "https://iron-cors-anywhere.herokuapp.com/http://catalog.bizrate.com/services/catalog/v1/"
  //       )
  //       .then((res) => {
  //         console.log(res.data);
  //       });
  //   }, []);

  return <div></div>;
}

export default Forever21;

const search = new SerpApi.GoogleSearch(
  "AIzaSyBibnOWEr72nhfg0dEPgv5Amv09pXcRk_M"
);
search.json(
  {
    q: "Coffee",
    location: "Austin, TX",
  },
  (result) => {
    console.log(result);
  }
);
