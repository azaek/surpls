import Image from "next/image";
export default function Home() {
  return (
    <div className="w-screen min-h-svh flex flex-col items-center bg-gradient-to-b from-black to-[#161616]">
      <main className="w-full max-w-4xl flex flex-col items-center md:border-x border-white/10 flex-1">
        {/* Nav */}
        <nav className="w-full flex items-stretch justify-between h-[72px] border-b border-white/10">
          <div className="flex items-center px-6 min-w-[165px]">
            <svg width="43" height="19" viewBox="0 0 43 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="7" width="11" height="11" rx="5.5" fill="#F8E40D" />
              <rect x="10" y="1.5" width="9" height="9" rx="4.5" fill="#FF0B01" />
              <rect x="12" y="12.5" width="6" height="6" rx="3" fill="#0385FD" />
              <path d="M24.836 0.599999H28.472L29.3 1.848L28.316 2.808L27.74 1.956H25.4L25.184 2.184V3.588L25.544 4.116H28.58L29.54 5.568V7.98L28.556 9H24.368L23.66 7.992L24.608 7.008L25.076 7.644H27.956L28.088 7.536V5.808L27.848 5.472H24.812L23.732 3.864V1.752L24.836 0.599999ZM34.7673 0.599999H36.2193V9H34.7673V8.592L34.1073 9H31.5033L30.4113 7.392V0.599999H31.8633V7.116L32.2113 7.644H34.5273L34.7673 7.404V0.599999ZM37.1266 0.599999H41.5306L42.9346 2.652V4.056L41.8306 5.196L42.9346 6.816V9H41.4826V7.068L40.3906 5.472H39.2146L38.5786 5.076V9H37.1266V0.599999ZM38.5786 1.956V4.116H41.0146L41.4826 3.636V2.94L40.7986 1.956H38.5786ZM23.696 10.6H28.436L29.504 12.208V14.332L28.412 15.448H25.148V19H23.696V10.6ZM25.148 11.956V14.512L25.82 14.116H27.824L28.052 13.888V12.484L27.704 11.956H25.148ZM30.4113 10.6H31.8633V17.104L32.2353 17.644H34.7673V16.768H36.2193V19H31.5033L30.4113 17.344V10.6ZM38.2666 10.6H41.9026L42.7306 11.848L41.7466 12.808L41.1706 11.956H38.8306L38.6146 12.184V13.588L38.9746 14.116H42.0106L42.9706 15.568V17.98L41.9866 19H37.7986L37.0906 17.992L38.0386 17.008L38.5066 17.644H41.3866L41.5186 17.536V15.808L41.2786 15.472H38.2426L37.1626 13.864V11.752L38.2666 10.6Z" fill="white" />
            </svg>
          </div>
          <div className="hidden md:flex items-center">
            <div className="flex items-center h-[32px] px-4 rounded-full bg-white/10 gap-3">
              <p className="font-kode-mono text-xs leading-none font-bold text-white/25">Lore</p>
              <p className="font-kode-mono text-xs leading-none font-bold text-white/25">Leaderboards</p>
              <p className="font-kode-mono text-xs leading-none font-bold text-white/25">Tasks</p>
              <p className="font-kode-mono text-xs leading-none font-bold text-white/25">Explore</p>
              <p className="font-kode-mono text-xs leading-none font-bold text-white/50">Coming soon</p>
            </div>
          </div>
          <a href="https://discord.gg/BJ9Z9D92" target="_blank" rel="noopener noreferrer" className="cursor-pointer flex items-center min-w-[165px] justify-center border-l border-white/10">
            <div className="flex items-center min-w-[165px] justify-center gap-1 px-2">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.9419 3.52317C15.6473 2.91744 14.263 2.47723 12.8157 2.22656C12.638 2.5479 12.4304 2.98012 12.2872 3.32394C10.7487 3.09258 9.22445 3.09258 7.7143 3.32394C7.57116 2.98012 7.3588 2.5479 7.17947 2.22656C5.73067 2.47723 4.3448 2.91906 3.05016 3.52638C0.438869 7.47238 -0.269009 11.3204 0.0849305 15.1137C1.81688 16.4071 3.49534 17.1928 5.14548 17.7069C5.55291 17.1462 5.91628 16.5501 6.22931 15.9219C5.63313 15.6954 5.06211 15.4158 4.52256 15.0912C4.6657 14.9852 4.80571 14.8743 4.94098 14.7603C8.23183 16.2995 11.8074 16.2995 15.0589 14.7603C15.1958 14.8743 15.3358 14.9852 15.4774 15.0912C14.9362 15.4174 14.3637 15.6969 13.7675 15.9235C14.0805 16.5501 14.4423 17.1478 14.8513 17.7085C16.503 17.1944 18.183 16.4087 19.915 15.1137C20.3303 10.7163 19.2056 6.90361 16.9419 3.52317ZM6.67765 12.7809C5.68977 12.7809 4.87963 11.8586 4.87963 10.7355C4.87963 9.61247 5.67247 8.68864 6.67765 8.68864C7.68285 8.68864 8.49297 9.61086 8.47567 10.7355C8.47723 11.8586 7.68285 12.7809 6.67765 12.7809ZM13.3223 12.7809C12.3344 12.7809 11.5243 11.8586 11.5243 10.7355C11.5243 9.61247 12.3171 8.68864 13.3223 8.68864C14.3275 8.68864 15.1376 9.61086 15.1203 10.7355C15.1203 11.8586 14.3275 12.7809 13.3223 12.7809Z" fill="#0385FD" />
              </svg>
              <p className="text-xs font-bold text-blue font-kode-mono uppercase">Connect discord</p>
            </div>
          </a>
        </nav>

        {/* Hero */}
        <div className="w-full flex flex-col items-center justify-center h-[256px] border-b border-white/10">
          <Image src="/images/hero.png" alt="Hero" width={800} height={254} className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col w-full items-center p-8 gap-5 flex-1">
          <h1 className="text-[57px] md:text-[123px] text-center leading-[82%] font-bold font-kode-mono uppercase tracking-tight text-white/80">Somnia Get ready for <span className="text-red font-kode-mono">SURPLS</span></h1>
          <p className="text-base text-center text-white/60 uppercase">Buy/get surpls NFT | Explore somnia | earn more points!</p>
          <a href="https://discord.gg/BJ9Z9D92" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
            <button className="flex items-center h-[52px] px-4 gap-3 bg-yellow text-black font-bold font-kode-mono uppercase tracking-tight rounded cursor-pointer">
              <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_9_152)">
                  <path d="M17.4419 3.52317C16.1473 2.91744 14.763 2.47723 13.3157 2.22656C13.138 2.5479 12.9304 2.98012 12.7872 3.32394C11.2487 3.09258 9.72445 3.09258 8.2143 3.32394C8.07116 2.98012 7.8588 2.5479 7.67947 2.22656C6.23067 2.47723 4.8448 2.91906 3.55016 3.52638C0.938869 7.47238 0.230991 11.3204 0.584931 15.1137C2.31688 16.4071 3.99534 17.1928 5.64548 17.7069C6.05291 17.1462 6.41628 16.5501 6.72931 15.9219C6.13313 15.6954 5.56211 15.4158 5.02256 15.0912C5.1657 14.9852 5.30571 14.8743 5.44098 14.7603C8.73183 16.2995 12.3074 16.2995 15.5589 14.7603C15.6958 14.8743 15.8358 14.9852 15.9774 15.0912C15.4362 15.4174 14.8637 15.6969 14.2675 15.9235C14.5805 16.5501 14.9423 17.1478 15.3513 17.7085C17.003 17.1944 18.683 16.4087 20.415 15.1137C20.8303 10.7163 19.7056 6.90361 17.4419 3.52317ZM7.17765 12.7809C6.18977 12.7809 5.37963 11.8586 5.37963 10.7355C5.37963 9.61247 6.17247 8.68864 7.17765 8.68864C8.18285 8.68864 8.99297 9.61086 8.97567 10.7355C8.97723 11.8586 8.18285 12.7809 7.17765 12.7809ZM13.8223 12.7809C12.8344 12.7809 12.0243 11.8586 12.0243 10.7355C12.0243 9.61247 12.8171 8.68864 13.8223 8.68864C14.8275 8.68864 15.6376 9.61086 15.6203 10.7355C15.6203 11.8586 14.8275 12.7809 13.8223 12.7809Z" fill="black" />
                </g>
                <defs>
                  <clipPath id="clip0_9_152">
                    <rect width="20" height="20" fill="white" transform="translate(0.5)" />
                  </clipPath>
                </defs>
              </svg>
              <p className="text-sm font-bold font-kode-mono">Join Discord community</p>
            </button>
          </a>
        </div>

        <footer className="w-full flex items-center justify-between h-[52px] border-t border-white/10">
          <div className="flex items-center gap-2 px-6">
            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.836 0.599999H5.472L6.3 1.848L5.316 2.808L4.74 1.956H2.4L2.184 2.184V3.588L2.544 4.116H5.58L6.54 5.568V7.98L5.556 9H1.368L0.66 7.992L1.608 7.008L2.076 7.644H4.956L5.088 7.536V5.808L4.848 5.472H1.812L0.732 3.864V1.752L1.836 0.599999ZM11.7673 0.599999H13.2193V9H11.7673V8.592L11.1073 9H8.50331L7.41131 7.392V0.599999H8.86331V7.116L9.21131 7.644H11.5273L11.7673 7.404V0.599999ZM14.1266 0.599999H18.5306L19.9346 2.652V4.056L18.8306 5.196L19.9346 6.816V9H18.4826V7.068L17.3906 5.472H16.2146L15.5786 5.076V9H14.1266V0.599999ZM15.5786 1.956V4.116H18.0146L18.4826 3.636V2.94L17.7986 1.956H15.5786ZM0.696 10.6H5.436L6.504 12.208V14.332L5.412 15.448H2.148V19H0.696V10.6ZM2.148 11.956V14.512L2.82 14.116H4.824L5.052 13.888V12.484L4.704 11.956H2.148ZM7.41131 10.6H8.86331V17.104L9.23531 17.644H11.7673V16.768H13.2193V19H8.50331L7.41131 17.344V10.6ZM15.2666 10.6H18.9026L19.7306 11.848L18.7466 12.808L18.1706 11.956H15.8306L15.6146 12.184V13.588L15.9746 14.116H19.0106L19.9706 15.568V17.98L18.9866 19H14.7986L14.0906 17.992L15.0386 17.008L15.5066 17.644H18.3866L18.5186 17.536V15.808L18.2786 15.472H15.2426L14.1626 13.864V11.752L15.2666 10.6Z" fill="white" fillOpacity="0.5" />
            </svg>
            <p className="text-[8px] leading-none uppercase text-white/50">All rights<br />reserved</p>
          </div>
          <a href="https://x.com/SurplsNFT" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
            <div className="flex items-center gap-2 px-6">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.24415 7.3255L7.625 10.5H11.125L7.19585 5.26115L10.4654 1.5H9.1404L6.58215 4.44289L4.375 1.5H0.875L4.63043 6.50725L1.15957 10.5H2.48459L5.24415 7.3255ZM8.125 9.5L2.875 2.5H3.875L9.125 9.5H8.125Z" fill="white" />
              </svg>
              <p className="text-[10px] leading-none text-white font-kode-mono">@SurplsNFT↗</p>
            </div>
          </a>
        </footer>
      </main>
    </div>
  );
}
