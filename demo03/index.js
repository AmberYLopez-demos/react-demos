var arr = [
    <h3>Hello world!</h3>,
    <h3>Hi world!</h3>,
    <h3>React is awesome</h3>,
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