import React from "react";
import "./Sidebar.css";
import "./new.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NewsComponent from "../Api/NewsComponent";

function Sidebar(props) {
  return (
    <>
      <Router>
        <div id="wrapper">
          <div className="overlay"></div>

          {/* <!-- Sidebar --> */}
          <nav
            className="navbar navbar-inverse fixed-top"
            id="sidebar-wrapper"
            role="navigation"
          >
            <ul className="nav sidebar-nav">
              <div className="sidebar-header">
                <div className="sidebar-brand">
                  <Link to="/general">Daily News</Link>
                </div>
              </div>
              <li>
                <Link to="/"></Link>
              </li>
              <li>
                <Link to="/business">Business</Link>
              </li>
              <li>
                <Link to="/entertainment">Entertainment</Link>
              </li>
              <li>
                <Link to="/general">General</Link>
              </li>
              <li>
                <Link to="/health">Health</Link>
              </li>
              <li>
                <Link to="/science">Science</Link>
              </li>
              <li>
                <Link to="/sport">Sport</Link>
              </li>
              <li>
                <Link to="/technology">Technology</Link>
              </li>
            </ul>
          </nav>
          {/* <!-- /#sidebar-wrapper -->

                <!-- Page Content --> */}
          <div id="page-content-wrapper">
            <button
              type="button"
              className="hamburger animated fadeInLeft is-closed"
              data-toggle="offcanvas"
            >
              <span className="hamb-top"></span>
              <span className="hamb-middle"></span>
              <span className="hamb-bottom"></span>
            </button>
            <div className="container">
              <div className="row">
                <Switch>
                  <div className="col-lg-12 col-lg-offset-2">
                    <Route exact path="/">
                      <NewsComponent
                        pageSize={12}
                        country={"in"}
                        category={"general"}
                        key="general"
                      />
                    </Route>
                    <Route exact path="/business">
                      <NewsComponent
                        pageSize={12}
                        country={"in"}
                        category={"business"}
                        key="business"
                      />
                    </Route>
                    <Route exact path="/entertainment">
                      <NewsComponent
                        pageSize={12}
                        country={"in"}
                        category={"entertainment"}
                        key="entertainment"
                      />
                    </Route>
                    <Route exact path="/general">
                      <NewsComponent
                        pageSize={12}
                        country={"in"}
                        category={"general"}
                        key="general"
                      />
                    </Route>
                    <Route exact path="/health">
                      <NewsComponent
                        pageSize={12}
                        country={"in"}
                        category={"health"}
                        key="health"
                      />
                    </Route>
                    <Route exact path="/science">
                      <NewsComponent
                        pageSize={12}
                        country={"in"}
                        category={"science"}
                        key="science"
                      />
                    </Route>
                    <Route exact path="/sport">
                      <NewsComponent
                        pageSize={12}
                        country={"in"}
                        category={"sport"}
                        key="sport"
                      />
                    </Route>
                    <Route exact path="/technology">
                      <NewsComponent
                        pageSize={12}
                        country={"in"}
                        category={"technology"}
                        key="technology"
                      />
                    </Route>
                  </div>
                </Switch>
              </div>
            </div>
          </div>
          {/* <!-- /#page-content-wrapper --> */}
        </div>
        {/* <!-- /#wrapper --> */}
      </Router>
    </>
  );
}

export default Sidebar;
