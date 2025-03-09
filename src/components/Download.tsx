'use client'
// import * as htmlToImage from "html-to-image";
// import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
import { DownloadIcon } from "lucide-react";
import html2canvas from 'html2canvas';




const Download = () => {
    const downloadScheduleAsImage = () => {
        const scheduleElement : HTMLElement | null = document.getElementById('schedule');
        html2canvas(scheduleElement, {
            ignoreElements: (element) => {
              // Ignore elements with unsupported styles
              return element.style.color.includes('oklch');
            },
          }).then(canvas => {
            const link = document.createElement('a');
            link.href = canvas.toDataURL('image/png');
            link.download = 'schedule.png';
            link.click();
          });
      };
  return (
    <button className="bg-neutral-100 size-12 rounded-full absolute bottom-2 right-16 flex cursor-pointer  items-center justify-center dark:bg-neutral-800 "  onClick={downloadScheduleAsImage}>
        <DownloadIcon />
    </button>
  )
}

export default Download
