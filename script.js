console.log('Hello!');

const FACTOR = 2;
let width = prompt('nhap chieu dai: ');
let height = prompt(' nhap chieu rong :');
let perimeter = FACTOR * (Number(width) + Number(height));
let acreage = width * height;

let message = ` 

<pre>
Chieu dai hinh chu nhat: ${width}

chieu rong hinh chu nhat: ${height}

Chu vi hinh chu nhat: ${perimeter}

Dien tich hinh chu nhat: ${acreage}

</pre>
`;
document.write(message);
