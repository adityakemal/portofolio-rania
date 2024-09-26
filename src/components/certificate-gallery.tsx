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
        {data?.map((certificate: any, id: any) => (
          <BlurFade key={certificate?.title} delay={blurFadeDelay + id * 0.05}>
            <Image
              width={"100%"}
              className="rounded-lg shadow"
              src={certificate?.img}
            />
          </BlurFade>
        ))}
      </Image.PreviewGroup>
    </>
  );
}

export default CertificateGallery;
