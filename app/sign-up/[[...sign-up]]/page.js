//authentication

import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="signup-container" >
      <div className="header">
        <h1 className="glowing-text">Welcome to Your Academic AI Partner</h1>
        <p>Unlock a smarter way to rate and explore professors with AI.</p>
      </div>

      <div className="signup-content">
        {/* Left: Background Image or Illustration */}
        <div className="image-section">
          <img src="/robot.jpg" alt="Robot" />
        </div>

        {/* Right: Sign-Un Form */}
        <div className="signup-wrapper">
          <SignUp />
        </div>
      </div>
    </div>
  );
}
