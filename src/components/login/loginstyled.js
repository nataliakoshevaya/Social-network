import styled from 'styled-components';
import {  Formik, Form, Field } from 'formik';

function FilteredPropsInputField({ className, valid, error, ...props }) {
    return <Field className={className} {...props} />;
}
  
const FormProps = ({ className, valid, error, ...props }) => {
    return <Form className={className} {...props} />;
}

export const Input = styled(FilteredPropsInputField)`
  height:  ${props => props.type === 'checkbox' ? '' : '40px'};
  width:  ${props => props.type === 'checkbox' ? '' : '300px'};
  border: 1px solid #ccc;
  background-color: #fff;
  margin-bottom: 10px;
  padding: 5px;
`;


export const StyledLoginForm = styled(FormProps)`
    width: 300px;
    display: flex;
    flex-direction: column;
`;

export const CheckBoxWrapper = styled.div`
    flex-direction: row;
`