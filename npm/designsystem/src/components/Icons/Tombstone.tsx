import React from 'react';

import { SvgPathProps, getIcon } from '../Icon';

const Tombstone: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <>
      <path d="M16.214 17.278a.65.65 0 1 0 0 1.3H29.93a.65.65 0 1 0 0-1.3H16.214Zm-.65 4.079a.65.65 0 0 1 .65-.65H26.5a.65.65 0 1 1 0 1.3H16.214a.65.65 0 0 1-.65-.65Zm1 4.493c-.552 0-1 .29-1 .65 0 .359.448.65 1 .65h6.59c.553 0 1-.291 1-.65 0-.36-.447-.65-1-.65h-6.59Zm8.429.65a.65.65 0 0 1 .65-.65h2.571a.65.65 0 1 1 0 1.3h-2.571a.65.65 0 0 1-.65-.65Z" />
      <path
        fillRule="evenodd"
        d="M23.42 5.475c-6.114 0-11.07 4.956-11.07 11.07v18.173c-1.479.04-2.547.447-3.278 1.08a3.308 3.308 0 0 0-1.133 2.907c.1.773.406 1.503 1.016 2.036.611.534 1.45.803 2.482.803H35.87c1.015 0 1.717-.22 2.211-.604.458-.355.663-.802.782-1.064l.021-.046c.382-.827.347-1.602-.062-2.335-.374-.673-1.047-1.279-1.843-1.892a4.556 4.556 0 0 0-2.488-.943V16.545c0-6.114-4.956-11.07-11.07-11.07Zm9.77 29.222V16.545c0-5.396-4.374-9.77-9.77-9.77s-9.77 4.374-9.77 9.77V34.77c.16.016.323.035.49.058 2.208.306 3.397-.066 4.322-.513.242-.117.47-.242.707-.372l.027-.014a14.9 14.9 0 0 1 .704-.371c.516-.25 1.088-.462 1.8-.525.476-.042.897-.104 1.307-.163l.29-.042c.492-.07.986-.131 1.488-.12 1.052.02 2.057.352 3.301 1.319 1.105.858 1.76 1.08 2.226 1.12.238.02.46-.006.716-.056.109-.02.216-.045.335-.072l.079-.017a8.9 8.9 0 0 1 .484-.099c.093-.015.192-.033.296-.052.289-.053.615-.112.968-.154Zm-9.982-.543.271-.04c.488-.068.891-.115 1.28-.107.726.015 1.468.221 2.53 1.046 1.202.934 2.095 1.32 2.914 1.389.405.033.758-.013 1.074-.075.129-.025.258-.054.377-.08l.072-.017c.144-.032.28-.061.418-.085l.275-.048c1.244-.218 2.54-.446 3.766.497.786.605 1.267 1.073 1.501 1.493.2.36.23.696.017 1.158-.131.285-.219.472-.42.628-.193.15-.58.33-1.414.33H11.438c-.81 0-1.315-.208-1.627-.48-.314-.274-.512-.68-.583-1.225a2.009 2.009 0 0 1 .695-1.757c.61-.529 1.805-.974 4.039-.665 2.468.341 3.915-.075 5.065-.63.277-.134.532-.274.767-.403l.016-.008c.233-.128.444-.244.658-.347.426-.208.842-.355 1.348-.4.514-.046.98-.114 1.392-.174Z"
      />
    </>
  );

  const normalHover = (
    <>
      <path d="M16.214 18.278a.65.65 0 1 0 0 1.3H29.93a.65.65 0 1 0 0-1.3H16.214Zm-.65 4.079a.65.65 0 0 1 .65-.65H26.5a.65.65 0 1 1 0 1.3H16.214a.65.65 0 0 1-.65-.65Zm1 4.493c-.552 0-1 .29-1 .65 0 .359.448.65 1 .65h6.59c.553 0 1-.291 1-.65 0-.36-.447-.65-1-.65h-6.59Zm8.429.65a.65.65 0 0 1 .65-.65h2.571a.65.65 0 1 1 0 1.3h-2.571a.65.65 0 0 1-.65-.65Z" />
      <path
        fillRule="evenodd"
        d="M23.42 5.475c-6.114 0-11.07 4.956-11.07 11.07v18.173c-1.479.04-2.547.447-3.278 1.08a3.308 3.308 0 0 0-1.133 2.907c.1.773.406 1.503 1.016 2.036.611.534 1.45.803 2.482.803H35.87c1.015 0 1.717-.22 2.211-.604.458-.355.663-.802.782-1.064l.021-.046c.382-.827.347-1.602-.062-2.335-.374-.673-1.047-1.279-1.843-1.892a4.556 4.556 0 0 0-2.488-.943V16.545c0-6.114-4.956-11.07-11.07-11.07Zm9.77 29.222V16.545c0-5.396-4.374-9.77-9.77-9.77s-9.77 4.374-9.77 9.77V34.77c.16.016.323.035.49.058 2.208.306 3.397-.066 4.322-.513.242-.117.47-.242.707-.372l.027-.014a14.9 14.9 0 0 1 .704-.371c.516-.25 1.088-.462 1.8-.525.476-.042.897-.104 1.307-.163l.29-.042c.492-.07.986-.131 1.488-.12 1.052.02 2.057.352 3.301 1.319 1.105.858 1.76 1.08 2.226 1.12.238.02.46-.006.716-.056.109-.02.216-.045.335-.072l.079-.017a8.9 8.9 0 0 1 .484-.099c.093-.015.192-.033.296-.052.289-.053.615-.112.968-.154Zm-9.982-.543.271-.04c.488-.068.891-.115 1.28-.107.726.015 1.468.221 2.53 1.046 1.202.934 2.095 1.32 2.914 1.389.405.033.758-.013 1.074-.075.129-.025.258-.054.377-.08l.072-.017c.144-.032.28-.061.418-.085l.275-.048c1.244-.218 2.54-.446 3.766.497.786.605 1.267 1.073 1.501 1.493.2.36.23.696.017 1.158-.131.285-.219.472-.42.628-.193.15-.58.33-1.414.33H11.438c-.81 0-1.315-.208-1.627-.48-.314-.274-.512-.68-.583-1.225a2.009 2.009 0 0 1 .695-1.757c.61-.529 1.805-.974 4.039-.665 2.468.341 3.915-.075 5.065-.63.277-.134.532-.274.767-.403l.016-.008c.233-.128.444-.244.658-.347.426-.208.842-.355 1.348-.4.514-.046.98-.114 1.392-.174Z"
      />
    </>
  );

  return getIcon({ size, isHovered, normal, normalHover });
};

export default Tombstone;
