import type { FormHTMLAttributes, FunctionComponent } from "react";
import Button from "~/components/button";
import { SelectField, TextareaField, TextField } from "~/components/fields";

type Props = FormHTMLAttributes<HTMLFormElement>;

const ContactForm: FunctionComponent<Props> = (props) => {
  return (
    <form
      {...props}
      action="#"
      className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2"
    >
      <TextField
        label="First name"
        name="first_name"
        type="text"
        autoComplete="given-name"
        required
      />
      <TextField
        label="Last name"
        name="last_name"
        type="text"
        autoComplete="family-name"
        required
      />
      <TextField
        className="col-span-full"
        label="Email address"
        name="email"
        type="email"
        autoComplete="email"
        required
      />

      <TextareaField
        className="col-span-full"
        label="Message"
        name="message"
        required
        rows={5}
      />

      <SelectField
        className="col-span-full"
        label="How did you hear about us?"
        name="referral_source"
      >
        <option>Other</option>
        <option>Search engine result</option>
        <option>Social media</option>
        <option>Email</option>
        <option>Word of mouth</option>
        <option>Event or trade show</option>
      </SelectField>
      <div className="col-span-full">
        <Button type="submit" variant="solid" color="blue" className="w-full">
          <span>Send</span>
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
