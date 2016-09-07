var HelloMessage = React.createClass({
    render: function () {
        return  <div>
                    <h2>Hello,{this.props.name}</h2>
                </div>
    }
});
//组件类的第一个字母必须大写,否则会报错,组件类只能包含一个顶层标签,否则也会报错.
ReactDOM.render(
    <HelloMessage name="AmberYLopez"/>,
    document.getElementById('example')
);