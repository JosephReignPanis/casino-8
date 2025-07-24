import Image from "next/image";
import Link from "next/link";

const banner = [
  {
    bannerhref: "/mobilebanner/main_game1.jpg",
    href: "/categories/sports",
  },
  {
    bannerhref: "/mobilebanner/main_game2.jpg",
    href: "/categories/sports-live-kor",
  },
  {
    bannerhref: "/mobilebanner/main_game3.jpg",
    href: "/categories/sportsspecial",
  },
  {
    bannerhref: "/mobilebanner/main_game4.jpg",
    href: "/categories/inplay",
  },
  {
    bannerhref: "/mobilebanner/main_game5.jpg",
    href: "/categories/livecasino",
  },
  {
    bannerhref: "/mobilebanner/main_game6.jpg",
    href: "/categories/minigame",
  },
  {
    bannerhref: "/mobilebanner/main_game7.jpg",
    href: "/categories/bet365",
  },
  {
    bannerhref: "/mobilebanner/main_game8.jpg",
    href: "/categories/tokengame",
  },
  {
    bannerhref: "/mobilebanner/main_game9.jpg",
    href: "/categories/livecasino",
  },
  {
    bannerhref: "/mobilebanner/main_game10.jpg",
    href: "/categories/slot",
  },
];

export default function MiddleContent() {
  const notices = [
    {
      title:
        "이벤이벤 제목에 오신것을 환영합니다.이벤이벤 제목에 오신것을 환영합니다.이벤이벤 제목에 오신것을 환영합니다.",
      date: "2024-00-00",
    },
    {
      title:
        "이벤이벤 제목에 오신것을 환영합니다.이벤이벤 제목에 오신것을 환영합니다.이벤이벤 제목에 오신것을 환영합니다.",
      date: "2024-00-00",
    },
    {
      title:
        "이벤이벤 제목에 오신것을 환영합니다.이벤이벤 제목에 오신것을 환영합니다.이벤이벤 제목에 오신것을 환영합니다.",
      date: "2024-00-00",
    },
    {
      title:
        "이벤이벤 제목에 오신것을 환영합니다.이벤이벤 제목에 오신것을 환영합니다.이벤이벤 제목에 오신것을 환영합니다.",
      date: "2024-00-00",
    },
    {
      title:
        "이벤이벤 제목에 오신것을 환영합니다.이벤이벤 제목에 오신것을 환영합니다.이벤이벤 제목에 오신것을 환영합니다.",
      date: "2024-00-00",
    },
  ];

  const events = [
    {
      title:
        "이벤이벤 제목에 오신것을 환영합니다.이벤이벤 제목에 오신것을 환영합니다.이벤이벤 제목에 오신것을 환영합니다.",
      date: "2024-00-00",
    },
    {
      title:
        "이벤이벤 제목에 오신것을 환영합니다.이벤이벤 제목에 오신것을 환영합니다.이벤이벤 제목에 오신것을 환영합니다.",
      date: "2024-00-00",
    },
    {
      title:
        "이벤이벤 제목에 오신것을 환영합니다.이벤이벤 제목에 오신것을 환영합니다.이벤이벤 제목에 오신것을 환영합니다.",
      date: "2024-00-00",
    },
    {
      title:
        "이벤이벤 제목에 오신것을 환영합니다.이벤이벤 제목에 오신것을 환영합니다.이벤이벤 제목에 오신것을 환영합니다.",
      date: "2024-00-00",
    },
    {
      title:
        "이벤이벤 제목에 오신것을 환영합니다.이벤이벤 제목에 오신것을 환영합니다.이벤이벤 제목에 오신것을 환영합니다.",
      date: "2024-00-00",
    },
  ];
  interface CardListProps {
    data: { title: string; date: string }[];
    badgeColor: string;
  }

  const CardList: React.FC<CardListProps> = ({ data, badgeColor }) => (
    <div>
      {data.map((item, index) => (
        <div
          key={index}
          className="flex flex-row justify-between py-4 px-2 border-b border-zinc-600 hover:bg-zinc-800/50"
        >
          <div className="flex flex-row gap-2">
            <p className="truncate max-w-52 text-sm overflow-hidden whitespace-nowrap">
              {item.title}
            </p>
          </div>
          <div className="flex flex-row gap-2">
            <p className="truncate max-w-[100px] text-sm overflow-hidden whitespace-nowrap text-zinc-400">
              {item.date}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
  return (
    <>
      <div className="block lg:hidden">
        <Image
          src="/placeholder1.png"
          width={500}
          height={300}
          alt="placeholder"
          className="w-full"
        />
        <div className="grid grid-cols-2 gap-2 mt-2">
          {banner.map((item, i) => (
            <div key={i}>
              <Link href={item.href}>
                <Image
                  src={item.bannerhref}
                  width={120}
                  height={100}
                  alt="placeholder"
                  className="object-contain w-full"
                />{" "}
              </Link>
            </div>
          ))}
        </div>
        <div className="flex flex-row justify-between navgradient p-3 text-lg font-bold rounded-sm items-center mt-3">
          <p>공지사항</p>
          <Image
            src="/plus_icon.png"
            width={10}
            height={10}
            className="w-5 h-5 object-contain"
            alt="plus"
          />
        </div>
        <CardList data={notices} badgeColor="bg-zinc-800 text-[#b8862f]" />{" "}
        <div className="flex flex-row justify-between navgradient p-3 text-lg font-bold rounded-sm items-center mt-3">
          <p>이벤트</p>
          <Image
            src="/plus_icon.png"
            width={10}
            height={10}
            className="w-5 h-5 object-contain"
            alt="plus"
          />
        </div>
        <CardList data={events} badgeColor="bg-[#b8872b] text-black" />
      </div>

      <div className="col-span-3 hidden lg:block">
        <div className="grid grid-cols-2 gap-2">
          <div className="col-span-1">
            <Image
              src="/placeholder1.png"
              width={500}
              height={300}
              alt="placeholder"
              className="w-full"
            />
            <div className="flex flex-row justify-between navgradient p-3 text-lg font-bold rounded-sm items-center mt-3">
              <p>공지사항</p>
              <Image
                src="/plus_icon.png"
                width={10}
                height={10}
                className="w-5 h-5 object-contain"
                alt="plus"
              />
            </div>
            <CardList data={notices} badgeColor="bg-zinc-800 text-[#b8862f]" />
          </div>

          {/* Events Section */}
          <div className="col-span-1">
            <Image
              src="/placeholder2.png"
              width={500}
              height={300}
              alt="placeholder"
              className="w-full"
            />
            <div className="flex flex-row justify-between navgradient p-3 text-lg font-bold rounded-sm items-center mt-3">
              <p>이벤트</p>
              <Image
                src="/plus_icon.png"
                width={10}
                height={10}
                className="w-5 h-5 object-contain"
                alt="plus"
              />
            </div>
            <CardList data={events} badgeColor="bg-[#b8872b] text-black" />
          </div>
        </div>{" "}
      </div>
    </>
  );
}
