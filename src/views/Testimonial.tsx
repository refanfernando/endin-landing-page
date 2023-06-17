import Button from "../components/Button";

const youtubeUrl = [
  "https://www.youtube.com/embed/XHmuhNpmkxs?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=0&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Flandpage.my.id&amp;widgetid=5",
  "https://www.youtube.com/embed/sYRwBBLE4Q8?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Flandpage.my.id&widgetid=7",
  "https://www.youtube.com/embed/K-ZPIDuBERQ?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Flandpage.my.id&widgetid=9",
  "https://www.youtube.com/embed/UQmHrgKfYRc?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Flandpage.my.id&widgetid=11",
];

const targetMarket = [
  "Mantan Tukang Bakso",
  "Mantan Tukang Siomay",
  "Kalangan Ustadz/Kyai",
  "TNI / POLRI",
  "Network Marketer",
  "PNS / ASN",
  "Ibu Rumah Tangga",
  "Mantan Kuli Bangunan Dll..",
];

const benefit = [
  "Mendapatkan 14 Box Produk Senilai 3,5 Juta (Untung 900rb)",
  "Bonus Flipchart Presentasi",
  "Potensi Income 1,2 jt/Hari",
  "Potensi Reward Motor Cash 20jt",
  "Potensi Reward Mobil Cash 150jt",
  "Potensi Reward Mobil Cash 500jt",
  "Potensi Reward Rumah 1Milyar",
];

const clickWa = () => {
  window.open(
    "https://api.whatsapp.com/send?phone=6281218442481&text=Assalamu%27alaikum%20pak%2C%20saya%20mau%20daftar%20jadi%20member%20PT%20BEST%2C%20bagaimana%20caranya%3F"
  );
};

function Testimonial() {
  return (
    <div>
      <section className="mt-4 bg-gray-100 p-4 shadow-sm flex flex-col items-center">
        <h1 className="text-xl sm:text-2xl mb-4 font-semibold">
          Lihat Testimoni Kesuksesan Dari Member PT. BEST Di Bawah Ini
        </h1>
        {youtubeUrl.map((url, index) => (
          <iframe
            key={index}
            height="360"
            className="w-[100%] sm:w-[50%] mb-8"
            src={url}
          ></iframe>
        ))}
      </section>
      <section>
        <h1 className="text-xl sm:text-2xl font-bold text-red-500">
          Dan masih banyak lagi para peraih Mocash yang lainnya
          <br />
          dari berbagai kalangan, seperti:
        </h1>
        <ul className="text-left ml-10 mt-8">
          {targetMarket.map((t, index) => (
            <li key={index} className="mb-4">
              <span className="inline-block mr-3">
                <div
                  className="
                    bg-green-500 
                    rounded-full
                    w-5
                    h-5
                    flex
                    items-center
                    justify-center
                    text-white
                  "
                >
                  <span>✔︎</span>
                </div>
              </span>
              <span className="text-gray-600">{t}</span>
            </li>
          ))}
        </ul>
      </section>
      <section className="flex justify-center">
        <div className="w-[90%] sm:w-[50%]">
          <h2 className="text-red-500 font-bold text-xl my-8">ARTINYA APA?</h2>
          <p className="mb-8">
            Artinya, bisnis ini bisa di jalankan oleh semua orang, dari latar
            belakang apapun mempunyai potensi yang sama yaitu bisa sukses
            bersama di Best Corp asalkan benar-benar konsisten dalam
            menjalankannya. Walaupun dari berbagai latar belakang yang
            berbeda-beda, tapi mampu untuk membuktikan kebersamaan dan memiliki
            visi misi sama mulianya yaitu : MEMBAHAGIAKAN KELUARGA TERCINTA
            DENGAN MEMBERIKAN HAL TERBAIK DAN HADIAH ISTIMEWA CASH TANPA NYICIL
            DAN NO RIBA.
          </p>
          <Button type="blink" />
        </div>
      </section>
      <section className="my-8 flex justify-center">
        <div>
          <h2 className="text-red-500 font-bold text-xl">
            JADI, TUNGGU APA LAGI ? DAFTAR SEKARANG JUGA, HANYA DENGAN MODAL!!!
          </h2>
          <div
            className="
              bg-gray-200
              rounded-md
              shadow-lg
              p-8
              border-[1px]
              w-[90%]
              sm:w-[80%]
              md:w-[60%]
              mx-auto
              mt-8
            "
          >
            <div className="bg-red-600 py-4 text-white shadow-md">
              <p className="font-semibold text-xl">Rp. 2.600.000</p>
            </div>
            <p className="my-8">Anda akan mendapatkan</p>
            <ul className="text-left mt-8">
              {benefit.map((t, index) => (
                <li key={index} className="mb-4 flex">
                  <span className="inline-block mr-3 my-auto">
                    <div
                      className="
                        bg-blue-300
                        rounded-full
                        w-5
                        h-5
                        flex
                        items-center
                        justify-center
                        text-white
                      "
                    >
                      <span>✔︎</span>
                    </div>
                  </span>
                  <span className="text-gray-600">{t}</span>
                </li>
              ))}
            </ul>
            <p className="font-semibold">
              Belanja Ulang Rp. 2.000.000 Mendapatkan 16 BOX Produk Senilai 4
              Juta (Untung 2.000.000)
            </p>
            <button
              className="
                bg-green-500
                text-white
                p-4
                rounded-md
                block
                my-8
                mx-auto
                hover:opacity-75
                shadow-lg
              "
              onClick={clickWa}
            >
              <img
                src="img/whatsapp.png"
                alt="siap bisnis"
                className="mx-auto w-10 inline"
              />
              DAFTAR SEKARANG
            </button>
            <i className="text-sm">Note: Syarat & Ketentuan berlaku!</i>
          </div>
        </div>
      </section>
      <section className="text-center text-red-500 font-semibold text-xl sm:text-2xl">
        <h2 className="mb-2">
          TUNGGU APALAGI…!
          <br />
          AMBIL PELUANG INI DAN MARI BERSAMA
          <br />
          MERAIH IMPIAN
        </h2>
        <img src="img/siap-bisnis.png" alt="siap bisnis" className="mx-auto" />
        <h2>
          “BERHENTILAH JADI PENONTON,
          <br />
          JADILAH KELUARGA BESAR BEST CORP
          <br />
          RAIH SUKSES BERSAMA KAMI…”
        </h2>
      </section>
      <section className="mt-4">
        <p>Jika ada pertanyaan, silakan hubungi kontak saya dibawah ini:</p>
        <img src="img/profile.jpeg" alt="profile" className="mx-auto w-[50%]" />
        <div className="font-bold text-xl sm:text-2xl my-6">
          <h1>Nama: H.ENDIN ESWARA</h1>
          <h1>HP/WhatsApp: 081218442481</h1>
        </div>
        <p className="w-[90%] md:w-[50%] mx-auto my-8">
          Apa Yang Anda Dapatkan Saat Bergabung Di PT BEST Syariah?? Silahkan
          Hubungi Kontak Saya, Akan kita kupas tuntas untuk anda!
        </p>
        <div className="w-[90%] md:w-[50%] mx-auto">
          <Button type="blink" />
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
