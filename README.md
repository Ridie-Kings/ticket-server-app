# Socket Server

Este backend contiene todo lo necesario para configurar un servidor de express + socket.io.

Cualquier conexión adicional de sockets, se puede hacer en el archivo models/sockets.js y cualquier middleware adicional de express, se puede realizar en el archivo models/server.js

# Temas puntuales de la sección

En esta sección tocaremos los siguientes temas:

    - ¿Qué es socket.io?
    - Eventos
        - Connect
        - Disconnect
        - Personalizados

    - Emit
    - Escuchar (on)
    - Comunicar clientes
    - Socket Client y Socket Server
    - Node - Express basado en clases

En esta sección nos enfocamos en comprender Socket.io antes de entrar a conectarlo con React, hay conceptos fundamentales necesarios que debemos comprender antes.

## cdnjs

<!-- https://cdnjs.com/libraries/socket.io -->

socket.io <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.7.5/socket.io.js" integrity="sha512-luMnTJZ7oEchNDZAtQhgjomP1eZefnl82ruTH/3Oj/Yu5qYtwL7+dVRccACS/Snp1lFXq188XFipHKYE75IaQQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
