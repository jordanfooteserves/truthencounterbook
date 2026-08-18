'use client';

import { useState } from 'react';
import { KIT_FORM_ID } from '../../lib/links';

export default function SignupForm() {
  const [email, setEmail] = useState('');
  const [first, setFirst] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | done | error

  async function submit(e) {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(
        `https://app.kit.com/forms/${KIT_FORM_ID}/subscriptions`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email_address: email,
            fields: { first_name: first },
          }),
        }
      );
      if (!res.ok) throw new Error('subscribe failed');
      setStatus('done');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'done') {
    return (
      <p className="signup-thanks">
        Almost there. Check your inbox and confirm your email, and we&rsquo;ll
        keep you posted.
      </p>
    );
  }

  return (
    <form className="signup" onSubmit={submit}>
      <input
        type="text"
        placeholder="First name"
        value={first}
        onChange={(e) => setFirst(e.target.value)}
        aria-label="First name"
      />
      <input
        type="email"
        required
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        aria-label="Email address"
      />
      <button className="btn btn-red" disabled={status === 'sending'}>
        {status === 'sending' ? 'Signing you up…' : 'Keep me posted'}
      </button>
      {status === 'error' && (
        <p className="signup-error">
          Something went wrong. You can also email us at
          info@truthencounterbook.com and we&rsquo;ll add you.
        </p>
      )}
    </form>
  );
}
