import type { ComponentChildren } from "preact";
import "./style.scss";
interface TestmonialProps {
  name: string;
  about: string;
  profile: string;
  logo: string;
  children: ComponentChildren;
}

export const TestmonialCard = ({
  name,
  about,
  profile,
  logo,
  children,
}: TestmonialProps) => {
  return (
    <div class="swiper-slide">
      <div class="card">
        <div className="image">
          <img src={profile} alt={name} />
          <img src={logo} alt={logo} />
        </div>
        <div className="text">
          <div className="text-wrapper">
            <div className="title">
              <h2>{name}</h2>
              <p>{about}</p>
            </div>
            <hr />
            <div class="description">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
