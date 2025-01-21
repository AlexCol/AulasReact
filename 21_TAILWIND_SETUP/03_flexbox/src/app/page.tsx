import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-row bg-red-300">
        <div className="bg-green-300 p-6 m-2">1</div>
        <div className="bg-green-600 p-6 m-2">2</div>
        <div className="bg-green-900 p-6 m-2">3</div>
      </div>

      <div className="flex flex-col bg-purple-300">
        <div className="bg-blue-300 p-6 m-2">1</div>
        <div className="bg-blue-600 p-6 m-2">2</div>
        <div className="bg-blue-900 p-6 m-2">3</div>
      </div>

      <div className="flex flex-row-reverse bg-yellow-300">
        <div className="bg-gray-300 p-6 m-2">1</div>
        <div className="bg-gray-600 p-6 m-2">2</div>
        <div className="bg-gray-900 p-6 m-2">3</div>
      </div>

      <div className="flex flex-col-reverse bg-pink-300">
        <div className="bg-teal-300 p-6 m-2">1</div>
        <div className="bg-teal-600 p-6 m-2">2</div>
        <div className="bg-teal-900 p-6 m-2">3</div>
      </div>

      <div className="flex flex-col bg-gray-300">
        <div className="bg-blue-600 p-6 m-2">1</div>
        <div className="bg-red-600 p-6 m-2">2</div>
        <div className="bg-green-600 p-6 m-2">3</div>
        <div className="bg-teal-600 p-6 m-2">4</div>
        <div className="bg-purple-600 p-6 m-2">5</div>
        <div className="bg-orange-600 p-6 m-2">6</div>

      </div>

      <p className="m-20"></p>
    </>
  );
}
