"use client";

import React, { useState } from "react";
import { Button, Grid, Image } from "antd";
import BlurFade from "./magicui/blur-fade";
import { Download } from "lucide-react";
import Link from "next/link";
const { useBreakpoint } = Grid;

type CertificateGalleryProps = {
  data?: any;
  blurFadeDelay: number;
};

// Outside of React component

// const options = {
//   `https://unpkg.com/pdfjs-dist@${pdfjs.version}/standard_fonts`,
// };

// Inside of React component

function CertificateGallery({ data, blurFadeDelay }: CertificateGalleryProps) {
  console.log(data);

  const sourceImg = data.filter((f: any) => f.type === "image");
  const sourcePdf = data.filter((f: any) => f.type === "pdf");
  const { xs } = useBreakpoint();

  const [Visible, setVisible] = useState(false);
  console.log("render");

  return (
    <>
      {/* {JSON.stringify(screens)} */}
      {sourcePdf?.map((certificate: any, id: any) => (
        <BlurFade key={certificate?.title} delay={blurFadeDelay + id * 0.05}>
          <Image
            width={"100%"}
            className="rounded-lg w-full object-cover aspect-[16/11]  shadow"
            onClick={
              xs ? () => window.location.assign(certificate?.img) : () => {}
            }
            // preview={false}
            preview={
              xs
                ? false
                : {
                    // mask: (
                    //   <div className="flex items-center gap-x-1 text-sm">
                    //     Show Deck <ArrowRight size={14} />
                    //   </div>
                    // ),
                    destroyOnClose: true,
                    // visible: true,
                    // visible: Visible,
                    // onVisibleChange: (visible) => {
                    //   if (visible === true && xs) {

                    //   }
                    // },
                    imageRender: () => (
                      // <div className="relative w-screen h-screen">
                      //   <embed
                      //     src={certificate?.img}
                      //     className="w-[90vw] h-[90vh]"
                      //     // className="h-[80%] w-[95%] md:h-[90%] md:w-[65%] absolute"
                      //   />
                      // </div>
                      <>
                        <iframe
                          className=" h-[85%] w-[95%] lg:h-[95%] lg:w-[65%] hidden sm:block"
                          // loading="lazy"
                          // style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
                          src={certificate?.img}
                          // onLoad={() =>
                          //   xs && (window.location.href = certificate?.img)
                          // }
                          allow="fullscreen"
                        />
                        {/* <Link download={true} href={certificate?.img}>
                    <Button
                      className="sm:hidden flex items-center"
                      icon={<Download />}
                    >
                      Download PDF
                    </Button>
                  </Link> */}
                      </>
                    ),
                    toolbarRender: () => null,
                  }
            }
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
