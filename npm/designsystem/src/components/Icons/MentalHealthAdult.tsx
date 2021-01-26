import React from 'react';
import {SvgPathProps} from './Icon';

const MentalHealthAdult: React.FC<SvgPathProps> = ({isExtraSmall, isHovered}: SvgPathProps): JSX.Element => {
  const normal = (
    <g>
      <path d="M36.3 26.616a.823.823 0 01-.705.387h-1.858v2.04c0 2.923-2.376 5.3-5.298 5.3h-.65v5.184H15.646V34.13c0-2.601-.918-4.415-1.889-6.336-1.078-2.133-2.192-4.338-2.192-7.971 0-5.459 4.221-11.351 11.043-11.351 5.395 0 11.128 4.056 11.128 11.572v.143l2.617 5.625a.824.824 0 01-.053.804m1.231-1.353l-2.494-5.365C34.965 11.631 28.6 7.172 22.61 7.172c-6.807 0-12.345 5.675-12.345 12.651 0 3.942 1.24 6.395 2.333 8.558.938 1.855 1.748 3.458 1.748 5.749v6.698H29.09v-5.217a6.608 6.608 0 005.948-6.568v-.74h.557a2.13 2.13 0 001.801-.989 2.126 2.126 0 00.136-2.051" />
      <path d="M20.321 19.133a2.083 2.083 0 01-1.145 1.124 2.086 2.086 0 01-1.603-.015 2.081 2.081 0 01-1.124-1.144 2.084 2.084 0 01.015-1.603 2.084 2.084 0 011.144-1.124c.253-.101.519-.153.784-.153.279 0 .556.057.82.168.514.219.914.625 1.124 1.144a2.084 2.084 0 01-.015 1.603zm1.674-2.813l-.965.39a3.033 3.033 0 00-.986-1.004l.406-.958-.92-.39-.405.957a3.01 3.01 0 00-1.409-.013l-.389-.964-.928.373.39.965c-.409.248-.75.583-1.005.987l-.957-.407-.391.92.957.407a3.045 3.045 0 00-.012 1.408l-.964.388.373.928.965-.389c.248.41.583.75.987 1.004l-.407.957.92.391.407-.957c.241.058.484.097.73.097.228 0 .453-.032.678-.083l.388.962.927-.373-.388-.965a3.052 3.052 0 001.004-.986l.957.406.39-.92-.957-.406c.115-.464.119-.942.014-1.408l.963-.389-.373-.928zm.682-2.617a.823.823 0 01.808-.972c.387 0 .733.277.807.67a.813.813 0 01-.13.615.816.816 0 01-.526.344.825.825 0 01-.959-.657m2.598-.484a1.794 1.794 0 00-.139-.421l.7-.6-.65-.76-.698.598a1.814 1.814 0 00-.83-.288l-.17-.91-.983.184.17.91c-.27.134-.5.328-.672.568l-.867-.307-.332.944.87.306c-.01.146-.007.294.021.444.028.149.08.288.14.42l-.702.599.65.76.703-.6c.245.162.527.264.828.293l.17.907.981-.184-.169-.907c.265-.132.496-.322.671-.57l.866.307.334-.943-.87-.307a1.784 1.784 0 00-.022-.443m3.105 7.101a1.02 1.02 0 10-.001 2.041 1.02 1.02 0 000-2.04" />
    </g>
  );

  const normalHover = (
    <g>
      <path d="M36.3 26.616a.821.821 0 01-.706.387h-1.856v2.04c0 2.923-2.376 5.3-5.299 5.3h-.651v5.184h-12.14V34.13c0-2.601-.918-4.415-1.889-6.336-1.079-2.133-2.193-4.338-2.193-7.971 0-5.459 4.221-11.351 11.043-11.351 5.395 0 11.129 4.056 11.129 11.572v.143l2.616 5.624a.826.826 0 01-.054.805m1.233-1.353l-2.495-5.365C34.965 11.631 28.6 7.172 22.609 7.172c-6.807 0-12.344 5.675-12.344 12.651 0 3.942 1.24 6.395 2.334 8.558.938 1.855 1.748 3.458 1.748 5.749v6.698h14.742v-5.217a6.609 6.609 0 005.95-6.568v-.74h.555c.733 0 1.407-.37 1.803-.988a2.133 2.133 0 00.136-2.052" />
      <path d="M18.072 20.384a2.097 2.097 0 01-1.75-2.39 2.099 2.099 0 012.392-1.75 2.098 2.098 0 011.749 2.39v.001a2.093 2.093 0 01-2.391 1.749m3.074-3.464l.84-.615-.592-.807-.838.615a3.05 3.05 0 00-1.202-.733l.159-1.027-.988-.155-.16 1.032a3.075 3.075 0 00-1.365.334l-.616-.843-.807.59.616.842c-.328.332-.58.74-.732 1.201l-1.03-.16-.153.988 1.027.16c.004.478.118.942.334 1.367l-.84.613.59.807.84-.613c.34.336.749.584 1.203.731l-.16 1.028.988.154.16-1.02a3.058 3.058 0 001.374-.335l.608.832.807-.589-.615-.84c.335-.34.584-.747.732-1.2l1.028.157.153-.988-1.028-.159a3.037 3.037 0 00-.332-1.367m2.338-4.189a.823.823 0 01.806.986.827.827 0 01-.972.64.824.824 0 01-.638-.97.823.823 0 01.804-.656zm2.375-.493l-.873.29a1.813 1.813 0 00-.66-.58l.187-.906-.978-.204-.187.906a1.796 1.796 0 00-.838.273l-.686-.61-.664.745.689.614c-.063.131-.116.27-.147.418-.03.15-.036.297-.03.443l-.876.29.314.95.874-.29c.165.243.393.441.659.581l-.186.905.978.201.19-.915c.296-.023.57-.12.817-.275l.703.625.664-.748-.702-.624c.063-.13.13-.258.16-.407.032-.149.038-.296.03-.442l.876-.29-.314-.95zm2.565 8.082a1.02 1.02 0 100 2.041 1.02 1.02 0 000-2.04" />
    </g>
  );

  return isHovered ? normalHover : normal;
};

export default MentalHealthAdult;
