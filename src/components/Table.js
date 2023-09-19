import React, {useState} from 'react'

export default function Table({data}) {
        const [favorites, setFavorites] = useState([]);
      
        const toggleFavorite = (itemId) => {
          if (favorites.includes(itemId)) {
            // Item is already a favorite, so remove it
            setFavorites(favorites.filter((id) => id !== itemId));
          } else {
            // Item is not a favorite, so add it
            setFavorites([...favorites, itemId]);
          }
        };
        const isFavorite = (itemId) => favorites.includes(itemId);
  return (
    <table class="container table table-dark table-striped">
    <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col">Currency</th>
        <th scope="col">24h Change</th>
        <th scope="col">Price</th>
        <th scope="col">Market Cap</th>
        <th scope="col">Cashback</th>
      </tr>
    </thead>
    <tbody>
    {data.map((item) => (
          <tr key={item.id}>
            <td>
            <button onClick={() => toggleFavorite(item.id)}>
                {isFavorite(item.id) ? '★' : '☆'}
              </button>
            
            </td>
            <td>{item.currency}</td>
            <td>{item.change}</td>
            <td>{item.price}</td>
            <td>{item.marketCap}</td>
            <td>{item.cashback}</td>          
          </tr>
        ))}
    </tbody>
  </table>
  );
}
