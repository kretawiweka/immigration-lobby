import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import { Content, CardContent } from '../style';

const ProductListVisa = () => {
  return (
    <div style={{ margin: '14px 0' }}>
      <Content>
        <CardContent flexDirection="column">
          <Link to="/informasi-layanan/1/1">
            <Card style={{ margin: '7px 0' }}>
              <h3>
                211A – Kegiatan Wisata, Keluarga, Sosial Budaya, Pemerintahan,
                Bisnis (Visa Kunjungan Satu Kali Perjalanan)
              </h3>
            </Card>
          </Link>
          <Link to="/informasi-layanan/1/1">
            <Card style={{ margin: '7px 0' }}>
              <h3>
                211B – Kegiatan Kunjungan Industri (Visa Kunjungan Satu Kali
                Perjalanan)
              </h3>
            </Card>
          </Link>
          <Link to="/informasi-layanan/1/1">
            <Card style={{ margin: '7px 0' }}>
              <h3>
                211C – Kegiatan Jurnalistik dan Perfilman Non Komersial (Visa
                Kunjungan Satu Kali Perjalanan)
              </h3>
            </Card>
          </Link>
          <Link to="/informasi-layanan/1/1">
            <Card style={{ margin: '7px 0' }}>
              <h3>
                D212 - Kegiatan Keluarga, Bisnis, dan Tugas Pemerintahan Bisnis
                (Visa Kunjungan Beberapa Kali Perjalanan)
              </h3>
            </Card>
          </Link>
          <Link to="/informasi-layanan/1/1">
            <Card style={{ margin: '7px 0' }}>
              <h3>
                311 – Bekerja Sebagai Tenaga Ahli pada WTO / oragnisasi
                internasional di bawah PBB (Visa Tinggal Terbatas)
              </h3>
            </Card>
          </Link>
          <Link to="/informasi-layanan/1/1">
            <Card style={{ margin: '7px 0' }}>
              <h3>312 – Bekerja (Visa Tinggal Terbatas)</h3>
            </Card>
          </Link>
          <Link to="/informasi-layanan/1/1">
            <Card style={{ margin: '7px 0' }}>
              <h3>313 – Tidak Bekerja untuk Penanaman Modal Asing 1 Tahun</h3>
            </Card>
          </Link>
          <Link to="/informasi-layanan/1/1">
            <Card style={{ margin: '7px 0' }}>
              <h3>314 – Tidak Bekerja untuk Penanaman Modal Asing 2 Tahun</h3>
            </Card>
          </Link>
          <Link to="/informasi-layanan/1/1">
            <Card style={{ margin: '7px 0' }}>
              <h3>
                315 – Tidak Bekerja untuk Mengikuti Pelatihan dan Penelitian
                (Visa Tinggal Terbatas)
              </h3>
            </Card>
          </Link>
          <Link to="/informasi-layanan/1/1">
            <Card style={{ margin: '7px 0' }}>
              <h3>316 – Tidak Bekerja untuk Mengikuti Pendidikan</h3>
            </Card>
          </Link>
          <Link to="/informasi-layanan/1/1">
            <Card style={{ margin: '7px 0' }}>
              <h3>
                317 – Tidak Bekerja untuk Penyatuan Keluarga (Visa Tinggal
                Terbatas)
              </h3>
            </Card>
          </Link>
          <Link to="/informasi-layanan/1/1">
            <Card style={{ margin: '7px 0' }}>
              <h3>
                C318 – Tidak Bekerja untuk Repatriasi (Visa Tinggal Terbatas)
              </h3>
            </Card>
          </Link>
          <Link to="/informasi-layanan/1/1">
            <Card style={{ margin: '7px 0' }}>
              <h3>
                319 – Tidak Bekerja sebagai Wisatawan Lanjut Usia Mancanegara
              </h3>
            </Card>
          </Link>
          <Link to="/informasi-layanan/1/1">
            <Card style={{ margin: '7px 0' }}>
              <h3>
                320 – Kemudahan Bekerja Sambil Berlibur (Visa Tinggal Terbatas)
              </h3>
            </Card>
          </Link>
          <Link to="/informasi-layanan/1/1">
            <Card style={{ margin: '7px 0' }}>
              <h3>Bebas Visa Kunjungan (BVK)</h3>
            </Card>
          </Link>
          <Link to="/informasi-layanan/1/1">
            <Card style={{ margin: '7px 0' }}>
              <h3>
                B213 - Visa On Arrival (VOA) / Visa Kunjungan Saat Kedatangan
              </h3>
            </Card>
          </Link>
        </CardContent>
      </Content>
    </div>
  );
};

export default ProductListVisa;
