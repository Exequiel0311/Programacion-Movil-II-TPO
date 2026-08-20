### Requisitos de Software
- Git
- Node.js (incluye npm)
- VSCode (Visual Studio Code)
- Extension **Live code** para vsc (Autor Ritwick Dey)

### Verificar softwares instalados

    git --version
    node --version
    npm -v

### Levantar el proyecto
    
Creamos un directorio\
lo traemos al VSCode\
inicializamos node con
    
```
npm init
```

**ctrl + shift + V** para ver la vista previa del .md

### Instalar Librerias
```
npm i express
```
```
npm i mysql2
```

### Creacion de base de datos mySQL tabla usuarios
    ```
    Create TABLE usuarios{
        id INT AUTO_INCREMENT KEY,
        nombre VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL
    }
    ```

### Insertamos Datos
    ```
    INSERT INTO `usuarios`(`nombre`, `correo`)
    VALUES 
    ('[value-2]','[value-3]')
    ```
Se nos crea por primera y única vez la carpeta/directorio node_modules\
Y se nos modifica el archivo package.json configurando la nueva librería\
Se nos crea el archivo por primera y única vez de package-lock.json (Nunca manipulamos a mano este archivo)