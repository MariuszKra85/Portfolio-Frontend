import styled from 'styled-components';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client/react';
import TitleSection from './TitleSection';
import useForm from '../lib/useForm';

const SEND_MESSAGE = gql`
  mutation ADD_MESSAGE($name: String, $content: String, $email: String) {
    createMessage(data: { name: $name, content: $content, email: $email }) {
      name
      content
      email
    }
  }
`;

const Wrapper = styled.div`
  background: var(--grey);
  padding: 1rem 0 2rem 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 1rem 0 2rem 2rem;

  input,
  textarea,
  button {
    background: none;
    border: none;
    border-bottom: 2px solid rgba(200, 200, 200, 0.3);
    margin-bottom: 1rem;
    transition: all 0.5s ease-in-out;
    :focus {
      border-bottom: 3px solid rgba(239, 202, 37, 0.4);
    }
    color: var(--textWhite);
  }
`;
const StyledDatails = styled.div`
  font-size: 1.4rem;
  line-height: 1.7;
  p {
    font-size: 1.3rem;
  }
`;
const ContentWrapper = styled.div`
  @media only screen and (min-width: 640px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export default function MobileContact() {
  const { inputs, handleChange, clearForm } = useForm();
  const [createMessage, { data, error, loading }] = useMutation(SEND_MESSAGE, {
    variables: inputs,
  });

  async function handleSubmit(e) {
    e.preventDefault();
    await createMessage();
    e.target.submit();
    clearForm();
  }

  return (
    <Wrapper id="contact">
      <TitleSection title="Contact" number="03" />
      <ContentWrapper>
        <Form
          target="_blank"
          action="https://formsubmit.co/10360fc0e54f1db203b3f500830b7b6b"
          method="POST"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
            value={inputs.name}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="email"
            id="email"
            value={inputs.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
          />

          <textarea
            placeholder="Your Message"
            name="content"
            rows="10"
            id="content"
            value={inputs.content}
            onChange={handleChange}
            required
          />

          <button type="submit">Send Message</button>
        </Form>
        <StyledDatails>
          <h3>Contact Details:</h3>
          <h4>Mariusz Krawczyk</h4>
          <p>Email: przyslony@gmail.com</p>
        </StyledDatails>
      </ContentWrapper>
    </Wrapper>
  );
}
