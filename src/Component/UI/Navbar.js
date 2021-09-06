// import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar(props) {
  // const [SearchText, setSearchText] = useState("");
  // const [Newdata, setNewdata] = useState([]);

  // const Searchdata = (event) => {
  //   const Text = event.target.value;
  //   setSearchText(Text);
  //   console.log(SearchText);
  // };

  // const getdata = async () => {
  //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=58ec8551b61944a38709dca942807e27&page=${props.page}&pageSize=${props.pageSize}`;
  //   let res = await fetch(url);
  //   let response = await res.json();
  //   setNewdata(response.articles);
  // };

  // useEffect(() => {
  //   getdata();
  // }, [SearchText]);
  return (
    <div className="container navbarc">
      <nav className="navbar  navbar-expand-lg navbar-light bg-light rounded-pill p-2">
        <div className="container-fluid">
          <div className="brand">
            <a className="navbar-brand text-danger fs-1 " href="#">
              Daily News
            </a>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link "
                  href="#//"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder={props.placeholder}
                aria-label="Search"
                // value={SearchText}
                // onChange={Searchdata}
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      {/* {Newdata.filter((val) => {
        if (SearchText === "") {
          return val;
        } else if (val.title.toLowerCase().includes(SearchText.toLowerCase())) {
          return val;
        }
      }).map((data) => {
        <div className="container">
          <div className="row">
            <h1>{data.author}</h1>;
          </div>
        </div>;
      })} */}
    </div>
  );
}

export default Navbar;
