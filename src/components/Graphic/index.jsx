import React from 'react';
import { ResponsiveStream } from '@nivo/stream';
import { linearGradientDef } from '@nivo/core'
import * as Color from 'styles/colors.module.scss';

const Graphic = ({ data, team}) => (
        <ResponsiveStream
            data={data}
            keys={[team]}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            enableGridX={false}
            curve="linear"
            offsetType="none"
            order="ascending"
            fillOpacity={0.85}
            borderWidth={2}
            borderColor={Color.primary}
            defs={[
                linearGradientDef('gradientA', [
                    { offset: 0, color: Color.primary, opacity: 0.20 },
                    { offset: 100, color: Color.primary, opacity: 0.10 },
                ]),
            ]}
            fill={[
                { match: { id: team }, id: 'gradientA' },
            ]}
            isInteractive={false}
        />
)

export default Graphic;