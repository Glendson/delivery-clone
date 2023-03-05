import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
    return (
        <ScrollView
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10,
            }}
            showsHorizontalScrollIndicator={false}
            horizontal
        >
            <CategoryCard imgUrl="" title="testing"/>
            <CategoryCard imgUrl="" title="testing"/>
            <CategoryCard imgUrl="" title="testing"/>
        </ScrollView>
    )
}

export default Categories