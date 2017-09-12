# HTML5 realtime plotter from WebSocket
## WebServer
Dummy web server that hosts the index.html file and the javascript library used to display the graphs (http://smoothiecharts.org).
## WebSocketServer
This is a very simple WebSocket server that sends example data every 5ms to all connected clients. It listens on port 3001.
### Message format: 
```
timestamp,value1,value2
```
## HTML page
Stablishes a WebSocket connection to localhost:3001 and listens for data.