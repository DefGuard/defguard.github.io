import { useState } from "preact/hooks";
import { Button } from "../../buttons/Button/Button";
import "./style.scss";
import type { ChangeEvent } from "preact/compat";
import MessageBottom from "../../alert/MessageBottom/MessageBottom";

type BookDemoType = {
  first_name: string;
  last_name: string;
  email: string;
  website_url: string;
  tell_us_more: string;
};

const BookDemoForm = () => {
  const [okMessage, setOkMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [values, setValues] = useState<BookDemoType>({
    first_name: "",
    last_name: "",
    email: "",
    website_url: "",
    tell_us_more: "",
  });

  const handleAlert = () => {
    setOkMessage(false);
    setErrorMessage(false);
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target as HTMLInputElement | HTMLTextAreaElement;
    console.log(name, value);
    setValues({ ...values, [name]: value });
  };

  const onSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(values);

    const data = new FormData();
    data.append("first_name", values.first_name);
    data.append("last_name", values.last_name);
    data.append("email", values.email);
    data.append("website_url", values.website_url);
    data.append("tell_us_more", values.tell_us_more);

    fetch("https://update-service-dev.teonite.net/api/customer/signup", {
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
      <form class="book" autocomplete="off" onSubmit={onSubmit}>
        <h3>Book a Demo</h3>
        <div class="double-inputs">
          <label for="first_name">
            First name
            <input type="text" required name="first_name" onChange={handleInputChange} />
          </label>
          <label for="last_name">
            Last name
            <input type="text" required name="last_name" onChange={handleInputChange} />
          </label>
        </div>
        <div class="double-inputs">
          <label for="email">
            Email
            <input type="email" required name="email" onChange={handleInputChange} />
          </label>
          <label for="website_url">
            Company website URL
            <input type="text" required name="website_url" onChange={handleInputChange} />
          </label>
        </div>
        <label class="single-input" for="tell_us_more">
          Anything else you wish to tell us?
          <textarea rows={7} name="tell_us_more" onChange={handleInputChange}></textarea>
        </label>
        <div class="button">
          <Button text="Submit" type="submit" />
        </div>
      </form>
      {okMessage && (
        <MessageBottom message="Send form with success!" handleButton={handleAlert} />
      )}
      {errorMessage && (
        <MessageBottom message="Something went wrong" handleButton={handleAlert} />
      )}
    </>
  );
};

export default BookDemoForm;
