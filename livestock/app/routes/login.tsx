import { useState } from "react";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Login — S.K Livestock" },
    { name: "description", content: "Sign in to S.K Livestock management portal" },
  ];
}

const particles = Array.from({ length: 18 }, (_, i) => i);

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  return (
    <div className="login-page">
      {/* Animated background blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      {/* Floating particles */}
      {particles.map((i) => (
        <span key={i} className="particle" style={{ "--i": i } as React.CSSProperties} />
      ))}

      {/* Card */}
      <div className="login-card">

        {/* Brand */}
        <div className="login-brand">
          <div className="login-icon">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <clipPath id="sk-login-clip">
                  <circle cx="100" cy="100" r="99" />
                </clipPath>
              </defs>
              <circle cx="100" cy="100" r="100" fill="rgba(255,255,255,0.15)" />
              <rect x="101" y="40" width="13" height="120" fill="white" clipPath="url(#sk-login-clip)" />
              <line x1="108" y1="100" x2="210" y2="2" stroke="white" strokeWidth="14" strokeLinecap="butt" clipPath="url(#sk-login-clip)" />
              <line x1="108" y1="100" x2="196" y2="178" stroke="white" strokeWidth="14" strokeLinecap="butt" clipPath="url(#sk-login-clip)" />
              <rect x="-5" y="130" width="107" height="10" fill="white" clipPath="url(#sk-login-clip)" />
              <text x="4" y="122" fontSize="92" fontWeight="700" fill="white"
                fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
                clipPath="url(#sk-login-clip)">S</text>
            </svg>
          </div>
          <h1 className="login-title">S.K Livestock</h1>
          <p className="login-subtitle">Management Portal</p>
        </div>

        {/* Form */}
        <form className="login-form" onSubmit={(e) => e.preventDefault()}>

          <div className={`input-group ${focused === "email" ? "input-focused" : ""}`}>
            <label htmlFor="email">Email Address</label>
            <div className="input-wrapper">
              <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <input
                id="email"
                type="email"
                placeholder="admin@sklivestock.com"
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused(null)}
              />
            </div>
          </div>

          <div className={`input-group ${focused === "password" ? "input-focused" : ""}`}>
            <label htmlFor="password">Password</label>
            <div className="input-wrapper">
              <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                onFocus={() => setFocused("password")}
                onBlur={() => setFocused(null)}
              />
              <button
                type="button"
                className="eye-toggle"
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                    <line x1="1" y1="1" x2="23" y2="23" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div className="login-options">
            <label className="remember-me">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <a href="#" className="forgot-link">Forgot password?</a>
          </div>

          <button type="submit" className="login-btn">
            <span>Sign In</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </form>

        <p className="login-footer">
          &copy; {new Date().getFullYear()} S.K Livestock. All rights reserved.
        </p>
      </div>
    </div>
  );
}
