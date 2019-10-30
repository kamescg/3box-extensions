import { useState } from "react";

export default props => {
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
    <A.Box card textCenter boxShadow={1} p={4} {...props.styled}>
      <A.Heading lg heavy>
        Subscribe to One Million Developers (1MD)
      </A.Heading>
      <A.Paragraph>
        Want to track the ecosystem's progress towards<br />
        the goal of 1 million Ethereum developers?
      </A.Paragraph>
      <A.Paragraph>
        <strong>Sign Up for Regular Updates</strong>
      </A.Paragraph>
      <A.Form callback={onSubmit}>
        <A.Field
          disabled={isSubmit}
          name="email"
          placeholder="Email"
        />
        <A.Button type="submit" disabled={isSubmit} lg fullWidth width={1} variant="green">
          {
            isSubmit
              ? 'Submission Complete'
              : 'Register'
          }
        </A.Button>
      </A.Form>
    </A.Box>
  )
}
