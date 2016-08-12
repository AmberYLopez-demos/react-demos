//
// var data = 123;
// var data1 = 'aaa';
//
// var MyTitle = React.createClass({
//     propTypes: {//组件类的PropTypes属性，就是用来验证组件实例的属性是否符合要求
//         title: React.PropTypes.string.isRequired,
//     },
// //Mytitle组件有一个title属性。这个 title 属性是必须的，而且它的值必须是字符串
//     render: function() {
//         return <h1> {this.props.title} </h1>;
//     }
// });
//
// ReactDOM.render(
//     <MyTitle title={data1} />,
//     document.getElementById('example')
// );

var MyTitle = React.createClass({
    getDefaultProps : function () {
        return {//getDefaultProps 方法可以用来设置组件属性的默认值。
            title : 'Hello World'
        };
    },

    render: function() {
        return <h1> {this.props.title} </h1>;
    }
});

ReactDOM.render(
    <MyTitle />,
    document.body
);