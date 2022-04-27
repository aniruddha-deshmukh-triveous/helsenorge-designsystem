import React from 'react';
import { IconSize } from '.';
import { getIcon, SvgPathProps } from './Icon';

const SupportingPerson: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): JSX.Element => {
  const normal = (
    <path
      d="M18.718 18.927a.45.45 0 1 1 .9 0 .45.45 0 0 1-.9 0Zm-4.742 0a.45.45 0 1 1 .9-.001.45.45 0 0 1-.9 0Zm-2.77-2.03h.584a3.665 3.665 0 0 0 3.173-1.834 3.711 3.711 0 0 0 3.201 1.835h4.161v1.757a5.387 5.387 0 0 1-5.382 5.38h-.356a5.387 5.387 0 0 1-5.38-5.38v-1.757Zm5.381-6.583h.356a5.387 5.387 0 0 1 5.382 5.38v.204h-4.16a2.714 2.714 0 0 1-2.712-2.711v-.191h-1v.239a2.666 2.666 0 0 1-2.663 2.663h-.584v-.203a5.387 5.387 0 0 1 5.381-5.381Zm.178-3.073c1.16 0 2.101.92 2.147 2.069a6.67 6.67 0 0 0-1.969-.296h-.356c-.685 0-1.346.104-1.968.296a2.152 2.152 0 0 1 2.146-2.07Zm-.178 18.096h.356a6.69 6.69 0 0 0 6.682-6.682v-2.96a6.683 6.683 0 0 0-3.404-5.816v-.483a3.46 3.46 0 0 0-3.456-3.456 3.46 3.46 0 0 0-3.455 3.456v.483a6.684 6.684 0 0 0-3.404 5.816v2.96a6.69 6.69 0 0 0 6.681 6.682Zm11.496-7.911a.459.459 0 1 1 0-.918.459.459 0 0 1 0 .918Zm4.38-.46a.458.458 0 1 1 .916 0 .458.458 0 0 1-.917 0Zm-6.242-2.078h2.887a3.778 3.778 0 0 0 3.266-1.882 3.727 3.727 0 0 0 3.236 1.882h1.98v1.8a5.508 5.508 0 0 1-5.503 5.504h-.363a5.508 5.508 0 0 1-5.503-5.503v-1.801Zm5.503-6.72h.363a5.508 5.508 0 0 1 5.503 5.502v.218h-1.98a2.73 2.73 0 0 1-2.726-2.727v-.244h-1v.194a2.78 2.78 0 0 1-2.776 2.777h-2.887v-.218a5.508 5.508 0 0 1 5.503-5.502Zm0 15.325h.363c3.751 0 6.803-3.053 6.803-6.804v-3.02a6.81 6.81 0 0 0-6.803-6.802h-.363a6.81 6.81 0 0 0-6.803 6.803v3.019c0 3.75 3.052 6.804 6.803 6.804Zm7.527 18.543h-11.5v-5.643c1.156 1.257 3.04 2.88 5.183 3.056.13.01.26.017.387.017 1.354 0 2.603-.596 3.72-1.775a43.985 43.985 0 0 0 2.21-2.495v6.84Zm-14.002 0h-1.512v-6.13h-.9v6.13h-12.1v-6.13h-.9v6.13H7.122V34.86a7.94 7.94 0 0 1 1.102-4.011c.355.27.827.436 1.352.464.054.003.108.004.162.004.6 0 1.15-.177 1.477-.458.096-.061.946-.627 1.172-1.663.123-.568.022-1.147-.276-1.725.18-.072.353-.158.536-.217a9.355 9.355 0 0 0 4.14.968c1.435 0 2.86-.334 4.14-.968.142.046.28.105.418.159-.323.597-.436 1.196-.308 1.783.226 1.036 1.075 1.602 1.103 1.612.39.328.947.509 1.547.509.053 0 .107-.001.161-.004.553-.03 1.043-.216 1.404-.513.764 1.295 1.2 2.717 1.2 4.06v7.176H25.25ZM8.04 28.224l1.6-1.34a.29.29 0 0 1 .411.039l.82.97c.673 1.074-.102 1.704-.42 1.919-.169.14-.483.23-.805.203-.31-.017-.59-.124-.716-.272l-.927-1.107c-.067-.081-.07-.17-.067-.214a.291.291 0 0 1 .104-.198Zm14.516-.331.82-.971a.293.293 0 0 1 .41-.037l1.601 1.34c.08.067.098.152.102.197a.286.286 0 0 1-.067.214l-.927 1.107c-.124.148-.405.255-.716.272-.32.019-.636-.062-.872-.253-.005-.003-.487-.33-.599-.842-.069-.317.012-.653.248-1.027Zm5.18-2.486c2.56 1.268 5.723 1.267 8.283-.001 2.227.693 3.606 1.776 4.331 3.4.755 1.688-.477 4.003-4.253 7.99-.949 1.005-1.947 1.438-3.053 1.358-2.59-.211-4.919-3.285-5.338-3.868-.11-1.528-.635-3.103-1.543-4.511l.256-.305c.091-.11.16-.23.218-.355 1.095 1.146 3.058 3.187 4.496 4.596a1.84 1.84 0 0 0 1.285.524c.041 0 .082-.002.124-.004a1.85 1.85 0 0 0 1.331-.71l2.47-3.176-.712-.553-2.469 3.178a.936.936 0 0 1-.68.363.911.911 0 0 1-.719-.265c-1.786-1.75-4.387-4.48-5.102-5.234a1.574 1.574 0 0 0-.44-.606l-.764-.64a8.077 8.077 0 0 1 2.28-1.181Zm13.801 2.867c-.906-2.027-2.673-3.398-5.4-4.19l-.255-.074-.233.125c-2.308 1.229-5.238 1.228-7.545 0l-.233-.125-.254.074a9.32 9.32 0 0 0-3.192 1.67 1.582 1.582 0 0 0-2.045.331l-.212.25a9.342 9.342 0 0 0-1.12-.404l-.254-.075-.233.125c-2.308 1.23-5.238 1.23-7.546 0l-.233-.125-.254.075a9.385 9.385 0 0 0-1.226.46l-.256-.305a1.581 1.581 0 0 0-1.079-.563 1.573 1.573 0 0 0-1.162.366l-1.599 1.338a1.587 1.587 0 0 0-.2 2.243l.304.363a9.248 9.248 0 0 0-1.487 5.027v8.477h34.729V33.42c1.218-1.898 1.68-3.592.985-5.146Z"
      fillRule="evenodd"
    />
  );

  const normalHover = (
    <path
      d="M16.401 21.118h2.717a1.358 1.358 0 0 1-2.717 0Zm3.218-2.191a.45.45 0 1 1 .899-.001.45.45 0 0 1-.899.001Zm-4.743 0a.45.45 0 1 1 .9 0 .45.45 0 0 1-.9 0Zm-3.671-2.029h1.919a3.665 3.665 0 0 0 3.173-1.835 3.711 3.711 0 0 0 3.201 1.835h2.828v1.757a5.388 5.388 0 0 1-5.382 5.381h-.357a5.388 5.388 0 0 1-5.382-5.381v-1.757Zm5.382-6.584h.357a5.388 5.388 0 0 1 5.382 5.381v.203h-2.828a2.715 2.715 0 0 1-2.712-2.711v-.191h-1v.239a2.665 2.665 0 0 1-2.662 2.663h-1.919v-.203a5.388 5.388 0 0 1 5.382-5.381Zm-1.275-2.546a2.134 2.134 0 0 1 2.308 1.279 6.86 6.86 0 0 0-.676-.034h-.357a6.642 6.642 0 0 0-3.091.764 2.158 2.158 0 0 1 1.816-2.009Zm1.275 17.569h.357c3.684 0 6.681-2.999 6.681-6.682v-2.96c0-2.943-1.916-5.444-4.564-6.332l-.001-.001c-.295-1.883-2.072-3.18-3.949-2.879a3.46 3.46 0 0 0-2.878 3.95l.028.179a6.666 6.666 0 0 0-2.355 5.083v2.96c0 3.683 2.997 6.682 6.681 6.682Zm11.497-7.911a.46.46 0 1 1 0-.92.46.46 0 0 1 0 .92Zm4.378-.459a.46.46 0 1 1 .92 0 .46.46 0 0 1-.92 0Zm-6.241-2.08h2.887a3.776 3.776 0 0 0 3.265-1.882 3.73 3.73 0 0 0 3.237 1.882h1.981v1.802a5.51 5.51 0 0 1-5.504 5.503h-.363a5.51 5.51 0 0 1-5.503-5.503v-1.802Zm5.503-6.719h.363a5.508 5.508 0 0 1 5.504 5.502v.217H35.61a2.729 2.729 0 0 1-2.726-2.726v-.244h-1v.194a2.779 2.779 0 0 1-2.776 2.776h-2.887v-.217a5.508 5.508 0 0 1 5.503-5.502Zm0 15.325h.363a6.812 6.812 0 0 0 6.804-6.804V13.67a6.811 6.811 0 0 0-6.804-6.803h-.363a6.81 6.81 0 0 0-6.803 6.803v3.019c0 3.751 3.052 6.804 6.803 6.804Zm7.527 18.543H27.752v-5.644c1.155 1.257 3.038 2.881 5.182 3.057.13.011.26.016.388.016 1.353 0 2.603-.595 3.719-1.774a43.642 43.642 0 0 0 2.21-2.495v6.84Zm-14.002 0h-1.512v-6.129h-.9v6.129h-12.1v-6.129h-.9v6.129H7.122V34.86a7.94 7.94 0 0 1 1.102-4.011c.356.269.828.436 1.352.464.054.003.108.004.162.004.599 0 1.15-.178 1.477-.458.096-.062.946-.627 1.172-1.663.123-.568.022-1.147-.276-1.725.179-.073.353-.158.536-.218a9.355 9.355 0 0 0 4.14.968c1.435 0 2.86-.334 4.14-.968.142.047.279.105.417.16-.322.597-.435 1.196-.307 1.783.226 1.036 1.076 1.601 1.103 1.612.39.327.947.509 1.547.509.054 0 .107-.001.161-.004.553-.03 1.043-.217 1.405-.513.763 1.295 1.199 2.716 1.199 4.06v7.176h-1.203ZM8.038 28.224l1.601-1.34a.293.293 0 0 1 .411.038l.819.971c.674 1.073-.101 1.703-.42 1.919-.167.142-.478.223-.804.202-.31-.016-.591-.123-.715-.271l-.928-1.108a.29.29 0 0 1 .036-.411Zm14.517-.331.82-.973a.294.294 0 0 1 .411-.036l1.6 1.341a.292.292 0 0 1 .036.41l-.927 1.108c-.125.148-.406.255-.717.271a1.229 1.229 0 0 1-.867-.25c-.256-.168-1.03-.798-.356-1.871Zm5.181-2.486c2.56 1.267 5.722 1.265 8.281-.001 2.228.692 3.607 1.776 4.332 3.399.755 1.689-.477 4.004-4.252 7.991-.95 1.004-1.948 1.438-3.053 1.358-2.591-.212-4.92-3.285-5.339-3.868-.11-1.528-.634-3.103-1.542-4.511l.256-.306a1.6 1.6 0 0 0 .218-.354c1.094 1.146 3.058 3.187 4.496 4.596a1.84 1.84 0 0 0 1.284.524c.042 0 .083-.002.125-.004a1.849 1.849 0 0 0 1.33-.709l2.47-3.178-.711-.552-2.47 3.177a.932.932 0 0 1-.68.364.904.904 0 0 1-.719-.265c-1.786-1.751-4.388-4.482-5.103-5.235a1.568 1.568 0 0 0-.439-.605l-.764-.64a8.03 8.03 0 0 1 2.28-1.181Zm13.8 2.867c-.906-2.027-2.673-3.398-5.401-4.19l-.254-.075-.233.125c-2.306 1.231-5.237 1.229-7.545 0l-.233-.125-.254.075a9.32 9.32 0 0 0-3.192 1.67 1.574 1.574 0 0 0-2.044.331l-.212.251a9.474 9.474 0 0 0-1.121-.406l-.254-.074-.234.125c-2.307 1.229-5.237 1.229-7.544 0l-.234-.125-.254.074a9.48 9.48 0 0 0-1.226.461l-.255-.304a1.575 1.575 0 0 0-1.08-.564 1.575 1.575 0 0 0-1.162.365l-1.6 1.339a1.583 1.583 0 0 0-.564 1.08c-.037.423.092.836.365 1.162l.304.364a9.25 9.25 0 0 0-1.487 5.027v8.477h34.729V33.42c1.218-1.897 1.679-3.593.985-5.146Z"
      fillRule="evenodd"
    />
  );

  return getIcon(IconSize.Medium, isHovered, normal, normalHover);
};

export default SupportingPerson;
