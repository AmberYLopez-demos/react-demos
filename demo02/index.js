var names = ['Alice', 'Emily', 'Kate'];
var ids = ['001','002','003','004'];
ReactDOM.render(
    <div>
        {
            names.map(function (name) {
                return <div>Hello, {name}!</div>
            })
        }
    </div>,
    document.getElementById('example')
);
ReactDOM.render(
    <div>
        {
            ids.map(function (name) {
                return <div>Hi, {name}!</div>
            })
        }
    </div>,
    document.getElementById('demo')
);