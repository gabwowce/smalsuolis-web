import { CgClose } from 'react-icons/cg';
import { FaAnchor, FaCheck, FaTrash } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa6';
import { FiArrowLeft, FiClock, FiDownload, FiMail, FiMenu } from 'react-icons/fi';
import { HiOutlineUsers } from 'react-icons/hi';
import { IoMdCalendar } from 'react-icons/io';
import { IoLocationOutline, IoPersonOutline } from 'react-icons/io5';
import { LiaBalanceScaleSolid } from 'react-icons/lia';
import {
  MdDone,
  MdExitToApp,
  MdKeyboardArrowDown,
  MdLocationOn,
  MdOutlineEdit,
  MdOutlineFullscreen,
  MdOutlineFullscreenExit,
  MdOutlineLocalPhone,
  MdOutlineVisibility,
  MdOutlineVisibilityOff,
  MdUnfoldMore,
} from 'react-icons/md';
import { PiArrowBendDownLeftBold } from 'react-icons/pi';

export enum IconName {
  remove = 'remove',
  download = 'download',
  logout = 'logout',
  back = 'back',
  burger = 'burger',
  showMore = 'showMore',
  edit = 'edit',
  deleteItem = 'deleteItem',
  time = 'time',
  calendar = 'calendar',
  exit = 'exit',
  lootsCount = 'lootsCount',
  mapLocation = 'mapLocation',
  users = 'users',
  ticket = 'ticket',
  phone = 'phone',
  email = 'email',
  visibleOn = 'visibleOn',
  visibleOff = 'visibleOff',
  dropdownArrow = 'dropdownArrow',
  invited = 'invited',
  verified = 'verified',
  close = 'close',
  violation = 'violation',
  crown = 'crown',
  person = 'person',
  anchor = 'anchor',
  right = 'right',
  check = 'check',
  scales = 'scales',
  return = 'return',
  eGate = 'eGate',
  fourSquares = 'fourSquares',
  home = 'home',
  journal = 'journal',
  members = 'members',
  tools = 'tools',
  settings = 'settings',
  profile = 'profile',
  investigations = 'investigations',
  logo = 'logo',
  sidebarLogo = 'sidebarLogo',
  active = 'active',
  net = 'net',
  connection = 'connection',
  startFishing = 'startFishing',
  beginFishing = 'beginFishong',
  finishFishing = 'finishFishing',
  fish = 'fish',
  endFishing = 'endFishing',
  location = 'location',
  locationOutline = 'locationOutline',
  researches = 'researches',
  fullscreen = 'fullscreen',
  exitFullScreen = 'exitFullScreen',
}
export interface IconProps {
  name: IconName | string;
  className?: string;
}

const Icon = ({ name, className }: IconProps) => {
  switch (name) {
    case IconName.sidebarLogo:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="183"
          height="36.687"
          viewBox="0 0 283 36.687"
        >
          <g id="Logo_dark" transform="translate(-272.715 -164)">
            <g id="Group_7461" data-name="Group 7461" transform="translate(272.715 172.715)">
              <path
                id="Path_3631"
                data-name="Path 3631"
                d="M61.533,224h16.6a5.533,5.533,0,1,1,0,11.067h-16.6a5.533,5.533,0,1,1,0-11.067"
                transform="translate(-56 -207.399)"
                fill="#73dc8c"
              />
              <path
                id="Path_3632"
                data-name="Path 3632"
                d="M229.533,56h0A5.533,5.533,0,1,1,224,61.533,5.533,5.533,0,0,1,229.533,56"
                transform="translate(-207.4 -56)"
                fill="#73dc8c"
              />
            </g>
            <g id="Group_7462" data-name="Group 7462" transform="translate(313.526 164)">
              <path
                id="Path_3633"
                data-name="Path 3633"
                d="M539.286,134.941a7.091,7.091,0,0,1-2.872,6q-2.872,2.166-8.466,2.167a23.949,23.949,0,0,1-3.931-.3,11.259,11.259,0,0,1-3.1-.932,5.537,5.537,0,0,1-2.016-1.587,3.627,3.627,0,0,1-.731-2.268,3.869,3.869,0,0,1,.5-2.041,5.092,5.092,0,0,1,1.21-1.386,20.039,20.039,0,0,0,3.351,1.436,13.761,13.761,0,0,0,4.359.63,5.092,5.092,0,0,0,2.394-.454,1.359,1.359,0,0,0,.831-1.209,1.266,1.266,0,0,0-.6-1.109,5.623,5.623,0,0,0-2.016-.655l-1.512-.3a14.142,14.142,0,0,1-6.526-2.7,6.559,6.559,0,0,1-2.142-5.266,6.956,6.956,0,0,1,3.074-5.9,11.38,11.38,0,0,1,3.5-1.562,17.2,17.2,0,0,1,4.51-.554,21.059,21.059,0,0,1,3.5.277,11.434,11.434,0,0,1,2.847.831,5.151,5.151,0,0,1,1.915,1.436,3.248,3.248,0,0,1,.706,2.091,4.3,4.3,0,0,1-.428,1.99,4.483,4.483,0,0,1-1.083,1.386,6.237,6.237,0,0,0-1.209-.529q-.807-.276-1.764-.5t-1.94-.378a11.86,11.86,0,0,0-1.789-.151,6.911,6.911,0,0,0-2.57.378,1.253,1.253,0,0,0-.907,1.184,1.064,1.064,0,0,0,.5.907,5.773,5.773,0,0,0,1.915.655l1.562.353q4.838,1.109,6.879,3.049a6.61,6.61,0,0,1,2.041,5.014"
                transform="translate(-518.02 -106.418)"
                fill="#002025"
              />
              <path
                id="Path_3634"
                data-name="Path 3634"
                d="M786.8,117.46a14.465,14.465,0,0,1,4.057.58,9.989,9.989,0,0,1,3.452,1.739,14.918,14.918,0,0,1,3.4-1.663,14.006,14.006,0,0,1,4.561-.655,14.169,14.169,0,0,1,3.754.5,9.6,9.6,0,0,1,3.276,1.587,7.684,7.684,0,0,1,2.293,2.872,10.041,10.041,0,0,1,.857,4.359v15.874a11.713,11.713,0,0,1-1.588.3,16.222,16.222,0,0,1-2.242.151,11.845,11.845,0,0,1-1.99-.151,3.388,3.388,0,0,1-1.487-.6,2.9,2.9,0,0,1-.932-1.235,5.332,5.332,0,0,1-.327-2.041V127.035a2.633,2.633,0,0,0-.857-2.192,3.628,3.628,0,0,0-2.318-.68,4.032,4.032,0,0,0-1.512.328,4.366,4.366,0,0,0-1.209.68,1.6,1.6,0,0,1,.05.378v17.109a14.134,14.134,0,0,1-1.638.3,15.858,15.858,0,0,1-2.192.151,11.848,11.848,0,0,1-1.991-.151,3.388,3.388,0,0,1-1.487-.6,2.9,2.9,0,0,1-.932-1.235,5.331,5.331,0,0,1-.328-2.041V127.035a2.531,2.531,0,0,0-.932-2.192,3.7,3.7,0,0,0-2.243-.68,4,4,0,0,0-1.562.277,11.818,11.818,0,0,0-1.109.529v17.688a11.7,11.7,0,0,1-1.587.3,16.231,16.231,0,0,1-2.243.151,11.845,11.845,0,0,1-1.99-.151,3.389,3.389,0,0,1-1.487-.6,2.9,2.9,0,0,1-.932-1.235,5.336,5.336,0,0,1-.328-2.041V123.86a3.64,3.64,0,0,1,.58-2.167,6.547,6.547,0,0,1,1.588-1.512,14.5,14.5,0,0,1,4.258-1.965,18.576,18.576,0,0,1,5.317-.756"
                transform="translate(-749.657 -106.878)"
                fill="#002025"
              />
              <path
                id="Path_3635"
                data-name="Path 3635"
                d="M1205.56,117.46a20.7,20.7,0,0,1,4.964.554,11.118,11.118,0,0,1,3.83,1.688,7.622,7.622,0,0,1,2.444,2.872,9.2,9.2,0,0,1,.856,4.107V137.97a3.127,3.127,0,0,1-.73,2.142,7.289,7.289,0,0,1-1.739,1.436q-3.276,1.965-9.222,1.965a21.091,21.091,0,0,1-4.813-.5,11.4,11.4,0,0,1-3.679-1.512,6.928,6.928,0,0,1-2.368-2.57,7.6,7.6,0,0,1-.832-3.628,6.824,6.824,0,0,1,2.066-5.342q2.066-1.864,6.4-2.318l6.6-.706v-.353a2.161,2.161,0,0,0-1.285-2.091,8.655,8.655,0,0,0-3.7-.63,17.153,17.153,0,0,0-3.729.4,19.861,19.861,0,0,0-3.276,1.008,3.484,3.484,0,0,1-1.109-1.386,4.38,4.38,0,0,1-.454-1.94,3.232,3.232,0,0,1,.63-2.091,4.878,4.878,0,0,1,1.94-1.335,15.181,15.181,0,0,1,3.452-.806,30.012,30.012,0,0,1,3.754-.252m.4,19.8a11.26,11.26,0,0,0,1.89-.176,4.609,4.609,0,0,0,1.537-.479v-4.031l-3.628.3a5.592,5.592,0,0,0-2.318.6,1.629,1.629,0,0,0-.907,1.512,2,2,0,0,0,.781,1.638,4.272,4.272,0,0,0,2.646.63"
                transform="translate(-1127.452 -106.878)"
                fill="#002025"
              />
              <path
                id="Path_3636"
                data-name="Path 3636"
                d="M1494.044,69.12q-.555.1-1.638.277a13.665,13.665,0,0,1-2.192.176,11.848,11.848,0,0,1-1.991-.151,3.387,3.387,0,0,1-1.486-.6,2.9,2.9,0,0,1-.933-1.235,5.336,5.336,0,0,1-.327-2.041V36.314q.554-.1,1.638-.277a13.653,13.653,0,0,1,2.192-.176,11.86,11.86,0,0,1,1.99.151,3.394,3.394,0,0,1,1.487.6,2.913,2.913,0,0,1,.932,1.235,5.352,5.352,0,0,1,.328,2.041Z"
                transform="translate(-1389.883 -33.341)"
                fill="#002025"
              />
              <path
                id="Path_3637"
                data-name="Path 3637"
                d="M1641.892,134.941a7.091,7.091,0,0,1-2.872,6q-2.873,2.166-8.466,2.167a23.951,23.951,0,0,1-3.931-.3,11.262,11.262,0,0,1-3.1-.932,5.542,5.542,0,0,1-2.016-1.587,3.627,3.627,0,0,1-.73-2.268,3.866,3.866,0,0,1,.5-2.041,5.1,5.1,0,0,1,1.209-1.386,20.048,20.048,0,0,0,3.351,1.436,13.761,13.761,0,0,0,4.359.63,5.093,5.093,0,0,0,2.394-.454,1.359,1.359,0,0,0,.831-1.209,1.265,1.265,0,0,0-.6-1.109,5.62,5.62,0,0,0-2.016-.655l-1.511-.3a14.143,14.143,0,0,1-6.526-2.7,6.559,6.559,0,0,1-2.142-5.266,6.955,6.955,0,0,1,3.074-5.9,11.383,11.383,0,0,1,3.5-1.562,17.2,17.2,0,0,1,4.51-.554,21.058,21.058,0,0,1,3.5.277,11.434,11.434,0,0,1,2.847.831,5.153,5.153,0,0,1,1.915,1.436,3.248,3.248,0,0,1,.706,2.091,4.3,4.3,0,0,1-.428,1.99,4.477,4.477,0,0,1-1.083,1.386,6.235,6.235,0,0,0-1.209-.529q-.807-.276-1.764-.5t-1.94-.378a11.86,11.86,0,0,0-1.789-.151,6.911,6.911,0,0,0-2.57.378,1.253,1.253,0,0,0-.907,1.184,1.064,1.064,0,0,0,.5.907,5.772,5.772,0,0,0,1.915.655l1.562.353q4.838,1.109,6.879,3.049a6.609,6.609,0,0,1,2.041,5.014"
                transform="translate(-1511.677 -106.418)"
                fill="#002025"
              />
              <path
                id="Path_3638"
                data-name="Path 3638"
                d="M1877.66,124.544a11.656,11.656,0,0,1,1.587-.3,16.214,16.214,0,0,1,2.243-.151,11.861,11.861,0,0,1,1.99.151,3.393,3.393,0,0,1,1.487.6,2.916,2.916,0,0,1,.932,1.235,5.352,5.352,0,0,1,.327,2.041v10.835a3.741,3.741,0,0,0,1.008,2.948,4.308,4.308,0,0,0,2.923.882,7.287,7.287,0,0,0,1.89-.2,6.479,6.479,0,0,0,1.134-.4V124.544a11.64,11.64,0,0,1,1.587-.3,16.208,16.208,0,0,1,2.242-.151,11.861,11.861,0,0,1,1.99.151,3.393,3.393,0,0,1,1.487.6,2.914,2.914,0,0,1,.932,1.235,5.352,5.352,0,0,1,.328,2.041v15.32a4.117,4.117,0,0,1-2.117,3.78,13.856,13.856,0,0,1-4.208,1.688,23.061,23.061,0,0,1-5.317.58,19.624,19.624,0,0,1-5.014-.6,11.188,11.188,0,0,1-3.956-1.865,8.326,8.326,0,0,1-2.57-3.25,11.55,11.55,0,0,1-.907-4.813Z"
                transform="translate(-1743.313 -112.852)"
                fill="#002025"
              />
              <path
                id="Path_3639"
                data-name="Path 3639"
                d="M2190.169,130.462a15.186,15.186,0,0,1-.958,5.568,11.284,11.284,0,0,1-2.7,4.107,11.46,11.46,0,0,1-4.158,2.52,16.074,16.074,0,0,1-5.392.857,15.256,15.256,0,0,1-5.392-.907,11.857,11.857,0,0,1-4.158-2.6,11.576,11.576,0,0,1-2.7-4.107,15.807,15.807,0,0,1,0-10.835,11.583,11.583,0,0,1,2.7-4.107,11.87,11.87,0,0,1,4.158-2.6,15.252,15.252,0,0,1,5.392-.907,14.892,14.892,0,0,1,5.392.932,12.18,12.18,0,0,1,4.158,2.621,11.583,11.583,0,0,1,2.7,4.107,14.409,14.409,0,0,1,.958,5.342m-17.638,0a7.964,7.964,0,0,0,1.184,4.712,3.843,3.843,0,0,0,3.3,1.638,3.7,3.7,0,0,0,3.25-1.663,8.26,8.26,0,0,0,1.134-4.687,8,8,0,0,0-1.159-4.662,4.094,4.094,0,0,0-6.551,0,7.989,7.989,0,0,0-1.16,4.662"
                transform="translate(-2001.145 -106.878)"
                fill="#002025"
              />
              <path
                id="Path_3640"
                data-name="Path 3640"
                d="M2483.429,69.12q-.556.1-1.638.277a13.663,13.663,0,0,1-2.192.176,11.85,11.85,0,0,1-1.991-.151,3.391,3.391,0,0,1-1.487-.6,2.9,2.9,0,0,1-.932-1.235,5.326,5.326,0,0,1-.328-2.041V36.314q.553-.1,1.637-.277a13.65,13.65,0,0,1,2.192-.176,11.863,11.863,0,0,1,1.991.151,3.394,3.394,0,0,1,1.487.6,2.914,2.914,0,0,1,.932,1.235,5.352,5.352,0,0,1,.328,2.041Z"
                transform="translate(-2281.504 -33.341)"
                fill="#002025"
              />
              <path
                id="Path_3641"
                data-name="Path 3641"
                d="M2614.092,14.9a4.428,4.428,0,0,1,1.285-3.225,5.07,5.07,0,0,1,6.8,0,4.43,4.43,0,0,1,1.285,3.225,4.427,4.427,0,0,1-1.285,3.225,5.07,5.07,0,0,1-6.8,0,4.426,4.426,0,0,1-1.285-3.225m8.97,31.244q-.555.1-1.638.277a13.67,13.67,0,0,1-2.192.176,11.843,11.843,0,0,1-1.99-.151,3.389,3.389,0,0,1-1.487-.6,2.906,2.906,0,0,1-.932-1.235,5.337,5.337,0,0,1-.327-2.041V22.051q.553-.1,1.638-.277a13.644,13.644,0,0,1,2.192-.176,11.855,11.855,0,0,1,1.99.151,3.394,3.394,0,0,1,1.487.6,2.913,2.913,0,0,1,.932,1.235,5.353,5.353,0,0,1,.328,2.041Z"
                transform="translate(-2406.977 -10.36)"
                fill="#002025"
              />
              <path
                id="Path_3642"
                data-name="Path 3642"
                d="M2775.1,134.941a7.092,7.092,0,0,1-2.872,6q-2.873,2.166-8.467,2.167a23.944,23.944,0,0,1-3.93-.3,11.259,11.259,0,0,1-3.1-.932,5.538,5.538,0,0,1-2.016-1.587,3.627,3.627,0,0,1-.73-2.268,3.866,3.866,0,0,1,.5-2.041,5.087,5.087,0,0,1,1.209-1.386,20.028,20.028,0,0,0,3.351,1.436,13.761,13.761,0,0,0,4.359.63,5.094,5.094,0,0,0,2.394-.454,1.358,1.358,0,0,0,.831-1.209,1.266,1.266,0,0,0-.6-1.109,5.627,5.627,0,0,0-2.016-.655l-1.512-.3a14.141,14.141,0,0,1-6.525-2.7,6.558,6.558,0,0,1-2.142-5.266,6.955,6.955,0,0,1,3.074-5.9,11.384,11.384,0,0,1,3.5-1.562,17.193,17.193,0,0,1,4.51-.554,21.06,21.06,0,0,1,3.5.277,11.425,11.425,0,0,1,2.847.831,5.152,5.152,0,0,1,1.915,1.436,3.247,3.247,0,0,1,.706,2.091,4.3,4.3,0,0,1-.428,1.99,4.487,4.487,0,0,1-1.083,1.386,6.256,6.256,0,0,0-1.209-.529q-.807-.276-1.764-.5t-1.94-.378a11.872,11.872,0,0,0-1.79-.151,6.905,6.905,0,0,0-2.569.378,1.253,1.253,0,0,0-.908,1.184,1.064,1.064,0,0,0,.5.907,5.766,5.766,0,0,0,1.915.655l1.563.353q4.838,1.109,6.878,3.049a6.609,6.609,0,0,1,2.041,5.014"
                transform="translate(-2532.908 -106.418)"
                fill="#002025"
              />
            </g>
          </g>
        </svg>
      );

    case IconName.logo:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 512 512"
          fill="#102EB1"
        >
          <path d="M68 512h55V406c0-14.8-17.9-22.2-28.3-11.7l-53.4 53.4C17.6 471.4 34.4 512 68 512zM447 188c24.1-24.1 65.4-7 65.4 27.1v111.6c0 102.3-83 185.3-185.3 185.3H123l324-324zm-76 170.6h43c34.8 0 62.9-28.2 62.9-62.9v-43c0-14.8-17.9-22.2-28.3-11.7l-89.4 89.4c-10.3 10.3-2.9 28.2 11.8 28.2zM444.9 0h-55v106c0 14.8 17.9 22.2 28.3 11.7l53.4-53.4C495.2 40.6 478.4 0 444.9 0zM185.7 0h204.1l-324 324C41.7 348.1.4 331 .4 296.9V185.3C.4 83 83.4 0 185.7 0zM35.8 259.4c0 14.8 17.9 22.2 28.3 11.7l89.4-89.4c10.5-10.5 3-28.3-11.7-28.3h-43c-34.8 0-62.9 28.2-62.9 62.9v43.1z"></path>
        </svg>
      );

    case IconName.logout:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
          <polyline points="16 17 21 12 16 7"></polyline>
          <line x1="21" y1="12" x2="9" y2="12"></line>
        </svg>
      );

    case IconName.active:
      return <MdDone className={className} />;

    case IconName.back:
      return <FiArrowLeft className={className} />;
    case IconName.burger:
      return <FiMenu className={className} />;
    case IconName.showMore:
      return <MdUnfoldMore className={className} />;
    case IconName.edit:
      return <MdOutlineEdit className={className} />;
    case IconName.deleteItem:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          stroke="red"
          fill="transparent"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <polyline points="3 6 5 6 21 6"></polyline>
          <path
            stroke="red"
            d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
          ></path>
          <line stroke="red" x1="10" y1="11" x2="10" y2="17"></line>
          <line stroke="red" x1="14" y1="11" x2="14" y2="17"></line>
        </svg>
      );
    case IconName.time:
      return <FiClock className={className} />;
    case IconName.calendar:
      return <IoMdCalendar className={className} />;
    case IconName.exit:
      return <MdExitToApp className={className} />;
    case IconName.users:
      return <HiOutlineUsers className={className} />;
    case IconName.phone:
      return <MdOutlineLocalPhone className={className} />;
    case IconName.email:
      return <FiMail className={className} />;
    case IconName.dropdownArrow:
      return <MdKeyboardArrowDown className={className} />;
    case IconName.close:
      return <CgClose className={className} />;
    case IconName.person:
      return <IoPersonOutline className={className} />;
    case IconName.anchor:
      return <FaAnchor className={className} />;
    case IconName.right:
      return <FaChevronRight className={className} />;
    case IconName.check:
      return <FaCheck className={className} />;
    case IconName.scales:
      return <LiaBalanceScaleSolid className={className} />;
    case IconName.return:
      return <PiArrowBendDownLeftBold className={className} />;
    case IconName.visibleOn:
      return <MdOutlineVisibility className={className} />;
    case IconName.visibleOff:
      return <MdOutlineVisibilityOff className={className} />;
    case IconName.eGate:
      return (
        <svg
          className={className}
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
        >
          <g id="Group_6068" data-name="Group 6068" transform="translate(-349.5 -473.5)">
            <path
              id="Path_2975"
              data-name="Path 2975"
              d="M365.876,473.5H351.124a1.624,1.624,0,0,0-1.624,1.624v14.752a1.624,1.624,0,0,0,1.624,1.624h.715v-8.064a6.661,6.661,0,0,1,6.661-6.661h0a6.661,6.661,0,0,1,6.661,6.661V491.5h.715a1.624,1.624,0,0,0,1.624-1.624V475.124A1.624,1.624,0,0,0,365.876,473.5Z"
              transform="translate(0 0)"
              fill="#121A55"
            />
            <path
              id="Path_2976"
              data-name="Path 2976"
              d="M386.98,529.746c-.8.366.412-1.146-.262-.907-.011-.077.122-.252.2-.136.115.016,0-.147-.087-.1-.737-.276-1.219-1-1.838-1.46.04-.25-.94-.053-1.251-.254-.077-.1-.422-1.092-.426-.7-.5-.1-.641.812-1.07.366-.5.27-.477.071-.924-.1-.12-.082-.448.138-.32-.041.022-.1-.153.013-.285-.039-.224.287-.548-.19-.861-.015-.3.605-.289-.29-.532-.177-.542.475-1.26-.357-1.959.11-2.692.459-1.638,2.136-1.535,3.648-.057.243.174-.084.253-.018.053.259.94.714,1.213.711.193-.116.069.427.324.12a1.353,1.353,0,0,1,.693.016c.527-.279.107.314.6.365.4.31.189.567-.109.874-.011.649-.245,1.018.474,1.014.183-.041.065.094.2.106s-.106.207.236.169c1.148.256.4,1.668,1.382,1.243.051.08.2.028.292-.049.51.233.451-.322.791.178.517.062.426-.3.868-.357.148.277.467.031.213-.358.194-.033.043-.038.1-.129.318-.065.172-.092.4.062.445-.064.3-.442.444-.473.351.183.374-.2.584-.111-.043.093.332.262.032.212-.176.422.8.5.526-.223-.21.1,0-.076-.149-.119-.516.244-.276-.151-.173-.373-.051-.364.149-.263.269-.47,0-.2-.211-.615,0-.752.222-.975.831-.051,1-1.125.044-.241.417.141.414-.078.2-.079.39.343.374-.153C387.255,529.909,387.735,529.873,386.98,529.746Z"
              transform="translate(-22.714 -44.877)"
              fill="#121A55"
            />
          </g>
        </svg>
      );

    case IconName.fourSquares:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <rect x="3" y="3" width="7" height="7"></rect>
          <rect x="14" y="3" width="7" height="7"></rect>
          <rect x="14" y="14" width="7" height="7"></rect>
          <rect x="3" y="14" width="7" height="7"></rect>
        </svg>
      );
    case IconName.home:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      );
    case IconName.journal:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
      );
    case IconName.members:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      );
    case IconName.tools:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <circle cx="12" cy="6" r="3" />
          <path d="M12,9v8.5" />
          <path
            d="M16,15l3-3v5.5c0,1.9-1.6,3.5-3.5,3.5h0c-1.9,0-3.5-1.6-3.5-3.5c0,1.9-1.6,3.5-3.5,3.5h0C6.6,21,5,19.4,5,17.5
V12l3,3"
          />
        </svg>
      );
    case IconName.settings:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      );
    case IconName.profile:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      );
    case IconName.investigations:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="m19,5.11c-1.89,2.4-4.8,3.94-8.06,3.94s-6.17-1.54-8.06-3.94c1.89-2.4,4.8-3.94,8.06-3.94s6.26,1.54,8.06,3.94Z" />
          <path d="m1,1c.26,1.54.94,2.91,1.89,4.11" />
          <path d="m1,9.23c.26-1.54.94-2.91,1.89-4.11" />
          <line x1="19.06" y1="18.55" x2="1.06" y2="18.55" />
          <line x1="1.06" y1="18.55" x2="1.06" y2="12.55" />
          <line x1="19.06" y1="18.55" x2="19.06" y2="12.55" />
          <line x1="10.06" y1="18.55" x2="10.06" y2="15.55" />
        </svg>
      );
    case IconName.net:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M4,13c0.5,0.2,3.6,1.7,7.1,0.1c2.7-1.2,3.8-3.6,4.1-4.2"></path>
          <path d="M4,18c1,0.3,4.3,1.4,8.1,0c4.9-1.8,6.7-6.3,7-7"></path>
          <line x1="4" y1="3" x2="4" y2="21"></line>
          <line x1="18" y1="18" x2="4" y2="3"></line>
          <polyline points="21,12 4,3 12,21 "></polyline>
        </svg>
      );

    case IconName.connection:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <circle cx="12" cy="12" r="3" />
          <circle cx="5" cy="21" r="1" />
          <circle cx="19" cy="3" r="1" />
          <path d="M15,12h1.5c2.5,0,4.5,2,4.5,4.5v0c0,2.5-2,4.5-4.5,4.5H6" />
          <path d="M18,3H7.5C5,3,3,5,3,7.5v0C3,10,5,12,7.5,12H9" />
        </svg>
      );

    case IconName.startFishing:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="116"
          height="115.841"
          viewBox="0 0 116 115.841"
          className={className}
        >
          <path
            id="ship"
            d="M11.558,90.3a5.784,5.784,0,1,0,10.749-4.276l-6.472-16.3,38.372-8.5v27.45a5.779,5.779,0,0,0,11.558,0V61.234l38.372,8.5-6.472,16.3A5.784,5.784,0,0,0,108.414,90.3l8.957-22.6a5.849,5.849,0,0,0-4.1-7.8L94.66,55.8V30.895a5.779,5.779,0,0,0-5.779-5.779H77.323V7.779A5.779,5.779,0,0,0,71.544,2H48.428a5.779,5.779,0,0,0-5.779,5.779V25.116H31.091a5.779,5.779,0,0,0-5.779,5.779V55.8L6.7,59.79a5.849,5.849,0,0,0-4.1,7.8ZM54.207,13.558H65.765V25.116H54.207ZM36.87,36.674H83.1V53.2l-21.845-4.97H58.715L36.87,53.2Zm73.451,65.187a25.312,25.312,0,0,0-5.779,2.6,12.02,12.02,0,0,1-12.136,0,26.7,26.7,0,0,0-26.237,0,12.367,12.367,0,0,1-12.251,0,26.814,26.814,0,0,0-26.237,0,12.02,12.02,0,0,1-12.136,0,25.312,25.312,0,0,0-5.779-2.6,5.779,5.779,0,0,0-7.57,4.161,5.779,5.779,0,0,0,3.872,7.166,12.136,12.136,0,0,1,3.294,1.445,23.116,23.116,0,0,0,11.558,3.178,23.929,23.929,0,0,0,12.024-3.238,15.314,15.314,0,0,1,14.79,0,23.983,23.983,0,0,0,23.809,0,15.314,15.314,0,0,1,14.794,0,23.116,23.116,0,0,0,23.694,0,12.136,12.136,0,0,1,3.294-1.445,5.841,5.841,0,1,0-3.005-11.269Z"
            transform="translate(-1.959 -2)"
            fill="#1121DA"
          ></path>
        </svg>
      );
    case IconName.beginFishing:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <polyline className="st0" points="5.7,19.3 2,14.4 22,9.9 18.5,18.9 "></polyline>
          <polyline className="st0" points="16.7,11.1 11.2,7.2 4.5,7.2 4,13.9 "></polyline>
          <line className="st0" x1="8" y1="4.6" x2="8" y2="7.2"></line>
          <path
            className="st0"
            d="M2.1,18.4c2.4,0,2.4,1,4.7,1c2.4,0,2.4-1,4.7-1c2.4,0,2.4,1,4.7,1s2.4-1,4.7-1"
          ></path>
        </svg>
      );
    case IconName.endFishing:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="116"
          height="116"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
          <line x1="4" y1="22" x2="4" y2="15"></line>
        </svg>
      );

    case IconName.location:
      return <MdLocationOn className={className} />;
    case IconName.researches:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="m19,5.11c-1.89,2.4-4.8,3.94-8.06,3.94s-6.17-1.54-8.06-3.94c1.89-2.4,4.8-3.94,8.06-3.94s6.26,1.54,8.06,3.94Z" />
          <path d="m1,1c.26,1.54.94,2.91,1.89,4.11" />
          <path d="m1,9.23c.26-1.54.94-2.91,1.89-4.11" />
          <line x1="19.06" y1="18.55" x2="1.06" y2="18.55" />
          <line x1="1.06" y1="18.55" x2="1.06" y2="12.55" />
          <line x1="19.06" y1="18.55" x2="19.06" y2="12.55" />
          <line x1="10.06" y1="18.55" x2="10.06" y2="15.55" />
        </svg>
      );

    case IconName.fullscreen:
      return <MdOutlineFullscreen className={className} />;
    case IconName.exitFullScreen:
      return <MdOutlineFullscreenExit className={className} />;
    case IconName.download:
      return <FiDownload className={className} />;
    case IconName.remove:
      return <FaTrash className={className} />;

    case IconName.finishFishing:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
          <line x1="4" y1="22" x2="4" y2="15"></line>
        </svg>
      );

    case IconName.fish:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
        >
          <path d="M22.5,12c-2.2,2.8-5.6,4.6-9.4,4.6c-3.8,0-7.2-1.8-9.4-4.6c2.2-2.8,5.6-4.6,9.4-4.6S20.4,9.2,22.5,12z"></path>
          <path d="M1.5,7.2C1.8,9,2.6,10.6,3.7,12"></path>
          <path d="M1.5,16.8C1.8,15,2.6,13.4,3.7,12"></path>
        </svg>
      );

    case IconName.locationOutline:
      return <IoLocationOutline className={className} />;

    default:
      return null;
  }
};

export default Icon;
