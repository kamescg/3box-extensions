import { useState } from "react";

export default () => {
  const [isSubmit, setIsSubmit] = useState()
  const onSubmit = (values) => {
    var url = 'https://dv3rxjpbdf.execute-api.us-east-1.amazonaws.com/prod/emailUpdates';
    window.fetch(url, {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "email": values.email,
        "name": values.name,
        "organization": values.organization,
        "listType": 'coalition'
      })
    }).then(res => {
      if (res.json) res.json().then(msg => {
        setIsSubmit(true)
      });
    }).catch(err => {
      console.log(err);
    });
  }

  return (
    <A.Form callback={onSubmit}>
      <A.Field
        disabled={isSubmit}
        name="name"
        label='Name'
        placeholder="Name"
      />
      <A.Field
        disabled={isSubmit}
        name="email"
        label='Email'
        placeholder="Email"
      />
      <A.Field
        disabled={isSubmit}
        name="organization"
        label='Organization'
        placeholder="Organization"
      />
      <A.Button type="submit" lg disabled={isSubmit} fullWidth width={1} variant="green">
        {
          isSubmit
            ? 'Submission Complete'
            : 'Register to Join Coalition'
        }
      </A.Button>
    </A.Form>
  )
}