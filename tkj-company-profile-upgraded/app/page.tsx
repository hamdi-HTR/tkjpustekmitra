export default function Home() {
  return (
    <section className="p-10 text-center bg-gradient-to-b from-blue-900 to-white text-white">
      <h2 className="text-5xl font-bold mb-4">
        Jurusan Teknik Komputer dan Jaringan
      </h2>
      <p className="text-lg max-w-2xl mx-auto mb-6">
        SMKS Pustek Mitra Tigaraksa — kombinasi pendidikan formal dan teknologi modern.
      </p>
      <div className="flex justify-center gap-4">
        <a href="/about" className="bg-white text-blue-900 px-6 py-3 rounded-xl font-semibold">
          Profil Jurusan
        </a>
        <a href="/program" className="bg-blue-700 px-6 py-3 rounded-xl font-semibold">
          Program Unggulan
        </a>
      </div>
    </section>
  );
}
