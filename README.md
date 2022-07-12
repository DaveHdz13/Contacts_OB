# ReactJS - Open Bootcamp
This is the first practice from **REACTJS**.

### First Component
This first component is called **[Contact.jsx](./src/components/Contact.jsx)** and it is inside "**/components/**" file. 

> This is a class component.

The task consist in creating a **class component** having:
 - Name ***(string)***
 - Last Name ***(string)***
 - Email ***(string)***
 - Status ***(boolean)***

Reciving a props from **[contact.class.js](./src/models/contact.class.js)** were we can find our model with the preview properties.

> ### PropTypes
> Using this code section we specify **what kind of type** is our **prop contact**. In this case we use **InstanceOf** because our prop is a JS class, **it is not only a string, integer or boolean**.

### Second Component
Next component is called **[ContactBox.jsx](./src/components/container/ContactBox.jsx)** and it is inside "**/components/container/**" file. 

This component is going to **render** our **first component** and is going to call our **props to change status**.

> This is a function component.

## Files Organization
![FileOrder](/static/FilesOrder.png)

## Result
![ResultSH](/static/Result.png)