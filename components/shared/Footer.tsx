import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-5">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href='/'>
          <Image
            src="/assets/images/1111.png"
            alt="logo"
            width={128}
            height={38}
          />
        </Link>
        <p>eVenTO 2024. All Right Reserved. Student Project Purpose.</p>
      </div>
    </footer>
  )
}

export default Footer
