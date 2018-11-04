import React, {Component} from "react";
import {connect} from "react-redux";
import axios from "axios";
import Dashboard from "./../Dashboard";

class Medicine extends Component {
	componentDidMount() {
		const _id = localStorage.getItem("_id");
		const _token = localStorage.getItem("_token");
		axios.post("/api/v1/user/medicine", {
				id: _id,
				token: _token
			}).then(response => {
				
			}).catch(error => {
				console.error(error);
			})
	}
	addAlergic(e) {

	}
	render() {
		return (
			<Dashboard>
				<div className="medicine-wrapper">
					<h2> Медична картка </h2>
					<div className="medicine-topheader">	
						<button className="medicine-button" onClick={this.addAlergic.bind(this)}>
							Додати алергію
						</button>
					</div>
					<div className="medicine-panel">
						<div className="medicine-diagnosis">

						</div>

						<div className="medicine-alergic">
							{this.props.medicine.alergics.length === 0?
								("Алергій не знайдено"):
								this.props.medicine.alergics.map((i, index) => {
									return (<div key={index}>
										{i.name}
									</div>);
								})}
						</div>
					</div>
				</div>
			</Dashboard>
		);	
	}
}

export default connect(state => ({medicine: state.medicine}))(Medicine);