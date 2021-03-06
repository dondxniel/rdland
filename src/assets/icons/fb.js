import React from 'react';

const FacebookIcon= (svgProps) => {
    return (
        <svg
            width={26}
            height={27}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            {...svgProps}
        >
            <path fill="url(#prefix__pattern0)" d="M0 .094h26v26.613H0z" />
            <defs>
                <pattern
                    id="prefix__pattern0"
                    patternContentUnits="objectBoundingBox"
                    width={1}
                    height={1}
                >
                    <use
                        xlinkHref="#prefix__image0_3177_1014"
                        transform="matrix(.004 0 0 .004 -.012 0)"
                    />
                </pattern>
                <image
                    id="prefix__image0_3177_1014"
                    width={256}
                    height={256}
                    xlinkHref="data:image/png;base64,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"
                />
            </defs>
        </svg>
    );
};

export default FacebookIcon;