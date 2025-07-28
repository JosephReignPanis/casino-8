import Link from "next/link";
import Image from "next/image";
export default function RightContent() {
  return (
    <>
      <div className="">
        <div className="bg-zinc-900/90 rounded-sm">
          <div className="flex flex-row justify-between p-2 rounded-t-lg navgradient align-middle items-center  ">
            <div className="flex flex-row gap-2 align-middle items-center">
              <i className="fa-solid fa-user"></i>
              <p>건바리님</p>
              <p>level 1</p>
            </div>
            <i className="fa-solid fa-right-from-bracket"></i>
          </div>
          <div className="rounded-sm flex flex-col p-3 gap-2">
            <div className="flex flex-row justify-between ">
              <div className="flex flex-row items-center gap-2">
                <i className="fa-solid fa-won-sign fa-sm"></i>
                <p>바르셀로나</p>
              </div>
              <div
                className="flex flex-row items-cente
              
              
              r gap-2"
              >
                <p>0</p>
                <p>원</p>
                <p className="text-sm bg-amber-300 text-black px-3 rounded-sm">
                  원
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-between ">
              <div className="flex flex-row items-center gap-2">
                <i className="fa-brands fa-product-hunt"></i>
                <p> 포인트 </p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <p>0</p>
                <p>원</p>
                <p className="text-sm bg-amber-300 text-black px-3 rounded-sm">
                  원
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-between ">
              <div className="flex flex-row items-center gap-2">
                <i className="fa-solid fa-ticket-simple"></i>
                <p> 쿠폰 </p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <p>0</p>
                <p>원</p>
              </div>
            </div>
            <div className="flex flex-row justify-between ">
              <div className="flex flex-row items-center gap-2">
                <i className="fa-regular fa-envelope"></i>
                <p> 쪽지 </p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <p>0</p>
                <p>원</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-2">
              {" "}
              <a href="/navigation/charge">
                <button className="btn-gold-nav-gradient rounded-sm px-4 py-2 text-sm w-full sm:px-2">
                  충전
                </button>
              </a>
              <a href="/navigation/exchange" className="w-full sm:w-auto">
                <button className="btn-gold-nav-gradient rounded-sm px-4 py-2 text-sm w-full  sm:px-2 ">
                  환전
                </button>
              </a>
              <a href="/navigation/attendance" className="w-full sm:w-auto">
                <button className="btn-gold-nav-gradient rounded-sm px-2 py-2 text-sm w-full  sm:px-2">
                  출석체크
                </button>
              </a>
              <a href="/navigation/mypage" className="w-full sm:w-auto">
                <button className="btn-gold-nav-gradient rounded-sm px-2 py-2 text-sm w-full  sm:px-2">
                  프로필정보
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-zinc-900/90 p-3 gap-2 rounded-sm mt-2">
          <div className="flex flex-row justify-between border-b border-zinc-700">
            <p>배팅카트</p>
            <i className="fa-solid fa-trash-can"></i>
          </div>
          <div className="flex flex-row justify-between border-b border-zinc-700">
            <p>배팅폴더</p>
            <p className="text-yellow-400">0 개</p>
          </div>
          <div className="flex flex-row justify-between border-b border-zinc-700">
            <p>배팅금액</p>
            <p className="text-yellow-400">5.65</p>
          </div>
          <div className="grid grid-cols-3 gap-1">
            <button className="btn-silver-gradient p-2 rounded-sm flex-1">
              1,000
            </button>
            <button className="btn-silver-gradient p-2 rounded-sm  flex-1">
              10,000
            </button>
            <button className="btn-silver-gradient p-2 rounded-sm  flex-1">
              20,000
            </button>
            <button className="btn-silver-gradient p-2 rounded-sm flex-1">
              50,000
            </button>
            <button className="btn-silver-gradient p-2 rounded-sm  flex-1">
              100,000
            </button>
            <button className="btn-silver-gradient p-2 rounded-sm  flex-1">
              1,000,000
            </button>
          </div>
          <button className="flex btn-golden-gradient rounded-sm  justify-center">
            베팅하기
          </button>
          <div className="flex flex-row justify-between border-b border-zinc-700">
            <p>총배당율</p>
            <p className="text-yellow-400">0.00</p>
          </div>
          <div className="flex flex-row justify-between border-b border-zinc-700">
            <p>총배당율</p>
            <p className="text-yellow-400">0.00</p>
          </div>
        </div>
        {/* <div className="col-span-1">
          <div className="flex flex-col gap-2 fleaefqwfx-1">
            <div className="flex flex-row gap-2 justify-center p-2">
              <Image
                src={"/navtalk.png"}
                width={30}
                height={30}
                alt="webLogo"
              />
              <p className="text-2xl font-black bg-gradient-to-t from-yellow-700 to-yellow-500 bg-clip-text text-transparent">
                1세대 메이저 남대문!
              </p>
            </div>
            <div className="p-2 border border-yellow-800">
              <div className="flex flex-row mb-2">
                <button className="bg-[#313131] p-4">
                  <Image
                    src={"/icon_profile.png"}
                    width={20}
                    height={20}
                    alt="search button"
                  />
                </button>
                <input
                  type="text"
                  className="bg-[#313131] flex flex-1 font-bold"
                  id="searchbar"
                  placeholder="아이디를 입력해주세요!"
                />
              </div>
              <div className="flex flex-row mb-2">
                <button className="bg-[#313131] p-4">
                  <Image
                    src={"/icon_pass.png"}
                    width={20}
                    height={20}
                    alt="search button"
                  />
                </button>
                <input
                  type="text"
                  className="bg-[#313131] flex flex-1 font-bold"
                  id="searchbar"
                  placeholder="비밀번호를 입력해주세요!"
                />
              </div>
              <button className="btn-gold-bg w-full p-2 rounded-md text-lg font-extrabold mb-2">
                로그인
              </button>
              <button className="btn-silver-gradient w-full p-2 rounded-md text-lg font-extrabold">
                회원가입
              </button>
            </div>
            <Image
              src={"/banner-side-1.png"}
              width={400}
              height={150}
              alt="banner"
            />
            <Image
              src={"/banner-side-2.png"}
              width={400}
              height={150}
              alt="banner"
            />
            <Image
              src={"/banner-side-3.png"}
              width={400}
              height={150}
              alt="banner"
            />
          </div>
        </div> */}
      </div>
    </>
  );
}
