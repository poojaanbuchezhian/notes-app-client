# notes-app-client

SETTING UP A REACT APP

We have created a single page app using React.js using the Create React App project
to set everything up. It is officially supported by the React team and conveniently
packages all the dependencies for a React.js project. React Router is used to handle
routes.
To allow our React app to talk to the AWS resources that we created, we’ll be using a
library called AWS Amplify. AWS Amplify provides a few simple modules (Auth, API,
and Storage) to help us easily connect to our backend.

BUILDING A REACT APP

A series of pages are created in order to build our notes app.

❖ Login : a page where the users of our app can login with their credentials.

❖ Sign-up : When we sign the user up, AWS Cognito sends them a confirmation
code via email. We also need to authenticate the new user once they’ve
confirmed their account.

  a. The user types in their email, password, and confirms their password.

  b. We sign them up with Amazon Cognito using the AWS Amplify library and
get a user object in return.

  c. We then render a form to accept the confirmation code that AWS Cognito
has emailed to them.

  d. We confirm the sign up by sending the confirmation code to AWS Cognito.
  
  e. We authenticate the newly created user.
  
  f. Finally, we update the app state with the session.
  
❖ Create note : page for the creation of a note. Form that’ll take content and a file
as an attachment.

❖ List all notes : a page where we can see a list of all the notes a user has created.

❖ Display note : a page that displays a note and lets the user edit it.

❖ Settings : to allow users to pay for our service.

  a. Users put in their credit card info and the number of notes they want to
store.

  b. We call Stripe on the frontend to generate a token for the credit card.
  
  c. We then call our billing API with the token and the number of notes.
  
  d. Our billing API calculates the amount and bills the card.
  
Once page creation is done , we have added two components to secure the pages i.e. a
page with the note should not load if a user is not logged in.

  1. A route called the AuthenticatedRoute, that checks if the user is
authenticated before routing.

  2. And a component called the UnauthenticatedRoute, that ensures the user
is not authenticated.

DEPLOYING A REACT APP TO AWS

Basic setup of React app as a static website on AWS.We made use of S3 to host our
assets and CloudFront to serve it.

To be able to host our note taking app, we need to upload the assets that are going to
be served out statically on S3. A bucket is configured to host the assets in it as a static
website and is automatically assigned a publicly accessible URL.

  1. Create a bucket
  
  2. Deploy to S3
  
  3. Serve it out globally through CloudFront ie we need to create an AWS
CloudFront Distribution.
