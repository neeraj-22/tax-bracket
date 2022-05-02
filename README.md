# Tax - Bracket

### Full Stack MERN App to determine taxes based on your age and salary 

<p><i><b>CRUD featured MERN app powered with REST APIs</b></i></p>

![Homescreen SS](https://user-images.githubusercontent.com/64327599/166332703-0c4049d5-8333-419e-a7a1-f276056e4017.png)

<p><i><b>POST </b> method to : Add Users</i></p>

![Add User SS](https://user-images.githubusercontent.com/64327599/166332696-ea3846f5-6457-49f6-93a5-0893260626b9.png)

<p><i><b>GET </b> method to : Find Tax Calculated On click of a button (For Optimisation : Server side rendering can be made client side)</i></p>

![Neeraj Tax SS](https://user-images.githubusercontent.com/64327599/166332711-f3d0f315-f45c-4f6c-994e-e826303889dd.png)

<p><i><b>Tax Slab decreases by 5% for users above age 65</b></i></p>

![Neeraj Older Tax SS](https://user-images.githubusercontent.com/64327599/166332706-09a94c01-b8d5-4704-8f84-50a5c532dba8.png)

<br/>

## Development

### Prerequisite
1. Make sure you have Node.js version >= 13.

### Install
Clone the repository into your system and open the directory and run this command to install all dependencies
```
npm install
```
### PORT Config (backend)
To customise port of webapp, create <i>.env</i> 
1. Create YOUR_PORT
2. Assign the port value of your choice in YOUR_PORT
3. Access .env parameters in app.js using dotenv.config()
4. Access Port value usign process.env.YOUR_PORT and provide it to app.listen()

### PORT Config (frontend)
To customise port of react-app, open <i>package.json</i> 
1. Find Start  under Scripts object
2. Assign the port value of your choice in set PORT //default port value is 3000

```
"scripts": {
    "start": "set PORT=8000 && react-scripts start"
  }
 ```
3. If you want to proceed with default port then skip above steps and do 
```
"scripts": {
    "start": "react-scripts start"
  }
 ```
### CORS
To access resources available in backend running on different port <i>(while developing in localhost)</i> proceed with either of following 2 steps:

1. Make sure to run command <i><b>npm i cors</b></i> before using in app.js file

```
app.use(cors())
```
2. Go to <i><b>package.json</b></i> of your frontend folder and add the following script :

```
"proxy" : "http://your.ip.address:YOUR_PORT"
```

### Start

Open Backend and Frontend directories in command prompt and run following command in both directories
```
npm start
```
