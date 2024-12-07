import { css } from '@styled/css';

export interface EmailWbrProps {
  email: string;
}

const EmailWbr = ({ email }: EmailWbrProps) => {
  const emailSplit = email.split('@');
  return (
    <span className={css({ overflowWrap: 'break-word', wordBreak: 'break-word', fontWeight: 600 })}>
      {emailSplit[0]}
      <wbr />@{emailSplit[1]}
    </span>
  );
};

EmailWbr.displayName = 'EmailWbr';

export default EmailWbr;
