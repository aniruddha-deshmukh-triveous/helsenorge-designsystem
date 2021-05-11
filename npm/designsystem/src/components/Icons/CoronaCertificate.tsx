import React from 'react';
import { SvgPathProps } from './Icon';

const CoronaCertificate: React.FC<SvgPathProps> = ({ isExtraSmall, isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <path
      fillRule={'evenodd'}
      d="M28.026 29.143h9.5v-1.3h-9.5v1.3zm0-4.493h9.5v-1.3h-9.5v1.3zm0-4.493h9.5v-1.3h-9.5v1.3zm-7.61 2.813a.778.778 0 11-1.48.48.778.778 0 011.48-.48zm-1.031 2.632a.778.778 0 11-1.26.912.778.778 0 011.26-.912zm-3.166-.17a.777.777 0 11-.914 1.258.777.777 0 01.914-1.257zm-1.625-1.477a.778.778 0 11.482-1.48.778.778 0 01-.482 1.48zm3.437-2.501a.777.777 0 11-1.555 0 .777.777 0 011.555 0zm-.774 7.276a4.736 4.736 0 01-4.73-4.73 4.736 4.736 0 014.73-4.73 4.736 4.736 0 014.73 4.73 4.736 4.736 0 01-4.73 4.73zm6.71-5.23h-1.005a5.698 5.698 0 00-1.32-3.18l.713-.711.273.273.707-.707-1.254-1.254-.707.707.274.274-.712.71a5.694 5.694 0 00-3.18-1.317V17.29h.387v-1H16.37v1h.387v1.004a5.707 5.707 0 00-3.18 1.318l-.711-.711.273-.274-.707-.707-1.254 1.254.707.707.274-.273.71.71a5.707 5.707 0 00-1.317 3.18h-1.005v-.386h-1v1.774h1V24.5h1.005a5.7 5.7 0 001.318 3.179l-.711.712-.274-.273-.707.707 1.254 1.253.707-.707-.273-.273.71-.712a5.698 5.698 0 003.18 1.319v1.004h-.386v1h1.773v-1h-.386v-1.004a5.707 5.707 0 003.18-1.318l.71.71-.273.274.707.707 1.254-1.253-.707-.707-.273.273-.711-.711a5.707 5.707 0 001.318-3.18h1.005v.387h1v-1.774h-1v.387zm17.835 10.512c0 1.082-.88 1.962-1.961 1.962H8.159a1.964 1.964 0 01-1.961-1.962V13.987c0-1.081.88-1.961 1.96-1.961h31.683c1.08 0 1.96.88 1.96 1.96v20.026zM39.84 10.727H8.159a3.264 3.264 0 00-3.261 3.26v20.025a3.264 3.264 0 003.26 3.26h31.683a3.264 3.264 0 003.26-3.26V13.987a3.264 3.264 0 00-3.26-3.26z"
    />
  );

  const normalHover = (
    <path
      fillRule={'evenodd'}
      d="M28.026 29.143h9.5v-1.3h-9.5v1.3zm0-4.493h9.5v-1.3h-9.5v1.3zm0-4.493h9.5v-1.3h-9.5v1.3zm-7.468 4.23a.778.778 0 01-1.544-.182.778.778 0 011.544.182zm-2.04 1.958a.777.777 0 11-1.523.304.777.777 0 011.524-.304zm-2.803-1.478a.777.777 0 11-1.355.76.777.777 0 011.355-.76zm.198-3.164a.777.777 0 11-1.057 1.14.777.777 0 011.057-1.14zm3.113.308a.777.777 0 11-1.412-.65.777.777 0 011.412.65zm2.527 3.968a4.7 4.7 0 01-2.657 2.459 4.704 4.704 0 01-3.62-.142 4.7 4.7 0 01-2.457-2.657 4.701 4.701 0 01.14-3.618 4.703 4.703 0 012.659-2.46 4.712 4.712 0 013.618.142 4.698 4.698 0 012.459 2.658 4.701 4.701 0 01-.142 3.618zm2.305-3.471l.938-.347-.613-1.663-.94.347.135.362-.964.356a5.637 5.637 0 00-2.326-2.514l.43-.934.352.162.418-.908-1.611-.742-.418.908.35.162-.43.933a5.643 5.643 0 00-3.421-.133l-.356-.964.363-.134-.347-.94-1.663.615.347.939.362-.134.356.964a5.646 5.646 0 00-2.514 2.325l-.934-.43.162-.351-.91-.418-.74 1.61.908.419.162-.351.933.43a5.642 5.642 0 00-.133 3.422l-.964.355-.134-.362-.94.347.616 1.663.938-.347-.134-.362.964-.356a5.646 5.646 0 002.325 2.514l-.43.934-.351-.162-.418.908 1.61.742.418-.908-.35-.162.42-.913a5.7 5.7 0 001.93.343c.505 0 1.007-.09 1.503-.226l.354.96-.362.134.347.939 1.663-.615-.347-.938-.362.134-.356-.964a5.646 5.646 0 002.514-2.325l.934.429-.162.352.908.418.742-1.611-.908-.418-.162.35-.934-.43a5.635 5.635 0 00.134-3.421l.964-.355.134.362zm17.944 11.504c0 1.082-.88 1.962-1.961 1.962H8.159a1.964 1.964 0 01-1.961-1.962V13.987c0-1.081.88-1.961 1.96-1.961h31.683c1.08 0 1.96.88 1.96 1.96v20.026zM39.84 10.727H8.159a3.264 3.264 0 00-3.261 3.26v20.025a3.264 3.264 0 003.26 3.26h31.683a3.264 3.264 0 003.26-3.26V13.987a3.264 3.264 0 00-3.26-3.26z"
    />
  );

  return isHovered ? normalHover : normal;
};

export default CoronaCertificate;