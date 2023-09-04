import { Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { CartButton, Counter, CoverContainer, ProductItems } from '../../Components'
import { COLORS, SCREEN } from '../../Enums/StyleGuide';
import Icons from '../../Enums/Icons';
import { Products } from '../../Constants';
import { styles } from './style';

const Home = ({ navigation }) => {
  const [products, setProducts] = useState([...Products])

  const handlePress = (itemToToggle) => {
    const updatedProducts = [...products]
    updatedProducts.forEach((productGroup) => {
      productGroup.productItems.forEach((item) => {
        if (item === itemToToggle) {
          item.selected = !item.selected
        }
      })
    })
    setProducts(updatedProducts);
  }

  return (
    <View style={styles.Container}>
      <ScrollView contentContainerStyle={styles.ScrollContainer}>
        {/* Food Content */}
        <CoverContainer />

        {/* FeedBack Content */}
        <View style={styles.FeedBackContainer}>
          <Icons type="FontAwesome" name="star" color={COLORS.YELLOW} size={18} />
          <Text style={styles.Rating}>4.5</Text>
          <Text style={styles.Reviews}>(30+)</Text>
          <TouchableOpacity>
            <Text style={styles.ReviewButtonText}>See Review</Text>
            <View style={styles.ReviewLine} />
          </TouchableOpacity>
        </View>

        <View style={styles.PricingContainer}>
          <Text style={styles.Dollar}>$<Text style={styles.Price}>9.50</Text></Text>
          <Counter />
        </View>

        <Text style={styles.Description}>Brown the beef better. Lean ground beef – I like to use 85% lean angus. Garlic – use fresh  chopped. Spices – chili powder, cumin, onion powder.</Text>

        {/* All Products */}
        {products.map((productGroup, productGroupIndex) => (
          <ProductItems
            key={productGroupIndex}
            productGroup={productGroup}
            handlePress={handlePress}
          />
        ))}
      </ScrollView>

      {/* Add Cart Button */}
      <View style={styles.BottomContainer}>
        <CartButton onPress={() => navigation.navigate(SCREEN.MapScreen)} />
      </View>

    </View>
  )
}

export default Home
