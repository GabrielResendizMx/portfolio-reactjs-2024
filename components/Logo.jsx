import Link from "next/link"
import Image from "next/image"


const Logo = () => {
  return (
    <Link href='/'>
      <Image src='/logo_1.png' width={170} height={170} priority alt=""/>
    </Link>
  )
}

export default Logo
