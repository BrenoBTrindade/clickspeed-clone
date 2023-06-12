import Home from '@/templates/Home'
import { Analytics } from '@vercel/analytics/react';

export default function Index() {
  return (
    <>
      <Home/>
      <Analytics />
    </>
  )
}
