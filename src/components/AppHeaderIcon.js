import React from 'react';
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

const AppHeaderIcon = props => (
    <HeaderButton
        {...props}
        iconSize={24}
        color="#fff"
        IconComponent={Ionicons}
    />
);

export default AppHeaderIcon;
