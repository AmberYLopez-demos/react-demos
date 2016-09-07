var text = 123;

var MyTitle = React.createClass({
    propTypes: {//就是用来验证组件实例的属性是否符合要求
        title: React.PropTypes.string.isRequired,//title 属性是必须的，而且它的值必须是字符串
    },
    render: function() {
        return <h1> {this.props.title} </h1>;
    }
});

ReactDOM.render(
    <MyTitle title={text} />,
    document.getElementById('example')
);

// var MyTitle = React.createClass({
//     getDefaultProps : function () {
//         return {//getDefaultProps 方法可以用来设置组件属性的默认值。
//             title : 'Hello World'
//         };
//     },
//
//     render: function() {
//         return <h1> {this.props.title} </h1>;
//     }
// });
//
// ReactDOM.render(
//     <MyTitle />,
//        document.getElementById('example')
//
// );