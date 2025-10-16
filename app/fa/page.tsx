import VantaClouds from "../_components/VantaClouds";

function FaPage() {
  return (
    <>
      <VantaClouds />
      <div className="flex h-screen w-full items-center justify-center">
        <div className="z-10 text-center">
          <h1 className="text-5xl font-bold text-white drop-shadow-xl">
            Nomaan Rigi
          </h1>
          <p className="mt-4 text-lg text-white/80 drop-shadow-xl">
            Frontend Developer
          </p>
        </div>
      </div>
    </>
  );
}

export default FaPage;
