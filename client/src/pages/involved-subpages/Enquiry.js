import React from 'react';
import { useForm } from 'react-hook-form';

import "./involved.css";

const styles = {
  form: {
    // background: '#0e101c',
    maxWidth: '500px',
    margin: '0 auto',
  },
  button: {
    display: 'block',
    appearance: 'none',
    marginTop: '40px',
    marginBottom: '20px',
    padding: '10px 20px',
    border: '1px solid #333',
    borderRadius: '4px',
    background: '#ffccd5',
    color: '#800f2f',
    fontSize: '16px',
    fontWeight: 100,
  },
  p: {
    color: '#343a40',
  },
}

export default function Enquiry() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  return (
    <div>
        <form style={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <h2>General Enquiry Form</h2>
            <hr></hr>
            <select {...register("Title", { required: true })}>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
                <option value="Dr">Dr</option>
            </select>
            <hr></hr>
            <input type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
            <hr></hr>
            <input type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} />
            <hr></hr>
            <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i})} />
            <hr></hr>
            <textarea placeholder="Write your message here" {...register("Message", {required: true})} />
            <hr></hr>
            <p style={styles.p}>Thank you for contacting us, a team member will get back to you in next 3-5 days.</p>
            <input style={styles.button} type="submit" />
        </form>
    </div>
  );
}