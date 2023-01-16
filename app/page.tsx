import supabase from "../utils/supabase";
import Image from "next/image";

function Month({ style, month }: { style: string; month: string }) {
  return (
    <div className={style + " p-0.5"}>
      <h1 className="font-bold text-lg font-serif text-white text-center">
        {month}
      </h1>
      <div style={{ height: "calc(100% - 28px)" }}>
        <div className="grid grid-cols-2 grid-rows-2 h-full">
          <div className="relative">
            <Image
              src="/pangolin.jpg"
              alt="Placeholder"
              fill={true}
              style={{ borderTopLeftRadius: "0.5rem" }}
            />
          </div>
          <div className="relative">
            <Image
              src="/fox.jpg"
              alt="Placeholder"
              fill={true}
              style={{ borderTopRightRadius: "0.5rem" }}
            />
          </div>
          <div className="relative">
            <Image
              src="/owl.jpg"
              alt="Placeholder"
              fill={true}
              style={{ borderBottomLeftRadius: "0.5rem" }}
            />
          </div>
          <div className="relative">
            <Image
              src="/camel.png"
              alt="Placeholder"
              fill={true}
              style={{ borderBottomRightRadius: "0.5rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default async function Home() {
  return (
    <div className="h-screen">
      <h1 className="text-3xl font-bold text-center">
        2023 52 Weeks Photography Challenge
      </h1>

      <div className="flex items-center justify-center">
        <div className="grid grid-rows-3 grid-cols-4 gap-y-10 justify-items-center w-1/2 place-items-center">
          <Month style="h-52 w-52 bg-purple-700" month="January" />
          <Month style="h-52 w-52 bg-blue-700" month="February" />
          <Month style="h-52 w-52 bg-green-700" month="March" />
          <Month style="h-52 w-52 bg-red-700" month="April" />
          <Month style="h-52 w-52 bg-purple-700" month="May" />
          <Month style="h-52 w-52 bg-blue-700" month="June" />
          <Month style="h-52 w-52 bg-green-700" month="July" />
          <Month style="h-52 w-52 bg-red-700" month="August" />
          <Month style="h-52 w-52 bg-purple-700" month="September" />
          <Month style="h-52 w-52 bg-blue-700" month="October" />
          <Month style="h-52 w-52 bg-green-700" month="November" />
          <Month style="h-52 w-52 bg-red-700" month="December" />
        </div>
      </div>
    </div>
  );
}
