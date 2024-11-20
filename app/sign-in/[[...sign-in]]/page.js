//authentication

import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="signin-container">
      <div className="header">
        <h1 className="glowing-text">Welcome to Your Academic AI Partner</h1>
        <p>Unlock a smarter way to rate and explore professors with AI.</p>
      </div>

      <div className="signin-content">
        {/* Left: Background Image or Illustration */}
        <div className="image-section">
          <img src="/robot.jpg" alt="Robot" />
        </div>

        {/* Right: Sign-In Form */}
        <div className="signin-wrapper">
          <SignIn />
        </div>
      </div>
    </div>
  );
}


