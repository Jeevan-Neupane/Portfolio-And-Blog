import Titles from "../../reusable/titles/Titles";
import Form from "./Form";
import { ContactContainer, ContactWrapper } from "./style";

const Contact = () => {
  return (
    <ContactWrapper id='contact'>
      <ContactContainer>
        <Titles
          title='Contact'
          subtitle='Feel free to Contact me by submitting the form below and I will get back to you as soon as possible '
        />

        <Form />
      </ContactContainer>
    </ContactWrapper>
  );
};

export default Contact;
