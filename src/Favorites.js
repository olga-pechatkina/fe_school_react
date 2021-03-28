import ItemsComp from "./ItemsComp"

const MyShop = () =>  {
  const items = [
    {
      name: "Кардиган",
      seller: "Sewing company", //should be id to map with city
      price: "1900",
      photo: "/item1.jpg",
      size: "44-56",
      fabric: "merino wool",
      year: "2020"
    },
    {
      name: "Свитер",
      seller: "Sewing company",
      price: "1900",
      photo: "/item2.jpg",
      size: "44-56",
      fabric: "cotton",
      year: "2021"
    },    
    {
      name: "Кофта",
      seller: "Clothes for you",
      price: "2200",
      photo: "/item3.jpg",
      size: "44-48",
      fabric: "wool",
      year: "2020"
    }]

  return(
  <ItemsComp items={items} header = "Избранное"/>
  )
  }
  export default MyShop;
  