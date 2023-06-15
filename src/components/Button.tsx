type Props = {
  type: "blink";
};

function Button({ type }: Props) {
  const clickWa = () => {
    window.open(
      "https://api.whatsapp.com/send?phone=6281218442481&text=Assalamu%27alaikum%20pak%2C%20saya%20mau%20daftar%20jadi%20member%20PT%20BEST%2C%20bagaimana%20caranya%3F"
    );
  };

  if (type === "blink") {
    return (
      <button
        className="
          bg-gradient-to-t
          from-orange-500
          to-yellow-500
          py-6
          rounded-full
          animate-pulse
          relative
          shadow-xl
          text-xl
          w-[100%]
        "
        onClick={clickWa}
      >
        <p
          className="
          text-red-800
          absolute
          top-[-10px]
          left-[0]
          right-[0]
          font-bold
        "
        >
          KLIK DISINI
        </p>
        <p
          className="
          font-bold
          bg-clip-text
          text-white
          "
        >
          DAFTAR SEKARANG
        </p>
      </button>
    );
  }
  return <button>Button</button>;
}

export default Button;
