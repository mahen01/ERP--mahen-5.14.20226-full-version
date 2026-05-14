import { Link as RouterLink } from 'react-router-dom';

// material-ui
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project-imports
import { useBuyNowLink } from 'hooks/buyNowLink';

// ==============================|| MAIN LAYOUT - FOOTER ||============================== //

export default function Footer() {
  const { isPhoenix } = useBuyNowLink();

  const SupportLink = isPhoenix ? 'https://phoenixcoded.authordesk.app/' : 'https://codedthemes.support-hub.io/';

  return (
    <Stack direction={{ sm: 'row' }} sx={{ gap: 1, justifyContent: 'space-between', alignItems: 'center', pt: 3, mt: 'auto' }}>
      <Typography>
              © ERP Powered by
              <Link href="https://techromz.com/" target="_blank" underline="none">
                {' '}
                Techromz
              </Link>
              .
            </Typography>
      <Stack direction="row" sx={{ gap: 1.5, justifyContent: 'space-between', alignItems: 'center' }}>
        <Link component={RouterLink} to="/" target="_blank" variant="caption" color="text.primary">
          Home
        </Link>
        <Link component={RouterLink} to="#" target="_blank" variant="caption" color="text.primary">
          Documentation
        </Link>
        <Link component={RouterLink} to="#" target="_blank" variant="caption" color="text.primary">
          Support
        </Link>
      </Stack>
    </Stack>
  );
}
