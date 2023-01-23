import supabase from "../utils/supabase";
import Image from "next/image";

async function MonthPreview({ month, blur }: { month: string; blur: boolean }) {
  const blurClass = blur ? "blur-xl" : "";
  const { data } = await supabase.from("fiftytwoweeks").select();

  return (
    <div className="w-full px-4 pb-4 md:w-1/2 lg:w-1/4">
      <h2 className="title-font text-lg font-medium text-gray-900 text-center">
        {month}
      </h2>
      <a className={`relative block h-48 overflow-hidden rounded ${blurClass}`}>
        <div className="grid grid-cols-2 grid-rows-2 h-full">
          <div className="relative">
            <Image
              src={data[0].imgSrc}
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
  return (
    <section className="min-h-screen">
      <div className="container mx-auto px-5 py-10">
        <div className="-m-4 flex flex-wrap">
          <MonthPreview month="January" blur={false} />
          <MonthPreview month="February" blur={true} />
          <MonthPreview month="March" blur={true} />
          <MonthPreview month="April" blur={true} />
          <MonthPreview month="May" blur={true} />
          <MonthPreview month="June" blur={true} />
          <MonthPreview month="July" blur={true} />
          <MonthPreview month="August" blur={true} />
          <MonthPreview month="September" blur={true} />
          <MonthPreview month="October" blur={true} />
          <MonthPreview month="November" blur={true} />
          <MonthPreview month="December" blur={true} />
        </div>
      </div>
    </section>
  );
}
