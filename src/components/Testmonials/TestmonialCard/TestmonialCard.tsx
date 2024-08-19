import type { ComponentChildren } from "preact";
import './style.scss';

interface TestmonialProps {
    name: string;
    about: string;
    profile: string;
    logo: string;
    children: ComponentChildren;
    context: string;
    id: number;
}

export const TestmonialCard = ({ name, about, profile, logo, children, id, context }: TestmonialProps) => {

    return (
        <div id="testmonial-card">
            <div class="testmonial-image">
                <img src={`../../../../public/images/testmonial/` + profile + `.png`} style="max-width: 150px; max-height: 150px;"/>
                <img src={`../../../../public/images/companies/` + logo + `.png`} style="max-width: 134px; max-height: 25px"/>
            </div>
            <div class="testmonial-text">
                <div class="testmonial-title">
                    <h2>{name}</h2>
                    <p>{about}</p>
                </div>
                <div class="testmonial-description">
                    {children}
                </div>
            </div>
        </div>
    );
};