import Button from "../../reusable/buttons/Button";
import {
  ContactForm,
  ContactFormContainer,
  ContactFormField,
  Input,
  Label,
  MessageArea,
} from "./style";

const Form = () => {
  return (
    <ContactFormContainer>
      <ContactForm>
        <ContactFormField>
          <Label htmlFor='name'>Name</Label>
          <Input
            type='text'
            id='name'
            name='name'
            placeholder='Enter your name'
          />
        </ContactFormField>

        <ContactFormField>
          <Label htmlFor='email'>Email</Label>
          <Input
            type='email'
            id='email'
            name='email'
            placeholder='Enter your email'
          />
        </ContactFormField>

        <ContactFormField>
          <Label htmlFor='message'>Message</Label>

          <MessageArea placeholder='Enter Your Message' />
        </ContactFormField>

        <Button
          label='Submit'
          onClick={() => {}}

          style={{
            padding: "1.5rem 3rem",
            fontSize: "1.6rem",
          }}
        />
      </ContactForm>
    </ContactFormContainer>
  );
};

export default Form;
