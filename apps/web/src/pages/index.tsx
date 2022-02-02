import Head from "next/head";

export default function Web() {
  return (
    <div>
      <div className="bg-gray-800 w-screen h-screen flex flex-col text-gray-100 p-4">
        <h1 className="text-4xl font-bold text-center">
          Yerba: An Electron Monorepo Demo
        </h1>
        <div>
          <div className="text-2xl font-semibold">Using...</div>
          <ul>
            <li>Electron</li>
            <li>Vite</li>
            <li>TurboRepo</li>
            <li>Next.js</li>
            <li>Typescript</li>
            <li>Tailwind Monorepo</li>
          </ul>
        </div>
        <div className="p-2" />
        <div>...yeah this kinda sucked to figure out</div>
        <div className="p-4" />
        <div className="text-2xl italic">Wanna see some typesafe data?</div>
        <div>
          <span className="font-bold">{"Yerba version: "}</span>
          {window.yerba.version}
        </div>
        <div>
          <span className="font-bold">
            {"Hashed Yerba version using node's builtin crypto: "}
          </span>
          {window.nodeCrypto.sha256sum(window.yerba.version.toString())}
        </div>
        <div className="absolute bottom-0 right-0 p-4 w-full flex justify-center">
          Quickly hacked together by Theo
        </div>
      </div>
    </div>
  );
}
