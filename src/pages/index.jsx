import Head from 'next/head'
import { useState } from 'react';


export default function Index() {

    const WhatsappIcon1 = <svg viewBox="0 0 24 24"><path d="M19.077,4.928C17.191,3.041,14.683,2.001,12.011,2c-5.506,0-9.987,4.479-9.989,9.985 c-0.001,1.76,0.459,3.478,1.333,4.992L2,22l5.233-1.237c1.459,0.796,3.101,1.215,4.773,1.216h0.004 c5.505,0,9.986-4.48,9.989-9.985C22.001,9.325,20.963,6.816,19.077,4.928z M16.898,15.554c-0.208,0.583-1.227,1.145-1.685,1.186 c-0.458,0.042-0.887,0.207-2.995-0.624c-2.537-1-4.139-3.601-4.263-3.767c-0.125-0.167-1.019-1.353-1.019-2.581 S7.581,7.936,7.81,7.687c0.229-0.25,0.499-0.312,0.666-0.312c0.166,0,0.333,0,0.478,0.006c0.178,0.007,0.375,0.016,0.562,0.431 c0.222,0.494,0.707,1.728,0.769,1.853s0.104,0.271,0.021,0.437s-0.125,0.27-0.249,0.416c-0.125,0.146-0.262,0.325-0.374,0.437 c-0.125,0.124-0.255,0.26-0.11,0.509c0.146,0.25,0.646,1.067,1.388,1.728c0.954,0.85,1.757,1.113,2.007,1.239 c0.25,0.125,0.395,0.104,0.541-0.063c0.146-0.166,0.624-0.728,0.79-0.978s0.333-0.208,0.562-0.125s1.456,0.687,1.705,0.812 c0.25,0.125,0.416,0.187,0.478,0.291C17.106,14.471,17.106,14.971,16.898,15.554z"></path></svg>;
    const WhatsappIcon2 = <svg viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M3.50002 12C3.50002 7.30558 7.3056 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C10.3278 20.5 8.77127 20.0182 7.45798 19.1861C7.21357 19.0313 6.91408 18.9899 6.63684 19.0726L3.75769 19.9319L4.84173 17.3953C4.96986 17.0955 4.94379 16.7521 4.77187 16.4751C3.9657 15.176 3.50002 13.6439 3.50002 12ZM12 1.5C6.20103 1.5 1.50002 6.20101 1.50002 12C1.50002 13.8381 1.97316 15.5683 2.80465 17.0727L1.08047 21.107C0.928048 21.4637 0.99561 21.8763 1.25382 22.1657C1.51203 22.4552 1.91432 22.5692 2.28599 22.4582L6.78541 21.1155C8.32245 21.9965 10.1037 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5ZM14.2925 14.1824L12.9783 15.1081C12.3628 14.7575 11.6823 14.2681 10.9997 13.5855C10.2901 12.8759 9.76402 12.1433 9.37612 11.4713L10.2113 10.7624C10.5697 10.4582 10.6678 9.94533 10.447 9.53028L9.38284 7.53028C9.23954 7.26097 8.98116 7.0718 8.68115 7.01654C8.38113 6.96129 8.07231 7.046 7.84247 7.24659L7.52696 7.52195C6.76823 8.18414 6.3195 9.2723 6.69141 10.3741C7.07698 11.5163 7.89983 13.314 9.58552 14.9997C11.3991 16.8133 13.2413 17.5275 14.3186 17.8049C15.1866 18.0283 16.008 17.7288 16.5868 17.2572L17.1783 16.7752C17.4313 16.5691 17.5678 16.2524 17.544 15.9269C17.5201 15.6014 17.3389 15.308 17.0585 15.1409L15.3802 14.1409C15.0412 13.939 14.6152 13.9552 14.2925 14.1824Z"/></svg>;
    const WhatsappIcon3 = <svg viewBox="0 0 220.262 220.262"><g><path d="M110.127,0C50.606,0,2.184,48.424,2.184,107.944c0,23.295,9.455,44.211,13.521,52.123c1.893,3.685,6.416,5.135,10.099,3.243c3.684-1.893,5.136-6.415,3.243-10.099c-3.566-6.941-11.862-25.247-11.862-45.268C17.184,56.695,58.878,15,110.127,15c51.254,0,92.951,41.695,92.951,92.944c0,51.251-41.697,92.946-92.951,92.946c-20.044,0-35.971-6.94-41.889-9.925c-1.755-0.886-3.788-1.046-5.66-0.447l-47.242,15.097c-3.945,1.261-6.122,5.481-4.861,9.427c1.018,3.187,3.968,5.219,7.142,5.219c0.757,0,1.526-0.115,2.285-0.358l44.391-14.186c9.287,4.311,25.633,10.173,45.834,10.173c59.524,0,107.951-48.424,107.951-107.946C218.078,48.424,169.651,0,110.127,0z"/><path d="M88.846,89.537c-3.285,2.523-3.902,7.231-1.38,10.517c2.523,3.285,7.23,3.903,10.517,1.38c2.299-1.766,8.406-6.456,7.512-14.845c-0.551-4.987-5.417-11.83-9.402-16.691c-5.831-7.114-10.767-11.327-14.643-12.513c-3.632-1.126-7.354-0.948-11.066,0.53c-7.636,3.052-13.025,8.108-15.585,14.622c-2.493,6.344-2.04,13.443,1.313,20.537c7.827,16.522,18.288,30.791,31.093,42.413c0.05,0.047,0.101,0.093,0.152,0.139c12.987,11.48,28.352,20.325,45.675,26.293c3.287,1.129,6.513,1.692,9.611,1.692c3.892,0,7.583-0.888,10.94-2.658c6.191-3.264,10.621-9.177,12.814-17.115c1.056-3.848,0.82-7.564-0.689-11.024c-1.619-3.745-6.35-8.184-14.064-13.193c-5.269-3.422-12.601-7.5-17.64-7.5c-0.003,0-0.007,0-0.011,0c-8.406,0.034-12.397,6.621-13.899,9.102c-2.146,3.543-1.014,8.155,2.529,10.301c3.541,2.146,8.154,1.015,10.301-2.529c0.593-0.98,0.969-1.5,1.205-1.772c4.236,1.23,15.567,8.642,17.889,11.761c0.038,0.166,0.043,0.417-0.082,0.874c-0.739,2.675-2.268,6.204-5.349,7.828c-2.879,1.516-6.312,0.863-8.677,0.051c-15.413-5.31-29.053-13.142-40.543-23.279c-0.003-0.003-0.007-0.006-0.01-0.01c-11.377-10.308-20.693-23.023-27.688-37.788c-1.071-2.268-2.1-5.607-0.91-8.634c1.274-3.242,4.613-5.15,7.183-6.177c0.441-0.176,0.69-0.203,0.871-0.179c3.358,1.965,11.969,12.402,13.66,16.477C90.229,88.41,89.753,88.84,88.846,89.537z"/></g></svg>;
    const WhatsappIcon4 = <svg viewBox="0 0 506.964 506.964"><g transform="translate(2 1)"><g><g><path d="M252.321-1C113.83-1,1.357,111.472,1.357,249.125c0,43.646,11.751,85.613,33.574,124.223L-2,505.964l135.134-36.092     c39.449,20.984,80.577,32.734,119.187,32.734c136.813,0,252.643-115.83,252.643-253.482S391.652-1,252.321-1z M252.321,485.82     c-36.931,0-76.38-11.751-114.151-32.734l-3.357-1.679L21.502,482.462L52.557,370.83l-1.679-3.357     c-20.984-36.092-32.734-77.22-32.734-118.348c0-128.42,104.918-233.338,234.177-233.338     c130.098,0,235.856,104.918,235.856,233.338S379.902,485.82,252.321,485.82z"/><path d="M252.321,40.967c-114.99,0-208.997,93.167-208.997,208.157c0,41.128,11.751,79.738,32.734,114.151l3.357,4.197     L56.754,447.21l82.256-20.984l4.197,2.518c34.413,20.984,72.184,31.895,109.115,31.895c115.83,0,210.675-94.846,210.675-211.515     C462.997,134.134,368.151,40.967,252.321,40.967z M251.482,444.692c-33.574,0-67.987-10.911-99.882-30.216l-10.072-6.715     l-61.272,15.108l16.787-58.754l-6.715-10.911c-20.144-31.056-30.216-67.148-30.216-104.079     c0-104.918,86.452-191.37,192.21-191.37c106.597,0,193.889,86.452,193.889,191.37     C446.21,356.561,358.918,443.852,251.482,444.692z"/><path d="M378.223,295.289l-52.879-24.341c-7.554-3.357-15.108-0.839-20.144,5.036l-20.144,26.02     c-15.108-5.875-57.075-24.341-81.416-69.666l18.466-21.823c4.197-5.036,5.036-11.751,2.518-17.626l-22.662-53.718     c-2.518-5.875-7.554-10.072-14.269-10.072l-15.948-0.839c-6.715,0-14.269,1.679-19.305,6.715     c-7.554,6.715-21.823,20.984-26.02,40.289c-5.875,27.698,3.357,60.433,26.859,92.328     c14.269,20.144,57.915,79.738,141.849,103.239c8.393,2.518,16.787,3.357,24.341,3.357c14.269,0,27.698-4.197,39.449-10.911     c13.43-8.393,22.662-22.662,26.02-37.771l2.518-11.751C389.134,306.2,384.938,298.646,378.223,295.289z M367.311,321.308     c-2.518,10.911-9.233,20.984-18.466,26.859c-14.269,9.233-31.056,10.911-49.521,5.875     c-78.059-21.823-119.187-78.059-132.616-96.525c-20.144-27.698-28.538-56.236-23.502-78.898     c3.357-15.108,14.269-26.02,20.984-31.895c1.679-1.679,4.197-2.518,6.715-2.518l16.787,1.679l22.662,52.879l-20.144,22.662     c-3.357,4.197-4.197,10.911-1.679,15.948c27.698,53.718,78.059,74.702,93.167,79.738c5.875,1.679,11.751,0,15.948-5.036     l20.144-26.859l52.879,24.341L367.311,321.308z"/></g></g></g></svg>;
    const WhatsappIcon5 = <svg viewBox="0 0 24 24"><path d="M12.9886 20.9463L12.88 19.9522L12.35 20.0101L12.1027 20.4825L12.9886 20.9463ZM6.45572 19.09L7.06966 19.8793L8.08109 19.0927L7.07226 18.3027L6.45572 19.09ZM4.23006 20.8211L3.61612 20.0317L3.61611 20.0317L4.23006 20.8211ZM20 12C20 16.1206 16.8838 19.5148 12.88 19.9522L13.0973 21.9404C18.1043 21.3933 22 17.1523 22 12H20ZM12 4C16.4183 4 20 7.58172 20 12H22C22 6.47715 17.5228 2 12 2V4ZM4 12C4 7.58172 7.58172 4 12 4V2C6.47715 2 2 6.47715 2 12H4ZM7.07226 18.3027C5.20015 16.8366 4 14.5587 4 12H2C2 15.1996 3.50381 18.0485 5.83917 19.8773L7.07226 18.3027ZM4.844 21.6104L7.06966 19.8793L5.84178 18.3006L3.61612 20.0317L4.844 21.6104ZM4.29145 20C5.1484 20 5.52041 21.0843 4.84401 21.6104L3.61611 20.0317C2.78939 20.6747 3.24408 22 4.29145 22V20ZM12 20H4.29145V22H12V20ZM12.9 20H12V22H12.9V20ZM12.1027 20.4825C12.2517 20.1979 12.5519 20 12.9 20V22C13.3252 22 13.6921 21.7586 13.8746 21.4102L12.1027 20.4825Z"/><path d="M9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12Z"/><path d="M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z"/><path d="M17 12C17 12.5523 16.5523 13 16 13C15.4477 13 15 12.5523 15 12C15 11.4477 15.4477 11 16 11C16.5523 11 17 11.4477 17 12Z"/></svg>;
    const WhatsappIcon6 = <svg viewBox="0 0 1024 1024"><path d="M273.536 736H800a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H224a64 64 0 0 0-64 64v570.88L273.536 736zM296 800 147.968 918.4A32 32 0 0 1 96 893.44V256a128 128 0 0 1 128-128h576a128 128 0 0 1 128 128v416a128 128 0 0 1-128 128H296z"/><path d="M512 499.2a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm192 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm-384 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4z"/></svg>;


    const [iconType,         setIconType] = useState('1')
    const [phoneNumber,   setPhoneNumber] = useState('')
    const [bgColor,           setBgColor] = useState('#62d33f')
    const [iconColor,       setIconColor] = useState('#ffffff')
    const [padding,           setPadding] = useState('10')
    const [iconSize,         setIconSize] = useState('30')
    const [borderRadius, setBorderRadius] = useState('50')
    const [position,         setPosition] = useState('LB')
    const [ShadowXoffset,  setShadowXoffset] = useState('0')
    const [ShadowYoffset,  setShadowYoffset] = useState('5')
    const [ShadowBlur,        setShadowBlur] = useState('20')
    const [ShadowSpread,    setShadowSpread] = useState('0')
    const [ShadowColor,      setShadowColor] = useState('#B0B0B0')

    const [previewCode,      setPreviewCode] = useState(true)


    function fn_icon(iconNumber) {
        if (!iconNumber) return null;

        if (iconNumber === '1') {
            return '<svg style="width:'+iconSize+'px;height:'+iconSize+'px;fill:'+iconColor+';" viewBox="0 0 24 24"><path d="M19.077,4.928C17.191,3.041,14.683,2.001,12.011,2c-5.506,0-9.987,4.479-9.989,9.985 c-0.001,1.76,0.459,3.478,1.333,4.992L2,22l5.233-1.237c1.459,0.796,3.101,1.215,4.773,1.216h0.004 c5.505,0,9.986-4.48,9.989-9.985C22.001,9.325,20.963,6.816,19.077,4.928z M16.898,15.554c-0.208,0.583-1.227,1.145-1.685,1.186 c-0.458,0.042-0.887,0.207-2.995-0.624c-2.537-1-4.139-3.601-4.263-3.767c-0.125-0.167-1.019-1.353-1.019-2.581 S7.581,7.936,7.81,7.687c0.229-0.25,0.499-0.312,0.666-0.312c0.166,0,0.333,0,0.478,0.006c0.178,0.007,0.375,0.016,0.562,0.431 c0.222,0.494,0.707,1.728,0.769,1.853s0.104,0.271,0.021,0.437s-0.125,0.27-0.249,0.416c-0.125,0.146-0.262,0.325-0.374,0.437 c-0.125,0.124-0.255,0.26-0.11,0.509c0.146,0.25,0.646,1.067,1.388,1.728c0.954,0.85,1.757,1.113,2.007,1.239 c0.25,0.125,0.395,0.104,0.541-0.063c0.146-0.166,0.624-0.728,0.79-0.978s0.333-0.208,0.562-0.125s1.456,0.687,1.705,0.812 c0.25,0.125,0.416,0.187,0.478,0.291C17.106,14.471,17.106,14.971,16.898,15.554z"></path></svg>';
        } else if (iconNumber === '2') {
            return '<svg style="width:'+iconSize+'px;height:'+iconSize+'px;fill:'+iconColor+';" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M3.50002 12C3.50002 7.30558 7.3056 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C10.3278 20.5 8.77127 20.0182 7.45798 19.1861C7.21357 19.0313 6.91408 18.9899 6.63684 19.0726L3.75769 19.9319L4.84173 17.3953C4.96986 17.0955 4.94379 16.7521 4.77187 16.4751C3.9657 15.176 3.50002 13.6439 3.50002 12ZM12 1.5C6.20103 1.5 1.50002 6.20101 1.50002 12C1.50002 13.8381 1.97316 15.5683 2.80465 17.0727L1.08047 21.107C0.928048 21.4637 0.99561 21.8763 1.25382 22.1657C1.51203 22.4552 1.91432 22.5692 2.28599 22.4582L6.78541 21.1155C8.32245 21.9965 10.1037 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5ZM14.2925 14.1824L12.9783 15.1081C12.3628 14.7575 11.6823 14.2681 10.9997 13.5855C10.2901 12.8759 9.76402 12.1433 9.37612 11.4713L10.2113 10.7624C10.5697 10.4582 10.6678 9.94533 10.447 9.53028L9.38284 7.53028C9.23954 7.26097 8.98116 7.0718 8.68115 7.01654C8.38113 6.96129 8.07231 7.046 7.84247 7.24659L7.52696 7.52195C6.76823 8.18414 6.3195 9.2723 6.69141 10.3741C7.07698 11.5163 7.89983 13.314 9.58552 14.9997C11.3991 16.8133 13.2413 17.5275 14.3186 17.8049C15.1866 18.0283 16.008 17.7288 16.5868 17.2572L17.1783 16.7752C17.4313 16.5691 17.5678 16.2524 17.544 15.9269C17.5201 15.6014 17.3389 15.308 17.0585 15.1409L15.3802 14.1409C15.0412 13.939 14.6152 13.9552 14.2925 14.1824Z"/></svg>';
        } else if (iconNumber === '3') {
            return '<svg style="width:'+iconSize+'px;height:'+iconSize+'px;fill:'+iconColor+';" viewBox="0 0 220.262 220.262"><g><path d="M110.127,0C50.606,0,2.184,48.424,2.184,107.944c0,23.295,9.455,44.211,13.521,52.123c1.893,3.685,6.416,5.135,10.099,3.243c3.684-1.893,5.136-6.415,3.243-10.099c-3.566-6.941-11.862-25.247-11.862-45.268C17.184,56.695,58.878,15,110.127,15c51.254,0,92.951,41.695,92.951,92.944c0,51.251-41.697,92.946-92.951,92.946c-20.044,0-35.971-6.94-41.889-9.925c-1.755-0.886-3.788-1.046-5.66-0.447l-47.242,15.097c-3.945,1.261-6.122,5.481-4.861,9.427c1.018,3.187,3.968,5.219,7.142,5.219c0.757,0,1.526-0.115,2.285-0.358l44.391-14.186c9.287,4.311,25.633,10.173,45.834,10.173c59.524,0,107.951-48.424,107.951-107.946C218.078,48.424,169.651,0,110.127,0z"/><path d="M88.846,89.537c-3.285,2.523-3.902,7.231-1.38,10.517c2.523,3.285,7.23,3.903,10.517,1.38c2.299-1.766,8.406-6.456,7.512-14.845c-0.551-4.987-5.417-11.83-9.402-16.691c-5.831-7.114-10.767-11.327-14.643-12.513c-3.632-1.126-7.354-0.948-11.066,0.53c-7.636,3.052-13.025,8.108-15.585,14.622c-2.493,6.344-2.04,13.443,1.313,20.537c7.827,16.522,18.288,30.791,31.093,42.413c0.05,0.047,0.101,0.093,0.152,0.139c12.987,11.48,28.352,20.325,45.675,26.293c3.287,1.129,6.513,1.692,9.611,1.692c3.892,0,7.583-0.888,10.94-2.658c6.191-3.264,10.621-9.177,12.814-17.115c1.056-3.848,0.82-7.564-0.689-11.024c-1.619-3.745-6.35-8.184-14.064-13.193c-5.269-3.422-12.601-7.5-17.64-7.5c-0.003,0-0.007,0-0.011,0c-8.406,0.034-12.397,6.621-13.899,9.102c-2.146,3.543-1.014,8.155,2.529,10.301c3.541,2.146,8.154,1.015,10.301-2.529c0.593-0.98,0.969-1.5,1.205-1.772c4.236,1.23,15.567,8.642,17.889,11.761c0.038,0.166,0.043,0.417-0.082,0.874c-0.739,2.675-2.268,6.204-5.349,7.828c-2.879,1.516-6.312,0.863-8.677,0.051c-15.413-5.31-29.053-13.142-40.543-23.279c-0.003-0.003-0.007-0.006-0.01-0.01c-11.377-10.308-20.693-23.023-27.688-37.788c-1.071-2.268-2.1-5.607-0.91-8.634c1.274-3.242,4.613-5.15,7.183-6.177c0.441-0.176,0.69-0.203,0.871-0.179c3.358,1.965,11.969,12.402,13.66,16.477C90.229,88.41,89.753,88.84,88.846,89.537z"/></g></svg>';
        } else if (iconNumber === '4') {
            return '<svg style="width:'+iconSize+'px;height:'+iconSize+'px;fill:'+iconColor+';" viewBox="0 0 506.964 506.964"><g transform="translate(2 1)"><g><g><path d="M252.321-1C113.83-1,1.357,111.472,1.357,249.125c0,43.646,11.751,85.613,33.574,124.223L-2,505.964l135.134-36.092     c39.449,20.984,80.577,32.734,119.187,32.734c136.813,0,252.643-115.83,252.643-253.482S391.652-1,252.321-1z M252.321,485.82     c-36.931,0-76.38-11.751-114.151-32.734l-3.357-1.679L21.502,482.462L52.557,370.83l-1.679-3.357     c-20.984-36.092-32.734-77.22-32.734-118.348c0-128.42,104.918-233.338,234.177-233.338     c130.098,0,235.856,104.918,235.856,233.338S379.902,485.82,252.321,485.82z"/><path d="M252.321,40.967c-114.99,0-208.997,93.167-208.997,208.157c0,41.128,11.751,79.738,32.734,114.151l3.357,4.197     L56.754,447.21l82.256-20.984l4.197,2.518c34.413,20.984,72.184,31.895,109.115,31.895c115.83,0,210.675-94.846,210.675-211.515     C462.997,134.134,368.151,40.967,252.321,40.967z M251.482,444.692c-33.574,0-67.987-10.911-99.882-30.216l-10.072-6.715     l-61.272,15.108l16.787-58.754l-6.715-10.911c-20.144-31.056-30.216-67.148-30.216-104.079     c0-104.918,86.452-191.37,192.21-191.37c106.597,0,193.889,86.452,193.889,191.37     C446.21,356.561,358.918,443.852,251.482,444.692z"/><path d="M378.223,295.289l-52.879-24.341c-7.554-3.357-15.108-0.839-20.144,5.036l-20.144,26.02     c-15.108-5.875-57.075-24.341-81.416-69.666l18.466-21.823c4.197-5.036,5.036-11.751,2.518-17.626l-22.662-53.718     c-2.518-5.875-7.554-10.072-14.269-10.072l-15.948-0.839c-6.715,0-14.269,1.679-19.305,6.715     c-7.554,6.715-21.823,20.984-26.02,40.289c-5.875,27.698,3.357,60.433,26.859,92.328     c14.269,20.144,57.915,79.738,141.849,103.239c8.393,2.518,16.787,3.357,24.341,3.357c14.269,0,27.698-4.197,39.449-10.911     c13.43-8.393,22.662-22.662,26.02-37.771l2.518-11.751C389.134,306.2,384.938,298.646,378.223,295.289z M367.311,321.308     c-2.518,10.911-9.233,20.984-18.466,26.859c-14.269,9.233-31.056,10.911-49.521,5.875     c-78.059-21.823-119.187-78.059-132.616-96.525c-20.144-27.698-28.538-56.236-23.502-78.898     c3.357-15.108,14.269-26.02,20.984-31.895c1.679-1.679,4.197-2.518,6.715-2.518l16.787,1.679l22.662,52.879l-20.144,22.662     c-3.357,4.197-4.197,10.911-1.679,15.948c27.698,53.718,78.059,74.702,93.167,79.738c5.875,1.679,11.751,0,15.948-5.036     l20.144-26.859l52.879,24.341L367.311,321.308z"/></g></g></g></svg>';
        } else if (iconNumber === '5') {
            return '<svg style="width:'+iconSize+'px;height:'+iconSize+'px;fill:'+iconColor+';" viewBox="0 0 24 24"><path d="M12.9886 20.9463L12.88 19.9522L12.35 20.0101L12.1027 20.4825L12.9886 20.9463ZM6.45572 19.09L7.06966 19.8793L8.08109 19.0927L7.07226 18.3027L6.45572 19.09ZM4.23006 20.8211L3.61612 20.0317L3.61611 20.0317L4.23006 20.8211ZM20 12C20 16.1206 16.8838 19.5148 12.88 19.9522L13.0973 21.9404C18.1043 21.3933 22 17.1523 22 12H20ZM12 4C16.4183 4 20 7.58172 20 12H22C22 6.47715 17.5228 2 12 2V4ZM4 12C4 7.58172 7.58172 4 12 4V2C6.47715 2 2 6.47715 2 12H4ZM7.07226 18.3027C5.20015 16.8366 4 14.5587 4 12H2C2 15.1996 3.50381 18.0485 5.83917 19.8773L7.07226 18.3027ZM4.844 21.6104L7.06966 19.8793L5.84178 18.3006L3.61612 20.0317L4.844 21.6104ZM4.29145 20C5.1484 20 5.52041 21.0843 4.84401 21.6104L3.61611 20.0317C2.78939 20.6747 3.24408 22 4.29145 22V20ZM12 20H4.29145V22H12V20ZM12.9 20H12V22H12.9V20ZM12.1027 20.4825C12.2517 20.1979 12.5519 20 12.9 20V22C13.3252 22 13.6921 21.7586 13.8746 21.4102L12.1027 20.4825Z"/><path d="M9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12Z"/><path d="M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z"/><path d="M17 12C17 12.5523 16.5523 13 16 13C15.4477 13 15 12.5523 15 12C15 11.4477 15.4477 11 16 11C16.5523 11 17 11.4477 17 12Z"/></svg>';
        } else if (iconNumber === '6') {
            return '<svg style="width:'+iconSize+'px;height:'+iconSize+'px;fill:'+iconColor+';" viewBox="0 0 1024 1024"><path d="M273.536 736H800a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H224a64 64 0 0 0-64 64v570.88L273.536 736zM296 800 147.968 918.4A32 32 0 0 1 96 893.44V256a128 128 0 0 1 128-128h576a128 128 0 0 1 128 128v416a128 128 0 0 1-128 128H296z"/><path d="M512 499.2a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm192 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm-384 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4z"/></svg>';
        }
    }
    
    function fn_position(code) {
        if (!code) return null;

        if (position === 'LT') {
            return 'left:1rem;top:1rem;';
        } else if (position === 'LB') {
            return 'left:1rem;bottom:1rem;';
        } else if (position === 'RT') {
            return 'right:1rem;top:1rem;';
        } else if (position === 'RB') {
            return 'right:1rem;bottom:1rem;';
        }
    }

    const ShadowCode = 'box-shadow: '+ShadowXoffset+'px '+ShadowYoffset+'px '+ShadowBlur+'px '+ShadowSpread+'px '+ShadowColor+'';
    const svgTag     = fn_icon(iconType);
    const buttonTag  = '<button style="background:'+bgColor+';display:flex;padding:'+padding+'px;border-radius:'+borderRadius+'%;'+ShadowCode+';">\n'+svgTag+'\n</button>';
    const aTag       = '<a href="https://wa.me/'+phoneNumber+'" target="_blanck">\n'+buttonTag+'\n</a>';
    const divTag     = '<div style="position:absolute;z-index:999;'+fn_position(position)+'">\n'+aTag+'\n</div>';
    const ButtonCode = divTag;

    function createMarkup(HtmlCode) {
        if (HtmlCode) {
            return { __html: HtmlCode }
        }
    };

    return (
        <>
            <Head>
                <title>Easy to create whatsapp button.</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div className='main'>
                <div className="aside">
                    {/* Aside Header */}
                    <a href="/">
                        <div className="aside_header">
                            <img src="/favicon.png" alt="WHABTN" />
                            <div>
                                <h1>WHABTN</h1>
                                <p>Easy to create whatsapp button.</p>
                            </div>
                        </div>
                    </a>
                    
                    {/* Aside Body */}
                    <div className="aside_body">
                        
                        <div className="group">
                            <span className="group_title">icon style</span>
                            <div className="icon_style">
                                <button onClick={e => setIconType('1')} type='button'>{WhatsappIcon1}</button>
                                <button onClick={e => setIconType('2')} type='button'>{WhatsappIcon2}</button>
                                <button onClick={e => setIconType('3')} type='button'>{WhatsappIcon3}</button>
                                <button onClick={e => setIconType('4')} type='button'>{WhatsappIcon4}</button>
                                <button onClick={e => setIconType('5')} type='button'>{WhatsappIcon5}</button>
                                <button onClick={e => setIconType('6')} type='button'>{WhatsappIcon6}</button>
                            </div>
                        </div>
                        
                        <div className="group">
                            <span className="group_title">Colors</span>
                            <div className="colors">
                                <input onChange={e => setBgColor(e.target.value)} value={bgColor} type="color" id="BGColor" hidden />
                                <input onChange={e => setIconColor(e.target.value)} value={iconColor} type="color" id="IconColor" hidden />
                                <label htmlFor="BGColor">
                                    <div style={{'background': bgColor}}></div>
                                </label>
                                <label htmlFor="IconColor">
                                    <div style={{'background': iconColor}}></div>
                                </label>
                            </div>
                        </div>
                        
                        <div className="group">
                            <span className="group_title">Padding</span>
                            <input onChange={e => setPadding(e.target.value)} value={padding} type="range" />

                            <span className="group_title">Icon size</span>
                            <input onChange={e => setIconSize(e.target.value)} value={iconSize} type="range" />

                            <span className="group_title">Border radius</span>
                            <input onChange={e => setBorderRadius(e.target.value)} value={borderRadius} type="range" />
                        </div>

                        <div className="group">
                            <span className="group_title">Position</span>
                            <div className="position">
                                <button onClick={e => setPosition('LT')}>Left - Top</button>
                                <button onClick={e => setPosition('RT')}>Right - Top</button>
                                <button onClick={e => setPosition('LB')}>Left - Bottom</button>
                                <button onClick={e => setPosition('RB')}>Right - Bottom</button>
                            </div>
                        </div>

                        <div className="group">
                            <span className="group_title">Shadow</span>
                            <div className="shadow">
                                <div className='numz'>
                                    <input onChange={e => setShadowXoffset(e.target.value)} value={ShadowXoffset} type="number" />
                                    <input onChange={e => setShadowYoffset(e.target.value)} value={ShadowYoffset} type="number" />
                                    <input onChange={e => setShadowBlur(e.target.value)}    value={ShadowBlur}    type="number" />
                                    <input onChange={e => setShadowSpread(e.target.value)}  value={ShadowSpread}  type="number" />
                                </div>
                                <input onChange={e => setShadowColor(e.target.value)} value={ShadowColor} type="color" id="ShadowColor" hidden />
                                <label htmlFor="ShadowColor">
                                    <div style={{'background': ShadowColor}}></div>
                                </label>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="content">
                    {/* Preview */}
                    <div className="website_body">
                        <div className="NumberAndBtn">
                            <input onChange={e => setPhoneNumber(e.target.value)} value={phoneNumber} type="text" placeholder='+212 000 000 000' />
                            <button onClick={e => setPreviewCode(previewCode ? false : true)} className='copyCodeBtn'>{previewCode ? 'Html Code' : 'Preview'}</button>
                        </div>

                        {previewCode &&
                            <div className="preview">
                                <header>header</header>
                                <main>
                                    <aside>aside</aside>
                                    <article>article</article>
                                </main>
                                <footer>footer</footer>
                                <div dangerouslySetInnerHTML={createMarkup(ButtonCode)} />
                            </div>
                        ||
                            <>
                            <div className="showCode">
                                <pre>
                                    <code>
                                        {ButtonCode}
                                    </code>
                                </pre>
                            </div>
                            <button onClick={() => {navigator.clipboard.writeText(ButtonCode); alert('Copied!');}} className='CC_Btn'>Copy Code</button>
                            </>
                        }
                    </div>
                    
                    <div className="footer">
                        <p id="by">made with <span>❤</span> by <a href="https://hixvm.com" target="_blank">hixvm</a></p>
                        <ul id="social">
                            <li><a href="https://twitter.com/hixvmx/" target="_blank"><svg viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.8486 5.65845C13.1442 5.65845 11.7626 7.0401 11.7626 8.74446C11.7626 8.95304 11.7831 9.15581 11.822 9.35119C11.8846 9.66589 11.7924 9.99153 11.5741 10.2267C11.3558 10.4619 11.0379 10.578 10.7194 10.5389C8.51116 10.268 6.50248 9.35556 4.88498 7.9954C4.91649 8.59732 5.12515 9.23671 5.57799 9.90654L6.25677 10.9106L5.14211 11.3863L4.92704 11.4781C5.0869 11.6609 5.2791 11.8487 5.49369 12.0332C5.73717 12.2425 5.97247 12.4165 6.14726 12.5381C6.23408 12.5985 6.30452 12.645 6.35171 12.6755C6.37527 12.6907 6.39294 12.7018 6.40383 12.7086L6.41495 12.7155L6.41519 12.7157L6.41551 12.7159L6.41578 12.7161L6.41619 12.7163L6.41647 12.7165L7.96448 13.655L6.34397 14.4653C6.26374 14.5054 6.18367 14.5412 6.10393 14.573C6.42924 14.8471 6.82517 15.0995 7.2464 15.2986L8.63623 15.9556L7.47226 16.9598C6.8369 17.508 6.19778 17.9166 5.36946 18.1326C6.59681 18.7875 8.00315 19.1596 9.49941 19.1596C14.3045 19.1596 18.1746 15.325 18.1746 10.6256V10.1059L18.5998 9.80721C19.2636 9.34107 19.7329 8.71068 20.0689 7.99004H18.5398H17.9084L17.637 7.41994C17.1401 6.37633 16.0772 5.65845 14.8486 5.65845ZM3.56882 12.9581C3.38031 13.174 3.29093 13.4642 3.33193 13.7553C3.44474 14.5563 3.92441 15.2462 4.45444 15.7728C4.59838 15.9158 4.75232 16.0531 4.91396 16.184C4.88926 16.1909 4.86437 16.1975 4.83925 16.2038C4.35789 16.3243 3.70926 16.3494 2.62755 16.2434C2.20934 16.2024 1.81014 16.4273 1.62841 16.8062C1.44668 17.185 1.5212 17.6371 1.81492 17.9376C3.75693 19.9245 6.48413 21.1596 9.49941 21.1596C15.212 21.1596 19.8978 16.7239 20.1628 11.126C21.4521 10.0429 22.0976 8.57673 22.4458 7.24263C22.5241 6.94292 22.459 6.62387 22.2696 6.37873C22.0803 6.13359 21.788 5.99004 21.4783 5.99004H19.1247C18.2201 4.58853 16.6437 3.65845 14.8486 3.65845C12.1796 3.65845 9.99072 5.71435 9.7793 8.32892C7.91032 7.84456 6.2705 6.78758 5.05863 5.35408C4.83759 5.09261 4.49814 4.9624 4.15894 5.00897C3.81974 5.05554 3.52794 5.27241 3.38555 5.58378C2.78087 6.90597 2.66434 8.43104 3.34116 9.98046L3.10746 10.0802C2.64466 10.2777 2.40073 10.7884 2.5379 11.2725C2.72276 11.925 3.14129 12.5011 3.56882 12.9581Z"></path></svg></a></li>
                            <li><a href="https://github.com/hixvmx/" target="_blank"><svg viewBox="0 0 48 48"><g><path d="M0 .011h48v48H0v-48z" fill="none"></path><path d="M39.155 13.946c-.214-.604-.538-1.212-.999-1.869.848-3.154.253-5.792.225-5.915l-.365-1.564-1.606.019c-.15.002-3.48.063-6.724 1.955a29.635 29.635 0 0 0-11.371 0c-3.243-1.892-6.573-1.953-6.724-1.955l-1.607-.02-.365 1.564c-.028.123-.623 2.761.225 5.915-.461.657-.785 1.266-.999 1.869-1.187 3.356-1.187 6.76.001 10.117 1.07 3.023 4.697 6.116 7.225 6.862.851.251 1.704.422 2.558.545A5.236 5.236 0 0 0 18 34.004v1.281c-.062.036-.127.065-.187.108-.289.211-2.869 1.967-5.505.09-.93-.946-1.386-1.639-1.826-2.309-.988-1.5-1.841-2.586-4.588-3.96a2 2 0 1 0-1.789 3.579c1.991.995 2.341 1.525 3.035 2.581.515.781 1.155 1.754 2.445 3.044l.215.186c1.692 1.27 3.447 1.723 5.053 1.723A9.286 9.286 0 0 0 18 39.76v4.253h4V34.004c0-1.103.897-2 2-2s2 .897 2 2v10h4v-10c0-.955-.23-1.803-.628-2.534a18.287 18.287 0 0 0 2.558-.545c2.527-.746 6.154-3.839 7.226-6.863 1.187-3.357 1.187-6.76-.001-10.116zm-3.77 8.781c-.591 1.667-3.167 3.942-4.588 4.362-4.509 1.331-9.083 1.332-13.594 0-1.421-.42-3.997-2.695-4.587-4.361-.875-2.472-.853-4.969-.001-7.447.485-1.41 1.724-2.427 1.724-2.427l-.398-1.08a9.24 9.24 0 0 1-.548-2.886c.992.233 2.247.664 3.416 1.459l.716.487.845-.188a25.659 25.659 0 0 1 11.262 0l.845.188.716-.487c1.167-.794 2.423-1.225 3.415-1.458a9.169 9.169 0 0 1-.547 2.885l-.398 1.08s1.093.81 1.724 2.427c.951 2.441.872 4.976-.002 7.446z"></path></g></svg></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
