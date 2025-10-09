import "./style.scss";

import type { ChangeEvent } from "react";
import { useState } from "react";

import MessageBottom from "../../alert/MessageBottom/MessageBottom";
import { Button } from "../../buttons/Button/Button";

type BookDemoType = {
  company_name: string;
  email: string;
  vat_id: string;
  country: string;
  street_address: string;
  town: string;
  postal_code: string;
  tell_us_more: string;
};

interface BookDemoFormProps {
  submit_text?: string;
}

const BookDemoForm = ({ submit_text = "Submit" }: BookDemoFormProps) => {
  const [okMessage, setOkMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [values, setValues] = useState<BookDemoType>({
    company_name: "",
    email: "",
    vat_id: "",
    country: "",
    street_address: "",
    town: "",
    postal_code: "",
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
    data.append(
      "tell_us_more",
      `${values.tell_us_more} \n\nform_source:${window.location.pathname + window.location.search + window.location.hash}`,
    );

    fetch("https://pkgs.defguard.net/api/customer/signup", {
      mode: "no-cors",
      method: "POST",
      body: data,
    })
      .then(() => {
        setOkMessage(true);
      })
      .catch(() => {
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
        <div className="double-inputs">
          <label htmlFor="company_name">
            Company name
            <input type="text" required name="company_name" onChange={handleInputChange} />
          </label>
          <label htmlFor="email">
            Email
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
        <MessageBottom message="Something went wrong" handleButton={handleAlert} />
      )}
    </>
  );
};

export default BookDemoForm;
