import "./style.scss";

import ta1 from "./assets/ta-1.jpg?url";
import tl1 from "./assets/tl-1.png?url";

const Component = () => {
  return (
    <div className="testimonials-content">
      <p>Testimonials</p>
      <div className="track">
        <div className="testimonial">
          <div className="left">
            <div className="image">
              <img src={ta1} alt="person image" />
            </div>
            <div className="logo">
              <img src={tl1} alt="logo image" />
            </div>
          </div>
          <div className="right">
            <div className="info">
              <p className="name">Zdeněk Váňa</p>
              <p className="description">Cloud & DevOps Team Lead at Prusa Research</p>
            </div>
            <div className="content pre-styled">
              <p>
                It&apos;s a unique modern VPN solution, not another extension based on
                Wireguard with just web interface and MFA for login to the web without
                connection cover. You can run all microservices components written in Rust
                yourself without any requirements for communication with other services
                running by someone else and you have more options on how to run it, e.g.
                control plane on Kubernetes and gateways on other VMs. But it&apos;s not
                only VPN solution, it provides you also IDP like e.g. Keycloak so you can
                decrease the number of tools for hardening. And all of this is open-source
                with a community driven development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component;
