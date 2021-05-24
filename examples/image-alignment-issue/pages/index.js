import Image from "next/image";

export default function IndexPage() {
  return (
    <div>
      <div>
        <Image
          width="100"
          height="40"
          src="/v1/makalu/wego.png"
          alt="logo"
          priority
        />
      </div>

      <div style={{ paddingTop: "1000px" }}></div>

      <div>
        This image has empty space on top of it.
        <Image width="100" height="40" src="/v1/makalu/wego.png" alt="logo" />
      </div>
    </div>
  );
}
