import React from 'react'
import './CSS/Filters.css'
import CheckBox from './CheckBox'
import RangeButton from './RangeButton'

// const plantOptions = [
//   { id: 'indoor', label: 'Indoor Plants', count: 10 },
//   { id: 'outdoor', label: 'Outdoor Plants', count: 10 },
//   { id: 'water', label: 'Water Plants', count: 10 },
//   { id: 'air', label: 'Air Plants', count: 10 },
//   { id: 'bonsai', label: 'Bonsai Plants', count: 10 },

// ]

// const AvvailibilityOptions = [
//   { id: 'in-stock', label: 'In Stock', count: 10 },
//   { id: 'out-of-stock', label: 'Out of Stock', count: 10 },
// ]

// const PlantSizeOptions = [
//   { id: 'small', label: 'Small', count: 'up to 10cm' },
//   { id: 'medium', label: 'Medium', count: '10cm to 50cm' },
//   { id: 'large', label: 'Large', count: '50cm and above' },
// ]

// const LightRequirementsOptions = [
//   { id: 'low', label: 'Low Light', count: 10},
//   { id: 'medium', label: 'Medium Light', count: 40 },
//   { id: 'high', label: 'High Light', count: 55 },
// ]

// const PetFriendlyOptions = [
//   { id: 'yes', label: 'Yes', count: 10 },
//   { id: 'no', label: 'No', count: 10 },
// ]

const Filters = ({ Products = [] }) => {
  return (
    <div className="filters-outer">
      <div className="filters-heading">
        <h2>Filters</h2>
        <p>Clear All</p>
      </div>

      <RangeButton btnName="Price Range" />

      {Products.map((product) => (
        <CheckBox key={product.id} data={product.options} btnName={product.name} />
      ))}
    </div>
  )
}

export default Filters