import React from 'react';

import { SvgPathProps } from '../Icon';

const UniProsthesis: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <path
      fillRule={'evenodd'}
      d="M15.275 12.047l2.452 2.452 1.05-1.05-2.452-2.453-1.05 1.051zm2.452 3.866l-3.866-3.866 2.464-2.465 3.867 3.866-2.465 2.465zm6.798 3.26h.778c.425 0 .77-.346.77-.77 0-.444-.324-.78-.738-.797l-2.503-.103-.054-.055-1.05 1.051.014.016v2.69c0 .425.346.771.77.771a.772.772 0 00.771-.77v-.79c0-.685.557-1.243 1.242-1.243zm-4.333-2.209l.828.828 1.051-1.05-.829-.829-1.05 1.051zm5.111 3.21h-.778a.243.243 0 00-.242.242v.79c0 .976-.795 1.77-1.77 1.77-.976 0-1.77-.794-1.77-1.77v-2.277l-1.965-1.965 2.464-2.465 2.021 2.022 2.113.085a1.764 1.764 0 011.697 1.768 1.778 1.778 0 01-1.77 1.8zm2.425 22.054h1.485v-3.383h-1.485v3.383zm-1 1h3.485v-5.383h-3.485v5.383zm4.388-13.054a.788.788 0 00-1.089 0l-.558.56a1.246 1.246 0 01-1.758 0l-.55-.55a.788.788 0 00-1.089 0c-.314.311-.323.78-.042 1.085l1.698 1.841v.152h1.485v-.096l1.903-1.903c.3-.3.3-.789 0-1.089zm-3.388 5.185h1.485v-1.097h-1.485v1.097zm4.095-5.892c.69.69.69 1.812 0 2.503l-1.61 1.61v2.78h-3.485V33.5l-1.433-1.555a1.765 1.765 0 01.05-2.45c.708-.708 1.854-.688 2.523-.02l.55.55a.247.247 0 00.344 0l.558-.559c.67-.668 1.835-.668 2.503 0zm-5.613-4.989c0 1.094.89 1.985 1.985 1.985a1.987 1.987 0 001.985-1.985c0-1.095-.89-1.986-1.985-1.986a1.988 1.988 0 00-1.985 1.986zm1.985-2.986a2.989 2.989 0 012.985 2.986 2.988 2.988 0 01-2.985 2.985 2.988 2.988 0 01-2.985-2.985 2.989 2.989 0 012.985-2.986zm5.078-6.882L22.087 3.604l-.912.925 11.186 11.007a14.088 14.088 0 014.181 9.98v17.848h1.3V25.516c0-4.073-1.666-8.049-4.569-10.906zM19.944 27.191l.191.46v15.713h-1.3V27.92L8.306 17.392l.92-.92 10.718 10.72z"
    />
  );

  const normalHover = (
    <path
      fillRule={'evenodd'}
      d="M15.275 12.047l2.452 2.452 1.051-1.05-2.452-2.453-1.05 1.051zm2.452 3.866l-3.866-3.866 2.465-2.465 3.866 3.866-2.465 2.465zm6.8 3.26h.776a.772.772 0 00.771-.77c0-.444-.325-.78-.738-.797l-2.504-.103-.054-.055-1.05 1.051.015.016v2.69a.771.771 0 001.54 0v-.789c0-.685.557-1.243 1.243-1.243zm-4.335-2.209l.828.828 1.051-1.05-.829-.829-1.05 1.051zm4.091 4.241c0 .977-.794 1.771-1.77 1.771s-1.77-.794-1.77-1.77v-2.277l-1.965-1.965 2.464-2.465 2.021 2.022 2.113.085a1.765 1.765 0 011.698 1.768 1.78 1.78 0 01-1.77 1.8h-.778a.243.243 0 00-.243.242v.79zm1.305 20.836l1.474.18.408-3.359-1.474-.179-.408 3.358zm-.464-4.472l3.46.422-.65 5.343-3.46-.422.65-5.343zm5.441-6.516a.764.764 0 00-.158-.568.766.766 0 00-1.08-.13l-.623.485a1.244 1.244 0 01-1.745-.212l-.479-.612a.772.772 0 00-1.08-.132c-.35.273-.417.737-.174 1.073l1.463 2.033-.019.152 1.475.178.011-.094 2.12-1.659a.768.768 0 00.29-.514zm-2.673 4.35l.132-1.09-1.475-.179-.132 1.09 1.475.178zm3.302-5.534c.292.371.421.835.364 1.305a1.761 1.761 0 01-.666 1.18L29.1 33.757l-.336 2.76-3.46-.423.346-2.836-1.235-1.717a1.766 1.766 0 01.345-2.427 1.779 1.779 0 012.508.285l.48.612a.245.245 0 00.341.042l.622-.486a1.76 1.76 0 011.304-.365c.47.058.89.294 1.18.667zm-4.984-5.39c0 1.093.89 1.984 1.985 1.984a1.987 1.987 0 001.985-1.985c0-1.095-.89-1.986-1.985-1.986a1.988 1.988 0 00-1.985 1.986zm1.985-2.987a2.989 2.989 0 012.985 2.986 2.988 2.988 0 01-2.985 2.985 2.988 2.988 0 01-2.985-2.985 2.989 2.989 0 012.985-2.986zm5.078-6.882L22.087 3.604l-.912.925 11.186 11.007c2.657 2.615 4.181 6.252 4.186 9.9L34.2 44.233l1.29.16 2.352-18.877c0-4.073-1.665-8.049-4.569-10.906zM19.944 27.191l.186.54-1.783 14.522-1.29-.158 1.744-14.209L8.307 17.392l.92-.92 10.717 10.72z"
    />
  );

  return isHovered ? normalHover : normal;
};

export default UniProsthesis;
