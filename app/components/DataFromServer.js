import React, {Component} from 'react';


export default class DataFromServer extends React.Component {
    constructor(props) {
        super(props);

        this.getDataFromServer = this.getDataFromServer.bind(this);
        this.sortingDataById = this.sortingDataById.bind(this);
        this.showData = this.showData.bind(this);

    }

    getDataFromServer() {

        fetch(`https://jsonplaceholder.typicode.com/posts/`)
            .then(response => response.json())
            .then(json =>
                this.setState({
                    data: json,
                    value: "desc"
                }, this.showData(json))
            )
    }

    sortingDataById() {

        let dataUser = JSON.parse(JSON.stringify(this.state));
        let max;
        switch (this.state.value) {
            case "desc":
                for (let i = 0; i < dataUser.data.length; i++) {
                    for (let j = 0; j < dataUser.data.length - 1; j++) {
                        if (dataUser.data[j].id < dataUser.data[j + 1].id) {
                            max = dataUser.data[j];
                            dataUser.data[j] = dataUser.data[j + 1];
                            dataUser.data[j + 1] = max;
                        }
                    }
                }
                this.setState({
                    data: dataUser.data,
                    value: "incr"
                }, this.showData(dataUser.data));

                break;
            case "incr":
                for (let i = 0; i < dataUser.data.length; i++) {
                    for (let j = 0; j < dataUser.data.length - 1; j++) {
                        if (dataUser.data[j].id > dataUser.data[j + 1].id) {
                            max = dataUser.data[j];
                            dataUser.data[j] = dataUser.data[j + 1];
                            dataUser.data[j + 1] = max;
                        }
                    }
                }
                this.setState({
                    data: dataUser.data,
                    value: "desc"
                }, this.showData(dataUser.data));
                break;
            default:

                break;
        }


        this.setState({
            data: dataUser.data
        }, this.showData(dataUser.data))

    }

    showData(users) {

        let showData = document.querySelector(".showData");
        showData.innerHTML = "";
        users.map((users) => {
                showData.innerHTML += `<tr id = "${users.id}" >
                    <td width="50px">${users.id}</td>
                    <td width="800px">${users.title}</td>
                   </tr>`;
            }
        );
    }

    render() {
        return (
            <div className="dataFromServer">

                <button className="waves-effect waves-light btn btnGetData " onClick={this.getDataFromServer}>Get users
                    from Data
                </button>
                <button className="waves-effect waves-light btn  purple lighten-4 sortingButton "
                        onClick={this.sortingDataById}>Sort by ID
                </button>
                <table className="showData">

                </table>
            </div>
        )
    }
}

