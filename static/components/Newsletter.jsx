export default function Newsletter() {
  return (
    <>
      <div className="NewsletterContainer">
        <h1>Sign Up To Our Newsletter</h1>
        <p>
          Sign up for our email updates and keep up to date with Renewable
          World's projects and fundraising activitites.
        </p>
        <p>
          We will keep your details safe and you can unsubscribe at any time.
          Please read our privacy policy for more details.
        </p>

        <div className="contactform">
            <input type="text" placeholder="Firstname" />
            <input type="text" placeholder="Lastname" />
            <input type="text" placeholder="Email address" />
            <button className="sitebutton">Subscribe</button>
        </div>
      </div>
    </>
  );
}
