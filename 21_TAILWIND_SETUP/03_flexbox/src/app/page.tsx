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

      <div className="flex bg-red-300 flex-wrap">
        <div className="bg-red-400 p-6">1</div>
        <div className="bg-red-500 p-6">2</div>
        <div className="bg-red-600 p-6">3</div>
        <div className="bg-red-700 p-6">4</div>
        <div className="bg-red-800 p-6">5</div>
        <div className="bg-red-900 p-6">6</div>
      </div>

      <div className="flex bg-green-300 flex-wrap">
        <div className="flex-1 bg-green-400 p-6">1</div>
        <div className="flex-1 bg-green-500 p-6">2</div>
        <div className="bg-green-600 p-6">3</div>
        <div className="bg-green-700 p-6">4</div>
      </div>

      <div className="flex bg-purple-300 flex-wrap">
        <div className="bg-purple-400 p-6 order-last">1</div>
        <div className="bg-purple-500 p-6 order-4">2</div>
        <div className="bg-purple-600 p-6 order-5">3</div>
        <div className="bg-purple-700 p-6 order-2">4</div>
        <div className="bg-purple-800 p-6 order-3">5</div>
        <div className="bg-purple-900 p-6 order-first md:order-last">6</div>
      </div>

      <div className="container flex">
        <div className="flex-1 bg-blue-300 p-6 order-1 lg:order-3">1</div>
        <div className="flex-1 bg-blue-600 p-6 order-2">2</div>
        <div className="flex-1 bg-blue-900 p-6 order-3 lg:order-1">3</div>
      </div>

      <p className="m-20"></p>
    </>
  );
}
