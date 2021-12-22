import {Field, Form, Formik} from 'formik';
import Head from 'next/head';
import * as Yup from 'yup';

export default function Home () {
  const FILE_SIZE = 2 * 1024;
  const SUPPORTED_FORMATS = [
    'image/jpg',
    'image/jpeg',
    'image/png',
    'image/bmp',
  ];

  const SignupSchema = Yup.object ().shape ({
    nama: Yup.string ()
      .min (2, 'Mohon periksa kembali nama yang Anda cantumkan')
      .required ('Wajib diisi'),
    nik: Yup.string ()
      .min (16, 'Nomor induk yang dicantumkan harus 16 digit')
      .max (16, 'Nomor induk yang dicantumkan harus 16 digit')
      .required ('Wajib diisi'),
    noKk: Yup.string ()
      .min (16, 'Nomor induk yang dicantumkan harus 16 digit')
      .max (16, 'Nomor induk yang dicantumkan harus 16 digit')
      .required ('Wajib diisi'),
    fotoKtp: Yup.mixed ()
      .required ('Silahkan unggah foto KTP Anda')
      .test (
        'fileSize',
        'Ukuran file melebihi batas maksimal 2MB',
        value => value && value.size <= FILE_SIZE
      )
      .test (
        'fileFormat',
        'Format file tidak didukung',
        value => value && SUPPORTED_FORMATS.includes (value.type)
      ),
    fotoKk: Yup.mixed ()
      .required ('Silahkan unggah foto KTP Anda')
      .test (
        'fileSize',
        'Ukuran file melebihi batas maksimal 2MB',
        value => value && value.size <= FILE_SIZE
      )
      .test (
        'fileFormat',
        'Format file tidak didukung',
        value => value && SUPPORTED_FORMATS.includes (value.type)
      ),
    umur: Yup.number ()
      .min (25, 'Usia minimal untuk mendaftar adalah 25 tahun')
      .required ('Wajib diisi'),
    jenisKelamin: Yup.number ().required ('Wajib diisi'),
    provinsi: Yup.number ().required ('Wajib diisi'),
    kota: Yup.number ().required ('Wajib diisi'),
    kecamatan: Yup.number ().required ('Wajib diisi'),
    kelurahan: Yup.number ().required ('Wajib diisi'),
    alamat: Yup.string ()
      .max (
        255,
        'Alamat yang dicantumkan terlalu panjang. Maksimal 255 karakter'
      )
      .required ('Wajib diisi'),
    rt: Yup.string ().required ('Wajib diisi'),
    rw: Yup.string ().required ('Wajib diisi'),
    penghasilanSebelum: Yup.number ().required ('Wajib diisi'),
    penghasilanSetelah: Yup.number ().required ('Wajib diisi'),
    alasan: Yup.number ().required ('Wajib diisi'),
  });

  const SignupForm = () => {
    return (
      <Formik
        initialValues={{
          nama: '',
          nik: '',
          noKk: '',
          fotoKtp: '',
          fotoKk: '',
          umur: 0,
          jenisKelamin: '',
          provinsi: '',
          kota: '',
          kecamatan: '',
          kelurahan: '',
          alamat: '',
          rt: '',
          rw: '',
          penghasilanSebelum: 0,
          penghasilanSetelah: 0,
          alasan: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          // same shape as initial values
          // console.log (values);
          alert (JSON.stringify (values, null, 2));
        }}
      >
        {({errors, touched, setFieldValue, values}) => (
          <Form className="flex flex-col">
            <table className="table-auto m-4">
              <tbody>
                <tr className="h-16">
                  <td className="w-48">
                    <label htmlFor="nama">Nama</label>
                  </td>
                  <td className="">
                    <Field name="nama" className="form-field w-full" />
                    {errors.nama && touched.nama
                      ? <div className="text-red-600 text-xs">
                          {errors.nama}
                        </div>
                      : null}
                  </td>
                </tr>

                <tr className="h-16">
                  <td className="w-48">
                    <label htmlFor="nik">NIK</label>
                  </td>
                  <td className="">
                    <Field name="nik" className="form-field w-full" />
                    {errors.nik && touched.nik
                      ? <div className="text-red-600 text-xs">
                          {errors.nik}
                        </div>
                      : null}
                  </td>
                </tr>

                <tr className="h-16">
                  <td className="w-48">
                    <label htmlFor="noKk">Nomor Kartu Keluarga</label>
                  </td>
                  <td className="">
                    <Field name="noKk" className="form-field w-full" />
                    {errors.noKk && touched.noKk
                      ? <div className="text-red-600 text-xs">
                          {errors.noKk}
                        </div>
                      : null}
                  </td>
                </tr>

                <tr className="h-16">
                  <td className="w-48">
                    <label htmlFor="fotoKtp">Foto KTP</label>
                  </td>
                  <td className="">
                    <input
                      id="fotoKtp"
                      name="fotoKtp"
                      type="file"
                      onChange={event => {
                        setFieldValue ('fotoKtp', event.currentTarget.files[0]);
                      }}
                    />
                    {errors.fotoKtp && touched.fotoKtp
                      ? <div className="text-red-600 text-xs">
                          {errors.fotoKtp}
                        </div>
                      : null}
                  </td>
                </tr>

                <tr className="h-16">
                  <td className="w-48">
                    <label htmlFor="fotoKk">Foto Kartu Keluarga</label>
                  </td>
                  <td className="">
                    <input
                      id="fotoKk"
                      name="fotoKk"
                      type="file"
                      onChange={event => {
                        setFieldValue ('fotoKk', event.currentTarget.files[0]);
                      }}
                    />
                    {errors.fotoKtp && touched.fotoKtp
                      ? <div className="text-red-600 text-xs">
                          {errors.fotoKtp}
                        </div>
                      : null}
                  </td>
                </tr>

                <tr className="h-16">
                  <td className="w-48">
                    <label htmlFor="umur">Umur</label>
                  </td>
                  <td className="">
                    <Field name="umur" className="form-field w-full" />
                    {errors.umur && touched.umur
                      ? <div className="text-red-600 text-xs">
                          {errors.umur}
                        </div>
                      : null}
                  </td>
                </tr>

                <tr className="h-16">
                  <td className="w-48">
                    <label htmlFor="jenisKelamin">Jenis Kelamin</label>
                  </td>
                  <td className="">
                    <div
                      role="group"
                      aria-labelledby="my-radio-group"
                      className="w-full grid justify-items-start gap-1"
                    >
                      <label>
                        <Field type="radio" name="jenisKelamin" value="1" />
                        Laki-laki
                      </label>
                      <label>
                        <Field type="radio" name="jenisKelamin" value="2" />
                        Perempuan
                      </label>
                    </div>
                    {errors.jenisKelamin && touched.jenisKelamin
                      ? <div className="text-red-600 text-xs">
                          {errors.jenisKelamin}
                        </div>
                      : null}
                  </td>
                </tr>

                <tr className="h-16">
                  <td className="w-48">
                    <label htmlFor="alamat">Alamat</label>
                  </td>
                  <td className="">
                    <Field name="alamat" className="form-field w-full" />
                    {errors.alamat && touched.alamat
                      ? <div className="text-red-600 text-xs">
                          {errors.alamat}
                        </div>
                      : null}
                  </td>
                </tr>

                <tr className="h-16">
                  <td className="w-48">
                    <label htmlFor="rt">RT</label>
                  </td>
                  <td className="">
                    <Field name="rt" className="form-field w-full" />
                    {errors.rt && touched.rt
                      ? <div className="text-red-600 text-xs">
                          {errors.rt}
                        </div>
                      : null}
                  </td>
                </tr>

                <tr className="h-16">
                  <td className="w-48">
                    <label htmlFor="rw">RW</label>
                  </td>
                  <td className="">
                    <Field name="rw" className="form-field w-full" />
                    {errors.rw && touched.rw
                      ? <div className="text-red-600 text-xs">
                          {errors.rw}
                        </div>
                      : null}
                  </td>
                </tr>

                <tr className="h-16">
                  <td className="w-48">
                    <label htmlFor="penghasilanSebelum">
                      Penghasilan sebelum pandemi
                    </label>
                  </td>
                  <td className="">
                    <Field
                      name="penghasilanSebelum"
                      className="form-field w-full"
                    />
                    {errors.penghasilanSebelum && touched.penghasilanSebelum
                      ? <div className="text-red-600 text-xs">
                          {errors.penghasilanSebelum}
                        </div>
                      : null}
                  </td>
                </tr>

                <tr className="h-16">
                  <td className="w-48">
                    <label htmlFor="penghasilanSetelah">
                      Penghasilan setelah pandemi
                    </label>
                  </td>
                  <td className="">
                    <Field
                      name="penghasilanSetelah"
                      className="form-field w-full"
                    />
                    {errors.penghasilanSetelah && touched.penghasilanSetelah
                      ? <div className="text-red-600 text-xs">
                          {errors.penghasilanSetelah}
                        </div>
                      : null}
                  </td>
                </tr>

              </tbody>
            </table>

            <button
              className="w-1/4 bg-green-500 text-white rounded-md self-center mb-4 py-2"
              type="submit"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    );
  };

  return (
    <div>
      <Head>
        <title>Pendaftaran Program Bantuan Sosial (Bansos)</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className="w-screen min-h-screen"
        style={{backgroundColor: '#a6c5f7'}}
      >
        <div className="mx-auto min-h-screen w-1/2 bg-gray-200 text-center">
          <div className="text-bold text-lg">
            Pendaftaran Program Bantuan Sosial (Bansos)
          </div>
          <SignupForm />
        </div>
      </div>

    </div>
  );
}
