```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause an error if the user navigates directly to /about
  // without first going through the Home page
  const { data } = useSWR('/api/data');
  if (!data) return <p>Loading...</p>;
  return (
    <div>
      <h1>About Us</h1>
      <p>{data.message}</p>
    </div>
  );
}
```
```javascript
// pages/api/data.js

export default function handler(req, res) {
  // Simulate a slow API call
  setTimeout(() => {
    res.status(200).json({ message: 'This is some data from the API' });
  }, 2000);
}
```