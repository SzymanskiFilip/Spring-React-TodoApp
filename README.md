# Welcome to the FullStack Todo App!

The Backend is written in Java Spring and the Frontend in React.js

---

Backend: `localhost:8080` <br/>
Frontend `localhost:3000`

To use the Application you need to create a SQL Database. <br/>
You can either configure it yourself in the application.properties file <br/>
or create the one that will already be configured.
<br/>

To do the second option you have to create a Database ``todo-app`` <br/>
with the Table ``todos``
<br/>
<br/>
``id`` Autoincrement on, primary key on, type: ``BIGINT`` <br/>
``title`` type: ``TEXT`` <br/>
``status`` type: ``BOOLEAN``<br/>


To run the app backend simply run the ``main method`` of
the ``TodoAppApplication`` class. <br/>

To run the app's frontend simply run the ``npm start`` script
in the ``Frontend/todo-app`` Folder.
