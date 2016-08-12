var arr = [
    <h1>Hello world!</h1>,
    <h1>Hi world!</h1>,
    <h2>React is awesome</h2>,
];
ReactDOM.render(
    <div>
        {
            arr.map(function (a) {
                return <div>Hi, {a}</div>
            })
        }
    </div>,
    document.getElementById('example')
);
ReactDOM.render(
    <div>
        {arr}
    </div>,
    document.getElementById('demo')
);