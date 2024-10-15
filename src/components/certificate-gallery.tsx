"use client";

import React from "react";
import { Image } from "antd";
import BlurFade from "./magicui/blur-fade";

type CertificateGalleryProps = {
  data?: any;
  blurFadeDelay: number;
};

function CertificateGallery({ data, blurFadeDelay }: CertificateGalleryProps) {
  return (
    <>
      <Image.PreviewGroup>
        {data?.map((certificate: any, id: any) => {
          if (certificate.type === "image") {
            return (
              <BlurFade
                key={certificate?.title}
                delay={blurFadeDelay + id * 0.05}
              >
                <Image
                  width={"100%"}
                  className="rounded-lg shadow"
                  src={certificate?.img}
                />
              </BlurFade>
            );
          }
          // if (certificate.type === "pdf") {
          //   return (
          //     <BlurFade
          //       key={certificate?.title}
          //       delay={blurFadeDelay + id * 0.05}
          //     >
          //       <Image
          //         width={"100%"}
          //         className="rounded-lg object-contain shadow"
          //         preview={{
          //           // mask: (
          //           //   <div className="flex items-center gap-x-1 text-sm">
          //           //     Show Deck <ArrowRight size={14} />
          //           //   </div>
          //           // ),
          //           destroyOnClose: true,
          //           // onVisibleChange: (visible) => {
          //           //   if (visible === false) {
          //           //     setLoading(true);
          //           //   }
          //           // },
          //           imageRender: () => (
          //             <>
          //               <iframe
          //                 className={`w-full aspect-video max-w-[1080px]`}
          //                 // loading="lazy"
          //                 // style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
          //                 src={certificate.img}
          //                 // onLoad={() => setLoading(false)}
          //                 allow="fullscreen"
          //               />

          //               {/* {loading && (
          //           <p className="!text-white text-base ">Loading...</p>
          //         )} */}
          //             </>
          //           ),
          //           toolbarRender: () => null,
          //         }}
          //         src={"https://picsum.photos/200/300"}
          //       />
          //     </BlurFade>
          //   );
          // }
          return <></>;
        })}
      </Image.PreviewGroup>
    </>
  );
}

export default CertificateGallery;
