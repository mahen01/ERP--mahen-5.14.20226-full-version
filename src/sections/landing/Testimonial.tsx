// material-ui
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// third-party
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';

// project-imports
import FadeInWhenVisible from './Animation';
import MainCard from 'components/MainCard';
import { ThemeDirection } from 'config';

// assets
import Avatar from 'components/@extended/Avatar';
import Avatar1 from 'assets/images/users/avatar-6.png';
import Avatar2 from 'assets/images/users/avatar-1.png';
import Avatar3 from 'assets/images/users/avatar-2.png';
import Avatar4 from 'assets/images/users/avatar-3.png';
import Avatar5 from 'assets/images/users/avatar-4.png';
import Avatar6 from 'assets/images/users/avatar-5.png';
import Avatar7 from 'assets/images/users/avatar-7.png';
import Avatar8 from 'assets/images/users/avatar-8.png';

// ================================|| SLIDER - ITEMS ||================================ //

function Item({ item }: { item: { image: string; text: string; name: string; designation: string; highlight?: boolean } }) {
  return (
    <MainCard sx={{ width: { xs: '300px', md: '420px' }, cursor: 'pointer', my: 0.2, mx: 1.5 }}>
      <Stack direction="row" sx={{ gap: 2, alignItems: 'flex-start' }}>
        <Avatar alt="Avatar" size="lg" src={item.image}></Avatar>
        <Stack>
          <Typography>{item.text}</Typography>
          <Typography>
            <Typography component="span" variant="caption">
              {item.name}
            </Typography>
            {' - '}
            <Typography component="span" sx={{ color: 'text.secondary' }}>
              {item.designation}
            </Typography>
          </Typography>
        </Stack>
      </Stack>
    </MainCard>
  );
}

// ==============================|| LANDING - TestimonialPage ||============================== //

export default function TestimonialPage() {
  const theme = useTheme();
  const items = [
  {
    image: Avatar1,
    text: '“Techromz ERP helped us manage customers, sales, and daily operations from one centralized dashboard. The interface is clean, modern, and very easy to use.”',
    name: 'Nimal Perera',
    designation: 'Business Manager'
  },
  {
    image: Avatar2,
    text: '“The ERP modules are well organized and highly customizable. We were able to manage leads, invoices, and customer records efficiently.”',
    name: 'Kasun Madushan',
    designation: 'Sales Executive'
  },
  {
    image: Avatar3,
    text: '“Techromz ERP improved our team productivity and simplified employee management and attendance tracking.”',
    name: 'Sahan Dilshan',
    designation: 'HR Manager'
  },
  {
    image: Avatar4,
    text: '“The dashboard analytics and reporting system provide valuable insights for our business decisions.”',
    name: 'Ravindu Silva',
    designation: 'Operations Manager'
  },
  {
    image: Avatar5,
    text: '“Customer support is excellent and the system is very easy to customize according to company requirements.”',
    name: 'Ashen Fernando',
    designation: 'System Administrator'
  },
  {
    image: Avatar6,
    text: '“We really like the modern UI design and responsive layout. Techromz ERP works perfectly across all devices.”',
    name: 'Dinuka Rajapaksha',
    designation: 'UI/UX Specialist'
  },
  {
    image: Avatar7,
    text: '“Managing projects, employees, and inventory became much easier after implementing Techromz ERP.”',
    name: 'Tharindu Jayasinghe',
    designation: 'Project Coordinator'
  },
  {
    image: Avatar8,
    text: '“A professional ERP solution with powerful features, beautiful design, and smooth performance.”',
    name: 'Isuru Lakmal',
    designation: 'Software Engineer'
  }
];
  return (
    <>
      <Box sx={{ mt: { md: 15, xs: 2.5 } }}>
        <Container>
          <Grid container spacing={2} sx={{ justifyContent: 'center', textAlign: 'center', marginBottom: 4, paddingTop: 3 }}>
            <Grid size={12}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 30,
                  delay: 0.2
                }}
              >
                <Typography variant="h2">
                  They love {' '}
                  <Typography variant="h2" component="span" sx={{ color: 'primary.main' }}>
                    ERP,
                  </Typography>{' '}
                   Now your turn 😍
                </Typography>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 30,
                  delay: 0.4
                }}
              >
                <Typography>
                  We take pride in our Dashboard development, which has been consistently rated 4.7/5 by our satisfied customers. It brings
                  us joy to share the positive feedback we have received from our loyal clients.
                </Typography>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ mb: { md: 10, xs: 2.5 } }}>
        <Grid container spacing={4}>
          <Grid sx={{ direction: theme.direction }} size={12}>
            <FadeInWhenVisible>
              <Marquee pauseOnHover direction={theme.direction === ThemeDirection.RTL ? 'right' : 'left'} gradient={false}>
                {items.map((item, index) => (
                  <Item key={index} item={item} />
                ))}
              </Marquee>
            </FadeInWhenVisible>
          </Grid>
          <Grid sx={{ direction: theme.direction }} size={12}>
            <FadeInWhenVisible>
              <Marquee pauseOnHover direction={theme.direction === ThemeDirection.RTL ? 'left' : 'right'} gradient={false}>
                {items.map((item, index) => (
                  <Item key={index} item={item} />
                ))}
              </Marquee>
            </FadeInWhenVisible>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
