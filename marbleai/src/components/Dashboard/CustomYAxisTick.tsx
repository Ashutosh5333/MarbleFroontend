import {  Text } from 'recharts';

export const CustomYAxisTick = (props: any) => {
    const { x, y, payload } = props;
    const formattedTick = payload.value >= 1000 ? `${Math.round(payload.value / 1000)}k` : payload.value;
    
    return (
        <Text x={x} y={y} fontSize={12} textAnchor="end" fill="#666">
            {formattedTick}
        </Text>
    );
};


