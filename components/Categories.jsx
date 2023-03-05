import { ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import CategoryCard from './CategoryCard'
import sanityClient, { urlFor } from '../sanity'

const Categories = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        sanityClient.fetch(`
            *[_type == "ctegory"]
        `).then((data) => {
            setCategories(data);
        })
    }, [])

    return (
        <ScrollView
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10,
            }}
            showsHorizontalScrollIndicator={false}
            horizontal
        >
            {categories.map((category) => (
                <CategoryCard key={category._id} imgUrl={urlFor(category.image).width(200).url()} title={category.name} />
            ))}
            
        </ScrollView>
    )
}

export default Categories