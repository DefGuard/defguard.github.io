import "./style.scss";

import type { ChangeEvent } from "react";
import { useState } from "react";

import MessageBottom from "../../alert/MessageBottom/MessageBottom";
import { Button } from "../../buttons/Button/Button";

type BookDemoType = {
  first_name: string;
  last_name: string;
  email: string;
  website_url: string;
  tell_us_more: string;
};

interface BookDemoFormProps {
  submit_text?: string;
}

const discussionTopics = [
  { id: "legacy_vpn", label: "Migrating from OpenVPN / FortiGate / Cisco etc." },
  { id: "sso_integration", label: "SSO integration (Entra ID, Google, Okta)" },
  { id: "compliance", label: "How to set up MFA for WireGuard" },
  { id: "deployment", label: "Automated deployment (Intune, MDM)" },
  { id: "high_availability", label: "Secure By Design Architecture principles" },
  { id: "multi_cloud", label: "Multi-cloud / hybrid infrastructure" },
];

const BookDemoForm = ({ submit_text = "Submit" }: BookDemoFormProps) => {
  const [okMessage, setOkMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
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
    setValues({ ...values, [name]: value });
  };

  const handleTopicChange = (topicId: string, checked: boolean) => {
    if (checked) {
      setSelectedTopics([...selectedTopics, topicId]);
    } else {
      setSelectedTopics(selectedTopics.filter(t => t !== topicId));
    }
  };

  const onSubmit = () => {
    const data = new FormData();

    // Build topics string
    const selectedTopicLabels = discussionTopics
      .filter(t => selectedTopics.includes(t.id))
      .map(t => `• ${t.label}`)
      .join("\n");
    
    const topicsSection = selectedTopicLabels 
      ? `\n\nTopics to discuss:\n${selectedTopicLabels}` 
      : "";

    data.append("email", values.email);
    data.append("website_url", values.website_url);
    data.append("source", window.location.pathname);
    data.append(
      "tell_us_more",
      `${values.tell_us_more}${topicsSection}\n\nform_source:${window.location.pathname + window.location.search + window.location.hash}`,
    );
    data.append("company_name",values.first_name+" "+values.last_name);
    data.append("vat_id", "");
    data.append("country", "");
    data.append("street_address", "");
    data.append("town", "");
    data.append("postal_code", "");

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
          <label htmlFor="first_name">
            First name
            <input type="text" required name="first_name" onChange={handleInputChange} />
          </label>
          <label htmlFor="last_name">
            Last name
            <input type="text" required name="last_name" onChange={handleInputChange} />
          </label>
        </div>
        <div className="double-inputs">
          <label htmlFor="email">
            Email
            <input type="email" required name="email" onChange={handleInputChange} />
          </label>
          <label htmlFor="website_url">
            Company website URL
            <input type="text" required name="website_url" onChange={handleInputChange} />
          </label>
        </div>
        <div className="topics-section">
          <p className="topics-label">What would you like to discuss? <span className="optional">(optional)</span></p>
          <div className="topics-grid">
            {discussionTopics.map((topic) => (
              <label key={topic.id} className="topic-checkbox">
                <input
                  type="checkbox"
                  checked={selectedTopics.includes(topic.id)}
                  onChange={(e) => { handleTopicChange(topic.id, e.target.checked); }}
                />
                <span className="checkmark"></span>
                <span className="topic-label">{topic.label}</span>
              </label>
            ))}
          </div>
        </div>
        <label className="single-input" htmlFor="tell_us_more">
          Anything else you wish to tell us? <span className="optional">(optional)</span>
          <textarea 
            rows={5} 
            name="tell_us_more" 
            onChange={handleInputChange}
            placeholder="e.g., Current VPN solution, number of users, specific requirements..."
          ></textarea>
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
