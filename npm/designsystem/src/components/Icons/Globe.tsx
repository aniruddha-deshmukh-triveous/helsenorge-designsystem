import React from 'react';
import {SvgPathProps} from './Icon';

const Globe: React.FC<SvgPathProps> = ({isExtraSmall, isHovered}: SvgPathProps): JSX.Element => {
  const normal = (
    <path d="M35.566 32.49a21.52 21.52 0 00-4.352-2.476 17.33 17.33 0 001.154-5.464h6.008a14.405 14.405 0 01-2.81 7.94zm-9.96 5.81c1.423-1.385 3.591-3.842 5.097-7.09a20.204 20.204 0 014.046 2.291 14.481 14.481 0 01-9.144 4.798zm-1.057-.807v-7.65c1.683.064 3.322.365 4.915.9-1.477 3.122-3.602 5.483-4.915 6.75zm0-12.943h6.518a15.965 15.965 0 01-1.084 4.993 18.791 18.791 0 00-5.434-1.002v-3.99zm0-5.722a19.426 19.426 0 005.366-.897 15.75 15.75 0 011.16 5.32H24.55v-4.423zm0-8.545c1.284 1.215 3.352 3.46 4.826 6.455a18.254 18.254 0 01-4.826.788v-7.243zm10.04 3.842a18.165 18.165 0 01-3.96 2.173c-1.49-3.112-3.59-5.453-4.992-6.793a14.466 14.466 0 018.953 4.62zm.837.997a14.415 14.415 0 012.95 8.128h-5.998a17.145 17.145 0 00-1.223-5.764 19.53 19.53 0 004.27-2.364zM23.25 17.524a17.48 17.48 0 01-4.846-.878c1.518-3.026 3.605-5.28 4.846-6.46v7.338zm0 5.726h-6.643c.1-1.962.57-3.78 1.253-5.412 1.745.59 3.543.921 5.39.987v4.425zm0 5.291c-1.954.056-3.832.375-5.619.972a15.602 15.602 0 01-1.034-4.963h6.653v3.991zm0 9.092c-1.314-1.223-3.576-3.643-5.105-6.912a18.233 18.233 0 015.105-.879v7.791zm-10.274-4.216a18.294 18.294 0 013.928-2.233c1.488 3.251 3.662 5.7 5.11 7.087a14.473 14.473 0 01-9.037-4.854zm-.809-1.017a14.401 14.401 0 01-2.742-7.85h5.871c.07 1.97.482 3.79 1.102 5.432a19.639 19.639 0 00-4.23 2.418zm.277-17.37a21.412 21.412 0 004.184 2.34 17.477 17.477 0 00-1.322 5.88H9.425a14.417 14.417 0 013.018-8.22zm9.6-5.507c-1.364 1.33-3.4 3.626-4.887 6.66a20.005 20.005 0 01-3.868-2.144 14.466 14.466 0 018.755-4.516zm1.855-1.43c-8.716 0-15.808 7.09-15.808 15.807 0 8.716 7.093 15.808 15.809 15.808 8.717 0 15.809-7.092 15.809-15.808 0-8.717-7.093-15.808-15.81-15.808z" />
  );

  const normalHover = (
    <path d="M28.693 37.715c1.703-1.075 3.553-2.65 4.97-4.913.4.25.794.517 1.185.8a14.54 14.54 0 01-6.155 4.113zm-15.617-4.197c.363-.268.731-.523 1.105-.762 1.372 2.21 3.16 3.77 4.825 4.849a14.547 14.547 0 01-5.93-4.087zm6.637-23.38c-1.698 1.053-3.617 2.594-5.135 4.779-.4-.244-.798-.501-1.19-.778a14.525 14.525 0 016.325-4zm14.976 4.086c-.423.304-.853.585-1.29.848-1.56-2.305-3.569-3.913-5.327-4.988a14.52 14.52 0 016.617 4.14zm1.316 9.127c-.1-2.865-.844-5.232-1.923-7.17.49-.295.971-.615 1.443-.958a14.418 14.418 0 012.951 8.128h-2.47zm0 1.3h2.471a14.41 14.41 0 01-2.81 7.939c-.45-.328-.905-.635-1.365-.922.964-1.895 1.616-4.208 1.704-7.017zm-7.77 4.467a31.83 31.83 0 00.392-4.467h6.08c-.085 2.546-.659 4.645-1.507 6.367a19.517 19.517 0 00-4.965-1.9zm-.229 1.28c1.565.37 3.09.955 4.564 1.758-2.099 3.385-5.242 5.069-7.165 5.828.78-1.532 1.901-4.144 2.601-7.585zm-8.02-.042c.707 3.509 1.856 6.16 2.64 7.69-1.914-.732-5.199-2.43-7.355-5.941a17.675 17.675 0 014.714-1.75zm-6.818-5.705h6.205c.028 1.57.165 3.048.382 4.414a18.76 18.76 0 00-5.109 1.895c-.833-1.711-1.394-3.791-1.478-6.31zm-1.299 0c.088 2.784.73 5.08 1.68 6.966-.435.276-.862.57-1.282.884a14.404 14.404 0 01-2.743-7.85h2.345zm0-1.3H9.524a14.411 14.411 0 013.02-8.22c.442.315.891.61 1.343.887-1.129 1.968-1.915 4.385-2.018 7.333zm7.992-4.88a32.208 32.208 0 00-.483 4.88H13.17c.1-2.698.805-4.907 1.82-6.703a19.45 19.45 0 004.872 1.824zm.252-1.275a18.182 18.182 0 01-4.432-1.654c2.128-3.05 5.102-4.708 6.912-5.491-.737 1.476-1.777 3.939-2.48 7.145zm7.782.04c-.69-3.173-1.715-5.624-2.452-7.114 1.85.822 4.775 2.509 6.85 5.56a17.646 17.646 0 01-4.398 1.554zm-6.493.205c.761-3.418 1.918-5.972 2.598-7.272.681 1.303 1.842 3.865 2.603 7.295-.897.122-1.809.194-2.742.188a17.62 17.62 0 01-2.459-.211zm-.724 5.91c.041-1.656.213-3.207.47-4.634a18.786 18.786 0 002.91.235c.954 0 1.885-.08 2.8-.206.253 1.419.423 2.96.464 4.605h-6.644zm6.042 6.793c-.753 3.665-2.006 6.369-2.72 7.709-.716-1.343-1.974-4.056-2.726-7.734a19.302 19.302 0 012.864-.203c.873.008 1.732.094 2.582.228zm-2.569-1.528a20.19 20.19 0 00-3.11.212 30.14 30.14 0 01-.368-4.177h6.653a30.13 30.13 0 01-.373 4.213 18.899 18.899 0 00-2.802-.248zm4.471-5.265a32.17 32.17 0 00-.475-4.83 18.74 18.74 0 004.825-1.72c.97 1.768 1.637 3.929 1.733 6.55h-6.083zM24 8.19C15.283 8.192 8.191 15.284 8.191 24c0 8.717 7.092 15.809 15.81 15.809 8.715 0 15.807-7.092 15.807-15.81 0-8.716-7.092-15.807-15.808-15.807z" />
  );

  const simplified = (
    <path d="M35.49 32.138a21.747 21.747 0 00-4.009-2.281c.58-1.555.974-3.264 1.083-5.1h5.539a14.178 14.178 0 01-2.612 7.381zm-9.244 5.795c1.38-1.417 3.205-3.62 4.552-6.444a19.918 19.918 0 013.576 2.02 14.239 14.239 0 01-8.128 4.424zm-1.488-7.87c1.488.077 2.941.343 4.359.795-1.314 2.683-3.094 4.765-4.36 6.045v-6.84zm0-5.306h6.035a15.719 15.719 0 01-.982 4.467 18.969 18.969 0 00-5.053-.93v-3.537zm0-5.73a19.583 19.583 0 004.988-.834c.572 1.46.958 3.07 1.056 4.796h-6.044v-3.963zm0-8.219c1.232 1.22 2.954 3.196 4.258 5.754-1.367.4-2.788.633-4.258.696v-6.45zm9.46 3.257a18.005 18.005 0 01-3.5 1.903c-1.323-2.685-3.083-4.78-4.43-6.149a14.238 14.238 0 017.93 4.246zm1.134 1.359a14.169 14.169 0 012.75 7.565h-5.53a17.324 17.324 0 00-1.146-5.396 19.764 19.764 0 003.926-2.17zm-12.363 1.828a17.287 17.287 0 01-4.273-.768c1.335-2.573 3.066-4.564 4.273-5.767v6.535zm0 5.737h-6.16c.118-1.757.53-3.403 1.133-4.89 1.63.532 3.307.84 5.027.922v3.968zm0 5.299c-1.82.07-3.57.375-5.242.91a15.39 15.39 0 01-.928-4.44h6.17v3.53zm0 8.774c-1.293-1.26-3.194-3.413-4.557-6.233a17.657 17.657 0 014.557-.776v7.009zm-9.693-3.638a18.045 18.045 0 013.454-1.976c1.332 2.825 3.16 5.033 4.56 6.456a14.24 14.24 0 01-8.014-4.48zm-1.108-1.378a14.187 14.187 0 01-2.543-7.289h5.403c.09 1.826.467 3.52 1.03 5.064a19.909 19.909 0 00-3.89 2.225zm.278-16.716a21.62 21.62 0 003.827 2.139 17.704 17.704 0 00-1.237 5.52h-5.41a14.172 14.172 0 012.82-7.659zm8.887-5.494c-1.31 1.35-3.011 3.408-4.327 6.021a19.658 19.658 0 01-3.416-1.88 14.24 14.24 0 017.743-4.141zm2.52-2.005c-8.846 0-16.042 7.196-16.042 16.043 0 8.845 7.196 16.043 16.042 16.043 8.846 0 16.044-7.198 16.044-16.043 0-8.847-7.198-16.043-16.044-16.043z" />
  );

  const simplifiedHover = (
    <path d="M28.493 37.802c1.755-1.077 3.672-2.692 5.142-5.042.416.26.828.54 1.236.834a14.547 14.547 0 01-6.378 4.208zM13.046 33.51c.38-.283.765-.55 1.157-.799 1.42 2.29 3.265 3.89 4.98 4.973a14.55 14.55 0 01-6.137-4.174zm6.787-23.423c-1.728 1.053-3.697 2.615-5.25 4.853-.412-.25-.82-.515-1.224-.8 1.74-1.877 3.96-3.299 6.474-4.053zm14.879 4.138c-.435.313-.877.605-1.328.875-1.593-2.357-3.648-3.991-5.433-5.067a14.518 14.518 0 016.76 4.192zm1.251 9.14c-.1-2.87-.83-5.25-1.914-7.19.501-.3.992-.629 1.475-.98a14.419 14.419 0 012.966 8.17h-2.527zm.003 1.263h2.524a14.414 14.414 0 01-2.826 7.984 22.48 22.48 0 00-1.398-.947c.967-1.897 1.61-4.221 1.7-7.037zm-7.756 4.5c.225-1.39.367-2.895.394-4.5h6.1c-.086 2.562-.653 4.678-1.507 6.407a19.492 19.492 0 00-4.987-1.907zm-.222 1.244c1.575.37 3.107.956 4.589 1.765-2.12 3.425-5.29 5.122-7.211 5.87.781-1.526 1.917-4.158 2.622-7.635zm-7.995-.054c.712 3.55 1.88 6.223 2.664 7.75-1.91-.72-5.22-2.43-7.4-5.988 1.499-.82 3.08-1.405 4.736-1.762zm-6.828-5.69h6.223a31.77 31.77 0 00.386 4.45 18.68 18.68 0 00-5.129 1.897c-.84-1.718-1.396-3.814-1.48-6.347zm-1.262 0c.088 2.79.722 5.097 1.676 6.984-.447.283-.885.585-1.317.909a14.413 14.413 0 01-2.758-7.893h2.399zm.001-1.263h-2.4a14.426 14.426 0 013.034-8.262 22.6 22.6 0 001.38.91c-1.133 1.971-1.912 4.398-2.014 7.352zm7.976-4.91a32.245 32.245 0 00-.488 4.91h-6.225c.099-2.713.8-4.936 1.823-6.74a19.485 19.485 0 004.89 1.83zm.245-1.24a18.214 18.214 0 01-4.472-1.669c2.155-3.096 5.164-4.754 6.973-5.529-.738 1.473-1.793 3.958-2.501 7.198zm7.754.045c-.698-3.213-1.737-5.686-2.477-7.173 1.853.816 4.815 2.507 6.912 5.606a17.614 17.614 0 01-4.435 1.567zm-6.502.194c.768-3.46 1.942-6.034 2.62-7.328.681 1.296 1.861 3.878 2.628 7.354-.903.123-1.823.193-2.766.187a17.817 17.817 0 01-2.482-.213zm-.72 5.911c.04-1.67.213-3.233.472-4.67.894.137 1.799.226 2.717.235a20.246 20.246 0 003.025-.208c.255 1.429.426 2.983.466 4.643h-6.68zm6.082 6.76c-.76 3.704-2.03 6.431-2.744 7.763-.715-1.335-1.993-4.07-2.751-7.8a18.793 18.793 0 012.891-.195c.88.01 1.747.095 2.604.231zm-2.591-1.495a20.66 20.66 0 00-3.126.217 30.225 30.225 0 01-.37-4.219h6.69a30.09 30.09 0 01-.377 4.252 19.152 19.152 0 00-2.817-.25zm4.453-5.265a32.02 32.02 0 00-.48-4.86 18.8 18.8 0 004.85-1.728c.975 1.774 1.635 3.953 1.73 6.588h-6.1zM23.996 8.21c-8.705 0-15.788 7.082-15.788 15.788s7.083 15.788 15.788 15.788c8.707 0 15.789-7.082 15.789-15.788S32.703 8.21 23.996 8.21z" />
  );

  return isExtraSmall ? (isHovered ? simplifiedHover : simplified) : isHovered ? normalHover : normal;
};

export default Globe;
