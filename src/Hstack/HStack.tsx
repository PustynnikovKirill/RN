import React from "react";
import {ReactNode} from "react";
import {ScrollView, View} from "react-native";
import {PADDING, WIDTH} from "../contstants/constants";

interface HStackPropsType {
    children: ReactNode
}

export const HStack = ({children}: HStackPropsType) => {
    let sumWidth = 0
    React.Children.forEach(children, (child,index)=>{
        if (!React.isValidElement(child)) return
        const {width} = child.props
        sumWidth += width

    })
    if((WIDTH - PADDING*2) < sumWidth) {
        return <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style = {{marginHorizontal: -PADDING}}
        >{children}</ScrollView>
    }

    return (
        <View style={{flexDirection:'row',justifyContent: 'space-between'}}>
            {children}
        </View>
    )
}