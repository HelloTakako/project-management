class Footertst extends React.Component {
    render(){
        <div>
            <p>footer test</p>
            <Test/>
            <Test/>
        </div>
    }
}

ReactDOM.render(
    <Footertst/>,
    window.document.getElementById('footer')
);