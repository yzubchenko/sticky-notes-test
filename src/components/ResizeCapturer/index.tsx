import React, { useLayoutEffect } from 'react';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';

type Props = React.PropsWithChildren<{
    captureRef: React.MutableRefObject<HTMLElement>;
    onResize: ActionCreatorWithPayload<{
        top: number;
        bottom: number;
        left: number;
        right: number;
    }>;
}>;

export const ResizeCapturer = (props: Props) => {
    const { captureRef } = props;

    const updateSize = () => {
        const { top, bottom, left, right } = captureRef.current.getBoundingClientRect();
        props.onResize({ top, bottom, left, right });
    };

    useLayoutEffect(() => {
        updateSize();
        window.addEventListener('resize', updateSize);
        return () => window.removeEventListener('resize', updateSize);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <>{props.children}</>;
};
