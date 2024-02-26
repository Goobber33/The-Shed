const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main
      style={{
        backgroundImage: `linear-gradient(
                to bottom,
                rgba(20, 20, 20, 1) 20%,
                rgba(255, 255, 255, 1) 400%
            )`,
      }}
    >
      <div>{children}</div>
    </main>
  );
};

export default MainLayout;
