```javascript
// pages/about.js
import useSWR from 'swr';

export default function About() {
  const { data, error } = useSWR('/api/data');

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      <h1>About Us</h1>
      <p>{data.message}</p>
    </div>
  );
}
```