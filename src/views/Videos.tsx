function Videos() {
  const renderVideos = [
    {
      title: "PROFILE PT BEST",
      src: "https://www.youtube.com/embed/BwRbPp6LS9Y",
    },
    {
      title: "PUPUK ECO FARMING - SOLUSI CERDAS BERTANI",
      src: "https://www.youtube.com/embed/QS7LCJaBBBc",
    },
  ];

  return (
    <>
      {renderVideos.map((item, idx) => (
        <div
          className="
            flex
            flex-col
            items-center
            mt-4
            mb-12
          "
          key={idx}
        >
          <h2
            className="
              text-xl
              sm:text-2xl
              font-bold
              mb-4
              text-red-500
              text-center
            "
          >
            {item.title}
          </h2>
          <iframe
            height="400"
            className="w-[90%] sm:w-[75%]"
            src={item.src}
          ></iframe>
        </div>
      ))}
    </>
  );
}

export default Videos;
