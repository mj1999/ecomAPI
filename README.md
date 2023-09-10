# ecomAPI
A ecommerce products management api , get http://ecomapi.crabdance.com/products to list all products

<p>Tech stacks used:
  <ul>
    <li>MongoDb</li>
    <li>Mongoose</li>
    <li>ExpressJs</li>
    <li>NodeJs</li>
  </ul>
</p>

<p>The project follows MVC folder structuring, i.e
   <ul>
    <li>All the database document schemas are under Model folder</li>
    <li>All the server side functions are under Controller folder</li>
     <li>Config folder contains all the configuration functions, i.e. Database configurations, etc.</li>
   </ul>
 </p>

<p>Setting up the project to run locally in your machine:
  <ol>
    <li>Clone the repository files to your desired location on you local machine</li>
    <li>Navigate to the cloned files destination using command line</li>
    <li>Make sure you have node and npm installed on your system, if not then install nvm from the following link https://github.com/nvm-sh/nvm and then follow the commands in the readme section to further install node and npm</li>
    <li>Once in the cloned directory run the command "npm install" to intall all the dependent node modules</li>
    <li>Once dependencies are installed just run the command "npm start" to start the application</li>
    <li>To test the api use postman:- GET "localhost:8000/products" to list all the products , DELETE "localhost:8000/products/:product_id_parameter" to delete a product by its id , POST "localhost:8000/products/create" and add urlencodedform data from postman with Keys "name" and "quantity" to create a new product and finally to update the product quantity use POST "localhost:8000/products/:product_id_parameter/update_quantity/?number=your_desired_quantity" </li>
  </ol>
</p>
