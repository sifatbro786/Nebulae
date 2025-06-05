import M1 from "/m1.svg";
import M2 from "/m2.svg";
import M3 from "/m3.svg";
import M4 from "/m4.svg";
import M5 from "/m5.svg";
import M6 from "/m6.svg";
import M7 from "/m7.svg";
import M8 from "/m8.svg";
import M9 from "/m9.svg";
import M10 from "/m10.svg";
import M11 from "/m11.svg";
import M12 from "/m12.svg";
import M13 from "/m13.svg";
import M14 from "/m14.svg";
import M15 from "/m15.svg";
import M16 from "/m16.svg";
import M17 from "/m17.svg";
import M18 from "/m18.svg";
import M19 from "/m19.svg";
import M20 from "/m20.svg";
import M21 from "/m21.svg";
import Marquee from "./Marquee";

export default function Marquees() {
    let images = [
        [
            M1,
            M2,
            M3,
            M4,
            M5,
            M6,
            M7,
            M8,
            M9,
            M10,
            M11,
            M12,
            M13,
            M14,
            M15,
            M16,
            M17,
            M18,
            M19,
            M20,
            M21,
        ],
        [
            M21,
            M20,
            M19,
            M18,
            M17,
            M16,
            M15,
            M14,
            M13,
            M12,
            M11,
            M10,
            M9,
            M8,
            M7,
            M6,
            M5,
            M4,
            M3,
            M2,
            M1,
        ],
    ];

    return (
        <div className="py-20 mt-20">
            {images.map((item, idx) => (
                <Marquee key={idx} imgUrls={item} direction={idx === 0 ? "left" : "right"} />
            ))}
        </div>
    );
}
