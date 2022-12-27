import Dashboard from "../components/dashboard";

export default function App() {
  return (
    <>
      <header>
        <h1
          className={
            "text-center h-[150px] text-2xl font-default tracking-widest font-bold text-very-dark-cyan"
          }
        >
          SPLI
          <br />
          TTER
        </h1>
      </header>
      <Dashboard />
    </>
  );
}
