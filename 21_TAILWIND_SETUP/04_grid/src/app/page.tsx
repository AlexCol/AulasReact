import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto h-screen">
      <div className="grid grid-cols-3 bg-red-50 p-1">
        <div className="bg-red-200">1</div>
        <div className="bg-red-300">2</div>
        <div className="bg-red-400">3</div>
        <div className="bg-red-500">4</div>
      </div>

      <div className="grid grid-cols-2 bg-blue-50 p-1">
        <div className="bg-blue-200">1</div>
        <div className="bg-blue-300">2</div>
        <div className="bg-blue-400">3</div>
        <div className="bg-blue-500">4</div>
      </div>

      <div className="grid grid-cols-3 bg-blue-50 p-1">
        <div className="bg-blue-200">1</div>
        <div className="bg-red-200">2</div>
        <div className="bg-blue-300">3</div>
        <div className="bg-red-300">4</div>
        <div className="bg-blue-400">5</div>
        <div className="bg-red-400">6</div>
        <div className="bg-blue-500">7</div>
        <div className="bg-red-500">8</div>
        <div className="bg-blue-600">9</div>
      </div>

      <div className="grid grid-cols-6 bg-blue-50 p-1">
        <div className="col-span-1">
          <ul>
            <li>Home</li>
            <li>Produtos</li>
            <li>Contato</li>
            <li>Blog</li>
          </ul>
        </div>

        <div className="col-span-5 bg-red-100">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis officiis, consequatur odio commodi ullam amet ea! Fugiat architecto non cumque labore ea culpa, quibusdam vitae fugit. Nostrum suscipit ex voluptatum.
            Quis laborum sapiente nulla temporibus nam dolor doloremque quae iure cumque molestiae sint dignissimos eveniet natus sunt, tenetur ex sit fuga, ipsa atque id, soluta quisquam facilis! Facilis, adipisci voluptatibus!</p>
        </div>
      </div>

      <div className="grid grid-cols-4 m-2">
        <div className="col-span-4 bg-red-900">
          <p>Barra de navegação.</p>
        </div>
        <div className="col-span-1 bg-red-600">
          <p>Barra esquerda.</p>
        </div>
        <div className="col-span-2 bg-red-300">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur minus sapiente exercitationem voluptatibus nobis possimus, dolorem minima tempora odio aspernatur et expedita est hic, perspiciatis mollitia, doloribus optio cupiditate esse.
            Laborum sed, in laboriosam reiciendis natus harum unde eos labore quo. Mollitia eligendi eius pariatur minus unde qui aspernatur, quisquam voluptas maiores, rem officia, libero ut iste. Error, nisi obcaecati.</p>
        </div>
        <div className="col-span-1 bg-red-600">
          <p>Barra direita.</p>
        </div>
        <div className="col-span-4 bg-red-900">
          <p>Rodapé</p>
        </div>
      </div>

      <div className="grid grid-rows-4 grid-flow-col bg-blue-50 p-1">
        <div className="bg-blue-200">1</div>
        <div className="bg-red-200">2</div>
        <div className="bg-blue-300">3</div>
        <div className="bg-red-300">4</div>
        <div className="bg-blue-400">5</div>
        <div className="bg-red-400">6</div>
        <div className="bg-blue-500">7</div>
        <div className="bg-red-500">8</div>
        <div className="bg-blue-600">9</div>
      </div>

      <div className="grid grid-cols-3 m-4 gap-1">
        <div className="bg-purple-400">1</div>
        <div className="bg-purple-600">2</div>
        <div className="bg-purple-400">3</div>
        <div className="bg-purple-600">4</div>
        <div className="bg-purple-400">5</div>
        <div className="bg-purple-600">6</div>
        <div className="bg-purple-400">7</div>
        <div className="bg-purple-600">8</div>
        <div className="bg-purple-400">9</div>
      </div>

      <div className="grid grid-rows-2 grid-flow-col gap-6">
        <div className="bg-green-400">1</div>
        <div className="bg-green-600">2</div>
        <div className="bg-green-400">3</div>
        <div className="bg-green-600">4</div>
        <div className="bg-green-400">5</div>
      </div>
    </div>
  );
}
