import { useNavigate } from "react-router-dom";
import HeaderCss from "../module/Header.module.css";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div id={HeaderCss.header}>
      <h1 className={HeaderCss.title} onClick={() => navigate("/")}>
        DuckguStock
      </h1>

      <Navbar bg="light" expand="lg" id="stocknav">
        <Container fluid id="stockContainer">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavDropdown title="미국 주식" id="navbarScrollingDropdown">
              <NavDropdown.Item onClick={() => navigate("/appl")}>
                애플 / APPL
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/tsla")}>
                테슬라 / TSLA
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/googl")}>
                알파벳 A / GOOGL
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/nvda")}>
                엔비디아 / NVDA
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/msft")}>
                마이크로소프트 / MSFT
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/jnj")}>
                존슨앤존슨 / JNJ
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/o")}>
                리얼티인컴 / O
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="국내 주식" id="navbarScrollingDropdown">
              <NavDropdown.Item onClick={() => navigate("/samsung")}>
                삼성전자
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/naver")}>
                NAVER
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
