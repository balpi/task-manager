import Header from "../components/Header";

export default function NotFound() {
  return (
    <div className=" container">
      <Header />

      <div className="flex flex-col justify-center items-center m-7 gap-4 dark:bg-gray-900">
        <h1 className=" justify-center text-4xl text-amber-800 mb-4 ">
          NOT FOUND
        </h1>
        <h2 className="mb-4">The Page, You are looking for, is not exist.</h2>
        <p className="mb-4">
          Please try another page. If you think there is an error let me know
          please.
        </p>
      </div>
    </div>
  );
}
