import logo from "../../images/nota_logo.png";

const Footer = () => {
  return (
    <div className="bg-dark text-light py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <img className="py-4" src={logo} alt="" />
            <p className="py-4 px-3">
              Pellentesque mattis mauris ac tortor volutpat, eu fermentum sapien
              euismod. In id tempus metus. Donec eu volutpat nibh, in maximus
              ligula. Pellentesque mattis mauris ac tortor volutpat, eu
              fermentum sapien euismod. In id tempus metus. Donec eu volutpat
              nibh, in maximus ligula. In id tempus metus.Pellentesque mattis
              mauris ac tortor volutpat,
            </p>
          </div>
          <div className="col-4">
            <h3 className="py-4 text-warning">Contact Us</h3>
            <p className="py-1 px-3">
              address: 04360, NewYork, 33 Matehouse str., 12/4 803-33-5644-99
              admin@doremischool.net
            </p>

            <p className="py-1 px-3">Call: 803-33-5644-99</p>

            <div className="py-1 px-3">Email: admin@doremischool.net</div>
          </div>
          <div className="col-4">
            <h3 className="py-4 text-warning">Instagram</h3>
            <p className="py-1 px-3">
              Donec eu volutpat nibh, in maximus ligula.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
