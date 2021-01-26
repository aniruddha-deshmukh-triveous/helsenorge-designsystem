import React from 'react';
import {SvgPathProps} from './Icon';

const VideoChat: React.FC<SvgPathProps> = ({isExtraSmall, isHovered}: SvgPathProps): JSX.Element => {
  const normal = (
    <path d="M21.927 21.78h.114v.885h-.114a.443.443 0 010-.885zm.993 0h.496c.975 0 1.83-.521 2.304-1.298a2.734 2.734 0 002.324 1.298h3.093v1.237a3.984 3.984 0 01-3.98 3.98H26.9a3.984 3.984 0 01-3.98-3.98V21.78zm0-.911a3.985 3.985 0 013.98-3.98h.258a3.984 3.984 0 013.979 3.98v.11h-3.093a1.933 1.933 0 01-1.931-1.931v-.14h-.8v.175a1.898 1.898 0 01-1.897 1.896h-.496v-.11zm9.097.91h.114a.442.442 0 010 .886h-.114v-.885zm-10.09 1.687h.239c.23 2.422 2.252 4.332 4.734 4.332h.258c2.482 0 4.504-1.91 4.734-4.332h.239a1.244 1.244 0 000-2.487h-.194v-.11a4.785 4.785 0 00-4.78-4.78H26.9a4.785 4.785 0 00-4.78 4.78v.11h-.193c-.685 0-1.243.558-1.243 1.243 0 .686.558 1.244 1.243 1.244zM5.065 14.13h9.396v-1H5.065v1zm0 2.326h9.396v-1H5.065v1zm40.14 19.285a2.023 2.023 0 01-2.022 2.02h-32.31a2.023 2.023 0 01-2.02-2.02V34.65h36.352v1.09zM3.909 19.124a1.265 1.265 0 01-1.263-1.264v-5.777c0-.698.567-1.264 1.263-1.264h12.489c.697 0 1.264.566 1.264 1.264v5.777c0 .697-.567 1.264-1.264 1.264h-2.712v1.553l-2.416-1.553H3.909zm29.99 14.225H20.162a5.784 5.784 0 013.927-4.658 6.691 6.691 0 005.882 0 5.72 5.72 0 013.93 4.658zm-15.237-15.49v-3.608h22.425c.98 0 1.777.797 1.777 1.776v17.322H34.71a6.516 6.516 0 00-4.667-5.471l-.156-.046-.144.076c-1.663.888-3.766.886-5.43 0l-.142-.076-.156.046c-2.496.724-4.338 2.908-4.663 5.47h-8.158V20.265l3.492 2.245v-2.385h1.712a2.267 2.267 0 002.264-2.264zm25.502 15.49V16.027a3.081 3.081 0 00-3.077-3.077H18.662v-.867a2.267 2.267 0 00-2.264-2.264H3.908a2.266 2.266 0 00-2.262 2.264v5.777a2.266 2.266 0 002.263 2.264h7.067l.032.02H9.894v13.205H7.553v2.392a3.325 3.325 0 003.32 3.322h32.31a3.325 3.325 0 003.322-3.322v-2.392h-2.341zm-15.391-9.807a.327.327 0 100-.654.327.327 0 000 .654zm-3.443 0a.327.327 0 100-.654.327.327 0 000 .654z" />
  );

  const normalHover = (
    <path d="M16.398 7.819a2.267 2.267 0 012.264 2.264v2.867h22.425a3.08 3.08 0 013.076 3.077v17.322h2.342v2.392a3.325 3.325 0 01-3.321 3.322h-32.31a3.325 3.325 0 01-3.321-3.322v-2.392h2.34V18.124H3.91a2.267 2.267 0 01-2.264-2.264v-5.777a2.267 2.267 0 012.264-2.264zm28.807 26.83H8.853v1.092c0 1.115.907 2.02 2.02 2.02h32.31a2.023 2.023 0 002.022-2.02V34.65zM29.97 28.692c-1.82.908-4.066.908-5.884 0-2.082.669-3.613 2.503-3.926 4.658h13.738a5.717 5.717 0 00-3.928-4.658zm11.116-14.44H18.662v1.609a2.267 2.267 0 01-2.264 2.264h-1.712v2.386l-3.492-2.246v15.085h8.158c.326-2.563 2.167-4.747 4.663-5.471l.156-.046.143.076c1.662.887 3.766.887 5.43 0l.143-.076.156.046a6.514 6.514 0 014.666 5.47h8.155V16.028a1.78 1.78 0 00-1.777-1.776zm-13.93 1.838a4.785 4.785 0 014.78 4.78v.11h.193a1.244 1.244 0 010 2.487h-.238c-.23 2.422-2.252 4.332-4.734 4.332h-.26c-2.481 0-4.503-1.91-4.733-4.332h-.238a1.245 1.245 0 01-1.243-1.244c0-.685.558-1.243 1.243-1.243h.193v-.11a4.785 4.785 0 014.779-4.78zm-1.437 4.393a2.697 2.697 0 01-2.304 1.298h-.496v1.237a3.984 3.984 0 003.979 3.98h.259a3.984 3.984 0 003.979-3.98V21.78h-3.093c-.98 0-1.842-.52-2.324-1.298zm-.39 2.406a.327.327 0 110 .654.327.327 0 010-.654zm3.443 0a.326.326 0 11.001.653.326.326 0 010-.653zM22.04 21.78h-.113a.443.443 0 100 .885h.113v-.885zm10.09 0h-.113v.885h.113a.443.443 0 100-.885zm-4.972-4.891h-.26a3.984 3.984 0 00-3.978 3.98v.11h.496c1.046 0 1.897-.85 1.897-1.896v-.174h.8v.139c0 1.065.866 1.93 1.93 1.93h3.094v-.11a3.984 3.984 0 00-3.98-3.98zm-10.76-8.07H3.908c-.696 0-1.263.567-1.263 1.264v5.777c0 .697.567 1.264 1.264 1.264h7.36l2.417 1.554v-1.554h2.712c.697 0 1.264-.567 1.264-1.264v-5.777c0-.697-.567-1.264-1.264-1.264zm-1.937 4.637v1H5.066v-1h9.395zm0-2.327v1H5.066v-1h9.395z" />
  );

  const simplified = (
    <path d="M16.398 9.813a2.271 2.271 0 012.268 2.27v1.01h22.42a2.937 2.937 0 012.933 2.934v17.466h2.34v2.249a3.18 3.18 0 01-3.176 3.176H10.874a3.18 3.18 0 01-3.177-3.176v-2.249h2.34v-13.35h.96l-.023-.014H3.909A2.272 2.272 0 011.64 17.86v-5.777a2.272 2.272 0 012.269-2.27zm28.951 24.692H8.708v1.237c0 1.193.972 2.165 2.166 2.165h32.31a2.169 2.169 0 002.165-2.165v-1.237zM29.97 28.692a6.694 6.694 0 01-5.883 0 5.787 5.787 0 00-3.95 4.801h13.788a5.718 5.718 0 00-3.955-4.801zm11.116-14.587h-22.42v3.755a2.27 2.27 0 01-2.268 2.269H14.69v2.391l-3.643-2.343v13.316h8.28a6.595 6.595 0 014.687-5.616l.155-.045.144.077c1.662.885 3.768.885 5.43 0l.142-.077.156.045a6.52 6.52 0 014.693 5.616h8.274V16.027c0-1.06-.863-1.922-1.923-1.922zM27.158 16.09a4.784 4.784 0 014.78 4.778v.111h.192c.686 0 1.244.559 1.244 1.243 0 .685-.558 1.242-1.244 1.242h-.238c-.228 2.424-2.252 4.333-4.734 4.333h-.259c-2.482 0-4.504-1.909-4.734-4.333h-.238a1.244 1.244 0 01-1.243-1.242c0-.684.559-1.243 1.243-1.243h.192v-.11a4.785 4.785 0 014.78-4.78zm-1.439 4.393a2.696 2.696 0 01-2.302 1.296h-.497v1.238a3.984 3.984 0 003.98 3.98h.258a3.984 3.984 0 003.979-3.98v-1.238h-3.094c-.98 0-1.841-.52-2.324-1.296zm-.389 2.405a.327.327 0 110 .654.327.327 0 010-.654zm3.443 0a.327.327 0 110 .654.327.327 0 010-.654zm-6.733-1.109h-.113a.444.444 0 000 .885h.113v-.885zm10.09 0h-.113v.885h.113a.443.443 0 100-.885zm-4.972-4.89h-.259a3.983 3.983 0 00-3.979 3.98v.11h.497a1.9 1.9 0 001.896-1.897v-.173h.8v.139c0 1.065.866 1.931 1.93 1.931h3.094v-.11a3.983 3.983 0 00-3.979-3.98zm-10.76-6.066H3.909a1.26 1.26 0 00-1.258 1.26v5.777c0 .694.564 1.257 1.258 1.257h7.362l2.41 1.55v-1.55h2.717a1.26 1.26 0 001.26-1.257v-5.777c0-.695-.567-1.26-1.26-1.26zm-1.937 4.628v1.012H5.067V15.45h9.394zm0-2.328v1.012H5.067v-1.012h9.394z" />
  );

  const simplifiedHover = (
    <path d="M16.398 8.044a2.272 2.272 0 012.268 2.269v2.78h22.42a2.936 2.936 0 012.932 2.934v17.466h2.342v2.249a3.18 3.18 0 01-3.177 3.176H10.874a3.18 3.18 0 01-3.177-3.176v-2.249h2.34V18.361H3.91a2.272 2.272 0 01-2.269-2.27v-5.778A2.272 2.272 0 013.91 8.044zm28.951 26.46H8.708v1.238c0 1.193.972 2.165 2.166 2.165h32.31a2.169 2.169 0 002.165-2.165v-1.237zM29.97 28.693c-1.819.908-4.067.908-5.883 0a5.784 5.784 0 00-3.95 4.801h13.788a5.718 5.718 0 00-3.955-4.801zm11.116-14.587h-22.42v1.986a2.272 2.272 0 01-2.268 2.27H14.69v2.39l-3.643-2.342v15.084h8.28a6.59 6.59 0 014.687-5.616l.155-.045.144.077c1.661.884 3.765.885 5.43 0l.143-.077.155.045a6.52 6.52 0 014.693 5.616h8.272V16.027c0-1.06-.861-1.922-1.92-1.922zM27.16 16.09a4.784 4.784 0 014.778 4.778v.111h.193c.685 0 1.243.559 1.243 1.243 0 .685-.558 1.242-1.243 1.242h-.237c-.23 2.424-2.252 4.333-4.734 4.333h-.26c-2.483 0-4.505-1.909-4.735-4.333h-.237a1.244 1.244 0 01-1.243-1.242c0-.684.558-1.243 1.243-1.243h.193v-.11a4.784 4.784 0 014.78-4.78zm-1.44 4.393a2.696 2.696 0 01-2.303 1.296h-.495v1.238a3.984 3.984 0 003.979 3.98h.259a3.984 3.984 0 003.979-3.98v-1.238h-3.094c-.981 0-1.842-.52-2.324-1.296zm-.389 2.405a.327.327 0 110 .654.327.327 0 010-.654zm3.444 0c.18 0 .325.146.325.327a.326.326 0 11-.653 0c0-.18.147-.327.328-.327zm-6.734-1.109h-.113a.443.443 0 000 .885h.113v-.885zm10.09 0h-.113v.885h.113a.443.443 0 000-.885zm-4.971-4.89h-.26a3.983 3.983 0 00-3.978 3.98v.11h.495a1.899 1.899 0 001.896-1.897v-.173h.8v.139c0 1.065.867 1.931 1.932 1.931h3.094v-.11a3.984 3.984 0 00-3.98-3.98zM16.398 9.056H3.909c-.694 0-1.258.563-1.258 1.257v5.778c0 .694.564 1.258 1.258 1.258h7.362l2.41 1.55v-1.55h2.717c.693 0 1.258-.564 1.258-1.258v-5.778c0-.694-.565-1.257-1.258-1.257zm-1.937 4.627v1.011H5.067v-1.011h9.394zm0-2.328v1.011H5.067v-1.011h9.394z" />
  );

  return isExtraSmall ? (isHovered ? simplifiedHover : simplified) : isHovered ? normalHover : normal;
};

export default VideoChat;
