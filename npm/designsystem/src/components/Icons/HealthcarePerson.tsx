import React from 'react';

import { SvgPathProps, getIcon } from '../Icon';

const HealthcarePerson: React.FC<SvgPathProps> = ({ size, isHovered }: SvgPathProps): React.ReactElement => {
  const normal = (
    <>
      <path d="M21.642 18.636a.497.497 0 1 0 0-.993.497.497 0 0 0 0 .993Zm5.751-.496a.497.497 0 1 1-.993 0 .497.497 0 0 1 .993 0Z" />
      <path
        fillRule="evenodd"
        d="M20.36 8.303c-.05-.864.241-1.83.838-2.596.642-.825 1.65-1.433 2.972-1.433 2.15 0 3.807 1.827 3.742 3.912a7.564 7.564 0 0 1 3.891 6.616v.033h.835c.342 0 .769.151 1.111.436.36.3.652.768.652 1.4 0 .627-.282 1.095-.639 1.397-.34.287-.766.438-1.115.438h-.894a7.568 7.568 0 0 1-15.033 0h-.7c-.348 0-.774-.151-1.114-.439a1.787 1.787 0 0 1-.639-1.395c0-.633.291-1.102.652-1.401.342-.285.768-.436 1.11-.436h.641v-.033a7.563 7.563 0 0 1 3.69-6.5Zm1.337-.63c.075-.396.25-.81.527-1.167.419-.538 1.061-.932 1.946-.932 1.197 0 2.185.89 2.4 2.028a7.56 7.56 0 0 0-2.333-.367 7.55 7.55 0 0 0-2.54.437Zm10.106 9.833h.844a.833.833 0 0 0 .47-.203.787.787 0 0 0 .284-.631.783.783 0 0 0-.29-.632.861.861 0 0 0-.474-.205h-.834v1.671ZM16.67 15.835v1.671h-.65a.832.832 0 0 1-.469-.202.788.788 0 0 1-.284-.632c0-.296.127-.496.291-.632a.858.858 0 0 1 .472-.205h.64Zm13.833-1.033v.058h-4.345c-1.415 0-2.234-.546-2.714-1.19-.43-.578-.623-1.291-.668-1.842.002-.072.003-.146.002-.22h-.012v-.03h-.993c0 .057.002.117.005.178-.013.798-.198 1.389-.468 1.827a2.676 2.676 0 0 1-1.143 1.01c-.699.337-1.518.425-2.197.388v-.18a6.266 6.266 0 0 1 12.533 0Zm0 2.831V15.86h-4.345c-1.718 0-2.84-.685-3.516-1.594a4.013 4.013 0 0 1-.305-.477 3.675 3.675 0 0 1-1.735 1.704c-.863.416-1.83.526-2.632.489v1.651a6.266 6.266 0 0 0 12.533 0ZM26.85 36.074V32.02h2.452v-1.214h1v1.213h2.451v4.054h-5.902Zm1-3.053h3.903v2.053h-3.902V33.02Z"
      />
      <path
        fillRule="evenodd"
        d="m19.804 25.53.234.15a7.702 7.702 0 0 0 8.33.036l.238-.151.273.07c4.581 1.19 7.965 5.354 7.965 10.31v7.961H11.406v-7.962c0-5.013 3.463-9.215 8.126-10.349l.272-.066Zm-.613 1.76-.326 2.954 4.008.51-3.682-3.465Zm-1.427 3.822.405-3.674a9.352 9.352 0 0 0-5.463 8.506v6.662h10.919V31.858l-5.861-.746Zm17.78 11.494H24.625V32.03l4.947-4.807a9.354 9.354 0 0 1 5.972 8.721v6.662ZM24.42 30.836l3.51-3.41a8.968 8.968 0 0 1-3.699.795 8.964 8.964 0 0 1-3.226-.598l3.415 3.212Z"
      />
    </>
  );

  const normalHover = (
    <>
      <path d="M22.139 18.14a.497.497 0 1 1-.994 0 .497.497 0 0 1 .994 0Zm4.758.496a.497.497 0 1 0 0-.993.497.497 0 0 0 0 .993Zm-.862 2.264a1.835 1.835 0 0 1-3.67 0h3.67Z" />
      <path
        fillRule="evenodd"
        d="M21.198 5.707c-.597.766-.889 1.732-.838 2.596a7.563 7.563 0 0 0-3.69 6.499v.033h-.64c-.343 0-.77.151-1.111.436-.36.3-.652.768-.652 1.4 0 .627.282 1.095.639 1.396.34.288.765.44 1.115.44h.7a7.568 7.568 0 0 0 15.032 0h.894c.349 0 .775-.152 1.115-.44.357-.301.64-.77.64-1.395a1.78 1.78 0 0 0-.653-1.401c-.342-.285-.769-.436-1.111-.436h-.835v-.033a7.564 7.564 0 0 0-3.891-6.616c.065-2.085-1.593-3.912-3.742-3.912-1.322 0-2.33.608-2.972 1.433Zm1.026.799c-.278.356-.453.77-.527 1.166a7.554 7.554 0 0 1 2.54-.437 7.56 7.56 0 0 1 2.333.367c-.215-1.137-1.203-2.028-2.4-2.028-.885 0-1.527.394-1.946.932Zm10.423 11h-.844v-1.671h.834a.86.86 0 0 1 .473.205.783.783 0 0 1 .291.632.787.787 0 0 1-.284.631.833.833 0 0 1-.47.203Zm-15.977 0v-1.671h-.64a.858.858 0 0 0-.472.205.784.784 0 0 0-.29.632c0 .298.124.497.283.632a.832.832 0 0 0 .47.202h.65Zm13.833-2.646v-.058a6.266 6.266 0 1 0-12.533 0v.179c.68.037 1.498-.051 2.197-.389a2.676 2.676 0 0 0 1.143-1.009c.285-.463.476-1.097.468-1.966v-.035h1c0 .57.167 1.417.666 2.087.48.645 1.299 1.19 2.715 1.19h4.344Zm0 1v1.773a6.266 6.266 0 1 1-12.533 0v-1.651c.802.037 1.77-.073 2.631-.489a3.675 3.675 0 0 0 1.736-1.705c.088.163.19.324.305.478.676.91 1.798 1.594 3.517 1.594h4.344ZM26.85 32.02v4.054h5.903V32.02h-2.451v-1.214h-1v1.213H26.85Zm4.903 1h-3.902v2.054h3.902V33.02Z"
      />
      <path
        fillRule="evenodd"
        d="m20.038 25.681-.234-.15-.271.065c-4.664 1.134-8.127 5.336-8.127 10.35V43.9h25.438v-7.955c0-4.955-3.384-9.118-7.966-10.308l-.273-.071-.238.15a7.703 7.703 0 0 1-8.33-.035Zm-1.173 4.563.326-2.955 3.682 3.465-4.008-.51Zm-.697-2.805-.404 3.673 5.861.746V42.6h-10.92v-6.655a9.352 9.352 0 0 1 5.463-8.506Zm6.457 15.16h10.92v-6.654a9.354 9.354 0 0 0-5.974-8.721l-4.946 4.806V42.6Zm3.303-15.173-3.509 3.41-3.413-3.212a8.967 8.967 0 0 0 3.224.597 8.97 8.97 0 0 0 3.698-.795Z"
      />
    </>
  );

  const xSmall = (
    <>
      <path d="M22.078 18.124a.513.513 0 1 0 0-1.025.513.513 0 0 0 0 1.025Zm5.937-.513a.513.513 0 1 1-1.026 0 .513.513 0 0 1 1.026 0Z" />
      <path
        fillRule="evenodd"
        d="M20.641 7.527c-.072-.938.239-1.99.886-2.821.683-.877 1.757-1.524 3.161-1.524 2.31 0 4.082 1.98 3.978 4.221a7.807 7.807 0 0 1 3.897 6.524h.865c.424 0 .925.183 1.322.513.425.354.772.911.772 1.656 0 .736-.334 1.293-.757 1.65-.396.334-.897.517-1.328.517h-.94v-.127a7.811 7.811 0 0 1-15.462.127h-.759c-.43 0-.931-.183-1.327-.517a2.117 2.117 0 0 1-.756-1.65c0-.745.346-1.302.771-1.656.397-.33.898-.513 1.321-.513h.666a7.806 7.806 0 0 1 3.69-6.4Zm1.624-.766c.08-.369.248-.752.508-1.085.412-.529 1.041-.915 1.915-.915 1.153 0 2.112.842 2.348 1.932a7.809 7.809 0 0 0-2.28-.337 7.8 7.8 0 0 0-2.49.405Zm10.302 9.923h.87s.01 0 .03-.004a.697.697 0 0 0 .28-.14.54.54 0 0 0 .196-.444.536.536 0 0 0-.202-.441.736.736 0 0 0-.205-.12c-.062-.024-.102-.028-.109-.029h-.86v1.178Zm-15.62-1.178v1.178h-.67s-.01 0-.03-.004a.692.692 0 0 1-.278-.14.54.54 0 0 1-.197-.444c0-.213.086-.345.202-.442a.73.73 0 0 1 .204-.119c.062-.024.101-.028.108-.029h.661Zm14.04 1.582v-1.715H26.74c-1.808 0-3.001-.722-3.722-1.691a4.237 4.237 0 0 1-.217-.322 3.909 3.909 0 0 1-1.746 1.623c-.825.399-1.738.53-2.529.523v1.582a6.23 6.23 0 1 0 12.462 0Zm-8.884-6.208v-.015h1.263c0 .57.169 1.396.665 2.063.473.635 1.283 1.182 2.71 1.182h4.246a6.23 6.23 0 0 0-12.461.055v.078c.634.007 1.357-.096 1.98-.397.455-.22.85-.541 1.131-.998.282-.457.475-1.088.466-1.968Zm5.351 25.63v-4.184h2.415v-1.023h1.263v1.023h2.415v4.183h-6.092Zm1.264-2.921h3.566v1.657h-3.566V33.59Z"
      />
      <path
        fillRule="evenodd"
        d="m19.954 25.483.284.177a8.443 8.443 0 0 0 4.472 1.272 8.443 8.443 0 0 0 4.435-1.25l.287-.176.326.085c4.678 1.224 8.13 5.479 8.13 10.541v7.767H11.395v-7.767c0-5.1 3.504-9.38 8.235-10.567l.324-.082Zm-.316 2.203-.298 2.706 3.671.467-3.373-3.174Zm-1.69 3.803.42-3.81a9.318 9.318 0 0 0-5.394 8.453v6.188H24.01V32.26l-6.062-.771ZM36.31 42.32H25.273v-9.935l5.086-4.942a9.32 9.32 0 0 1 5.95 8.689v6.188ZM24.944 30.943l3.077-2.99a10.05 10.05 0 0 1-3.31.558c-.957 0-1.882-.134-2.76-.383l2.993 2.815Z"
      />
    </>
  );

  const xSmallHover = (
    <>
      <path d="M22.572 17.611a.513.513 0 1 1-1.026 0 .513.513 0 0 1 1.026 0Zm4.911.513a.513.513 0 1 0 0-1.025.513.513 0 0 0 0 1.025Zm-.903 2.352a1.894 1.894 0 0 1-3.787 0h3.787Z" />
      <path
        fillRule="evenodd"
        d="M21.508 4.706c-.648.83-.959 1.883-.886 2.82a7.805 7.805 0 0 0-3.69 6.401h-.666c-.424 0-.924.183-1.321.513a2.113 2.113 0 0 0-.771 1.656c0 .736.333 1.293.756 1.65.395.334.896.517 1.327.517h.758a7.812 7.812 0 0 0 15.462-.127v.127h.94c.431 0 .932-.183 1.328-.517.423-.357.757-.913.757-1.65 0-.745-.346-1.302-.772-1.656-.397-.33-.898-.513-1.322-.513h-.864a7.807 7.807 0 0 0-3.897-6.524c.104-2.241-1.669-4.221-3.978-4.221-1.405 0-2.478.647-3.162 1.524Zm1.245.97c-.26.333-.427.716-.507 1.085a7.8 7.8 0 0 1 2.491-.405 7.81 7.81 0 0 1 2.28.337c-.236-1.09-1.196-1.932-2.348-1.932-.874 0-1.504.386-1.916.915Zm10.664 11.008h-.87v-1.178h.86c.007.001.047.005.11.03.068.025.14.066.204.119a.533.533 0 0 1 .202.441.54.54 0 0 1-.196.444.696.696 0 0 1-.28.14l-.03.005Zm-16.49 0v-1.178h-.66c-.007.001-.047.005-.109.03a.732.732 0 0 0-.204.118.537.537 0 0 0-.201.442c0 .218.085.35.196.444a.692.692 0 0 0 .278.14l.03.005h.67Zm14.041-1.31v1.714a6.23 6.23 0 1 1-12.462 0v-1.582c.792.008 1.704-.124 2.53-.522a3.909 3.909 0 0 0 1.745-1.624c.067.11.139.217.217.322.721.969 1.914 1.691 3.723 1.691h4.247Zm-8.884-4.494c.008.88-.185 1.511-.466 1.968a2.647 2.647 0 0 1-1.132.998c-.623.3-1.345.404-1.98.397v-.078a6.23 6.23 0 0 1 12.462-.055H26.72c-1.427 0-2.236-.547-2.71-1.182-.496-.667-.664-1.493-.664-2.063h-1.263v.015Zm5.351 21.446v4.183h6.093v-4.183h-2.415v-1.023H29.85v1.023h-2.415Zm4.83 1.263h-3.567v1.657h3.566V33.59Z"
      />
      <path
        fillRule="evenodd"
        d="m20.219 25.66-.284-.177-.325.081c-4.731 1.188-8.235 5.468-8.235 10.568V43.9h26.494v-7.767c0-5.062-3.453-9.317-8.13-10.54l-.326-.086-.287.177a8.443 8.443 0 0 1-4.435 1.249 8.443 8.443 0 0 1-4.472-1.272Zm-.899 4.732.299-2.706 3.373 3.173-3.672-.467Zm-.971-2.713-.42 3.81 6.061.77V42.32H12.954v-6.188a9.318 9.318 0 0 1 5.395-8.453Zm6.904 14.641H36.29v-6.188a9.32 9.32 0 0 0-5.95-8.69l-5.087 4.943v9.935Zm2.748-14.366-3.077 2.99-2.992-2.816c.877.25 1.803.383 2.759.383a10.05 10.05 0 0 0 3.31-.557Z"
      />
    </>
  );

  return getIcon({ size, isHovered, normal, normalHover, xSmall, xSmallHover });
};

export default HealthcarePerson;
