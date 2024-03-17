## About this project

<div>I made this proof of concept to implement and test the PostgreSQL notification resource.</div>
<div>I wanted to see how it works and draw my own conclusions about it.</div>

## How to run

```bash
npm install && docker compose up
```

<div>After initialize the application, you can access the URL http://localhost:3000.</div>
There are only 3 resources:
<ul>
<li>/send/email?email=test@test.com&content=Hello%20World</li>
<li>/send/whatsapp?number=91832981312&content=Hello%20World</li>
<li>/send/paralelepipedo?content=Hello%20World</li>
</ul>
