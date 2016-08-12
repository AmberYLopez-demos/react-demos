var HelloMessage = React.createClass({
    render: function() {
        return <div><h1>hello</h1><h2>hi</h2></div>
    }
});

ReactDOM.render(
    <HelloMessage name="John" />,
    document.getElementById('example')
);
ReactDOM.render(
    <HelloMessage name="John" />,
    document.getElementById('example1')
);