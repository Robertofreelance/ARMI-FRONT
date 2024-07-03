Buenos dias/tardes o noches.

Tratare de dar la mayor cantidad de explicaciones sobre el proceso en el que se hizo y el porque de esa forma.

Se uso el framework MUI para no tener que profundizar en temas de estilado ahorrando tiempo.

La estructura es una tradicional en apps de React en donde tenemos:
/app (donde encontramos el layout y el direccionamiento a nuestras rutas)
/components (componentes utilizados, hice una carpeta aparte de Modals ya que es una costumbre de mi parte para poder identificarlos mas rapido)
/context (contexto de la app la cual se divide en actions,providers y reducers)
/utils (utilidades y interfaces)
/theme (solo es el tema de MUI)

Solo hice 2 vistas ya que lo que se solicito no tenia tanto contenido para hacer mas.

No use mucho server side rendering ya que las instrucciones validaban el uso de hooks por ende solo di un ejemplo de uso y el resto trate de hacerlo 
por el lado del cliente para asi poder hacer el mayor uso posible de hooks

De resto no mucho mas que decir, si no se uso UseCallback o UseMemu es pq no estaba manejando un estado tan grande como para que realmente tuviera utilidad

Espero cumpla sus expectativas.