const fetchData = () => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        const dataElement = document.getElementById('data');
        
        dataElement.textContent = JSON.stringify(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };
  
  fetchData();
  