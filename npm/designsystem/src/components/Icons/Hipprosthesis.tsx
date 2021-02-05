import React from 'react';
import { SvgPathProps } from './Icon';

const Hipprosthesis: React.FC<SvgPathProps> = ({ isExtraSmall, isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <path
      fillRule={'evenodd'}
      d="M34.097 40.288c-.407-1.08-.873-3.705-1.198-5.544-.321-1.806-.623-3.512-.936-4.554-.343-1.14-.897-1.904-1.335-2.372.305-.238.59-.508.82-.843a3.85 3.85 0 00.399-.74c.949.567 1.692.882 2.26 1.117 1.016.42 1.358.562 1.777 1.612.928 2.332-.761 9.441-1.787 11.324zm-7.365-13.387l-.282-.195 2.983-4.314.282.195a2.626 2.626 0 01.665 3.648 2.624 2.624 0 01-3.648.666zm-2.35.507a4.886 4.886 0 01-2.167-.834 4.881 4.881 0 01-2.038-3.166 4.903 4.903 0 01.796-3.683 4.88 4.88 0 013.164-2.042 4.888 4.888 0 013.679.793 4.89 4.89 0 011.546 1.734l-4.98 7.198zm17.8 3.718c-.09-1.487-.587-2.554-1.48-3.168-.96-.664-2.308-.743-4-.25-.554-.906-1.228-1.197-2.097-1.557a14.67 14.67 0 01-2.471-1.27 3.918 3.918 0 00-1.68-3.364l-.281-.194.677-.979-.143-.33a6.111 6.111 0 00-1.812-2.335c2.816-3.906 4.283-7.9 4.44-12.189l-1.298-.049c-.15 4.042-1.546 7.821-4.232 11.53a6.164 6.164 0 00-3.901-.567 6.172 6.172 0 00-4 2.58 6.19 6.19 0 00-1.006 4.656 6.158 6.158 0 002.045 3.586c-.161.364-.321.727-.471 1.073-1.562 3.608-2.505 5.786-6.316 5.786-2.708 0-3.651-.917-4.845-2.078-.596-.58-1.263-1.23-2.202-1.788v-4.235c.743-.566 2.034-1.232 3.394-1.932 2.703-1.393 5.768-2.972 6.944-4.904 1.594-2.618.074-5.264-1.148-7.39-.233-.407-.457-.796-.644-1.163-.527-1.03-1.426-3.399-1.454-5.737l-1.3.016c.029 2.41.878 4.907 1.596 6.312.197.385.43.792.675 1.218 1.106 1.925 2.359 4.108 1.165 6.07-.986 1.618-4.005 3.172-6.43 4.422-1.648.85-3.072 1.582-3.878 2.293l-.22.194v5.606l.345.184c.962.511 1.617 1.148 2.25 1.765 1.237 1.204 2.515 2.448 5.752 2.448 4.665 0 5.92-2.9 7.509-6.57l.369-.84a6.091 6.091 0 002.638.761l.36.018.678-.98.283.196a3.911 3.911 0 002.225.694c.41 0 .814-.087 1.205-.214.29.246.93.9 1.295 2.112.018.061.036.132.054.2-2.897 2.151-3.957 4.8-2.886 7.296.298.698.654 2.144.654 5.075h1.3c0-2.53-.255-4.409-.76-5.586-.99-2.309.614-4.242 2.015-5.4.17.834.344 1.811.523 2.824.768 4.325 1.183 6.276 1.944 6.802.126.087.292.15.476.15a.926.926 0 00.58-.219c1.368-1.087 3.47-9.457 2.598-12.796.909-.245 2.024-.38 2.749.12.546.375.855 1.108.92 2.175.08 1.338-.557 3.214-1.232 5.198-.765 2.252-1.557 4.581-1.557 6.732h1.3c0-1.936.757-4.16 1.488-6.313.717-2.109 1.395-4.102 1.298-5.695zm-26.03-3.767c-.052.461-.33 1.608-1.78 2.306-.608.295-1.168.358-1.573.188a.882.882 0 01-.51-.539c-.272-.838.202-1.527.508-1.863.642-.706 1.637-1.124 2.582-1.124.209 0 .415.021.614.063.073.081.22.42.159.97zm.163-2.229c-1.571-.356-3.37.226-4.48 1.445-.844.928-1.13 2.072-.781 3.142a2.2 2.2 0 001.234 1.332c.257.11.597.2 1.016.2.453 0 .999-.107 1.634-.412 1.949-.94 2.664-2.738 2.508-4.105-.097-.853-.531-1.466-1.131-1.602z"
    />
  );

  const normalHover = (
    <path
      fillRule={'evenodd'}
      d="M36.117 39.406c-.547-1.016-1.36-3.557-1.927-5.336-.558-1.746-1.085-3.395-1.533-4.388-.501-1.105-1.167-1.792-1.666-2.194.16-.162.324-.319.458-.513.26-.378.43-.788.544-1.208 1.026.444 1.812.66 2.412.818 1.062.28 1.42.375 1.974 1.36 1.23 2.188.504 9.46-.262 11.461zm-9.385-12.505l-.282-.195 2.983-4.314.282.195a2.626 2.626 0 01.665 3.648 2.625 2.625 0 01-3.648.666zm-2.35.507a4.886 4.886 0 01-2.167-.834 4.877 4.877 0 01-2.038-3.166 4.905 4.905 0 01.796-3.684 4.885 4.885 0 013.164-2.042 4.888 4.888 0 013.679.794 4.88 4.88 0 011.546 1.734l-4.98 7.198zM42.91 29.25c-.287-1.462-.922-2.452-1.888-2.943-1.041-.53-2.387-.429-3.998.284-.67-.824-1.376-1.022-2.286-1.262a14.581 14.581 0 01-2.627-.936c-.102-1.118-.662-2.187-1.656-2.875l-.281-.194.677-.979-.143-.332a6.111 6.111 0 00-1.812-2.334c2.816-3.905 4.283-7.9 4.44-12.188l-1.298-.049c-.15 4.042-1.546 7.82-4.233 11.53a6.16 6.16 0 00-3.9-.567 6.172 6.172 0 00-4 2.58 6.188 6.188 0 00-1.006 4.655 6.163 6.163 0 002.044 3.587c-.161.364-.32.727-.47 1.073-1.563 3.608-2.505 5.786-6.316 5.786-2.71 0-3.651-.917-4.845-2.078-.596-.58-1.263-1.23-2.202-1.789v-4.234c.742-.566 2.034-1.232 3.394-1.932 2.703-1.393 5.768-2.972 6.944-4.904 1.594-2.618.074-5.264-1.148-7.39-.233-.408-.457-.796-.644-1.164-.527-1.03-1.426-3.398-1.454-5.736l-1.3.016c.029 2.41.878 4.907 1.596 6.312.197.385.43.792.675 1.218 1.106 1.925 2.359 4.107 1.164 6.068-.985 1.62-4.004 3.174-6.428 4.424-1.65.85-3.073 1.582-3.88 2.293l-.22.194v5.606l.346.184c.962.51 1.617 1.148 2.25 1.765 1.237 1.203 2.515 2.447 5.752 2.447 4.665 0 5.92-2.899 7.509-6.57l.369-.84a6.08 6.08 0 002.638.762l.36.018.678-.98.282.195a3.91 3.91 0 002.226.695c.575 0 1.14-.14 1.664-.384.303.19 1.05.748 1.59 1.937.026.058.054.125.08.188-2.583 2.521-3.281 5.287-1.888 7.62.39.651.935 2.036 1.326 4.941l1.288-.174c-.337-2.507-.841-4.335-1.497-5.434-1.29-2.156.042-4.287 1.276-5.62.28.804.582 1.747.894 2.727 1.337 4.186 2.01 6.064 2.834 6.485.109.056.24.092.38.092a.9.9 0 00.659-.302c1.209-1.259 2.178-9.835.868-13.028.868-.365 1.955-.645 2.74-.247.59.3.996.984 1.202 2.033.258 1.315-.123 3.26-.528 5.316-.46 2.334-.933 4.748-.647 6.88l1.289-.175c-.258-1.918.195-4.223.634-6.454.429-2.186.836-4.252.527-5.817zm-26.757-1.89c-.052.461-.33 1.608-1.78 2.306-.61.295-1.17.358-1.573.188a.884.884 0 01-.51-.539c-.272-.838.202-1.527.508-1.863.642-.706 1.637-1.124 2.582-1.124.209 0 .415.02.614.062.073.081.22.42.159.97zm.163-2.229c-1.571-.356-3.37.226-4.48 1.445-.844.928-1.13 2.072-.781 3.142a2.2 2.2 0 001.234 1.332c.257.11.597.2 1.015.2.454 0 1-.107 1.635-.412 1.949-.94 2.664-2.739 2.508-4.105-.097-.853-.531-1.467-1.131-1.602z"
    />
  );

  return isHovered ? normalHover : normal;
};

export default Hipprosthesis;
