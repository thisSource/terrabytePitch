import Image from "next/image"

function StillLogo(){
    return(
        <div className="content">
<Image
      src="/logo2.png"
      alt="logo"
      width={300}
      height={300}
    />
        </div>
    )
}

export default StillLogo