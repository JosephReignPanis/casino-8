export default function ButtonTable() {
  return (
    <>
      <div className="w-full bg-neutral-800 p-2 border-b border-b-zinc-900 rounded-sm">
        최근 베팅내역{" "}
      </div>{" "}
      <div className="w-full bg-neutral-800 p-2 rounded-sm my-1">
        {/* Table Headers */}
        <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-1 w-full">
          <button className="w-full hover:bg-zinc-700 p-2 border border-neutral-700 rounded-sm ">
            게임종류
          </button>
          <button className="w-full hover:bg-zinc-700 p-2 border border-neutral-700 rounded-sm ">
            회차
          </button>
          <button className="w-full hover:bg-zinc-700 p-2 border border-neutral-700 rounded-sm ">
            베팅시간
          </button>
          <button className="w-full hover:bg-zinc-700 p-2 border border-neutral-700 rounded-sm ">
            베팅내역
          </button>
          <button className="w-full hover:bg-zinc-700 p-2 border border-neutral-700 rounded-sm ">
            베팅금액
          </button>
          <button className="w-full hover:bg-zinc-700 p-2 border border-neutral-700 rounded-sm ">
            배당율
          </button>
          <button className="w-full hover:bg-zinc-700 p-2 border border-neutral-700 rounded-sm ">
            당첨금
          </button>
          <button className="w-full hover:bg-zinc-700 p-2 border border-neutral-700 rounded-sm ">
            적중여부
          </button>
          <button className="w-full hover:bg-zinc-700 p-2 border border-neutral-700 rounded-sm ">
            삭제
          </button>
        </div>
      </div>
    </>
  );
}
