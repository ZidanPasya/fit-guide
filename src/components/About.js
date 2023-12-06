import React from 'react';
import { Container, Grid, Typography, Paper, Avatar, Box } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import rayhanProfile from '../assets/profiles/rayhan.jpg';
import ihsanProfile from '../assets/profiles/ihsan.jpg';
import zidanProfile from '../assets/profiles/zidan.jpg';
import linggaProfile from '../assets/profiles/lingga.jpg';
import sofyaProfile from '../assets/profiles/sofya.jpg';

const About = () => {
  const teamMembers = [
    {
      name: 'Rayhan Naufal Arrafi',
      role: 'Project Manager and Front-End Developer #1',
      image: rayhanProfile,
      bio: 'Halo! Saya Rayhan Naufal Arrafi, seorang Front-End Developer yang penuh gairah dan inovatif dengan keahlian dalam desain serta kemampuan untuk menciptakan pengalaman pengguna yang mulus dan ramah. Saya sangat menikmati mengubah ide menjadi situs web interaktif dan menarik secara visual, selalu mendorong batas-batas kemungkinan di dunia web. Toolkit saya mencakup HTML, CSS, dan JavaScript, yang saya gunakan dengan keahlian untuk membuat antarmuka pengguna responsif dan dinamis. Saya sangat akrab dengan framework front-end modern seperti React.js dan Next.js, memastikan bahwa setiap proyek yang saya sentuh tidak hanya memenuhi tetapi melampaui standar industri.',
      github: 'rayhannn11',
      linkedin: 'rayhan-naufal-arrafi-b02175229'
    },
    {
      name: 'Ihsan Alhakim',
      role: 'Front-End Developer #2',
      image: ihsanProfile,
      bio: 'Perkenalkan Saya Ihsan Alhakim. Biasanya saya dipanggil ihsan saja. Saat ini saya sedang menempuh pendidikan strata 1 di Universitas Gunadarma jurusan Sistem Informasi. Saya percaya diri dengan kemampuan saya untuk membuat web menggunakan HTML, CSS, dan Javascript. Sampai saat ini saya terus belajar mengenai Front-End Web Development untuk membuat web yang lebih baik lagi.',
      github: 'IhsanAlhakim',
      linkedin: 'ihsan-alhakim-03515b29a'
    },
    {
      name: 'Muhammad Zidan Pasya',
      role: 'Back-End Developer #1',
      image: zidanProfile,
      bio: 'Saya Muhammad Zidan Pasya, mahasiswa S1 Ilmu Komputer Universitas Lampung. Saat ini saya aktif sebagai anggota Himpunan Mahasiswa Ilmu Komputer. Saya memiliki passion di Full-stack Web Development dan menguasai beberapa Bahasa Pemrograman seperti JavaScript, Python dan PHP. Serta Bahasa Markup seperti HTML dan CSS. Saya mampu belajar secara mandiri, menyerap ilmu dengan cepat, memiliki motivasi tinggi, bertanggung jawab, pekerja keras, dan mampu bekerja dalam tim ataupun secara individu. Saya memiliki antusias tinggi dalam mengerjakan projek dan selalu mencari cara untuk meningkatkan kualitas kode yang dibuat',
      github: 'ZidanPasya',
      linkedin: 'zidanpasya'
    },
    {
      name: 'Lingga Alzidan Zunanto',
      role: 'Back-End Developer #2',
      image: linggaProfile,
      bio: 'Saya Lingga Alzidan Zunanto mahasiswa program studi Sistem Informasi Universitas Gunadarma. Minat utama saya terletak pada bidang pengembangan Web. Saya adalah anggota aktif dari komunitas sosial yang berkontribusi langsung kepada masyarakat. Selain kegiatan akademik dan kegiatan sosial, saat ini saya aktif mencari peluang untuk mendapatkan pengalaman kerja melalui pekerjaan freelance dan juga berkolaborasi dengan teman-teman untuk mendirikan startup IT, untuk lebih meningkatkan keterampilan dan pengetahuan saya.',
      github: 'Linggaaaaa',
      linkedin: 'lingga-alzidan-zunanto-7b437b233'
    },
    {
      name: 'Sofya Saharani',
      role: 'UI/UX Designer',
      image: sofyaProfile,
      bio: 'Saya Sofya mahasiswa semester 5 yang tertarik dengan antarmuka web dan front-end. Saat ini sedang mengejar gelar sarjana Sistem Informasi di Universitas Malikussaleh dengan fokus yang kuat pada pengembangan keterampilan dalam Antarmuka Web, Front-end, dan Back-end. Meskipun saya belum mendapatkan pengalaman kerja profesional, saya telah terlibat aktif dalam berbagai proyek pribadi dan kursus yang meningkatkan keterampilan saya dalam menggunakan HTML5, CSS, Javascript, PHP, dan berbagai framework pemrograman seperti Bootstrap, Tailwind, React, dan Laravel .',
      github: 'sofyasaharani',
      linkedin: 'sofya-saharani-0888991a1'
    },
  ];

  return (
    <Box sx={{ textAlign: 'center' }}>
      <Box sx={{ backgroundColor: '#124c6e', color: 'white' }}>
        <Container sx={{ pt: 2, pb: 2 }}>
          <Typography variant='h3' gutterBottom>
            FitGuide
          </Typography>

          <Typography variant='subtitle1' gutterBottom>
            FitGuide merupakan sebuah website panduan olahraga yang memberikan
            pengetahuan baik untuk masyarakat awam maupun masyarakat yang telah
            terbiasa mengenai cara berolahraga untuk membentuk tubuh ideal, menghindari
            cedera saat berolahraga, serta menggunakan alat atau beban tubuh saat berolahraga
          </Typography>
        </Container>
      </Box>

      <Container>
        <Typography variant='h3' gutterBottom sx={{ pt: 2 }}>
          Team Behind FitGuide
        </Typography>

        <Grid container spacing={4} justifyContent='center'>
          {teamMembers.map((member, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Paper sx={{ p: 2, height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Avatar
                  src={member.image}
                  alt={member.name}
                  sx={{ width: 150, height: 150, mx: 'auto' }}
                />

                <Typography
                  variant='h5'
                  gutterBottom
                  sx={{ pt: 2 }}
                >
                  {member.name}
                </Typography>

                <Typography
                  variant='subtitle1'
                  color='textSecondary'
                  gutterBottom
                >
                  {member.role}
                </Typography>

                <Typography paragraph sx={{ textAlign: 'justify' }}>{member.bio}</Typography>

                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <li>
                    <Link to={`https://www.github.com/${member.github}`}>
                      <GitHub />
                    </Link>
                  </li>
                  <li>
                    <Link to={`https://www.linkedin.com/in/${member.linkedin}`}>
                      <LinkedIn />
                    </Link>
                  </li>
                </ul>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
