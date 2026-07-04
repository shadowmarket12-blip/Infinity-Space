export default function MainLayout({ children }) {
  return (
    <main
      className="pt-[70px]
        sm:pt-[75px]
        lg:pt-[100px]"
    >
      {children}
    </main>
  );
}
