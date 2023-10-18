import React from 'react';

import { SvgPathProps } from '../Icon';

const ThinkingAboutBaby: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <path d="M22.614 25.625a1.85 1.85 0 001.849-1.85h-3.698a1.85 1.85 0 001.849 1.85zm9.715-4.506a.797.797 0 00-.796-.796h-.507v1.863h.507a.797.797 0 00.796-.796v-.271zm-2.407.305c0-3.988-3.245-7.233-7.234-7.233-.283 0-.562.02-.838.052a1.243 1.243 0 00-.29.743c-.006.337.119.657.353.9.234.245.548.383.885.389.338-.002.656-.117.899-.352l.693.722a2.244 2.244 0 01-1.565.63h-.047a2.247 2.247 0 01-1.586-.695 2.243 2.243 0 01-.57-2.084c-2.984.89-5.168 3.658-5.168 6.928 0 3.99 3.245 7.235 7.234 7.235s7.234-3.245 7.234-7.235zm-15.485-1.101h-.508a.796.796 0 00-.795.796v.271c0 .44.356.796.795.796h.508v-1.863zm18.892.796v.271c0 .99-.805 1.796-1.796 1.796h-.806c-.81 3.697-4.104 6.473-8.04 6.473-3.934 0-7.228-2.776-8.038-6.473h-.72c-.99 0-1.795-.805-1.795-1.796v-.271c0-.99.805-1.796 1.795-1.796h.808c.933-3.524 4.139-6.133 7.95-6.133 3.814 0 7.02 2.61 7.952 6.133h.894c.99 0 1.796.805 1.796 1.796zM38.73 42.11c0-.598-.488-1.086-1.087-1.086-.6 0-1.087.488-1.087 1.087s.488 1.087 1.087 1.087 1.087-.488 1.087-1.087zm1.3 0a2.39 2.39 0 01-2.387 2.388 2.39 2.39 0 01-2.387-2.388 2.39 2.39 0 012.387-2.386 2.39 2.39 0 012.387 2.386zm3.909-7.627a2.826 2.826 0 00-2.823-2.823 2.826 2.826 0 00-2.823 2.823 2.827 2.827 0 002.823 2.825 2.827 2.827 0 002.823-2.825zm1.3 0a4.127 4.127 0 01-4.123 4.123 4.127 4.127 0 01-4.123-4.123 4.127 4.127 0 014.123-4.123 4.127 4.127 0 014.123 4.123zm-10.178-6.888c.197.02.397.032.599.032 3.4 0 6.167-2.907 6.167-6.48 0-3.569-2.76-6.473-6.154-6.48l-.61.04-.108-.614c-.424-3.727-3.441-6.538-7.018-6.538a6.8 6.8 0 00-4.03 1.327l-.576.422-.365-.617c-1.137-1.919-3.093-3.065-5.233-3.065-3.401 0-6.167 2.907-6.167 6.48 0 .232.012.46.035.686l.062.616-.612.093c-3.605.54-6.323 3.829-6.323 7.65 0 3.13 1.777 5.933 4.529 7.143l.29.127.078.308c.905 3.552 3.98 6.034 7.48 6.034 2.034 0 3.957-.825 5.416-2.322l.509-.524.46.566c1.177 1.449 2.887 2.28 4.69 2.28 3.4 0 6.167-2.907 6.167-6.481v-.718l.714.035zm.556 1.332c-.33 4.003-3.54 7.131-7.437 7.131-1.967 0-3.84-.806-5.232-2.234-1.633 1.445-3.684 2.234-5.843 2.234-3.994 0-7.512-2.743-8.658-6.71-3.06-1.48-5.02-4.665-5.02-8.2 0-4.252 2.902-7.942 6.842-8.828a7.87 7.87 0 01-.003-.217c0-4.29 3.349-7.78 7.467-7.78 2.38 0 4.57 1.157 5.978 3.128a8.05 8.05 0 014.226-1.197c4.055 0 7.5 3.028 8.228 7.13 3.883.271 6.963 3.65 6.963 7.763 0 4.29-3.35 7.78-7.468 7.78h-.043zm-9.847-9a.682.682 0 10-.001 1.363.682.682 0 000-1.364zm-5.483.681a.683.683 0 11-1.366-.001.683.683 0 011.366.002z" />
  );

  const normalHover = (
    <path d="M22.614 25.625a1.85 1.85 0 001.849-1.85h-3.698a1.85 1.85 0 001.849 1.85zm9.715-4.506a.797.797 0 00-.796-.796h-.507v1.863h.507a.797.797 0 00.796-.796v-.271zm-2.407.305c0-3.988-3.246-7.233-7.234-7.233a7.25 7.25 0 00-.838.052c-.17.214-.283.466-.29.743-.006.337.119.657.353.9.234.245.548.383.885.389.34-.002.656-.117.899-.352l.693.722a2.244 2.244 0 01-1.565.63h-.048a2.245 2.245 0 01-1.585-.695 2.248 2.248 0 01-.57-2.084c-2.984.89-5.168 3.658-5.168 6.928 0 3.99 3.245 7.235 7.234 7.235 3.988 0 7.234-3.245 7.234-7.235zm-15.485-1.101h-.508a.796.796 0 00-.795.796v.271c0 .44.356.796.795.796h.508v-1.863zm18.892.796v.271c0 .99-.805 1.796-1.796 1.796h-.806c-.81 3.697-4.104 6.473-8.04 6.473-3.934 0-7.23-2.776-8.038-6.473h-.72c-.99 0-1.795-.805-1.795-1.796v-.271c0-.99.805-1.796 1.795-1.796h.808c.932-3.524 4.139-6.133 7.95-6.133 3.814 0 7.02 2.61 7.952 6.133h.894c.99 0 1.796.805 1.796 1.796zm5.4 20.992c0-.598-.486-1.086-1.085-1.086-.6 0-1.087.488-1.087 1.087s.488 1.087 1.087 1.087 1.086-.488 1.086-1.087zm1.302 0a2.39 2.39 0 01-2.387 2.388 2.39 2.39 0 01-2.387-2.388 2.39 2.39 0 012.387-2.386 2.39 2.39 0 012.387 2.386zm3.909-7.627a2.826 2.826 0 00-2.823-2.823 2.826 2.826 0 00-2.823 2.823 2.827 2.827 0 002.823 2.825 2.827 2.827 0 002.823-2.825zm1.3 0a4.128 4.128 0 01-4.123 4.123 4.127 4.127 0 01-4.123-4.123 4.127 4.127 0 014.123-4.123 4.128 4.128 0 014.123 4.123zm-10.18-6.888c.199.02.399.032.6.032 3.402 0 6.168-2.907 6.168-6.48 0-3.569-2.76-6.473-6.154-6.48l-.61.04-.108-.614c-.424-3.727-3.442-6.538-7.02-6.538a6.8 6.8 0 00-4.027 1.327l-.577.422-.365-.617c-1.137-1.919-3.093-3.065-5.233-3.065-3.401 0-6.167 2.907-6.167 6.48 0 .232.012.46.035.686l.062.616-.613.093c-3.604.54-6.323 3.829-6.323 7.65 0 3.13 1.778 5.933 4.53 7.143l.29.127.078.308c.904 3.552 3.98 6.034 7.479 6.034 2.034 0 3.958-.825 5.417-2.322l.509-.524.46.566c1.177 1.449 2.887 2.28 4.69 2.28 3.4 0 6.167-2.907 6.167-6.481v-.718l.713.035zm.558 1.332c-.33 4.003-3.54 7.131-7.437 7.131-1.967 0-3.84-.806-5.232-2.234-1.634 1.445-3.684 2.234-5.844 2.234-3.993 0-7.511-2.743-8.657-6.71-3.06-1.48-5.02-4.665-5.02-8.2 0-4.252 2.902-7.942 6.842-8.828a7.87 7.87 0 01-.003-.217c0-4.29 3.349-7.78 7.467-7.78 2.38 0 4.57 1.157 5.978 3.128a8.05 8.05 0 014.225-1.197c4.056 0 7.502 3.028 8.229 7.13 3.883.271 6.963 3.65 6.963 7.763 0 4.29-3.35 7.78-7.468 7.78h-.043zm-9.854-9.056c-.83 0-1.4.675-1.463.753l.775.633c.09-.108.387-.386.688-.386h.003c.198.002.4.13.606.383l.777-.63c-.505-.622-1.033-.753-1.386-.753zm-4.84.753l-.776.63c-.204-.253-.41-.381-.605-.383-.314.023-.602.277-.692.386l-.775-.633c.063-.078.635-.753 1.463-.753.354 0 .882.13 1.386.753z" />
  );

  return isHovered ? normalHover : normal;
};

export default ThinkingAboutBaby;
