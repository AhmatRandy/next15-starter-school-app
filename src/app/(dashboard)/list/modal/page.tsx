"use client";

import { Card } from "@/components/ui/card/card";
import React from "react";

const ModalList = () => {
  return (
    <Card className="rounded-sm w-[665px] mx-auto my-auto max-h-[80vh] overflow-y-scroll overflow-x-hidden">
      <div>
        <h1 className="text-md font-semibold text-center mt-4">
          INFORMASI BIAYA COUNTER LAYANAN TRADE FINANCE BRI
        </h1>
        <div className="border-b border-2 border-neutral-200 w-[601px] mx-auto mt-2 " />
      </div>

      <div className="border-[#56ADF2] bg-[#DDEFFC] rounded-sm p-3  mt-2 ml-7 w-[606px]  ">
        <h2 className="text-xs font-semibold">disclaimer</h2>
        <span className="text-xs leading-[18px] font-medium">
          Tarif yang tercantum adalah tarif counter. Bagi nasabah dengan tarif
          khusus, tarif yang berlaku akan mengikuti syarat dan ketentuan
          perjanjian yang telah ditetapkan. Untuk rincian lebih lanjut, silakan
          hubungi relationship manager Anda.
        </span>
      </div>
      <section>
        <h2 className="ml-7 mt-2 text-sm line-height-[20px] font-semibold">
          A. IMPOR/PEMBELIAN DOMESTIK (LC/SKBDN)
        </h2>
        <h2 className="ml-7 mt-2 text-sm line-height-[20px]">
          1. Pembukaan LC/SKBDN/Perubahan (amendment) penambahan jangka waktu
          atau penambahan nilai (amount).
        </h2>
        <span className="text-sm ml-9">a. provisi</span>
        <div className="mt-2 w-[580px] ml-11">
          <table className="w-full table-auto border-collapse text-xs">
            <thead>
              <tr>
                <th
                  colSpan={2}
                  className="bg-neutral-80 px-4 py-3 text-left font-semibold  bg-[#F8F9F9]"
                >
                  Blokir Rekening Giro/Deposito/Tabungan atau Kontra Garansi
                  Penjaminan Non Bank (Asuransi)
                </th>
              </tr>
            </thead>
            <tbody className="w-full ">
              <tr>
                <td className="border border-[#EAEBEB] px-3 ">
                  Jangka waktu s.d 180 hari
                </td>

                <td className="w-1/3 border border-[#EAEBEB] px-2 py-3  font-semibold">
                  0,125% min. USD 50
                </td>
              </tr>
              <tr>
                <td className="border border-[#EAEBEB] px-4 py-3">
                  Jangka waktu &gt; 180 hari s.d 360 hari (&gt; 180 days to 360
                  days)
                </td>

                <td className="w-1/4 border border-[#EAEBEB] px-2 py-3 text-left font-semibold">
                  0,25% min. USD 75
                </td>
              </tr>
              <tr>
                <td className="border border-[#EAEBEB] px-4 py-3">
                  Jangka waktu &gt; 360 hari (&gt; 360 days)
                </td>

                <td className="w-1/4 border border-[#EAEBEB] px-2 py-3 text-left font-semibold">
                  0,5% min USD 100
                </td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th
                  colSpan={2}
                  className="bg-neutral-80 px-4 py-3 text-left font-semibold  bg-[#F8F9F9]"
                >
                  Fasilitas Kredit
                </th>
              </tr>
            </thead>
            <tbody className="w-full ">
              <tr>
                <td className="border border-[#EAEBEB] px-3 ">
                  Jangka waktu s.d 180 hari (up to 180 days)
                </td>

                <td className="w-1/3 border border-[#EAEBEB] font-semibold px-2 py-3 ">
                  0,25% min. USD 50
                </td>
              </tr>
              <tr>
                <td className="border border-[#EAEBEB] px-4 py-3">
                  Jangka waktu &gt; 180 hari s.d 360 hari (&gt; 180 days to 360
                  days)
                </td>

                <td className="w-1/4 border border-[#EAEBEB] font-semibold px-2 py-3 text-left">
                  0,5% min. USD 75
                </td>
              </tr>
              <tr>
                <td className="border border-[#EAEBEB] px-4 py-3">
                  Jangka waktu &gt; 360 hari (&gt; 360 days)
                </td>

                <td className="w-1/4 border border-[#EAEBEB] font-semibold px-2 py-3 text-left">
                  1% min. USD 100
                </td>
              </tr>
            </tbody>
          </table>
          <div className="border-[#56ADF2] bg-[#DDEFFC] rounded-sm p-3  mt-2 text-xs">
            <div className="flex gap-1 items-center">
              <h2 className="font-semibold">*</h2>
              <h2 className="font-semibold">Catatan</h2>
            </div>
            <ul className="leading-[18px] list-disc font-normal w-[488px] mx-10">
              <li>
                Pengenaan tarif provisi pembukaan/perubahan LC/SKBDN berdasarkan
                jangka waktu dan amount yang dibuka/disesuaikan dengan jenis
                setoran jaminan yang disediakan
              </li>
              <li>
                provisi pembukaan/perubahan penambahan jangka waktu/penambahan
                nilai LC/SKBDN sebagaimana tersebut di atas dikenakan secara
                flat dan tidak diproporsionalkan berdasarkan jangka waktunya.
              </li>
              <li>
                Jangka waktu LC/SKBDN dihitung dari tanggal penerbitan yang
                tercantum dalam field 31C sampai dengan expiry date LC/SKBDN
                yang tercantum dalam field 31D dalam MT700.
              </li>
              <li>
                Pembeanan provisi wajib dihitung dari nilai LC/SKBDN dan
                toleransi (jika ada).
              </li>
            </ul>
          </div>

          <span className=" -ml-2 mt-2">b. Biaya administrasi</span>
          <div className="mt-2 w-[580px] ">
            <table className="w-full table-auto border-collapse mt-3">
              <tbody className="w-full text-xs">
                <tr>
                  <td className="border border-[#EAEBEB] px-3 text-xs">
                    Biaya administrasi (termasuk biaya komunikasi)
                  </td>

                  <td className="w-1/3 border border-[#EAEBEB] px-2 py-3 text-xs font-semibold">
                    USD 20
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section>
        <h2 className="ml-7 mt-2 text-sm line-height-[20px]">
          2. Perubahan (Amendment Non Amount dan Decreased Amount)*
        </h2>
        <div className="mt-2 w-[580px] ml-11">
          <table className="w-full table-auto border-collapse mt-3 text-xs">
            <tbody className="w-full text-xs">
              <tr>
                <td className="border border-[#EAEBEB] px-3 ">
                  a. Acceptance Fee
                </td>

                <td className="w-1/3 border border-[#EAEBEB] px-3 py-3 text-xs font-semibold">
                  0,1% per bulan min. USD 35
                </td>
              </tr>
              <tr>
                <td className="border border-[#EAEBEB] px-3 ">
                  b. Acceptance Fee LC/SKBDN sesama BRI
                </td>

                <td className="w-1/3 border border-[#EAEBEB] px-3 py-3 font-semibold">
                  0,05% per bulan min. USD 10
                </td>
              </tr>
            </tbody>
          </table>

          <div className="border-[#56ADF2] bg-[#DDEFFC] rounded-sm p-3  mt-2 text-xs">
            <div className="flex gap-1 items-center">
              <h2 className="font-semibold">*</h2>
              <h2 className="font-semibold">Catatan</h2>
            </div>
            <p className="mx-3">
              Apabila amend decrease diikuti dengan penambahan jangka waktu maka
              tetap mengacu pada point 1.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="ml-7 mt-2 text-sm line-height-[20px]">
          3. Penerbitan Akseptasi
        </h2>
        <div className="mt-2 w-[580px] ml-11">
          <table className="w-full table-auto border-collapse mt-3 text-xs">
            <tbody className="w-full text-xs">
              <tr>
                <td className="border border-[#EAEBEB] px-3">
                  a. Acceptance Fee
                </td>

                <td className="w-1/3 border border-[#EAEBEB] px-2 py-3 font-semibold">
                  0,1% per bulan min. USD 35
                </td>
              </tr>
              <tr>
                <td className="border border-[#EAEBEB] px-3">
                  b. Acceptance Fee LC/SKBDN sesama BRI
                </td>

                <td className="w-1/3 border border-[#EAEBEB] px-2 py-3 font-semibold">
                  0,05% per bulan min. USD 10
                </td>
              </tr>
            </tbody>
          </table>

          <div className="border-[#56ADF2] bg-[#DDEFFC] rounded-sm p-3  mt-2 text-xs">
            <div className="flex gap-1 items-center">
              <h2 className="font-semibold">*</h2>
              <h2 className="font-semibold">Catatan</h2>
            </div>
            <p className="mx-3">Pembebanan dilakukan secara proporsional.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="ml-7 mt-2 text-sm line-height-[20px]">
          4. Discrepancy Fee
        </h2>
        <div className="mt-2 w-[580px] ml-11">
          <table className="w-full table-auto border-collapse mt-3 text-xs">
            <tbody className="w-full text-xs">
              <tr>
                <td className="border border-[#EAEBEB] p-4   ">
                  a. Discrepancy fee atas dokumen dari bank lain (beban
                  beneficiary, deducted from proceed, sudah termasuk biaya
                  pengiriman SWIFT notice of refusal )
                </td>

                <td className="w-1/3 border border-[#EAEBEB] px-2 py-3 font-semibold">
                  USD 75 per presentasi dokumen
                </td>
              </tr>
              <tr>
                <td className="border border-[#EAEBEB] p-4 ">
                  b. Discrepancy fee atas dokumen dari SKBDN sesama BRI** (beban
                  beneficiary, deducted from proceed, sudah termasuk biaya
                  pengiriman SWIFT notice of refusal)
                </td>

                <td className="w-1/3 border border-[#EAEBEB] px-2 py-3 font-semibold">
                  USD 30 per presentasi dokumen
                </td>
              </tr>
            </tbody>
          </table>

          <div className="border-[#56ADF2] bg-[#DDEFFC] rounded-sm p-2  mt-2 text-xs">
            <div className="flex gap-1 items-center">
              <h2 className="font-semibold">*</h2>
              <h2 className="font-semibold">Catatan</h2>
            </div>
            <ul className="leading-[18px] list-disc font-normal w-[525px] mx-9 ">
              <li>
                Jika biaya discrepancy tidak dapat dibebankan kepada beneficiary
                karena applicant menolak memberikan waive atas discrepancy
                tersebut, maka biaya discrepancy akan dibebankan kepada
                applicant.
              </li>
              <li>
                Dalam hal SKBDN sesama BRI, apabila beneficiary dapat
                memperbaiki dokumen pada kesempatan pertama dan masih dalam
                periode presentasi yang diperbolehkan, maka discrepancy fee
                tidak dikenakan.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="ml-7 mt-2 text-sm line-height-[20px]">5. pembayaran</h2>
        <div className="mt-2 w-[580px] ml-11">
          <table className="w-full table-auto border-collapse mt-3 text-xs">
            <tbody className="w-full text-xs">
              <tr>
                <td className="border border-[#EAEBEB] p-4   ">
                  a. Permintaan Assignment of Proceeds dari nasabah (jika ada).
                </td>

                <td className="w-1/3 border border-[#EAEBEB] px-2 py-3 font-semibold">
                  USD 35 per proceed
                </td>
              </tr>
              <tr>
                <td className="border border-[#EAEBEB] p-4 ">
                  b. Biaya Penanganan Dokumen atas dokumen dari bank lain
                </td>

                <td className="w-1/3 border border-[#EAEBEB] px-2 py-3 font-semibold">
                  USD 50
                </td>
              </tr>
              <tr>
                <td className="border border-[#EAEBEB] p-4 ">
                  c. Biaya Penanganan Dokumen atas dokumen dari sesama BRI
                </td>

                <td className="w-1/3 border border-[#EAEBEB] px-2 py-3 font-semibold">
                  USD 25
                </td>
              </tr>
              <tr>
                <td className="border border-[#EAEBEB] p-4 ">
                  d. Biaya komunikasi (SWIFT), jika ada pengiriman SWIFT
                </td>

                <td className="w-1/3 border border-[#EAEBEB] px-2 py-3 font-semibold">
                  USD 10
                </td>
              </tr>
              <tr>
                <td className="border border-[#EAEBEB] p-4 ">
                  <div className="w-72">
                    e. Biaya Penanganan Dokumen atas presentasi dokumen yang
                    telah expired, termasuk apabila terdapat pengiriman Buyer`s
                    Acceptance**.
                  </div>
                </td>

                <td className="w-1/3 border border-[#EAEBEB] px-2 py-3 font-semibold">
                  USD 50
                </td>
              </tr>
            </tbody>
          </table>

          <div className="border-[#56ADF2] bg-[#DDEFFC] rounded-sm p-2  mt-2 text-xs">
            <div className="flex gap-1 items-center">
              <h2 className="font-semibold">*</h2>
              <h2 className="font-semibold">Catatan</h2>
            </div>
            <ul className="leading-[18px] list-disc font-normal w-[525px] mx-9 ">
              <li>
                Biaya advise through menjadi beban beneficiary bank (kecuali
                diatur lain dalam LC/SKBDN) dan ditagihkan melalui SWIFT MT199
              </li>
              <li>
                Menjadi beban applicant, kecuali apabila applicant tidak
                bersedia membayar, maka menjadi beban beneficiary..
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="ml-7 mt-2 text-sm line-height-[20px]">6. Penerbitan</h2>
        <div className="mt-2 w-[580px] ml-11">
          <table className="w-full table-auto border-collapse mt-3 text-xs">
            <tbody className="w-full text-xs">
              <tr>
                <td className="border border-[#EAEBEB] p-4   ">Penerbitan</td>

                <td className="w-1/3 border border-[#EAEBEB] px-2 py-3 font-semibold">
                  0,125% min. USD 75
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="ml-7 mt-2 text-sm line-height-[20px]">7. Pembatalan</h2>
        <div className="mt-2 w-[580px] ml-11">
          <table className="w-full table-auto border-collapse mt-3 text-xs">
            <tbody className="w-full text-xs">
              <tr>
                <td className="border border-[#EAEBEB] p-4">
                  Biaya Pembatalan
                </td>
                <td className="w-1/3 border border-[#EAEBEB] px-2 py-3 font-semibold">
                  USD 35
                </td>
              </tr>
              <tr>
                <td className="border border-[#EAEBEB] p-4">
                  Biaya Komunikasi
                </td>
                <td className="w-1/3 border border-[#EAEBEB] px-2 py-3 font-semibold">
                  USD 10
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </Card>
  );
};

export default ModalList;
