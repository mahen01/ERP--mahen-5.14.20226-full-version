// material-ui
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// third-party
import { motion } from 'framer-motion';

// project-imports
import Logo from 'components/logo';
import { useBuyNowLink } from 'hooks/buyNowLink';

// assets
import LinkeDinIcon from 'assets/third-party/linkedin';
import GithubFilledIcon from 'assets/third-party/githubFilled';

import { Dribbble, Facebook, Youtube } from 'iconsax-reactjs';

// link - custom style
const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.vars.palette.text.primary,
  '&:hover, &:active': {
    color: theme.vars.palette.primary.main
  }
}));

type showProps = {
  isFull?: boolean;
};

// ==============================|| LANDING - FOOTER PAGE ||============================== //

export default function FooterBlock({ isFull }: showProps) {
  const { isPhoenix } = useBuyNowLink();

  const SupportLink = isPhoenix ? 'https://phoenixcoded.authordesk.app/' : 'https://codedthemes.support-hub.io/';

  const linkSX = { color: 'text.secondary', fontWeight: 400, opacity: '0.6', cursor: 'pointer', '&:hover': { opacity: '1' } };

  const footerData = [
    { label: 'Profile', link: 'https://1.envato.market/xk3bQd' },
    { label: 'Portfolio', link: 'https://1.envato.market/Qyre4x' },
    { label: 'Follow Us', link: 'https://1.envato.market/Py9k4X' },
    { label: 'Website', link: 'https://codedthemes.com/' }
  ];
  const EcoSystem = [
      {
        label: 'ERP Dashboard',
        link: '#'
      },
      {
        label: 'Customer Management',
        link: '#'
      },
      {
        label: 'Sales Tracking',
        link: '#'
      },
      {
        label: 'Lead Management',
        link: '#'
      },
      {
        label: 'Task & Project Management',
        link: '#'
      },
      {
        label: 'HR & Employee Management',
        link: '#'
      },
      {
        label: 'Reports & Analytics',
        link: '#'
      },
      {
        label: 'Workflow Automation',
        link: '#'
      }
    ];

  return (
    <>
      <Box sx={{ mt: isFull ? 0 : 10, pt: isFull ? 5 : 10, pb: 10, bgcolor: 'secondary.200', borderColor: 'divider' }}>
        <Container>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 4 }}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 30
                }}
              >
                <Grid container spacing={2}>
                  <Grid size={12}>
                    <Logo to="/" />
                  </Grid>
                  <Grid size={12}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 400, maxWidth: 320 }}>
                      Techromz has earned the trust of modern businesses by delivering smart and reliable ERP solutions. Our dedicated development team focuses on building high-quality systems that simplify business operations, improve productivity, and support business growth.
                    </Typography>
                  </Grid>
                </Grid>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 8 }}>
              <Grid container spacing={{ xs: 5, md: 2 }}>
                <Grid size={{ xs: 6, sm: 4 }}>
                  <Stack sx={{ gap: 3 }}>
                    <Typography variant="h5">{isPhoenix ? 'Company' : 'Techromz ERP'}</Typography>
                    <Stack sx={{ gap: { xs: 1.5, md: 2.5 } }}>
                      {(isPhoenix ? footerData : EcoSystem).map((item, index) => (
                        <FooterLink key={index} href={item.link} target="_blank" underline="none">
                          {item.label}
                        </FooterLink>
                      ))}
                    </Stack>
                  </Stack>
                </Grid>
                <Grid size={{ xs: 6, sm: 4 }}>
                  <Stack sx={{ gap: 3 }}>
                    <Typography variant="h5">Help & Support</Typography>
                    <Stack sx={{ gap: { xs: 1.5, md: 2.5 } }}>
                      <FooterLink href="https://techromz.com/erp/docs" target="_blank" underline="none">
                        Documentation
                      </FooterLink>
                      <FooterLink href={SupportLink} target="_blank" underline="none">
                        Feature Request
                      </FooterLink>
                      <FooterLink href="https://techromz.com/erp/docs" target="_blank" underline="none">
                        RoadMap
                      </FooterLink>
                      <FooterLink href="https://techromz.com/contact-us-2/" target="_blank" underline="none">
                        Support
                      </FooterLink>
                      <FooterLink href="https://techromz.com/contact-us-2/" target="_blank" underline="none">
                        Email Us
                      </FooterLink>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid size={{ xs: 6, sm: 4 }}>
                  <Stack sx={{ gap: 3 }}>
                    <Typography variant="h5">Useful Resources</Typography>
                    <Stack sx={{ gap: { xs: 1.5, md: 2.5 } }}>
                      <FooterLink href="https://techromz.com/privacy-policy-2/" target="_blank" underline="none">
                        Privacy Policy
                      </FooterLink>
                      <FooterLink href="https://techromz.com/terms-of-use/" target="_blank" underline="none">
                        Licenses Term
                      </FooterLink>
                    </Stack>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ py: 2.4, borderTop: '1px solid', borderColor: 'divider', bgcolor: 'secondary.200' }}>
        <Container>
          <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
            <Typography>
              © ERP Powered by
              <Link href="https://techromz.com/" target="_blank" underline="none">
                {' '}
                Techromz
              </Link>
              .
            </Typography>
            <Stack direction="row" sx={{ alignItems: 'center', justifyContent: { xs: 'flex-start', sm: 'flex-end' }, gap: 3 }}>
              <Tooltip title="Linkedin">
                <Link href="https://www.linkedin.com/company/techromz" underline="none" target="_blank" sx={linkSX}>
                  <LinkeDinIcon size={20} />
                </Link>
              </Tooltip>
              <Tooltip title="Facebook">
                <Link href="https://www.facebook.com/Techromz/" underline="none" target="_blank" sx={linkSX}>
                  <Facebook size={20} variant="Bold" />
                </Link>
              </Tooltip>
              
              
              
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
