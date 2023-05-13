import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div cla>
      Helloo<br />
      <Link href='/dashboard'>go to dashboard</Link><br />
      <Link href='/calculator'>go to calculator</Link>
    </div>
    
  )
}
