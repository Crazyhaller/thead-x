import Link from 'next/link'
import Image from 'next/image'

function Navbar() {
  return (
    <nav className="topbar">
      <Link href="/" className="flex items-center gap-4">
        <Image src="/assets/logo.svg" alt="logo" width={28} height={28} />
        <p className="text-heading3-bold text-light-1 max-xs:hidden">
          Thread-X
        </p>
      </Link>
    </nav>
  )
}

export default Navbar
