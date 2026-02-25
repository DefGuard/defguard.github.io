import "../BookDemoForm/style.scss";

import type { ChangeEvent } from "react";
import { useState } from "react";

import MessageBottom from "../../alert/MessageBottom/MessageBottom";
import { Button } from "../../buttons/Button/Button";

type DealRegistrationFormValues = {
  partner_registration_email: string;
  company_name: string;
  email: string;
  vat_id: string;
  country: string;
  street_address: string;
  town: string;
  postal_code: string;
  license_tier: string;
  billed_to: string;
  business_type: string;
  tell_us_more: string;
};

interface DealRegistrationFormProps {
  submit_text?: string;
}

const DealRegistrationForm = ({ submit_text = "Submit" }: DealRegistrationFormProps) => {
  const [okMessage, setOkMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [errorText, setErrorText] = useState("Something went wrong");
  const [values, setValues] = useState<DealRegistrationFormValues>({
    partner_registration_email: "",
    company_name: "",
    email: "",
    vat_id: "",
    country: "",
    street_address: "",
    town: "",
    postal_code: "",
    license_tier: "",
    billed_to: "",
    business_type: "",
    tell_us_more: "",
  });

  const handleAlert = () => {
    setOkMessage(false);
    setErrorMessage(false);
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = () => {
    const data = new FormData();

    data.append("company_name", values.company_name);
    data.append("email", values.email);
    data.append("vat_id", values.vat_id);
    data.append("country", values.country);
    data.append("street_address", values.street_address);
    data.append("town", values.town);
    data.append("postal_code", values.postal_code);
    data.append("source",window.location.pathname);
    data.append("partner_registration_email",values.partner_registration_email);
    data.append("license_tier",values.license_tier);
    data.append("billed_to",values.billed_to);
    data.append("business_type",values.business_type);
    data.append(
      "tell_us_more",
      `${values.tell_us_more} \n\nform_source:${window.location.pathname + window.location.search + window.location.hash}`,
    );


    fetch("https://pkgs.defguard.net/api/customer/signup", {
      method: "POST",
      body: data,
    })
      .then(async (response) => {
        if (!response.ok) {
          const text = await response.text();
          try {
            const json = JSON.parse(text);
            if (typeof json === "string") {
              setErrorText(json);
            } else {
              setErrorText(json.message || json.detail || text);
            }
          } catch {
            setErrorText(text || "Something went wrong");
          }
          setErrorMessage(true);
          return;
        }
        setOkMessage(true);
      })
      .catch(() => {
        setErrorText("Something went wrong");
        setErrorMessage(true);
      });
  };

  return (
    <>
      <form
        id="book-form"
        className="book"
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <div className="single-input">
          <label htmlFor="partner_registration_email">
            Partner registration email
            <input type="email" required name="partner_registration_email" onChange={handleInputChange} />
          </label>
        </div>
        <div className="double-inputs">
          <label htmlFor="company_name">
            Customer company name
            <input type="text" required name="company_name" onChange={handleInputChange} />
          </label>
          <label htmlFor="email">
            Customer email
            <input type="email" required name="email" onChange={handleInputChange} />
          </label>
        </div>
        <div className="double-inputs">
          <label htmlFor="vat_id">
            Company VAT ID or registration number
            <input type="text" required name="vat_id" onChange={handleInputChange} />
          </label>
          <label htmlFor="country">
            Country
            <input type="text" required name="country" onChange={handleInputChange} />
          </label>
        </div>
        <div className="triple-inputs">
          <label htmlFor="street_address">
            Street address
            <input type="text" required name="street_address" onChange={handleInputChange} />
          </label>
          <label htmlFor="town">
            Town
            <input type="text" required name="town" onChange={handleInputChange} />
          </label>
          <label htmlFor="postal_code">
            Postal code
            <input type="text" required name="postal_code" onChange={handleInputChange} />
          </label>
        </div>
        <div className="double-inputs">
          <label htmlFor="license_tier">
            Selected plan
            <select name="license_tier" required value={values.license_tier} onChange={handleInputChange}>
              <option value="" disabled>Select a plan</option>
              <option value="Team">Team</option>
              <option value="Business">Business</option>
            </select>
          </label>
          <label htmlFor="billed_to">
            Billed to
            <select name="billed_to" required value={values.billed_to} onChange={handleInputChange}>
              <option value="" disabled>Select billing party</option>
              <option value="Partner">Partner</option>
              <option value="Customer">Customer</option>
            </select>
          </label>
        </div>
        <div className="single-input">
          <label htmlFor="business_type">
            Customer business type
            <select name="business_type" required value={values.business_type} onChange={handleInputChange}>
              <option value="" disabled>Select business type</option>
              <option value="Business">Business</option>
              <option value="Educational">Educational</option>
              <option value="Non-profit">Non-profit</option>
            </select>
          </label>
        </div>
        <label className="single-input" htmlFor="tell_us_more">
          Anything else you wish to tell us?
          <textarea rows={7} name="tell_us_more" onChange={handleInputChange}></textarea>
        </label>

        <div className="button">
          <Button text={submit_text} type="submit" />
        </div>
      </form>
      {okMessage && (
        <MessageBottom message="Form sent successfully" handleButton={handleAlert} />
      )}
      {errorMessage && (
        <MessageBottom message={errorText} handleButton={handleAlert} />
      )}
    </>
  );
};

export default DealRegistrationForm;
