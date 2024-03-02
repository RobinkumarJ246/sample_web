import ReCAPTCHA from "react-google-recaptcha";
import HCaptcha from '@hcaptcha/react-hcaptcha';

function LoginPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("The server is currently down");
  };

  const onChange = (value) => {
    console.log("Captcha value:", value);
  };

  return (
    <div>
      <div className="LoginPage">
        <header style={{ backgroundColor: "grey" }}>
          <h2 style={{ textAlign: "center" }}>Login As Administator</h2>
        </header>
      </div>
      <section style={{ backgroundColor: "lightcoral", textAlign: "center" }}>
        <h3 style={{ textAlign: "center" }}>Enter your credentials</h3>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "10px" }}>
            <label style={{ marginRight: "10px" }}>Name: </label>
            <input type="text" />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label style={{ marginRight: "10px" }}>Password: </label>
            <input type="password" />
          </div>
          <div style={{ marginBottom: "10px", justifyContent: "center", display: "flex" }}>
          <HCaptcha
      sitekey="39ebba0d-3a3d-4781-926c-63819b6c65b2"
    />
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </section>
    </div>
  );
}

export default LoginPage;