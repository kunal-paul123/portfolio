import "./Footer.css";

function Footer() {
  return (
    <div>
      <div className="footer">
        <p>
          &copy; &nbsp;{new Date().getFullYear()} Kunal Paul. <br />
          All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
