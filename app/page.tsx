import supabase from "../utils/supabase";
import Image from "next/image";

function MonthPreview({
  month,
  blur,
  url,
}: {
  month: string;
  blur: boolean;
  url: string;
}) {
  const blurClass = blur ? "blur-xl" : "";

  return (
    <div className="w-full px-4 pb-4 md:w-1/2 lg:w-1/4">
      <h2 className="title-font text-lg font-medium text-gray-900 text-center">
        {month}
      </h2>
      <a className={`relative block h-48 overflow-hidden rounded ${blurClass}`}>
        <div className="grid grid-cols-2 grid-rows-2 h-full">
          <div className="relative">
            <Image
              src={url}
              alt="Placeholder"
              fill={true}
              className="object-cover"
            />
          </div>
          <div className="relative">
            <Image
              src="/flower.jpg"
              alt="Placeholder"
              fill={true}
              className="object-cover"
            />
          </div>
          <div className="relative">
            <Image
              src="/fox.jpg"
              alt="Placeholder"
              fill={true}
              className="object-cover"
            />
          </div>
          <div className="relative">
            <Image
              src="/owl.jpg"
              alt="Placeholder"
              fill={true}
              className="object-cover"
            />
          </div>
        </div>
      </a>
    </div>
  );
}

export default async function Home() {
  const { data } = await supabase.from("fiftytwoweeks").select();
  let url = data ? data[0].imgSrc : "";
  return (
    <section className="min-h-screen">
      <div className="container mx-auto px-5 py-10">
        <div className="-m-4 flex flex-wrap">
          <MonthPreview month="January" blur={false} url={url} />
          <MonthPreview month="February" blur={true} url="" />
          <MonthPreview month="March" blur={true} url="" />
          <MonthPreview month="April" blur={true} url="" />
          <MonthPreview month="May" blur={true} url="" />
          <MonthPreview month="June" blur={true} url="" />
          <MonthPreview month="July" blur={true} url="" />
          <MonthPreview month="August" blur={true} url="" />
          <MonthPreview month="September" blur={true} url="" />
          <MonthPreview month="October" blur={true} url="" />
          <MonthPreview month="November" blur={true} url="" />
          <MonthPreview month="December" blur={true} url="" />
        </div>
      </div>
    </section>
  );
}
