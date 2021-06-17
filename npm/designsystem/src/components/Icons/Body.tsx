import React from 'react';
import { SvgPathProps } from './Icon';

const Body: React.FC<SvgPathProps> = ({ isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <path
      d="M37.2392,22.868 C37.1342,23.211 36.8992,23.486 36.5752,23.641 C36.2522,23.797 35.8912,23.81 35.5572,23.679 L28.9732,21.082 C28.7682,20.999 28.5342,21.029 28.3542,21.159 C28.1752,21.289 28.0732,21.501 28.0862,21.722 L29.1442,41.027 C29.1602,41.317 29.0592,41.594 28.8592,41.805 C28.6592,42.015 28.3892,42.132 28.0982,42.132 C27.6012,42.132 27.1702,41.778 27.0722,41.29 L24.6372,29.13 C24.5762,28.826 24.3092,28.607 24.0002,28.607 C23.6902,28.607 23.4232,28.826 23.3632,29.13 L20.9272,41.29 C20.8292,41.778 20.3982,42.132 19.9012,42.132 C19.6102,42.132 19.3402,42.015 19.1402,41.804 C18.9402,41.593 18.8392,41.317 18.8552,41.027 L19.9132,21.722 C19.9262,21.501 19.8242,21.289 19.6452,21.159 C19.4652,21.029 19.2312,20.999 19.0262,21.082 L12.4422,23.679 C12.1082,23.81 11.7462,23.797 11.4242,23.641 C11.1002,23.486 10.8652,23.211 10.7602,22.868 C10.5792,22.274 10.8502,21.641 11.4052,21.362 L20.2822,16.895 C22.5782,15.742 25.4202,15.741 27.7172,16.895 L36.5942,21.362 C37.1492,21.64 37.4202,22.274 37.2392,22.868 M37.1782,20.201 L28.3012,15.734 C25.6442,14.399 22.3562,14.399 19.6982,15.734 L10.8212,20.201 C9.6992,20.765 9.1512,22.046 9.5172,23.247 C9.7252,23.931 10.2152,24.502 10.8592,24.812 C11.5032,25.123 12.2552,25.151 12.9192,24.888 L18.5602,22.663 L17.5572,40.956 C17.5212,41.606 17.7482,42.225 18.1962,42.698 C18.6372,43.164 19.2592,43.431 19.9012,43.431 C21.0152,43.431 21.9832,42.639 22.2022,41.545 L24.0002,32.568 L25.7982,41.545 C26.0162,42.639 26.9842,43.431 28.0992,43.431 C28.7502,43.431 29.3552,43.171 29.8032,42.698 C30.2512,42.225 30.4782,41.607 30.4422,40.956 L29.4392,22.663 L35.0802,24.888 C35.7452,25.151 36.4962,25.123 37.1402,24.812 C37.7842,24.502 38.2742,23.931 38.4822,23.247 C38.8492,22.046 38.3012,20.764 37.1782,20.201 M23.6632,5.868 C25.4052,5.868 26.8222,7.285 26.8222,9.027 C26.8222,10.768 25.4052,12.186 23.6632,12.186 C21.9222,12.186 20.5042,10.768 20.5042,9.027 C20.5042,7.285 21.9222,5.868 23.6632,5.868 M23.6632,13.486 C26.1222,13.486 28.1222,11.486 28.1222,9.027 C28.1222,6.568 26.1222,4.568 23.6632,4.568 C21.2042,4.568 19.2042,6.568 19.2042,9.027 C19.2042,11.486 21.2042,13.486 23.6632,13.486"
      fill-rule="evenodd"
    ></path>
  );

  const normalHover = (
    <path
      d="M37.1749,18.6546 L28.5879,19.9266 C28.2579,19.9756 28.0179,20.2666 28.0329,20.5996 L29.1439,41.0276 C29.1599,41.3176 29.0589,41.5926 28.8599,41.8036 C28.6599,42.0156 28.3889,42.1316 28.0989,42.1316 C27.6009,42.1316 27.1699,41.7776 27.0719,41.2906 L24.6369,29.1296 C24.5759,28.8256 24.3089,28.6076 23.9999,28.6076 C23.6899,28.6076 23.4229,28.8256 23.3619,29.1296 L20.9269,41.2906 C20.8299,41.7776 20.3979,42.1316 19.9009,42.1316 C19.6099,42.1316 19.3399,42.0156 19.1399,41.8046 C18.9409,41.5936 18.8399,41.3176 18.8549,41.0276 L19.9139,21.7156 L19.9649,20.5986 C19.9799,20.2656 19.7409,19.9756 19.4109,19.9266 L10.7709,18.6496 C10.0739,18.6046 9.5279,18.0226 9.5279,17.3236 C9.5279,16.6386 10.0619,16.0576 10.6909,16.0026 L23.9999,16.0126 L37.2789,16.0026 C37.9499,16.0716 38.4719,16.6466 38.4719,17.3236 C38.4719,18.0226 37.9259,18.6046 37.1749,18.6546 M37.3619,14.7046 C37.3439,14.7036 37.3169,14.7156 37.3079,14.7026 L23.9999,14.7136 L10.6369,14.7046 C9.2859,14.8176 8.2279,15.9676 8.2279,17.3236 C8.2279,18.7066 9.3079,19.8586 10.6339,19.9406 L18.6399,21.1266 L17.5569,40.9556 C17.5219,41.6066 17.7489,42.2256 18.1959,42.6976 C18.6439,43.1716 19.2489,43.4316 19.9009,43.4316 C21.0149,43.4316 21.9829,42.6386 22.2019,41.5456 L23.9999,32.5676 L25.7979,41.5456 C26.0159,42.6386 26.9839,43.4316 28.0989,43.4316 C28.7409,43.4316 29.3629,43.1636 29.8039,42.6976 C30.2509,42.2246 30.4779,41.6056 30.4419,40.9556 L29.3839,21.6556 L29.3599,21.1266 L37.3119,19.9466 C38.6909,19.8586 39.7719,18.7066 39.7719,17.3236 C39.7719,15.9676 38.7139,14.8176 37.3619,14.7046 M23.6639,5.8676 C25.4049,5.8676 26.8219,7.2846 26.8219,9.0266 C26.8219,10.7686 25.4049,12.1856 23.6639,12.1856 C21.9219,12.1856 20.5049,10.7686 20.5049,9.0266 C20.5049,7.2846 21.9219,5.8676 23.6639,5.8676 M23.6639,13.4856 C26.1219,13.4856 28.1219,11.4856 28.1219,9.0266 C28.1219,6.5686 26.1219,4.5686 23.6639,4.5686 C21.2049,4.5686 19.2049,6.5686 19.2049,9.0266 C19.2049,11.4856 21.2049,13.4856 23.6639,13.4856"
      fill-rule="evenodd"
    ></path>
  );

  return isHovered ? normalHover : normal;
};

export default Body;
