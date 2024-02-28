const banner = ({ children }: { children: React.ReactNode; }) => {
  return (
    <div className="banner">
      <div className="logo">
        <img src="src/assets/NectarNook.svg" alt="Logo of NectarNook" />
      </div>
      <div>
        {children}
      </div>
    </div>
  );
};

export default banner;