var names = ['Alice', 'Emily', 'Kate'];
var ids = ['001','002','003'];
ReactDOM.render(
    <div>
        <h3>姓名</h3>
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
        <h3>编号</h3>
        {
            ids.map(function (id) {
                return <div>{id}</div>
            })
        }
    </div>,
    document.getElementById('demo')
);