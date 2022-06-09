import React from 'react';
import {
    AntDesign,
    Entypo,
    EvilIcons,
    Feather,
    FontAwesome,
    FontAwesome5,
    Foundation,
    Ionicons,
    MaterialCommunityIcons,
    MaterialIcons,
    SimpleLineIcons,
    Octicons

} from '@expo/vector-icons';

export const Icons = {
    MaterialCommunityIcons,
    MaterialIcons,
    Ionicons,
    Feather,
    FontAwesome,
    FontAwesome5,
    AntDesign,
    Entypo,
    SimpleLineIcons,
    Octicons,
    Foundation,
    EvilIcons,
}

type TIconProps = {
    type: any;
    name: string;
    color: string;
    size?: number;
    style?: any;
}

export const Icon = ({ type, name, color, size = 24, style }: TIconProps) => {
    const fontSize = 24;
    const Tag = type;
    return (
        <>
            {type && name && (
                <Tag name={name} size={size} color={color} style={style} />
            )}
        </>
    )

}