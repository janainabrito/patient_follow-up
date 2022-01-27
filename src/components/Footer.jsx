import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-1 mt-4">
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid className="font-small">
          &copy; {new Date().getFullYear()} Copyright: <a href="/"> Patient Follow-Up </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;