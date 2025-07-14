import Image from "next/image";

const Logo = () => {
  return (
    <Image
      priority
      src='/images/logo.svg'
      alt='logo'
      width={128}
      height={128}
      className="w-24 md:w-28 h-fit"
    />

  )
}
export default Logo;