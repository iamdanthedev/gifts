import React, { Component } from 'react'

class CustomDropdown extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			expanded: false,
			value: this.props.dropType
		};
	}

	expand() {
		this.setState({ expanded: true });
	}

	collapse() {
		this.setState({ expanded: false });
	}

	handleItemClick(e) {
		this.setState({
			expanded: false,
			value: e.target.innerText
		});
	}

	handleTriggerClick() {
		this.setState({ expanded: !this.state.expanded });
	}

	render() {
		let dropdown = undefined;
		if (this.state.expanded) {
			dropdown = (
				<div className="custom-dropdown-content custom-dropdown-m">
				{
					this.props.options.map(item => {
						return <div onClick={(e) => { this.handleItemClick(e); }} className="item thin-title">{item}</div>;
					})
				}
				</div>
			);
		}

		return (
			<div className={`custom-dropdown ${this.state.expanded ? 'active' : ''}`}
				tabIndex="0"
				onBlur={() => { this.collapse(); }}>
				<div className="trigger" onClick={() => { this.handleTriggerClick(); }}>
          {this.state.value}
          <i className="fa fa-angle-down dropdown-down-angle"></i>
				</div>
				{dropdown}
			</div>
		);
	}
}

export default CustomDropdown;
