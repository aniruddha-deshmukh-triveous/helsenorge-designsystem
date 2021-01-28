import React from 'react';
import { SvgPathProps } from './Icon';

const Receptionist: React.FC<SvgPathProps> = ({ isExtraSmall, isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <path d="M34.882 20.172h-.122V14.01h.122a3.084 3.084 0 013.08 3.081 3.084 3.084 0 01-3.08 3.081zM16.42 16.076h.96c1.81 0 3.38-1.044 4.142-2.56a4.696 4.696 0 004.179 2.56h5.63v3.945c0 3.983-3.241 7.223-7.223 7.223h-.465a7.19 7.19 0 01-3.476-.897 2.135 2.135 0 001.792-2.1 2.14 2.14 0 00-2.137-2.138h-2.416a2.11 2.11 0 00-.643.11 7.198 7.198 0 01-.343-2.198v-3.945zm0-1.418c0-3.983 3.24-7.223 7.223-7.223h.465c3.982 0 7.223 3.24 7.223 7.223v.418H25.7a3.696 3.696 0 01-3.692-3.692v-.249h-1v.312a3.632 3.632 0 01-3.628 3.63h-.961v-.419zm.986 10.424a.837.837 0 010-1.673h2.416c.46 0 .837.375.837.837a.838.838 0 01-.837.836h-2.416zm-4.416-4.91h-.122a3.085 3.085 0 01-3.081-3.08 3.085 3.085 0 013.08-3.082h.123v6.162zm21.892-7.46h-.243c-.708-5.154-5.127-9.139-10.47-9.139h-.587c-5.344 0-9.763 3.985-10.471 9.138h-.243a4.385 4.385 0 00-4.381 4.38 4.386 4.386 0 004.38 4.381h.134v.764a2.655 2.655 0 002.372 2.631 2.132 2.132 0 002.033 1.515h.577a8.476 8.476 0 005.66 2.162h.465c4.699 0 8.523-3.823 8.523-8.523v-5.363c0-4.699-3.824-8.523-8.523-8.523h-.465c-4.7 0-8.523 3.824-8.523 8.523v5.363c0 1.032.19 2.034.55 2.99a2.132 2.132 0 00-.28.557 1.361 1.361 0 01-1.09-1.332v-8.083c0-5.117 4.165-9.28 9.282-9.28h.587c5.117 0 9.28 4.163 9.28 9.28h.01v7.32h1.423a4.386 4.386 0 004.38-4.382 4.385 4.385 0 00-4.38-4.38zm-7.871 6.752a.587.587 0 100-1.175.587.587 0 000 1.175zm9.412 23.413H11.327v-2.93c0-4.52 2.975-8.567 7.266-9.928 3.259 1.64 7.305 1.64 10.564 0 4.29 1.361 7.266 5.407 7.266 9.928v2.93zm-7.148-14.18l-.254-.074-.233.124c-3.006 1.602-6.82 1.602-9.825 0l-.233-.124-.254.073c-4.974 1.442-8.45 6.07-8.45 11.251v4.23h27.697v-4.23c0-5.182-3.474-9.809-8.448-11.25zm-8.453-9.233a.587.587 0 100-1.174.587.587 0 000 1.174z" />
  );

  const normalHover = (
    <path d="M23.875 25.317a1.85 1.85 0 001.849-1.85h-3.698a1.85 1.85 0 001.849 1.85zm-3.053-5.853a.587.587 0 100-1.175.587.587 0 000 1.175zm6.189 0a.587.587 0 10.001-1.175.587.587 0 00-.001 1.175zm7.87.708h-.121V14.01h.122a3.084 3.084 0 013.08 3.08 3.084 3.084 0 01-3.08 3.08zM16.42 16.076h.962a4.633 4.633 0 004.14-2.561 4.697 4.697 0 004.18 2.56h5.63v3.947c0 3.983-3.241 7.223-7.224 7.223h-.464a7.197 7.197 0 01-3.477-.897 2.134 2.134 0 001.792-2.102 2.139 2.139 0 00-2.136-2.137h-2.415c-.226 0-.44.045-.644.11a7.193 7.193 0 01-.344-2.197v-3.946zm0-1.417c0-3.983 3.24-7.223 7.224-7.223h.464c3.983 0 7.224 3.24 7.224 7.223v.417H25.7a3.695 3.695 0 01-3.692-3.691v-.25h-1v.313c0 2-1.628 3.628-3.628 3.628h-.962v-.417zm.988 10.424a.838.838 0 010-1.674h2.415a.838.838 0 010 1.674h-2.415zm-4.417-4.911h-.122a3.083 3.083 0 01-3.08-3.081 3.083 3.083 0 013.08-3.08h.122v6.16zm21.892-7.461h-.243c-.708-5.152-5.127-9.138-10.471-9.138h-.586c-5.344 0-9.763 3.986-10.471 9.138h-.243a4.386 4.386 0 00-4.381 4.38 4.386 4.386 0 004.38 4.38h.134v.766a2.653 2.653 0 002.372 2.63 2.132 2.132 0 002.034 1.515h.575a8.476 8.476 0 005.66 2.163h.465c4.7 0 8.523-3.824 8.523-8.523v-5.363c0-4.7-3.823-8.523-8.523-8.523h-.464c-4.7 0-8.523 3.823-8.523 8.523v5.363c0 1.03.19 2.034.55 2.989a2.116 2.116 0 00-.28.558 1.362 1.362 0 01-1.09-1.332v-8.083c0-5.117 4.164-9.281 9.282-9.281h.586c5.118 0 9.28 4.164 9.28 9.28h.012v7.319h1.422a4.386 4.386 0 004.38-4.381 4.385 4.385 0 00-4.38-4.38zm1.54 30.166H11.328v-2.93c0-4.521 2.975-8.567 7.266-9.927 3.259 1.638 7.305 1.638 10.564 0 4.292 1.36 7.266 5.406 7.266 9.928v2.929zm-7.148-14.181l-.253-.073-.233.124c-3.006 1.602-6.82 1.602-9.826 0l-.233-.124-.253.073c-4.975 1.443-8.45 6.07-8.45 11.252v4.229h27.697v-4.23c0-5.181-3.474-9.808-8.45-11.251z" />
  );

  const simplified = (
    <path d="M26.979 19.431a.587.587 0 100-1.174.587.587 0 000 1.174zm7.87.727h-.14v-6.199h.14c1.71 0 3.1 1.391 3.1 3.1a3.103 3.103 0 01-3.1 3.099zm-18.481-4.11h.979a4.636 4.636 0 004.14-2.555 4.703 4.703 0 004.18 2.556h5.65v3.94c0 3.992-3.25 7.241-7.242 7.241h-.465c-1.245 0-2.434-.34-3.5-.93a2.116 2.116 0 001.797-2.086c0-1.169-.95-2.12-2.117-2.12h-2.417c-.23 0-.447.047-.655.115a7.22 7.22 0 01-.35-2.22v-3.94zm0-1.423c0-3.991 3.249-7.24 7.242-7.24h.465c3.992 0 7.241 3.249 7.241 7.24v.413h-5.649a3.69 3.69 0 01-3.686-3.686v-.25h-1.01v.312a3.628 3.628 0 01-3.624 3.624h-.979v-.413zm1.005 10.443a.856.856 0 010-1.71h2.417a.856.856 0 010 1.71h-2.417zm-4.398-4.91h-.14a3.102 3.102 0 01-3.099-3.099c0-1.709 1.39-3.1 3.099-3.1h.14v6.199zm21.874-7.462h-.26c-.698-5.15-5.114-9.137-10.454-9.137h-.586c-5.34 0-9.755 3.986-10.455 9.137h-.26a4.366 4.366 0 00-4.36 4.363 4.366 4.366 0 004.36 4.362h.153v.783a2.635 2.635 0 002.367 2.614 2.113 2.113 0 002.02 1.513h.583a8.454 8.454 0 005.653 2.162h.465c4.69 0 8.504-3.814 8.504-8.505v-5.363c0-4.689-3.814-8.503-8.504-8.503h-.465c-4.69 0-8.505 3.814-8.505 8.503v5.363a8.43 8.43 0 00.553 2.993 2.078 2.078 0 00-.28.55c-.637-.12-1.128-.656-1.128-1.327v-8.083c0-5.127 4.172-9.3 9.3-9.3h.585c5.129 0 9.3 4.173 9.3 9.3h.01v7.3h1.404a4.368 4.368 0 004.363-4.362 4.368 4.368 0 00-4.363-4.363zm-14.06 6.735a.588.588 0 10-.001-1.175.588.588 0 00.001 1.175zm15.62 23.43H11.275v-2.946c0-4.532 2.985-8.587 7.286-9.949 3.26 1.641 7.302 1.641 10.561 0 4.304 1.362 7.287 5.417 7.287 9.949v2.947zm-7.173-14.18l-.247-.071-.226.12c-3.012 1.604-6.828 1.605-9.842 0l-.226-.12-.247.07c-4.968 1.442-8.436 6.06-8.436 11.235v4.21h27.66v-4.21c0-5.174-3.47-9.793-8.436-11.235z" />
  );

  const simplifiedHover = (
    <path d="M26.978 19.431a.587.587 0 100-1.174.587.587 0 000 1.174zm-3.136 5.853c1.022 0 1.85-.828 1.85-1.848h-3.698c0 1.02.827 1.848 1.848 1.848zm-3.053-5.853a.587.587 0 100-1.174.587.587 0 000 1.174zm14.06.727h-.14v-6.199h.14c1.71 0 3.1 1.391 3.1 3.1a3.103 3.103 0 01-3.1 3.099zm-18.481-4.11h.979a4.64 4.64 0 004.142-2.555 4.701 4.701 0 004.178 2.556h5.649v3.94c0 3.992-3.249 7.241-7.24 7.241h-.467c-1.244 0-2.434-.34-3.499-.93a2.116 2.116 0 001.798-2.086c0-1.169-.951-2.12-2.118-2.12h-2.417c-.23 0-.447.047-.654.115a7.183 7.183 0 01-.351-2.22v-3.94zm0-1.423c0-3.991 3.249-7.24 7.241-7.24h.467c3.991 0 7.24 3.249 7.24 7.24v.413h-5.649a3.69 3.69 0 01-3.686-3.686v-.25h-1.009v.312a3.628 3.628 0 01-3.625 3.624h-.98v-.413zm1.005 10.443a.856.856 0 010-1.71h2.417a.856.856 0 010 1.71h-2.417zm-4.397-4.91h-.141a3.103 3.103 0 01-3.099-3.099c0-1.709 1.39-3.1 3.099-3.1h.141v6.199zm21.873-7.462h-.259c-.7-5.15-5.114-9.137-10.454-9.137h-.587c-5.34 0-9.756 3.986-10.455 9.137h-.26a4.367 4.367 0 00-4.361 4.363 4.367 4.367 0 004.362 4.362h.151v.783a2.636 2.636 0 002.367 2.614 2.113 2.113 0 002.02 1.513h.584a8.459 8.459 0 005.652 2.162h.467c4.688 0 8.503-3.814 8.503-8.505v-5.363c0-4.689-3.815-8.503-8.503-8.503h-.467c-4.688 0-8.504 3.814-8.504 8.503v5.363a8.43 8.43 0 00.553 2.993c-.12.167-.212.352-.28.55-.637-.12-1.129-.656-1.129-1.327v-8.083c0-5.127 4.173-9.3 9.3-9.3h.587c5.127 0 9.298 4.173 9.298 9.3h.012v7.3h1.403a4.368 4.368 0 004.363-4.362 4.368 4.368 0 00-4.363-4.363zm1.56 30.166H11.276v-2.947c0-4.532 2.984-8.587 7.285-9.949 3.26 1.641 7.302 1.641 10.562 0 4.302 1.362 7.286 5.417 7.286 9.949v2.947zm-7.172-14.18l-.248-.072-.225.12c-3.015 1.605-6.83 1.604-9.842 0l-.228-.12-.246.07c-4.967 1.44-8.435 6.06-8.435 11.235v4.21h27.66v-4.21c0-5.174-3.47-9.793-8.436-11.233z" />
  );

  return isExtraSmall ? (isHovered ? simplifiedHover : simplified) : isHovered ? normalHover : normal;
};

export default Receptionist;
