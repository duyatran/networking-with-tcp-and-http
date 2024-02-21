# M02W05 - Networking with TCP and HTTP

### To Do
- [ ] Discuss networking and the need for protocols
- [ ] TCP introduction
- [ ] TCP demo
- [ ] HTTP fundamentals

### What is networking?
- Communication between machines on a network

### What is a protocol?
- A defined standard for how requests and responses are sent between network devices

### OSI and TCP/IP
- OSI (Open Systems Interconnection Model): theoretical model of a network communication
- TCP/IP (or the Internet Protocol Suite): foundational suite of protocols of the Internet

![OSI and TCP/IP](./OSI-TCP-IP-stack.png)

### Transport Layer Protocols
- Messages are broken down into **packets**
- Messages contained source and destination address in their header
- Each packet travels through the network independently
- Packets are reassembled into a full message when reaching destination

- **UDP**: **U**ser **D**atagram **P**rotocol
  - Smaller header size (8 bytes) which results in smaller packet sizes
  - _Connectionless_ ie. there is no need to establish or maintain a connection
  - No error recovery (any corrupted packets are discarded)
  - Packets can arrive in any order
  - Useful for streaming/low latency applications
- **TCP**: **T**ransmission **C**ontrol **P**rotocol
  - Larger header size (minimum 20 bytes)
  - Requires a connection (3-way handshake)
  - Corrupted packets are reported to the server and are re-sent
  - Packet order is guaranteed
  - Useful when guaranteed communication is needed

### HTTP
- **H**yper**T**ext **T**ransfer **P**rotocol
- Protocol for how messages are formatted and transmitted
- How a web client (browser, etc) communicates with a web server
- Call and response communication
- _State-less_: no memory of any previous communication
- Routes to resources are made up of methods (verbs) and paths
- **METHODS**: GET, POST, PUT, PATCH, DELETE
- **PATHS**: `/users`, `/unicorns/123`
- Returns status codes for each communication (eg. 200, 202, 302, 404, 500)
- Response headers contain information about the response such as media type and content size
- Reponse body contains the content (JSON, html, etc)

#### Request

The initial step of an HTTP exchange is the request. In the request, we want to make an action, decided by the method, to a specific path, the URL, with specific headers and an optional body content.

#### Methods

- GET - I want to GET information from the server ( GET THE MENU)
- POST - I want to post something on the server
- PUT/PATCH - I want to update something
- DELETE - I want to delete something

### Path

URI - Uniform Resource Identifier (GET /menu)
URL - Uniform Resource Locator

More info : https://damnhandy.com/2011/01/18/url-vs-uri-vs-urn-the-confusion-continues/

### Request / Response Header

It's where information about the request like cookies and user agent are defined

```
GET /www.google.com/search?q=bootcamp HTTP/1.1
Host: www.google.com
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Accept-Charset: ISO-8859-1,utf-8;q=0.7,*;q=0.7
Keep-Alive: 300
Connection: keep-alive
Cookie: USERID=r2t5uvjq435r4q7ib3vtdjq120
Pragma: no-cache
Cache-Control: no-cache
Cookies: key:value string
user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36
```

### Request / Response Body

Information we want to send, or the information that we receive from the request

```
Content-Type: application/json
--- Beginning of body ---
{
  "first_name": "Little",
  "last_name": "Chicken",
  "email": "pequeno@pollo.com",
}
```

```
status: 200
--- Beginning of body ---
<!DOCTYPE html>
<html>
  <head>
    <title>Canada&#39;s Leading Coding Bootcamp - Lighthouse Labs</title>
    <style>
  @font-face{
  	font-family: 'proxima-nova';
  	font-weight: normal;
  	font-style: normal;
  }
...
```

### Response Status

- 100 series - Connecting
- 200 series - OK
- 300 series - Redirection
- 400 series - Something went wrong - You fudged up
- 500 series - Something went wrong - Server fudged up

### Useful Links
* [OSI Model](https://en.wikipedia.org/wiki/OSI_model)
* [Net package documentation](https://nodejs.org/api/net.html)
* [HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)
* [Request Package](https://www.npmjs.com/package/request)
* [Recap on network layers and protocols](https://inc0x0.com/tcp-ip-packets-introduction/tcp-ip-packets-1-recap-on-network-layers-and-protocols/)