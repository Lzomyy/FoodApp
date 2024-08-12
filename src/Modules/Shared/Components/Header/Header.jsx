


export default function Header({head, para, src}) {
  return <>
  
  <div className="rounded-3 bg-success rounded-3 m-3 d-flex justify-content-around align-items-center">


    {/* <div className="position-absolute">
    <svg width="1205" height="170" viewBox="0 0 1205 170" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M580 249C580 265.491 566.423 279 549.5 279C532.577 279 519 265.491 519 249C519 232.509 532.577 219 549.5 219C566.423 219 580 232.509 580 249Z" stroke="#54B435" stroke-opacity="0.5" stroke-width="12"/>
      <path d="M719 131.5C719 139.931 711.967 147 703 147C694.033 147 687 139.931 687 131.5C687 123.069 694.033 116 703 116C711.967 116 719 123.069 719 131.5Z" stroke="#54B435" stroke-opacity="0.5" stroke-width="12"/>
      <circle cx="871.5" cy="29.5" r="15.5" stroke="#54B435" stroke-opacity="0.5" stroke-width="12"/>
      <circle cx="76" cy="231" r="64" stroke="white" stroke-opacity="0.05" stroke-width="24"/>
      <path d="M112 68.5C112 81.384 101.35 92 88 92C74.6497 92 64 81.384 64 68.5C64 55.616 74.6497 45 88 45C101.35 45 112 55.616 112 68.5Z" stroke="#54B435" stroke-opacity="0.5" stroke-width="12"/>
      <path d="M594.5 73.5C594.5 107.27 567.333 134.5 534 134.5C500.667 134.5 473.5 107.27 473.5 73.5C473.5 39.73 500.667 12.5 534 12.5C567.333 12.5 594.5 39.73 594.5 73.5Z" stroke="white" stroke-opacity="0.05" stroke-width="25"/>
      <path d="M1232.5 173C1232.5 227.9 1187.78 272.5 1132.5 272.5C1077.22 272.5 1032.5 227.9 1032.5 173C1032.5 118.1 1077.22 73.5 1132.5 73.5C1187.78 73.5 1232.5 118.1 1232.5 173Z" stroke="white" stroke-opacity="0.05" stroke-width="25"/>
    </svg>

    </div> */}

    <div className="text-white">
      <h2>{head}</h2>
      <p>{para}</p>
    </div>

    <div>
      <img src={src} alt="home" />
    </div>

  </div>
  
  </>
}
