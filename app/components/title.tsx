import Image from "next/image";

const Title = () => {
  return (
    <div className="flex items-center gap-2.5">
      <Image
        src="/logo.png"
        alt="Lock Box logo"
        height={210}
        width={210}
        className="w-8"
      />
      <h1 className="text-2xl font-bold text-primary">Lock Box</h1>
    </div>
  );
};

export default Title;
