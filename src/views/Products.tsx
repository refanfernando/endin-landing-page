import Accordion from "../components/Accordion";
import Button from "../components/Button";
import data from "./data.json";

type Items = {
  key: number;
  title: string;
  value: JSX.Element;
};

const items: Array<Items> = [];

data.forEach((x, index) => {
  items.push({
    key: index,
    title: x.title,
    value: (
      <div>
        <div className="flex justify-center">
          <img src={x.imgSource} alt={x.title} className="w-[50%]" />
        </div>
        <p className="text-justify">{x.paragraf}</p>
        {x.benefit && (
          <>
            <h2 className="mt-4 font-semibold">Manfaat :</h2>
            <ul>
              {x.benefit.map((item, index) => (
                <li className="flex" key={index}>
                  <span className="inline-block mr-3">{index + 1}.</span>
                  <span className="inline-block">{item}</span>
                </li>
              ))}
            </ul>
          </>
        )}
        <h2 className="mt-4 font-semibold">Petunjuk Penggunaan :</h2>
        <ul>
          {x.instruction.map((item, index) => (
            <li className="flex" key={index}>
              <span className="inline-block mr-3">{index + 1}.</span>
              <span className="inline-block">{item}</span>
            </li>
          ))}
        </ul>
        {x.contentsInPackaging && (
          <h2 className="mt-4 font-semibold">
            Isi Dalam Kemasan : {x.contentsInPackaging}
          </h2>
        )}
        <p className="italic text-xs mt-8 text-right">
          {x.skKementan && `IZIN EDAR SK KEMENTAN : ${x.skKementan}`}
          <br />
          {x.sertificat && `SERTIFIKAT PERTANIAN ORGANIK:  ${x.sertificat}`}
        </p>
      </div>
    ),
  });
});

function Products() {
  return (
    <div className="flex flex-col items-center">
      <section>
        <h2
          className="
            text-xl
            sm:text-2xl
            font-bold
            text-red-500
          "
        >
          PRODUK PT. BEST
        </h2>
        <p className="text-gray-400">
          Ketika anda mendaftar anda akan mendapatkan paket produk berikut ini,
          Pilih salah satu:
        </p>
      </section>
      <section className="w-[95%] sm:w-[80%] mt-8">
        <Accordion items={items} />
      </section>
      <section className="mt-8">
        <h2 className="text-red-500 text-xl font-bold">
          Mau lihat produk lebih banyak? klik tombol di bawah ini
        </h2>
        <div className="my-8">
          <Button type="blink" />
        </div>
        <h2 className="text-red-500 text-xl font-bold">
          Bukan HOAX Atau Iming-Iming Belaka...!
        </h2>
      </section>
    </div>
  );
}

export default Products;
