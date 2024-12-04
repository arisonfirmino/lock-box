import Title from "./title";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen w-full flex-col items-center gap-10 px-5 py-10 md:px-0">
      <Title />
      <div className="w-full rounded-lg bg-background-secondary md:max-w-md">
        {children}
      </div>
    </main>
  );
};

export default Container;
