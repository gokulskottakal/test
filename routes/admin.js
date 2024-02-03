var express = require('express');
var router = express.Router();
var productHelper=require('../helpers/product-helpers')

/* GET users listing. */
router.get('/', function(req, res, next) {

  let products=[
    {
      name:"i phone 11",
      category:'mobile',
      description:"I PHONE latest model. ios 12, 50 mp camara",
      image:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBESEhESERIREhEREBkSERESERIREhASGBQZGRgaGBgcIS4lHB4rIxgYJjomLC8xNTU1GiQ7QDszPy40NjEBDAwMEA8QHBISHDEhISE0MTE0NDQxNDQ0NDE0MTExNDQ0NDQ0NDQxMTExNDQ0MT80PzE0NDE2NDE0PzExNDQ8Nf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAgEEBQcIBgP/xABOEAABAwIDAgcKCgYJBQEAAAABAAIRAwQSITEFQQYiMlFhcbQHExQjcnN0gZGxFzNCU1SUobLT8CRigrPS4lKSk6LB0dTh8UNEY2TENP/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAHREBAQADAAMBAQAAAAAAAAAAAAECETEDEiFBMv/aAAwDAQACEQMRAD8A3MiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIKLC7Q2/Tp1Rb02ur3JEmkwgCmCJBqOOTRplm6DMQrjb14+jb1H0wDVOGnRBEjvtRwYyRzAuBPQCrDZtjSsLdznO4+E1Li4qEY6jjm573c5MlS0XArX7hMWlP8AVitWj18T3KrnX26pajITNvVOcZ/9TReAvO6pbsrYO91HUw6HPxw+J1waDqJnnhe+2Rf2903HScTBh7S5wew6wRP2iQc4OSn0J2h85a/Vq34qTtD5y1+rVvxVe12MYJOMyYADjmVSk7FOEuDm6tcQfYU2ulnO0PnLX6tW/FSdofOWv1at+KsnTfiE+0cxX0TaMRO0PnLX6tW/FSdofOWv1at+KsuibGInaHzlp9Wrfiq3uam1WiafgL4+S6ncMJ6iHuWfRNjXNx3QqtJ7qdWn3t7DBa63aJ6QfCcx+TCh8JJ5m/2DP9SvQcO+C1LaFs9pa0V2tmlUgSHbgecSuZajA0ua4ODmktIMZOGRCsG+vhJPM3+wZ/qU+Eo8zf7Bn+pWgyW4RrinPSIXzVHQDe6XmJAjeBQYD7fCCq0+6Y35QBHmQ0e0VnEewrn5EHUewuG1pdOawPa17oDeMS15JgAFwa4Hoc0TulepXJnB64Pfm0ycqhwtJJ4tT5JnWCYB6DzgLpLgZtF1xaU3VC51RgDHPdGJ4wtc1zoyxYXNxRliDkHoUREBERAREQEREBERBh9utJNqI4vhYLuYAUarhP7Qb9iwPdJc8WTwyc6jA7qGnqmFn9ucuz9L/wDnrr5bcoMqMdTqCWPJa4dGELNHMFvgIPfMUznpOvGmfX61tHuSbSe+thBJDaGCpzS2pTDCemCfa5fHanc1D6jnU3thxkkksPryIJ6cl6zgVsCns5jwCHPdx3ECMwDvOZyn2rVy3NJp7au5pAkgYeN1dfQlsG5vBDsW8cnLmWmeE+2KlzXfTc497YQBTmGF+EEuI3mchOgAjfNODG06lnc0yx0Me9rKtMOlj2OcGmQMsQ1B6OYlPW62vt+N10Tx3jpB9rQV91a2zpfU/Z+6FdKAiIgIiIIv0PUVyhwopYL69bEAXdWMt3fHR6l1fU0Pkn3LTO2OClKoLuo/j1a11cd7AxSxwqvgZc5w5K4zbNumn1RZi82HWYHOwEhgl4GZpiflc2qxJaQrYssqKIiirjZ5itSPNVYf7wXSvAEnvdXWMTo5pFxcD3Bv2Lmmx+Npecb94LpTufcit1u7XdIPYoiICIiAiIgIiICIiDEbc5dl6WezV1Y8KdoNt6Tqrs8BMDTE4gBo6MyFfbc5dl6WezV1heH+z317SqxgJc0ioANXAcoDphZo0xtPhre1ahcyq9jJ4oa5zBHQ1pH2yeleu4A8L6lw/vFwcT44rzqcjkTvyB1z65WsC59u4se2CHAyRk7Cco6F6vua7NqPuxVwkMYJJIOm72mPtW7JpJt6PhZwQuO+d+toIcAHB0hjwBDTig4XAQCDAMAg6hV4IcErp1anUrhoZTcHtY12MFzTLcThlAIBgEk6ZLZlvVIpugYnNBhv9LLIK6sqjnsaXtLHHVp3ZrPtdaXT62rcL3jmDB0nihXatbUy6o4aFwA6cIA/wV0sgqqiLQqioiClTQ+SfctdsuGh9Wm4Ymm5rO1iCaz1sR+h6j7lqWpUc2vXiSTc1YETAFZ66eGbtc/JdR6d1KmQWBoBc0E4YBLzxpJ9q1z3SeD4aGXFOm1mTm1sIa3E5oEOgayN4C9XbXrs8JkjIGObTLmVxtK18KoupubJLDAn5Ubsx0b10yx/GMcnP5CosltfZtS3eW1GFvNIyImJCxq42adpdvvY/G0vON+8F0p3PuRW63drulzXY/G0vON+8F0p3PuRW63drulFexREQEREBERAREQEREGG247xlkN5uidCchb1pJ5tR7Ve1mBxPXkVj9u/HWPn3/uHrJP1KzR5u/4IWlZ5e+k3ETJLCWYj0gK9s9iUqLcFOngbzNLRJ6cs1lgqgqKtaNqGZiTPO4f5L7GmTloN8alfUFVCAxoAAGgX0UFVESREWgREQRfofJPuWtq9uw1Kjjur1YYI401XmSd2e5bJfofJPuWrrq5La1Zu7vz49dRy6eL+mM+Mh4BTFPE0YDOQA37wZOmeqtWB4OHEWNAIBOcmP8pWS2fWkd7dDmkGY5UxlBWN2pdBjnMMZtgt3Axlqu/XKydaz4ZWDu/uOZac2v1a8Tq0ryT2wYW4LvZjatsYcA9gdUZM56ZHrha6vNnMaDJIeDxp3Ljli6Y5MVY/G0vOM+8F0j3P3DDVG/jHQ6eGXW/1j2rnO2p4atLf4xn3guiO5/rU8mp224XN0e3REQEREBERAREQEREGD278dY+ff+4eshUOZ61YbdHjbE7vCHt9Zt6hH3Sr6oeMetZoAqqgCpAqKmCqgqAKkCgkqqIVQUEgiiqygmiipLSIv0Pkn3LUdxRw3NwScvCKjpH61RxhbcdofJPuWmtrXRZd1xlnWfrzBziunh65+TjL2deHNIkmft51a8I2AVOJhzMuGeWfvUNl3wa7G8ZCcl9nWgqNFTETmcZAJOemXNqvTpwt+LOyuQ7iExJ0OmQn3ry3CC1wP0gnMxJDs9fz0r2l1s5oZ3xhnomHBed4REltMuyhsZnp/wCfaueUal+vDERVpafGs08oLoDuf61PJf224WgXOBq0iNe+ty6MQzW/+5+0+MO4NeJ6Te3Me4rhl16MePbIiKKIiICIiAiIgIiIMRtzl2XpZ7NXVxUPGPWrfbnLsvSz2auvvVPGPWs0AVUFQBUgVFSBUgV8wVIFBMFSC+YP55l9XRu9qACiiCpSgrKKiIKu0Pkn3LQO3Lx5vLsEDi3NQCBuFRzQTK36dD5J9y0HwkYxlW4dnjqXdXCATk3wio0gjpj7F18fXPPidrWiBmZMr1OyrzCSwwQWFzm87tfZkvIWdF7INRhbi5MjI+tZPZ1yA7E/5RjSYBXql3Hn5V6y9cRoR69AsZtsTSBzImDzzz/Yr+pamnhqOewteXRBIgDnHNmsZtVwIOCSzD7CdNdyZasSyyvDlkVmedZI5uMIXQvc+5Fbrd2u6XP9YeNpnTxzcv2gugO5/wAit1u7XdLy5derG7j2KIiy0IiICIiAiIgIiIMRt3l2XpZ7NXX2q8o9a+O3eXZelns1dfWtyj1rNFJVQVCVUFRUwUe6AqBUeJBQLd8OHMclfOdAKxOJZKk/E0HozQRlVBUCVUFBOVVQCqgkdD5J9y0Htu6a26uQHS91zWBy5De/v37hv/IW+9x8k+5c77dqMbeXhAEm7rB3X352/cNPzK6+O/XPPj7tvHGk6nj42JpGuGd8jnIJVTWwni6uz6Ad6tqbQ04acufUaHYXFsS4a56ar5lxYSHHMcvP5XqOa7bctPRWNyXUnUyQ7AQcJOYaJyJ3arHbVe0NqsBIMHCAMsgIGf5zX02O8YXuDZJbkN5EjOPUrTaFZhxOEyTOegBGi1v4mnl58bT883XUcYLoPufcit1u7XdLQFVwNSmcIHjmQRpyhK3/ANz7kVut3a7pefLrvjx7FERZaEREBERAREQEREGI27y7L0s9mrr6VuUetfPbnLsvSz2aupVuUetZooqhQVQoqcqoKiqgoK4BrCk0xkMgoyqygmCqgqIKAoJgqUr5gqQKCY3+SfcuaeEhi+vS7ki8rQOfxrt3MulW7/JPuXNHCcON7ewCf0ytkATl355/zW8WMldmXHGBcBidrBOgy1J11WbuLJrmNwNMycXVC8ix5yAMc3Qs5ZVXgZEw2MyZ64C6yuWUXez6gYKm+GRmJz3LG3Jc0GHEkaGcO4SPZuVy2/difUdADjERPRmFiL69DtB8rSTOW/8APMrskWzHzUpj/wAzdPKC6F7n3Irdbu13S5zt3zVp83fWwP2gujO59yK3W7td0uWXXaPYoiKKIiICIiAiIgIiIMRt3l2XpZ7NXVa/KPWqbd5dl6WezV0r8o9azRRFSVVRVQVUFRVZQSBUgVBVlBNVlQlVlBMFVlRBVZQfRu/yT7lznty5i+vRMReVs9P+q5dFMOvkn3LmvhO6L283A3tfSeN453Mt4MZR8by5DnNAgQMzABxHp5tF96Ilgw4Tz55z1LGU44u+en7FkWNGF0TMaDNdGbEw1rmuDpgA5iJBg/mFg6rMy0HEZMNAjLP8+tZK4q4QBrvz6lj6gGZ5wd2I4tw1GR58+pSri+FoPG0vOM+8F0h3PuRW8p3a7pc32g8ZS84z7wXSHc+5Fbrd2u7WG3sUREBERAREQEREBERBiNu8qy9LPZq6pX5R61XbvLsvSz2auqV+UetZoiiipKKqqqKqgrKqqBEElIFQCqEEwVUFQlVlB9WHXyT7lzRwqb+m3pif02sM9B4166Vp7/JPuXNvCR36ffCP+8rfvXLeLOSwt4H+w/x9qvaRMCN+USF8gwCARu1zHVC+1NkQS0lhdGeU8+a6M1a16Ts5yAyzbHPGcdfsWPuCWkjmG8QV6O7ZTLYBILRySceXQQMt29eYuH5n2dMKZLj9TtT42lMfGt08oLo7ufcit1u7Xdrm2y+NpedZ94LpLufcit5Tu13Sw09iiIgIiICIiAiIgIiIMRt3l2XpZ7NXUa/KPWpbd5Vl6WezV1Gvyj1rNEERFFFJRRBNVUVVBVVUVVBJVUFVB9qe/wAk+5c38Imfp18f/drRnp41y6PpanyT7lz1wgyvL0kiPDKsnKR458R7Dot4M5LKlTxNaZJMkYf6LcoM9JLvYrx1MNbByy1ERE7xzq0pPc3jajSREHOZ/wB1O9rhzJEjnMCB1xpuXRirHad40EhuLozgRH29fSsMTz55Zr7V6ueX+x6VbHMrFrcj7WR8bS84z7wXSfc+5FbyndrulzZY/G0vOM+8F0n3PuRW8p3bLtRXsUREBERAREQEREBERBiNu8qy9LPZq6jX5R61XbjodaZDO6id7fEVdObm9ZVK3KPWs0QREUUREQEREElVQUkEklUVUH1pHM+SfctCbZFPwy8Dt97W38URVdGL19K3zSOZ6j7lz9t+uzwy7MiBdVZ4vNWePbvnpK3gzktK1QMAyAAmDnB5lh7+6BJDJDRplBI6pMH1r6Xt1Ij/AICxTnSt2pIo50qgKIsNLixPjaXnGfeC6T7n3IreU7tl2ubLH42l5xn3guku58fF1chynZ7/AP8AXdfn1oPZIiICIiAiIgIiICIiDD8JaT3W7n02l9Sg9ldjG5uf3t4c5o6XNxNHWre2umVqdOtTcH03sDmuBkEELPry1zweq0arq1i9rWPcX1bR5LaT3ky59NwBwE5kiIJOrc5lgvkVh4dUBh9netI/o0qdRp6nMqHJV8PP0a++qn+JZ1VXyKy8PP0a++qn+JPDz9Gvvqp/iTVF6isxfO+jXv1b+dDfO+jXv1b+ZNUXiKy8Pd9Gvfqv8yeHu+jXv1X+ZNUX6BWQvzn+jXmQmDbGTnu4ytLra9Zo8XYX9RxyHiabGjpJL5jqBTVF3tva1Ozt6txUMBjCQN7nbgOknL1rmi6vXvc57tXuLna8pxLj9pK23tvg9tG/dNy1/ewZZRwXQaz1inmelYv4N3fMf3bz8NanxGrXO61BbT+Dh3zB/qXv4afBu75g/wBS9/DVGrEW0vg3f8yf6l5/AqfBpUOTaTwf1aNZ37zAPtQeC2BRxXFNxEtpuFRw54PFaOkmAOtdH8ALdzbNlR8E1Yc1wEB7A0ccfqudjeOh4XmODXcupUnNfcnEwHF3rKXmPlAZNbrxQXEzyokHZzWgAAAAAQAMgAgkiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiD/9k="
    },
    {
      name:"VIVO V23",
      category:'mobile',
      description:"World first color changing phone, 62 mp triple camara setup",
      image:"data:image/jpeg;base64,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"
    },
    {
      name:"Samsung s23",
      category:'mobile',
      description:"100x zoom camara phone, vooc fastcharging",
      image:"data:image/jpeg;base64,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"
    },
    {
      name:"Google Pixel 7pro",
      category:'mobile',
      description:"Google phone latest version, best camara performance & security",
      image:"data:image/jpeg;base64,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"
    }

  ]


  res.render('admin/view-products',{products,admin:true})
});

router.get('/add-products',function(req,res){
  res.render('admin/add-products')
})
router.post('/add-products',(req,res)=>{
  console.log(req.body)
  // console.log(req.files.Image)
  productHelper.addProduct(req.body,(result)=>{
    res.render('admin/add-products')
  })
})
module.exports = router;
