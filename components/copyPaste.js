<div>
<label htmlFor="product-name">Product name:  </label>
<input type="text" name="product-name"  />
</div>

<div>
<label htmlFor="product-description">Product description:  </label>
<input type="text" name="product-description" />
</div>

<div>
<label htmlFor="product-price">Product Price:  </label>
<input type="text" name="product-price" />
</div>

<div>
<label htmlFor="product-unit">Product Unit:  </label>
<input type="text" name="product-unit" />
</div>

<div>
<label htmlFor="product-amount">Product Amount received:  </label>
<input type="text" name="product-amount" />
</div>

<div>
<label htmlFor="product-category">Product Category: </label>
  <select name="product-category">
      { this.state.categories.map( category =>{
              return(
              <option value={category.id} key={category.id}>{category.categoryName}</option>
              )//end of the return
          })//end of the map
      }
  </select>
</div>


<div>
<label htmlFor="product-supplier">Product Supplier: </label>
 <select name="product-supplier">
 { this.state.suppliers.map( supplier =>{
              return(
              <option value={supplier.id} key={supplier.id}>{supplier.supplierName}</option>
              )//end of the return
          })//end of the map
      }
 </select>
</div>

