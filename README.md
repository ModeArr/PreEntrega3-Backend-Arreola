#### Nombre: Modesto Arreola

#### Institucion: Coderhouse

#### Curso: BackEnd

#### Comision: 50040

#### Profesor: Rabindranath Ferreira Villamizar

#### Tutor: Tomás Alessandro Yovino

#### Entrega Numero: 3

#### EL proyecto pide que se haga una clase que gestione productos asi como su agregacion y recibimiento, esto usando manejo de archivos mediante un json al cual ahora se agrega promesas para su uso (se dejo solo la funcion getProducts() ya que es la unica que pedia el ejercicio). El ejercicio tambien pide la creación de un server en ExpressJs el cual permita obtener los productos atraves de la clase que obtiene los datos del Json, permitiendo mediante un request obtener el json de todos los productos, asi como un máximo y tambien poner por medio de params su id para encontrarlo 

---

## Cosas a realizar

### getProducts()
#### Esta funcion permite obtener todos los productos promedio de una promise del arhicov db.json mediante la libreria fs/promises con la funcion fs.readFile.

### app.get("/products")
#### Este endpoint permite obtener por medio del cosntructor y getProducts() todo el json que esta en la base de datos. Tambien este acepta la query ?limit="n" la cual permite por medio de un slice(indexinicio, indexFinal) solo mostrar el array de objeto de "n" numero de cantidad.

### app.get("/products/:pid")
#### Este endpoint permite retornar el objeto de id(:pid) que se quiera obtener. Esto se logro mediante find() para encontrar el objeto con :pid , para luego localizar el index con el indexOF() para poder retornar el producto con su indice.

#### Con este ejercicio ya implementar el resto de las opciones que tenia ProductManager es simple solo un poco de implementacion seria necesaria si es posible la agregaria despues.