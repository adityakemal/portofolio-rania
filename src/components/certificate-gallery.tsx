"use client";

import React from "react";
import { Image } from "antd";
import BlurFade from "./magicui/blur-fade";

type CertificateGalleryProps = {
  data?: any;
  blurFadeDelay: number;
};

function CertificateGallery({ data, blurFadeDelay }: CertificateGalleryProps) {
  console.log(data);

  const sourceImg = data.filter((f: any) => f.type === "image");
  const sourcePdf = data.filter((f: any) => f.type === "pdf");

  return (
    <>
      {sourcePdf?.map((certificate: any, id: any) => (
        <BlurFade key={certificate?.title} delay={blurFadeDelay + id * 0.05}>
          <Image
            width={"100%"}
            className="rounded-lg w-full object-cover aspect-[16/11]  shadow"
            preview={{
              // mask: (
              //   <div className="flex items-center gap-x-1 text-sm">
              //     Show Deck <ArrowRight size={14} />
              //   </div>
              // ),
              destroyOnClose: true,
              // onVisibleChange: (visible) => {
              //   if (visible === false) {
              //     setLoading(true);
              //   }
              // },
              imageRender: () => (
                <embed
                  src={certificate?.img}
                  className="h-[80%] w-[95%] md:h-[90%] md:w-[65%] "
                />
              ),
              toolbarRender: () => null,
            }}
            src={certificate?.pdfThumb}
          />
        </BlurFade>
      ))}

      <Image.PreviewGroup>
        {sourceImg?.map((certificate: any, id: any) => (
          <BlurFade key={certificate?.title} delay={blurFadeDelay + id * 0.05}>
            <Image
              className="rounded-lg shadow w-full aspect-[16/11] object-cover"
              src={certificate?.img}
            />
          </BlurFade>
        ))}
      </Image.PreviewGroup>
    </>
  );
}

export default CertificateGallery;
