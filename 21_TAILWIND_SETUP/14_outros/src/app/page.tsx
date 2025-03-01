import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      {/* ring */}
      <div>
        <div className="border-4 border-red-500 p-4">Borda</div>
        <div className="ring-4 ring-blue-500 p-4">Anel</div>
        <div className="ring-4 ring-pink-500 ring-inset p-4">Anel Interno</div>
      </div>
    </div>
  );
}
