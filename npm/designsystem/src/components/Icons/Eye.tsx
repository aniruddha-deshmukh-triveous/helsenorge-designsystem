import React from 'react';

import { getIcon, SvgPathProps } from '../Icon';

const Eye: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <g>
      <path d="M23.478 31.714c-10.093 0-14.402-8.042-15.149-9.618.747-1.577 5.056-9.618 15.15-9.618 10.085 0 14.395 8.03 15.147 9.614-.747 1.536-5.162 9.622-15.148 9.622zm16.462-9.871c-.045-.106-4.632-10.665-16.462-10.665S7.061 21.737 7.016 21.843l-.106.253.106.252c.045.107 4.632 10.666 16.462 10.666s16.417-10.56 16.462-10.666l.107-.252-.107-.253z" />
      <path d="M23.478 30.107c-4.417 0-8.01-3.594-8.01-8.012 0-4.417 3.593-8.01 8.01-8.01s8.012 3.593 8.012 8.01c0 4.418-3.595 8.012-8.012 8.012m0-17.323c-5.134 0-9.31 4.177-9.31 9.311 0 5.135 4.176 9.312 9.31 9.312s9.312-4.177 9.312-9.312c0-5.134-4.178-9.31-9.312-9.31" />
      <path d="M23.478 19.146a2.95 2.95 0 100 5.899 2.95 2.95 0 000-5.898" />
    </g>
  );

  const normalHover = (
    <g>
      <path d="M23.478 31.714c-10.093 0-14.402-8.042-15.149-9.618.747-1.577 5.056-9.618 15.15-9.618 10.085 0 14.395 8.03 15.147 9.614-.747 1.536-5.162 9.622-15.148 9.622zm16.462-9.871c-.045-.106-4.632-10.665-16.462-10.665S7.061 21.737 7.016 21.843l-.106.253.106.252c.045.107 4.632 10.666 16.462 10.666s16.417-10.56 16.462-10.666l.107-.252-.107-.253z" />
      <path d="M23.478 30.107c-4.417 0-8.01-3.594-8.01-8.012 0-4.417 3.593-8.01 8.01-8.01s8.012 3.593 8.012 8.01c0 4.418-3.595 8.012-8.012 8.012m0-17.323c-5.134 0-9.31 4.177-9.31 9.311 0 5.135 4.176 9.312 9.31 9.312s9.312-4.177 9.312-9.312c0-5.134-4.178-9.31-9.312-9.31" />
      <path d="M25.97 19.146a2.949 2.949 0 100 5.898 2.949 2.949 0 000-5.897" />
    </g>
  );

  const xSmall = (
    <path d="M23.868 20.878a2.99 2.99 0 100 5.981 2.99 2.99 0 000-5.981m5.01 11.095c2.715-1.683 4.531-4.682 4.531-8.104 0-3.443-1.84-6.457-4.58-8.136 5.71 1.828 8.577 6.464 9.442 8.13-.864 1.637-3.75 6.257-9.393 8.11M15.842 23.87c0-4.426 3.6-8.026 8.026-8.026 4.425 0 8.026 3.6 8.026 8.026 0 4.425-3.6 8.025-8.026 8.025s-8.026-3.6-8.026-8.025m-6.38 0c.865-1.666 3.733-6.308 9.447-8.136-2.742 1.677-4.581 4.693-4.581 8.136 0 3.443 1.839 6.457 4.582 8.135-5.718-1.828-8.585-6.473-9.448-8.135m14.406-10.413c-11.698 0-16.086 10.413-16.086 10.413s4.388 10.412 16.086 10.412c11.698 0 16.087-10.412 16.087-10.412s-4.389-10.413-16.087-10.413" />
  );

  const xSmallHover = (
    <path d="M26.395 20.878a2.99 2.99 0 10-.001 5.981 2.99 2.99 0 000-5.981m2.483 11.095c2.715-1.683 4.532-4.68 4.532-8.104 0-3.443-1.839-6.459-4.581-8.136 5.71 1.827 8.578 6.464 9.443 8.13-.864 1.637-3.751 6.259-9.394 8.11m-5.008-.08c-4.425 0-8.026-3.6-8.026-8.024 0-4.426 3.6-8.026 8.026-8.026 4.424 0 8.026 3.6 8.026 8.026 0 4.425-3.602 8.025-8.026 8.025M9.462 23.869c.866-1.666 3.733-6.307 9.446-8.136-2.74 1.679-4.58 4.693-4.58 8.136 0 3.443 1.84 6.457 4.58 8.135-5.716-1.83-8.583-6.474-9.446-8.135M23.87 13.456c-11.698 0-16.087 10.413-16.087 10.413s4.389 10.412 16.087 10.412S39.955 23.87 39.955 23.87s-4.388-10.413-16.086-10.413" />
  );

  const xxSmall = (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.203 29.543c-2.522-1.82-4.125-3.905-4.822-5.329 2.174-3.476 7.174-9.542 16.473-9.542 9.202 0 13.854 5.912 16.567 9.533-2.041 3.3-7.426 9.024-16.567 9.024-4.92 0-8.827-1.65-11.651-3.686Zm11.651-17.371c-11.149 0-16.83 7.715-18.952 11.308l-.302.512.206.557c.726 1.964 2.772 4.741 5.934 7.022 3.197 2.305 7.607 4.158 13.114 4.158 11.048 0 17.234-7.422 19.164-11.023l.377-.703-.48-.638-.325-.435c-2.692-3.609-8.024-10.758-18.736-10.758Zm.144 17.278a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"
    />
  );
  const xxSmallHover = (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.205 29.543c-2.522-1.82-4.125-3.905-4.821-5.329 2.173-3.476 7.174-9.542 16.473-9.542 9.201 0 13.854 5.912 16.567 9.533-2.042 3.3-7.426 9.024-16.567 9.024-4.92 0-8.828-1.65-11.652-3.686Zm11.652-17.371c-11.15 0-16.83 7.715-18.952 11.308l-.302.512.206.557c.725 1.964 2.772 4.741 5.934 7.022 3.197 2.305 7.607 4.158 13.114 4.158 11.048 0 17.233-7.422 19.163-11.023l.377-.703-.48-.638-.324-.435c-2.692-3.609-8.025-10.758-18.736-10.758ZM30 29.45a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"
    />
  );

  return getIcon({ size, isHovered, normal, normalHover, xSmall, xSmallHover, xxSmall, xxSmallHover });
};

export default Eye;
