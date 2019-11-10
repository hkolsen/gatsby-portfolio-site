import React from 'react';
import IconBase from 'react-icon-base';
import { useTheme } from '~/styled';

export const Logo: React.FC = () => {
  const { colors } = useTheme();
  return (
  <IconBase
    viewBox="0 0 351 94"
    height="100%"
    width="100%"
    shapeRendering="geometricPrecision"
  >
    <title>Heidi Olsen</title>
    <path fill={colors.BASE} d="M3.32 16.718h340v63.59h-340z"/>
    <path fill={colors.WHITE} stroke={colors.BASE} strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" d="M7.32 12.718h340v63.59h-340z"/>
    <circle fill={colors.BASE} cx="170.552" cy="49.23" r="42.308"/>
    <g fill={colors.BASE}>
    <path d="M47.638 29.906c.28.307.42.714.42 1.22v25.24c0 .507-.14.913-.42 1.22-.28.307-.674.461-1.18.461-.507 0-.907-.154-1.2-.461-.294-.307-.44-.713-.44-1.22v-11.44h-16.88v11.44c0 .507-.147.913-.44 1.22s-.693.461-1.2.461-.9-.154-1.18-.461c-.28-.307-.42-.713-.42-1.22v-25.24c0-.506.14-.913.42-1.22.28-.306.673-.46 1.18-.46.506 0 .906.154 1.2.46.293.307.44.714.44 1.22v11h16.88v-11c0-.506.146-.913.44-1.22.293-.306.693-.46 1.2-.46.506 0 .9.154 1.18.46zM71.177 53.686c.213.24.32.547.32.92 0 .668-.467 1.281-1.4 1.841-.96.56-1.974.979-3.04 1.26-1.067.28-2.107.42-3.12.42-3.014 0-5.394-.894-7.14-2.68-1.747-1.786-2.62-4.253-2.62-7.4 0-2 .386-3.767 1.16-5.3.773-1.533 1.86-2.726 3.26-3.58 1.4-.853 2.993-1.28 4.78-1.28 2.533 0 4.546.827 6.04 2.48 1.493 1.654 2.24 3.894 2.24 6.72 0 .534-.107.92-.32 1.16-.214.24-.56.36-1.04.36h-12.88c.24 4.587 2.413 6.88 6.52 6.88 1.04 0 1.933-.141 2.68-.42a17.34 17.34 0 002.4-1.141c.693-.399 1.16-.6 1.4-.6.293 0 .547.12.76.36zm-11.86-11.68c-1.027 1.067-1.634 2.574-1.82 4.52h11.32c-.054-1.973-.547-3.486-1.48-4.54-.934-1.053-2.24-1.58-3.92-1.58-1.707 0-3.073.534-4.1 1.6zM77.297 33.206c-.4-.373-.6-.866-.6-1.48 0-.586.2-1.066.6-1.44.4-.373.92-.56 1.56-.56s1.16.187 1.56.56c.4.374.6.854.6 1.44 0 .614-.2 1.107-.6 1.48-.4.374-.92.56-1.56.56s-1.16-.186-1.56-.56zm.38 24.42c-.307-.28-.46-.673-.46-1.18v-16.88c0-.506.153-.9.46-1.18.306-.28.7-.42 1.18-.42s.866.14 1.16.42c.293.28.44.674.44 1.18v16.88c0 .534-.147.934-.44 1.2-.293.266-.68.4-1.16.4s-.874-.14-1.18-.42zM104.137 29.886c.293.294.44.667.44 1.12v25.44c0 .479-.146.866-.44 1.159-.293.294-.693.441-1.2.441s-.9-.147-1.18-.441c-.28-.293-.42-.68-.42-1.159v-2.16c-.587 1.228-1.447 2.174-2.58 2.84-1.134.667-2.46 1-3.98 1-1.707 0-3.214-.427-4.52-1.28-1.307-.853-2.32-2.046-3.04-3.58-.72-1.533-1.08-3.312-1.08-5.339 0-2 .36-3.76 1.08-5.28.72-1.52 1.733-2.693 3.04-3.52 1.306-.826 2.813-1.24 4.52-1.24 1.52 0 2.846.333 3.98 1 1.133.667 1.993 1.614 2.58 2.84v-10.72c0-.48.14-.86.42-1.14.28-.28.673-.42 1.18-.42.506-.001.906.146 1.2.439zm-4.34 23.62c1.026-1.293 1.54-3.126 1.54-5.5 0-2.373-.514-4.2-1.54-5.48-1.027-1.28-2.487-1.92-4.38-1.92-1.894 0-3.367.64-4.42 1.92-1.054 1.28-1.58 3.08-1.58 5.4 0 2.374.526 4.22 1.58 5.541 1.053 1.319 2.526 1.979 4.42 1.979 1.893 0 3.353-.646 4.38-1.94zM111.457 33.206c-.4-.373-.6-.866-.6-1.48 0-.586.2-1.066.6-1.44.4-.373.92-.56 1.56-.56s1.16.187 1.56.56c.4.374.6.854.6 1.44 0 .614-.2 1.107-.6 1.48-.4.374-.92.56-1.56.56-.641 0-1.161-.186-1.56-.56zm.379 24.42c-.307-.28-.46-.673-.46-1.18v-16.88c0-.506.153-.9.46-1.18.306-.28.7-.42 1.18-.42s.866.14 1.16.42c.293.28.44.674.44 1.18v16.88c0 .534-.147.934-.44 1.2-.293.266-.68.4-1.16.4s-.873-.14-1.18-.42z"/>
  </g>
  <g fill={colors.BASE}>
    <path d="M235.5 56.406c-1.934-1.174-3.42-2.84-4.461-5-1.039-2.16-1.56-4.707-1.56-7.64 0-2.96.513-5.526 1.54-7.7 1.026-2.173 2.506-3.84 4.439-5 1.934-1.16 4.221-1.74 6.86-1.74s4.927.58 6.86 1.74c1.934 1.16 3.413 2.827 4.439 5 1.027 2.173 1.541 4.727 1.541 7.66 0 2.934-.521 5.487-1.561 7.661s-2.527 3.846-4.46 5.02c-1.935 1.174-4.207 1.76-6.82 1.76-2.612-.001-4.884-.587-6.817-1.761zm13.799-4.06c1.667-2.013 2.5-4.886 2.5-8.62 0-3.733-.826-6.6-2.479-8.6s-3.987-3-7-3c-2.987 0-5.313 1.007-6.979 3.02-1.667 2.014-2.5 4.874-2.5 8.58 0 3.707.833 6.574 2.5 8.6 1.666 2.027 3.992 3.04 6.979 3.04 2.986 0 5.313-1.007 6.979-3.02zM261.859 57.626c-.307-.28-.46-.673-.46-1.18v-25.4c0-.506.153-.9.46-1.18s.7-.42 1.18-.42c.453 0 .834.14 1.141.42s.46.674.46 1.18v25.4c0 .507-.153.899-.46 1.18s-.688.421-1.141.421c-.479 0-.873-.141-1.18-.421zM274.539 57.686c-1.107-.293-2.087-.705-2.939-1.239-.48-.32-.82-.62-1.021-.899-.2-.281-.3-.621-.3-1.021 0-.347.1-.634.3-.86s.46-.34.78-.34.785.2 1.399.6c.8.48 1.593.86 2.38 1.141.787.279 1.767.42 2.94.42 1.44 0 2.56-.254 3.36-.76.799-.507 1.199-1.24 1.199-2.2 0-.587-.146-1.06-.439-1.421-.294-.359-.801-.68-1.52-.959-.721-.28-1.774-.566-3.16-.86-2.348-.506-4.027-1.186-5.041-2.04-1.014-.853-1.52-2.013-1.52-3.48 0-1.146.32-2.16.96-3.04s1.526-1.573 2.66-2.08c1.133-.506 2.42-.76 3.86-.76 1.039 0 2.046.14 3.02.42.973.28 1.833.674 2.58 1.18.906.64 1.359 1.307 1.359 2 0 .347-.106.64-.319.88-.214.24-.467.36-.761.36-.319 0-.799-.226-1.439-.68a12.574 12.574 0 00-2.12-1.12c-.667-.266-1.493-.4-2.479-.4-1.254 0-2.26.28-3.021.84-.76.56-1.14 1.307-1.14 2.24 0 .587.14 1.06.42 1.42.279.36.746.68 1.4.96.652.28 1.593.554 2.819.82 1.813.4 3.22.84 4.22 1.32s1.713 1.067 2.141 1.761c.426.693.64 1.573.64 2.64 0 1.68-.706 3.034-2.12 4.06-1.414 1.027-3.279 1.54-5.6 1.54a13.745 13.745 0 01-3.498-.443zM307.318 53.686c.214.24.32.547.32.92 0 .668-.467 1.281-1.4 1.841-.959.56-1.973.979-3.039 1.26s-2.107.42-3.12.42c-3.014 0-5.394-.894-7.14-2.68-1.748-1.786-2.621-4.253-2.621-7.4 0-2 .387-3.767 1.16-5.3.773-1.533 1.86-2.726 3.26-3.58 1.4-.853 2.994-1.28 4.781-1.28 2.533 0 4.546.827 6.039 2.48 1.494 1.654 2.24 3.894 2.24 6.72 0 .534-.107.92-.32 1.16-.213.24-.56.36-1.039.36h-12.881c.24 4.587 2.414 6.88 6.521 6.88 1.04 0 1.933-.141 2.68-.42a17.34 17.34 0 002.4-1.141c.692-.399 1.159-.6 1.399-.6.294 0 .547.12.76.36zm-11.859-11.68c-1.027 1.067-1.634 2.574-1.82 4.52h11.32c-.054-1.973-.547-3.486-1.48-4.54-.934-1.053-2.24-1.58-3.92-1.58-1.707 0-3.074.534-4.1 1.6zM330.158 45.606v10.84c0 .507-.14.899-.42 1.18-.279.28-.674.421-1.18.421-.507 0-.907-.141-1.2-.421-.294-.28-.44-.673-.44-1.18v-10.64c0-1.813-.354-3.133-1.06-3.96-.707-.826-1.834-1.24-3.38-1.24-1.787 0-3.214.547-4.28 1.64-1.067 1.094-1.6 2.574-1.6 4.44v9.76c0 .507-.14.899-.421 1.18-.279.28-.673.421-1.18.421-.506 0-.906-.141-1.199-.421-.294-.28-.44-.673-.44-1.18v-16.88c0-.48.146-.867.44-1.16.293-.293.693-.44 1.199-.44.48 0 .86.147 1.141.44.279.293.42.667.42 1.12v2.04c.64-1.2 1.533-2.113 2.68-2.74 1.146-.626 2.453-.94 3.92-.94 4.666 0 7 2.574 7 7.72z"/>
  </g>
  <circle fill={colors.ACCENT} stroke={colors.BASE} strokeWidth="2" strokeMiterlimit="10" cx="174.552" cy="45.23" r="42.308"/>
  <path fill={colors.BASE} d="M202.722 12.879c.708.736 1.062 1.712 1.062 2.926v60.541c0 1.216-.354 2.191-1.062 2.926-.708.735-1.703 1.104-2.982 1.104-1.28 0-2.292-.368-3.032-1.104-.742-.734-1.111-1.71-1.111-2.926v-27.44h-42.656v27.44c0 1.216-.371 2.191-1.112 2.926-.742.735-1.752 1.104-3.032 1.104s-2.274-.368-2.981-1.104c-.708-.734-1.062-1.71-1.062-2.926v-60.54c0-1.214.354-2.19 1.062-2.926.708-.735 1.701-1.104 2.981-1.104 1.28 0 2.291.369 3.032 1.104.742.736 1.112 1.712 1.112 2.926V42.19h42.656V15.806c0-1.214.369-2.19 1.111-2.926.74-.735 1.752-1.104 3.032-1.104 1.279 0 2.274.369 2.982 1.103z"/>
</IconBase>
)}