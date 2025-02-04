# Next.js Hydration Mismatch with useSWR
This repository demonstrates a common hydration mismatch error in Next.js applications that use `useSWR` to fetch data. The error occurs when navigating directly to a page that uses `useSWR` before the component has fully mounted, leading to a discrepancy between the client-side and server-side rendered content.

## Bug Description
The application consists of two pages: Home and About. The Home page has a link to the About page.  The About page uses `useSWR` to fetch data from an API. If the user navigates directly to `/about`, the `useSWR` hook will not have fetched the data yet, causing a hydration mismatch error.

## How to Reproduce
1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate directly to `/about` in your browser. You should see a hydration mismatch error.
5. Navigate to `/` (the Home page) first, then navigate to `/about`. The error will not occur in this scenario.

## Solution
The solution is to add a loading state to handle the case where the data is not yet available from `useSWR`. Once the data is available, update the component. See the `bugSolution.js` file.