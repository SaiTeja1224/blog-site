"use client";

function ScrollableLink({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <a
      href={`#${id}`}
      onClick={(event) => handleScroll(event)}
      className="text-xl p-2 flex items-center gap-2 hover-effect"
    >
      {children}
    </a>
  );
}

export default ScrollableLink;
