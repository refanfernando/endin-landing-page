function Header() {
  return (
    <header
      style={{
        backgroundImage: "url(img/mount.jpg)",
      }}
      className="
        bg-fixed
        bg-bottom
        bg-no-repeat
        bg-cover
        h-[500px]
        flex
        justify-center
        items-center
        flex-col
      "
    >
      <div
        className="
          text-lg
          bg-red-500
          bg-clip-text
          sm:text-2xl
          text-center
          px-10
          text-white
        "
      >
        <img
          src="img/logo-best.png"
          alt="logo-best"
          className="
            logo-best
            w-18
            h-28
            my-4
            mx-auto
          "
        />
        <p
          className="
            text-logo
            font-bold
            tracking-wide
            mt-2
          "
        >
          BEST CORPORATION SYARIAH
        </p>
      </div>
    </header>
  );
}

export default Header;
